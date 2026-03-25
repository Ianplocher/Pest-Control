"use client";

import { useState, type FormEvent, type ChangeEvent } from "react";
import { useRouter } from "next/navigation";
import { siteConfig } from "@/config/site.config";

interface QuoteFormProps {
  title?: string;
  compact?: boolean;
}

interface FormData {
  name: string;
  phone: string;
  email: string;
  address: string;
  pest: string;
  urgency: string;
  heardFrom: string;
  details: string;
}

interface FormErrors {
  [key: string]: string;
}

function formatPhone(value: string): string {
  const digits = value.replace(/\D/g, "").slice(0, 10);
  if (digits.length <= 3) return digits;
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`;
}

export default function QuoteForm({ title, compact = false }: QuoteFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<FormErrors>({});
  const [form, setForm] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    address: "",
    pest: "",
    urgency: "normal",
    heardFrom: "",
    details: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === "phone" ? formatPhone(value) : value,
    }));
    if (errors[name]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[name];
        return next;
      });
    }
  };

  const validate = (): boolean => {
    const errs: FormErrors = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.phone.trim()) {
      errs.phone = "Phone is required";
    } else if (form.phone.replace(/\D/g, "").length < 10) {
      errs.phone = "Enter a valid 10-digit phone number";
    }
    if (!form.email.trim()) {
      errs.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address";
    }
    if (!compact) {
      if (!form.address.trim()) errs.address = "Address is required";
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setLoading(true);

    try {
      const res = await fetch(
        `https://formspree.io/f/${siteConfig.formspreeId}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );
      if (res.ok) {
        router.push("/thank-you");
      } else {
        setErrors({ form: "Something went wrong. Please try again." });
      }
    } catch {
      setErrors({ form: "Something went wrong. Please try again." });
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "w-full rounded-md border border-gray-300 px-3 py-2 text-sm text-gray-900 placeholder-gray-400 focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500";
  const labelClass = "mb-1 block text-sm font-medium text-gray-700";
  const errorClass = "mt-1 text-xs text-red-600";

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {title && (
        <h3 className="text-xl font-bold text-[#14331A]">{title}</h3>
      )}

      {errors.form && (
        <p className="rounded-md bg-red-50 p-3 text-sm text-red-600">
          {errors.form}
        </p>
      )}

      {/* Name */}
      <div>
        <label htmlFor="name" className={labelClass}>
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className={inputClass}
        />
        {errors.name && <p className={errorClass}>{errors.name}</p>}
      </div>

      {/* Phone */}
      <div>
        <label htmlFor="phone" className={labelClass}>
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          value={form.phone}
          onChange={handleChange}
          placeholder="(951) 555-0100"
          className={inputClass}
        />
        {errors.phone && <p className={errorClass}>{errors.phone}</p>}
      </div>

      {/* Email */}
      <div>
        <label htmlFor="email" className={labelClass}>
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="you@email.com"
          className={inputClass}
        />
        {errors.email && <p className={errorClass}>{errors.email}</p>}
      </div>

      {/* Full form fields */}
      {!compact && (
        <>
          {/* Address */}
          <div>
            <label htmlFor="address" className={labelClass}>
              Service Address
            </label>
            <input
              id="address"
              name="address"
              type="text"
              value={form.address}
              onChange={handleChange}
              placeholder="123 Main St, Riverside, CA"
              className={inputClass}
            />
            {errors.address && <p className={errorClass}>{errors.address}</p>}
          </div>

          {/* Pest Type */}
          <div>
            <label htmlFor="pest" className={labelClass}>
              Type of Pest
            </label>
            <select
              id="pest"
              name="pest"
              value={form.pest}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select a pest...</option>
              {siteConfig.commonPests.map((pest) => (
                <option key={pest} value={pest}>
                  {pest.charAt(0).toUpperCase() + pest.slice(1)}
                </option>
              ))}
              <option value="other">Other</option>
            </select>
          </div>

          {/* Urgency */}
          <fieldset>
            <legend className={labelClass}>Urgency</legend>
            <div className="flex gap-4">
              {[
                { value: "normal", label: "Normal" },
                { value: "urgent", label: "Urgent (same-day)" },
                { value: "emergency", label: "Emergency" },
              ].map((opt) => (
                <label
                  key={opt.value}
                  className="flex items-center gap-1.5 text-sm text-gray-700"
                >
                  <input
                    type="radio"
                    name="urgency"
                    value={opt.value}
                    checked={form.urgency === opt.value}
                    onChange={handleChange}
                    className="accent-orange-500"
                  />
                  {opt.label}
                </label>
              ))}
            </div>
          </fieldset>

          {/* How Heard */}
          <div>
            <label htmlFor="heardFrom" className={labelClass}>
              How did you hear about us?
            </label>
            <select
              id="heardFrom"
              name="heardFrom"
              value={form.heardFrom}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select...</option>
              <option value="google">Google Search</option>
              <option value="referral">Friend / Neighbor</option>
              <option value="nextdoor">Nextdoor</option>
              <option value="yelp">Yelp</option>
              <option value="social">Social Media</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Details */}
          <div>
            <label htmlFor="details" className={labelClass}>
              Additional Details
            </label>
            <textarea
              id="details"
              name="details"
              rows={4}
              value={form.details}
              onChange={handleChange}
              placeholder="Describe the pest issue..."
              className={inputClass}
            />
          </div>
        </>
      )}

      <button
        type="submit"
        disabled={loading}
        className="flex w-full items-center justify-center gap-2 rounded-md bg-[#D7FD19] px-6 py-3 text-sm font-semibold text-[#14331A] transition-colors hover:bg-[#c2e316] disabled:opacity-60"
      >
        {loading && (
          <svg
            className="h-4 w-4 animate-spin"
            viewBox="0 0 24 24"
            fill="none"
          >
            <circle
              className="opacity-25"
              cx="12"
              cy="12"
              r="10"
              stroke="currentColor"
              strokeWidth="4"
            />
            <path
              className="opacity-75"
              fill="currentColor"
              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
            />
          </svg>
        )}
        Get My Free Quote &rarr;
      </button>
    </form>
  );
}
