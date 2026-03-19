import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy practices for the ${siteConfig.productName} marketing website.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16">
      <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 sm:p-10">
        <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Effective Date: March 19, 2026
        </p>
        <p className="mt-6 text-sm leading-7 text-slate-300">
          This Privacy Policy explains how {siteConfig.companyName} handles information
          when you visit the {siteConfig.productName} website at {siteConfig.domain}.
          This site is a marketing and information website and does not currently provide
          a full account system or payment processing.
        </p>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Information We Collect</h2>
          <p className="text-sm leading-7 text-slate-300">
            We may collect information you provide through contact forms or email,
            including your name, work email, company name, and message content. We may
            also collect basic technical data such as browser type, device information,
            approximate location from IP address, and page usage events.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">How We Use Information</h2>
          <p className="text-sm leading-7 text-slate-300">
            We use collected information to respond to inquiries, provide product
            information, improve website performance, understand audience interests,
            maintain security, and support future service integrations.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Cookies</h2>
          <p className="text-sm leading-7 text-slate-300">
            We may use cookies and similar technologies for essential site behavior,
            traffic analytics, and content performance measurement. You can manage
            cookie settings through your browser, though some features may be affected.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Third-Party Services</h2>
          <p className="text-sm leading-7 text-slate-300">
            We may use third-party providers for website hosting, analytics, email
            communications, and operational integrations. These providers process
            information according to their own terms and privacy policies.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Data Retention</h2>
          <p className="text-sm leading-7 text-slate-300">
            We retain personal information only as long as necessary for business and
            legal purposes, such as responding to inquiries, maintaining records, and
            meeting compliance obligations.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Your Rights</h2>
          <p className="text-sm leading-7 text-slate-300">
            Depending on your location, you may have rights to request access, correction,
            or deletion of personal information we hold about you. You may also request
            details about how your information is used.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Contact Us</h2>
          <p className="text-sm leading-7 text-slate-300">
            For privacy-related questions or requests, contact {siteConfig.companyName} at{" "}
            <a href={`mailto:${siteConfig.supportEmail}`} className="underline">
              {siteConfig.supportEmail}
            </a>
            .
          </p>
        </section>
      </article>
    </main>
  );
}
