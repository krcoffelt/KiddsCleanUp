// Supabase Edge Function: Send email notification on new lead
// Deploy with: supabase functions deploy notify-lead

// NOTE: You'll need to configure an email provider (e.g., Resend, SendGrid, or Supabase's built-in email).
// This example uses a generic fetch-based approach. Replace the email sending logic with your provider.

const NOTIFY_EMAILS = [
  "Chris@kiddscleanup.com",
  "Kiddscleanup@gmail.com",
];

Deno.serve(async (req) => {
  try {
    // Verify the request is authorized
    const authHeader = req.headers.get("Authorization");
    const serviceRoleKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");

    if (!authHeader || authHeader !== `Bearer ${serviceRoleKey}`) {
      return new Response("Unauthorized", { status: 401 });
    }

    const { lead_id, full_name, phone, email, service_type, project_details } =
      await req.json();

    const subject = `New Quote Request: ${service_type} - ${full_name}`;
    const body = `
New quote request received!

Name: ${full_name}
Phone: ${phone}
Email: ${email}
Service: ${service_type}
Details: ${project_details || "No details provided"}

Lead ID: ${lead_id}
View in Supabase Dashboard to manage this lead.
    `.trim();

    // TODO: Replace with your email provider's API call
    // Example with Resend:
    // const resendKey = Deno.env.get("RESEND_API_KEY");
    // for (const to of NOTIFY_EMAILS) {
    //   await fetch("https://api.resend.com/emails", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${resendKey}`,
    //     },
    //     body: JSON.stringify({
    //       from: "noreply@kiddscleanup.com",
    //       to,
    //       subject,
    //       text: body,
    //     }),
    //   });
    // }

    console.log(`Notification for lead ${lead_id}:`);
    console.log(`To: ${NOTIFY_EMAILS.join(", ")}`);
    console.log(`Subject: ${subject}`);
    console.log(`Body: ${body}`);

    return new Response(JSON.stringify({ ok: true }), {
      headers: { "Content-Type": "application/json" },
    });
  } catch (err) {
    console.error("notify-lead error:", err);
    return new Response(JSON.stringify({ ok: false }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
});
