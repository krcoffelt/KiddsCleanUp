"use client";

import { useState, type FormEvent } from "react";
import { useRouter } from "next/navigation";
import { SERVICE_TYPES } from "@/lib/constants";
import type { LeadFormData, QuoteResponse } from "@/lib/types";

export default function QuoteForm() {
  const router = useRouter();
  const [submitting, setSubmitting] = useState(false);
  const [fieldErrors, setFieldErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setFieldErrors({});
    setServerError("");

    const form = e.currentTarget;
    const fd = new FormData(form);

    // Honeypot check
    if (fd.get("company_website")) {
      setSubmitting(false);
      return;
    }

    const data: LeadFormData = {
      full_name: (fd.get("full_name") as string) ?? "",
      phone: (fd.get("phone") as string) ?? "",
      email: (fd.get("email") as string) ?? "",
      service_type: (fd.get("service_type") as string) ?? "",
      project_address: (fd.get("project_address") as string) ?? "",
      project_details: (fd.get("project_details") as string) ?? "",
      preferred_date: (fd.get("preferred_date") as string) ?? "",
      preferred_time: (fd.get("preferred_time") as string) ?? "",
    };

    try {
      const res = await fetch("/api/quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result: QuoteResponse = await res.json();

      if (result.ok) {
        router.push("/thank-you");
      } else if (result.code === "VALIDATION_ERROR" && result.field_errors) {
        setFieldErrors(result.field_errors);
      } else {
        setServerError("Something went wrong. Please call us or try again.");
      }
    } catch {
      setServerError("Network error. Please call us or try again.");
    } finally {
      setSubmitting(false);
    }
  }

  function inputClass(field: string) {
    const base =
      "w-full rounded-md border bg-white px-4 py-3 text-sm text-foreground placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-light transition-colors";
    return fieldErrors[field]
      ? `${base} border-error`
      : `${base} border-surface-dark`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      {/* Honeypot - hidden from real users */}
      <div className="absolute -left-[9999px]" aria-hidden="true">
        <label htmlFor="company_website">Do not fill this in</label>
        <input type="text" id="company_website" name="company_website" tabIndex={-1} autoComplete="off" />
      </div>

      {serverError && (
        <div className="rounded-md bg-error/10 border border-error/30 p-4 text-sm text-error" role="alert">
          {serverError}
        </div>
      )}

      {/* Name & Phone */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="full_name" className="block text-sm font-medium mb-1.5">
            Full Name <span className="text-error">*</span>
          </label>
          <input
            type="text"
            id="full_name"
            name="full_name"
            required
            maxLength={100}
            className={inputClass("full_name")}
            placeholder="John Smith"
          />
          {fieldErrors.full_name && <p className="mt-1 text-xs text-error">{fieldErrors.full_name}</p>}
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium mb-1.5">
            Phone <span className="text-error">*</span>
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            required
            maxLength={20}
            className={inputClass("phone")}
            placeholder="(816) 555-0123"
          />
          {fieldErrors.phone && <p className="mt-1 text-xs text-error">{fieldErrors.phone}</p>}
        </div>
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1.5">
          Email <span className="text-error">*</span>
        </label>
        <input
          type="email"
          id="email"
          name="email"
          required
          maxLength={254}
          className={inputClass("email")}
          placeholder="john@example.com"
        />
        {fieldErrors.email && <p className="mt-1 text-xs text-error">{fieldErrors.email}</p>}
      </div>

      {/* Service Type */}
      <div>
        <label htmlFor="service_type" className="block text-sm font-medium mb-1.5">
          Service Type <span className="text-error">*</span>
        </label>
        <select
          id="service_type"
          name="service_type"
          required
          className={inputClass("service_type")}
          defaultValue=""
        >
          <option value="" disabled>
            Select a service...
          </option>
          {SERVICE_TYPES.map((s) => (
            <option key={s} value={s}>{s}</option>
          ))}
        </select>
        {fieldErrors.service_type && <p className="mt-1 text-xs text-error">{fieldErrors.service_type}</p>}
      </div>

      {/* Project Address */}
      <div>
        <label htmlFor="project_address" className="block text-sm font-medium mb-1.5">
          Project Address
        </label>
        <input
          type="text"
          id="project_address"
          name="project_address"
          maxLength={300}
          className={inputClass("project_address")}
          placeholder="123 Main St, Kansas City, MO"
        />
        {fieldErrors.project_address && <p className="mt-1 text-xs text-error">{fieldErrors.project_address}</p>}
      </div>

      {/* Project Details */}
      <div>
        <label htmlFor="project_details" className="block text-sm font-medium mb-1.5">
          Project Details
        </label>
        <textarea
          id="project_details"
          name="project_details"
          rows={4}
          maxLength={2000}
          className={inputClass("project_details")}
          placeholder="Describe your project, scope of work, any special requirements..."
        />
        {fieldErrors.project_details && <p className="mt-1 text-xs text-error">{fieldErrors.project_details}</p>}
      </div>

      {/* Preferred Date & Time */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label htmlFor="preferred_date" className="block text-sm font-medium mb-1.5">
            Preferred Date
          </label>
          <input
            type="date"
            id="preferred_date"
            name="preferred_date"
            className={inputClass("preferred_date")}
          />
        </div>
        <div>
          <label htmlFor="preferred_time" className="block text-sm font-medium mb-1.5">
            Preferred Time
          </label>
          <input
            type="time"
            id="preferred_time"
            name="preferred_time"
            className={inputClass("preferred_time")}
          />
        </div>
      </div>

      <button
        type="submit"
        disabled={submitting}
        className="premium-cta w-full rounded-md bg-accent hover:bg-accent-dark disabled:opacity-60 disabled:cursor-not-allowed px-8 py-4 text-lg font-bold text-primary-dark transition-colors"
      >
        {submitting ? "Submitting..." : "Request a Free Quote"}
      </button>
    </form>
  );
}
