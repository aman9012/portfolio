"use client";

import { useState, type FormEvent } from "react";
import { contactFormSchema, type ContactFormSchema } from "@/lib/validations";
import { cn } from "@/lib/utils";
import type { ContactFormResponse } from "@/types/contact";

type FormState = ContactFormSchema;
type FormErrors = Partial<Record<keyof FormState, string>>;

const initialState: FormState = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const inputClasses =
  "w-full rounded-lg border border-border bg-background/60 px-4 py-3 text-sm text-foreground placeholder:text-muted/70 transition-colors duration-[var(--duration-base)] focus:border-border-accent focus:outline-none";

export function ContactForm() {
  const [values, setValues] = useState<FormState>(initialState);
  const [errors, setErrors] = useState<FormErrors>({});
  const [status, setStatus] = useState<"idle" | "submitting" | "sent" | "error">("idle");
  const [serverError, setServerError] = useState<string | null>(null);

  function handleChange(field: keyof FormState) {
    return (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setValues((prev) => ({ ...prev, [field]: event.target.value }));
    };
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const result = contactFormSchema.safeParse(values);

    if (!result.success) {
      const fieldErrors: FormErrors = {};
      for (const issue of result.error.issues) {
        const field = issue.path[0] as keyof FormState;
        if (!fieldErrors[field]) fieldErrors[field] = issue.message;
      }
      setErrors(fieldErrors);
      return;
    }

    setErrors({});
    setServerError(null);
    setStatus("submitting");

    // Honeypot field — left empty by real users, often filled by bots.
    const website = (event.currentTarget.elements.namedItem("website") as HTMLInputElement | null)?.value ?? "";

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...result.data, website }),
      });

      const data: ContactFormResponse = await response.json();

      if (!response.ok || !data.success) {
        setServerError(data.message || "Something went wrong. Please try again.");
        setStatus("error");
        return;
      }

      setStatus("sent");
      setValues(initialState);
    } catch {
      setServerError("Network error — please try again in a moment.");
      setStatus("error");
    }
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-5">
      {/* Honeypot field: hidden from real users via CSS, bots often fill it anyway. */}
      <input
        type="text"
        name="website"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
        className="absolute left-[-9999px] h-0 w-0 opacity-0"
      />

      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className="font-mono-label mb-2 block text-muted">
            Name
          </label>
          <input
            id="name"
            name="name"
            type="text"
            value={values.name}
            onChange={handleChange("name")}
            className={cn(inputClasses, errors.name && "border-red-400/60")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
          />
          {errors.name && (
            <p id="name-error" className="mt-1.5 text-xs text-red-400">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="email" className="font-mono-label mb-2 block text-muted">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            value={values.email}
            onChange={handleChange("email")}
            className={cn(inputClasses, errors.email && "border-red-400/60")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
          />
          {errors.email && (
            <p id="email-error" className="mt-1.5 text-xs text-red-400">
              {errors.email}
            </p>
          )}
        </div>
      </div>

      <div>
        <label htmlFor="subject" className="font-mono-label mb-2 block text-muted">
          Subject
        </label>
        <input
          id="subject"
          name="subject"
          type="text"
          value={values.subject}
          onChange={handleChange("subject")}
          className={cn(inputClasses, errors.subject && "border-red-400/60")}
          aria-invalid={Boolean(errors.subject)}
          aria-describedby={errors.subject ? "subject-error" : undefined}
        />
        {errors.subject && (
          <p id="subject-error" className="mt-1.5 text-xs text-red-400">
            {errors.subject}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="message" className="font-mono-label mb-2 block text-muted">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          value={values.message}
          onChange={handleChange("message")}
          className={cn(inputClasses, "resize-none", errors.message && "border-red-400/60")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
        />
        {errors.message && (
          <p id="message-error" className="mt-1.5 text-xs text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      <div className="mt-2 flex flex-wrap items-center gap-4">
        <button
          type="submit"
          disabled={status === "submitting"}
          className="inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-accent px-6 py-3 text-sm font-medium text-fg-inverse transition-colors duration-[var(--duration-base)] ease-[var(--ease-out)] hover:bg-accent-hover focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent disabled:cursor-not-allowed disabled:opacity-60"
        >
          {status === "submitting" ? "Sending..." : "Send Message"}
        </button>

        {status === "sent" && (
          <p className="text-sm text-muted" role="status">
            Thanks for reaching out — I&apos;ll get back to you shortly.
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-400" role="alert">
            {serverError}
          </p>
        )}
      </div>
    </form>
  );
}
