import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for ${siteConfig.productName}.`,
};

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16">
      <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 sm:p-10">
        <h1 className="text-3xl font-semibold text-white">Terms of Service</h1>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Effective Date: [Month DD, YYYY]
        </p>
        <p className="mt-6 text-sm leading-7 text-slate-300">
          These Terms of Service govern your access to and use of services provided
          by [Company Name] through [Domain] and {siteConfig.productName}. By
          accessing or using our services, you agree to these terms.
        </p>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Acceptance of Terms</h2>
          <p className="text-sm leading-7 text-slate-300">
            You represent that you have authority to enter into these terms on behalf
            of yourself or your organization and will comply with applicable laws and
            contractual obligations.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Use of Service</h2>
          <p className="text-sm leading-7 text-slate-300">
            You may use the service only for legitimate business purposes and in
            accordance with documented platform capabilities, subscription scope, and
            applicable regulations.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Account Responsibilities</h2>
          <p className="text-sm leading-7 text-slate-300">
            You are responsible for maintaining account security, protecting credentials,
            ensuring user-level permissions are appropriate, and promptly reporting
            unauthorized access or suspected misuse.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Prohibited Use</h2>
          <p className="text-sm leading-7 text-slate-300">
            You may not use the service for unlawful, deceptive, abusive, infringing,
            or security-threatening activities, including attempts to disrupt platform
            integrity or violate third-party rights.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Intellectual Property</h2>
          <p className="text-sm leading-7 text-slate-300">
            The service, software, and related materials are owned by [Company Name]
            or licensors. Except for limited use rights expressly granted, no ownership
            rights are transferred to you.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Disclaimer</h2>
          <p className="text-sm leading-7 text-slate-300">
            The service is provided on an as-available basis. While we seek reliable
            performance, we do not guarantee uninterrupted operation, specific business
            outcomes, or compatibility beyond documented requirements.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Limitation of Liability</h2>
          <p className="text-sm leading-7 text-slate-300">
            To the maximum extent permitted by law, [Company Name] is not liable for
            indirect, incidental, consequential, or special damages arising from use
            of the service, including loss of revenue, data, or business opportunities.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Termination</h2>
          <p className="text-sm leading-7 text-slate-300">
            We may suspend or terminate access if these terms are violated, payment
            obligations are unmet, or legal or security requirements demand immediate
            action. You may stop using the service at any time.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Contact Information</h2>
          <p className="text-sm leading-7 text-slate-300">
            For terms-related inquiries, contact [Company Name] at [Email] or{" "}
            {siteConfig.supportEmail}. Additional contact details may be listed on [Domain].
          </p>
        </section>
      </article>
    </main>
  );
}
