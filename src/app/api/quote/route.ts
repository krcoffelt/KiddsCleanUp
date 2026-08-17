import { NextRequest, NextResponse } from "next/server";
import { getSupabaseAdmin } from "@/lib/supabase";
import { ALLOWED_SERVICE_TYPES } from "@/lib/constants";
import type { LeadFormData, QuoteResponse } from "@/lib/types";
import crypto from "crypto";

// Simple in-memory rate limiter
const rateLimitMap = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_WINDOW = 60_000; // 1 minute
const RATE_LIMIT_MAX = 5; // max requests per window

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const entry = rateLimitMap.get(ip);

  if (!entry || now > entry.resetTime) {
    rateLimitMap.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  entry.count++;
  return entry.count > RATE_LIMIT_MAX;
}

function hashValue(value: string): string {
  return crypto.createHash("sha256").update(value).digest("hex").slice(0, 16);
}

function escapeHtml(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function isMissingAttributionColumnError(error: { code?: string; message?: string }): boolean {
  if (error.code !== "42703" && error.code !== "PGRST204") {
    return false;
  }

  const message = error.message?.toLowerCase() ?? "";
  return [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
    "landing_page",
    "referrer_url",
  ].some((column) => message.includes(column));
}

async function sendLeadNotificationEmail(leadId: string, data: LeadFormData): Promise<void> {
  const resendApiKey = process.env.RESEND_API_KEY;
  const to = process.env.LEAD_NOTIFY_EMAIL;
  const from = process.env.LEAD_FROM_EMAIL;

  if (!resendApiKey || !to || !from) {
    console.warn("Resend notification skipped: missing RESEND_API_KEY, LEAD_NOTIFY_EMAIL, or LEAD_FROM_EMAIL");
    return;
  }

  const serviceType = data.service_type || "Not specified";
  const customerEmail = data.email || "No email provided.";
  const subject = `New Quote Request: ${serviceType} - ${data.full_name}`;
  const details = data.project_details || "No project details provided.";
  const address = data.project_address || "No project address provided.";
  const preferredDate = data.preferred_date || "No preferred date provided.";
  const preferredTime = data.preferred_time || "No preferred time provided.";
  const landingPage = data.landing_page || "No landing page captured.";
  const referrerUrl = data.referrer_url || "No referrer captured.";

  const text = [
    "New quote request received.",
    "",
    `Lead ID: ${leadId}`,
    `Name: ${data.full_name}`,
    `Phone: ${data.phone}`,
    `Email: ${customerEmail}`,
    `Service: ${serviceType}`,
    `Project Address: ${address}`,
    `Preferred Date: ${preferredDate}`,
    `Preferred Time: ${preferredTime}`,
    `Landing Page: ${landingPage}`,
    `Referrer: ${referrerUrl}`,
    `UTM Source: ${data.utm_source || "Not provided"}`,
    `UTM Medium: ${data.utm_medium || "Not provided"}`,
    `UTM Campaign: ${data.utm_campaign || "Not provided"}`,
    `UTM Term: ${data.utm_term || "Not provided"}`,
    `UTM Content: ${data.utm_content || "Not provided"}`,
    "",
    "Project Details:",
    details,
  ].join("\n");

  const html = `
    <h2>New quote request received</h2>
    <p><strong>Lead ID:</strong> ${escapeHtml(leadId)}</p>
    <p><strong>Name:</strong> ${escapeHtml(data.full_name)}</p>
    <p><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    <p><strong>Email:</strong> ${escapeHtml(customerEmail)}</p>
    <p><strong>Service:</strong> ${escapeHtml(serviceType)}</p>
    <p><strong>Project Address:</strong> ${escapeHtml(address)}</p>
    <p><strong>Preferred Date:</strong> ${escapeHtml(preferredDate)}</p>
    <p><strong>Preferred Time:</strong> ${escapeHtml(preferredTime)}</p>
    <p><strong>Landing Page:</strong> ${escapeHtml(landingPage)}</p>
    <p><strong>Referrer:</strong> ${escapeHtml(referrerUrl)}</p>
    <p><strong>UTM Source:</strong> ${escapeHtml(data.utm_source || "Not provided")}</p>
    <p><strong>UTM Medium:</strong> ${escapeHtml(data.utm_medium || "Not provided")}</p>
    <p><strong>UTM Campaign:</strong> ${escapeHtml(data.utm_campaign || "Not provided")}</p>
    <p><strong>UTM Term:</strong> ${escapeHtml(data.utm_term || "Not provided")}</p>
    <p><strong>UTM Content:</strong> ${escapeHtml(data.utm_content || "Not provided")}</p>
    <p><strong>Project Details:</strong><br>${escapeHtml(details).replaceAll("\n", "<br>")}</p>
  `.trim();

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
      "Idempotency-Key": `lead-${leadId}`,
    },
    body: JSON.stringify({
      from,
      to: [to],
      subject,
      text,
      html,
      ...(data.email ? { reply_to: data.email } : {}),
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Resend API error (${response.status}): ${errorText}`);
  }
}

function validateForm(data: LeadFormData): Record<string, string> {
  const errors: Record<string, string> = {};

  if (!data.full_name || data.full_name.trim().length < 2) {
    errors.full_name = "Full name is required (at least 2 characters).";
  } else if (data.full_name.length > 100) {
    errors.full_name = "Full name must be under 100 characters.";
  }

  if (!data.phone || data.phone.trim().length < 7) {
    errors.phone = "A valid phone number is required.";
  } else if (data.phone.length > 20) {
    errors.phone = "Phone number is too long.";
  }

  if (data.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "A valid email address is required.";
  } else if (data.email.length > 254) {
    errors.email = "Email address is too long.";
  }

  if (
    data.service_type &&
    !ALLOWED_SERVICE_TYPES.includes(data.service_type as (typeof ALLOWED_SERVICE_TYPES)[number])
  ) {
    errors.service_type = "Please select a valid service type.";
  }

  if (data.project_address && data.project_address.length > 300) {
    errors.project_address = "Address must be under 300 characters.";
  }

  if (data.project_details && data.project_details.length > 2000) {
    errors.project_details = "Project details must be under 2000 characters.";
  }

  const shortTextFields = [
    "utm_source",
    "utm_medium",
    "utm_campaign",
    "utm_term",
    "utm_content",
  ] as const;

  for (const field of shortTextFields) {
    if (data[field] && data[field].length > 255) {
      errors[field] = "Tracking value is too long.";
    }
  }

  if (data.landing_page && data.landing_page.length > 500) {
    errors.landing_page = "Landing page value is too long.";
  }

  if (data.referrer_url && data.referrer_url.length > 500) {
    errors.referrer_url = "Referrer value is too long.";
  }

  return errors;
}

export async function POST(request: NextRequest): Promise<NextResponse<QuoteResponse>> {
  try {
    // Rate limiting
    const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { ok: false, code: "SERVER_ERROR" },
        { status: 429 }
      );
    }

    const body = await request.json();

    // Honeypot check
    if (body.company_website) {
      // Silently succeed for bots
      return NextResponse.json({ ok: true, lead_id: "ignored" });
    }

    const data: LeadFormData = {
      full_name: String(body.full_name ?? "").trim(),
      phone: String(body.phone ?? "").trim(),
      email: String(body.email ?? "").trim().toLowerCase(),
      service_type: String(body.service_type ?? "").trim(),
      project_address: String(body.project_address ?? "").trim(),
      project_details: String(body.project_details ?? "").trim(),
      preferred_date: String(body.preferred_date ?? "").trim(),
      preferred_time: String(body.preferred_time ?? "").trim(),
      utm_source: String(body.utm_source ?? "").trim(),
      utm_medium: String(body.utm_medium ?? "").trim(),
      utm_campaign: String(body.utm_campaign ?? "").trim(),
      utm_term: String(body.utm_term ?? "").trim(),
      utm_content: String(body.utm_content ?? "").trim(),
      landing_page: String(body.landing_page ?? "").trim(),
      referrer_url: String(body.referrer_url ?? "").trim(),
    };

    // Validate
    const fieldErrors = validateForm(data);
    if (Object.keys(fieldErrors).length > 0) {
      return NextResponse.json(
        { ok: false, code: "VALIDATION_ERROR", field_errors: fieldErrors },
        { status: 400 }
      );
    }

    // Insert into Supabase
    const supabase = getSupabaseAdmin();
    const userAgent = request.headers.get("user-agent") || "";
    const baseLead = {
      full_name: data.full_name,
      phone: data.phone,
      email: data.email || null,
      service_type: data.service_type || null,
      project_address: data.project_address,
      project_details: data.project_details,
      preferred_date: data.preferred_date,
      preferred_time: data.preferred_time,
      status: "new",
      source_page: data.landing_page || request.headers.get("referer") || "",
      ip_hash: hashValue(ip),
      user_agent: userAgent.slice(0, 500),
    };
    const attributedLead = {
      ...baseLead,
      utm_source: data.utm_source || null,
      utm_medium: data.utm_medium || null,
      utm_campaign: data.utm_campaign || null,
      utm_term: data.utm_term || null,
      utm_content: data.utm_content || null,
      landing_page: data.landing_page || null,
      referrer_url: data.referrer_url || request.headers.get("referer") || null,
    };

    let { data: lead, error } = await supabase
      .from("leads")
      .insert(attributedLead)
      .select("id")
      .single();

    // Keep quote submissions working when the optional attribution migration has
    // not reached the deployed Supabase project yet. The first insert fails before
    // writing a row, so retrying the legacy-compatible payload cannot duplicate it.
    if (error && isMissingAttributionColumnError(error)) {
      console.warn("Lead attribution columns are unavailable; retrying without attribution fields");
      ({ data: lead, error } = await supabase
        .from("leads")
        .insert(baseLead)
        .select("id")
        .single());
    }

    if (error || !lead) {
      console.error("Supabase insert error:", error ?? "Insert returned no lead");
      return NextResponse.json(
        { ok: false, code: "SERVER_ERROR" },
        { status: 500 }
      );
    }

    try {
      await sendLeadNotificationEmail(String(lead.id), data);
    } catch (emailError) {
      console.error("Lead notification email error:", emailError);
    }

    return NextResponse.json({ ok: true, lead_id: lead.id });
  } catch (err) {
    console.error("Quote API error:", err);
    return NextResponse.json(
      { ok: false, code: "SERVER_ERROR" },
      { status: 500 }
    );
  }
}
