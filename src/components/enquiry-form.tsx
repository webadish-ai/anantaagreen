"use client";

import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { submitEnquiry, type EnquiryState } from "@/app/contact/actions";

const initialState: EnquiryState = { status: "idle", message: "" };

const interests = [
  "CBG Plant",
  "Carbon Credits",
  "Agroforestry",
  "Investment / Partnership",
  "Something else",
];

const fieldClass =
  "w-full rounded-lg border border-cream-50/20 bg-forest-900/50 px-4 py-3.5 text-cream-50 transition-colors placeholder:text-cream-50/35 focus:border-flame-400 focus:outline-none";

const labelClass = "eyebrow text-cream-50/55 mb-2.5 block";

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <button
      type="submit"
      disabled={pending}
      className="eyebrow from-flame-500 to-flame-400 text-forest-950 inline-flex items-center gap-3 rounded-full bg-linear-to-r px-8 py-4 transition-all duration-300 hover:-translate-y-0.5 disabled:translate-y-0 disabled:opacity-60"
    >
      {pending ? "Sending…" : "Send Enquiry"}
      <span aria-hidden>→</span>
    </button>
  );
}

export function EnquiryForm() {
  const [state, formAction] = useActionState(submitEnquiry, initialState);
  const errors = state.fieldErrors ?? {};

  // Controlled so a failed submission does not wipe what was typed — React
  // resets uncontrolled fields once a form action settles.
  const [values, setValues] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    interest: interests[0],
    message: "",
  });

  const set =
    (key: keyof typeof values) =>
    (
      e: React.ChangeEvent<
        HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
      >,
    ) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  if (state.status === "success") {
    return (
      <div className="border-flame-400/40 bg-forest-900/50 rounded-2xl border p-10 text-center">
        <span
          aria-hidden
          className="from-flame-500 to-flame-400 mx-auto block h-3 w-3 rotate-45 bg-linear-to-br"
        />
        <p className="display text-cream-50 mt-7 text-3xl">Enquiry received.</p>
        <p className="text-cream-50/65 mx-auto mt-4 max-w-md leading-relaxed">
          {state.message}
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} noValidate className="space-y-6">
      {/* honeypot — hidden from humans, irresistible to bots */}
      <div aria-hidden className="absolute -left-[9999px]">
        <label htmlFor="website">Leave this empty</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid gap-6 sm:grid-cols-2">
        <div>
          <label htmlFor="name" className={labelClass}>
            Name <span className="text-flame-400">*</span>
          </label>
          <input
            id="name"
            name="name"
            required
            autoComplete="name"
            value={values.name}
            onChange={set("name")}
            aria-invalid={Boolean(errors.name)}
            aria-describedby={errors.name ? "name-error" : undefined}
            className={fieldClass}
            placeholder="Your full name"
          />
          {errors.name && (
            <p id="name-error" className="text-flame-400 mt-2 text-sm">
              {errors.name}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="company" className={labelClass}>
            Company
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            value={values.company}
            onChange={set("company")}
            className={fieldClass}
            placeholder="Organisation name"
          />
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email <span className="text-flame-400">*</span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            autoComplete="email"
            value={values.email}
            onChange={set("email")}
            aria-invalid={Boolean(errors.email)}
            aria-describedby={errors.email ? "email-error" : undefined}
            className={fieldClass}
            placeholder="you@company.com"
          />
          {errors.email && (
            <p id="email-error" className="text-flame-400 mt-2 text-sm">
              {errors.email}
            </p>
          )}
        </div>

        <div>
          <label htmlFor="phone" className={labelClass}>
            Phone
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            autoComplete="tel"
            value={values.phone}
            onChange={set("phone")}
            className={fieldClass}
            placeholder="+91"
          />
        </div>
      </div>

      <div>
        <label htmlFor="interest" className={labelClass}>
          What is this about?
        </label>
        <select
          id="interest"
          name="interest"
          value={values.interest}
          onChange={set("interest")}
          className={`${fieldClass} appearance-none`}
        >
          {interests.map((i) => (
            <option key={i} value={i} className="bg-forest-900">
              {i}
            </option>
          ))}
        </select>
      </div>

      <div>
        <label htmlFor="message" className={labelClass}>
          Your project <span className="text-flame-400">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={6}
          required
          value={values.message}
          onChange={set("message")}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={`${fieldClass} resize-y`}
          placeholder="Tell us what you have: feedstock, land, an existing project, capital or a carbon opportunity. Add location and timeline if known. Rough is fine."
        />
        {errors.message && (
          <p id="message-error" className="text-flame-400 mt-2 text-sm">
            {errors.message}
          </p>
        )}
      </div>

      <div aria-live="polite">
        {state.status === "error" && (
          <p className="border-flame-500/40 bg-flame-500/10 text-cream-50/85 rounded-lg border px-4 py-3 text-sm leading-relaxed">
            {state.message}
          </p>
        )}
      </div>

      <div className="flex flex-wrap items-center gap-6 pt-2">
        <SubmitButton />
        <p className="text-cream-50/40 text-sm">
          We reply within one working day.
        </p>
      </div>
    </form>
  );
}
