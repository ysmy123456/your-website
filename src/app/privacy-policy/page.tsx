import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `Privacy Policy for ${siteConfig.productName}.`,
};

export default function PrivacyPolicyPage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16">
      <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 sm:p-10">
        <h1 className="text-3xl font-semibold text-white">Privacy Policy</h1>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Effective Date: [Month DD, YYYY]
        </p>
        <p className="mt-6 text-sm leading-7 text-slate-300">
          This Privacy Policy describes how [Company Name] collects, uses, and
          protects information when you access {siteConfig.productName} via [Domain].
          By using our website and services, you acknowledge the practices described
          below.
        </p>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Information We Collect</h2>
          <p className="text-sm leading-7 text-slate-300">
            We may collect information you provide directly, including name, business
            email, company details, and communication content. We also collect
            technical and usage data such as device type, browser information, IP
            address, referring pages, and interaction activity.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">How We Use Information</h2>
          <p className="text-sm leading-7 text-slate-300">
            We use information to provide and improve our services, respond to
            inquiries, manage customer relationships, monitor platform performance,
            maintain security, and meet legal or contractual obligations.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Cookies</h2>
          <p className="text-sm leading-7 text-slate-300">
            We use cookies and similar technologies to support core functionality,
            analytics, and service optimization. You can manage browser settings to
            limit certain cookies, but this may affect user experience.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Data Retention</h2>
          <p className="text-sm leading-7 text-slate-300">
            We retain personal information only for as long as needed to fulfill
            legitimate business purposes, legal requirements, or contract obligations.
            Retention periods may vary by data type and applicable regulations.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Third-Party Services</h2>
          <p className="text-sm leading-7 text-slate-300">
            We may rely on trusted third-party providers for infrastructure, analytics,
            communications, and payment-related operations. These providers process
            data under contractual safeguards and according to their own policies.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">User Rights</h2>
          <p className="text-sm leading-7 text-slate-300">
            Depending on your jurisdiction, you may have rights to access, correct,
            delete, or restrict processing of your personal data, and to request a data
            export. To exercise your rights, contact us using the information below.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Contact Information</h2>
          <p className="text-sm leading-7 text-slate-300">
            For privacy inquiries, contact [Company Name] at [Email] or{" "}
            {siteConfig.supportEmail}. You may also write to us through the contact
            channels listed on [Domain].
          </p>
        </section>
      </article>
    </main>
  );
}
