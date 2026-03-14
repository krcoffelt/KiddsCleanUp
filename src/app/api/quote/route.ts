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

  if (!data.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = "A valid email address is required.";
  } else if (data.email.length > 254) {
    errors.email = "Email address is too long.";
  }

  if (!data.service_type || data.service_type.trim().length === 0) {
    errors.service_type = "Please select a service type.";
  } else if (!ALLOWED_SERVICE_TYPES.includes(data.service_type as (typeof ALLOWED_SERVICE_TYPES)[number])) {
    errors.service_type = "Please select a valid service type.";
  }

  if (data.project_address && data.project_address.length > 300) {
    errors.project_address = "Address must be under 300 characters.";
  }

  if (data.project_details && data.project_details.length > 2000) {
    errors.project_details = "Project details must be under 2000 characters.";
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
    const { data: lead, error } = await supabase
      .from("leads")
      .insert({
        ...data,
        status: "new",
        source_page: request.headers.get("referer") || "",
        ip_hash: hashValue(ip),
        user_agent: userAgent.slice(0, 500),
      })
      .select("id")
      .single();

    if (error) {
      console.error("Supabase insert error:", error);
      return NextResponse.json(
        { ok: false, code: "SERVER_ERROR" },
        { status: 500 }
      );
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
