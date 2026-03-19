import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms of Service for the ${siteConfig.productName} website.`,
};

export default function TermsOfServicePage() {
  return (
    <main className="mx-auto w-full max-w-4xl px-6 py-16">
      <article className="rounded-2xl border border-white/10 bg-slate-900/60 p-8 sm:p-10">
        <h1 className="text-3xl font-semibold text-white">Terms of Service</h1>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          Effective Date: March 19, 2026
        </p>
        <p className="mt-6 text-sm leading-7 text-slate-300">
          These Terms of Service govern your use of the {siteConfig.productName}
          website at {siteConfig.domain}. By accessing or using this website, you
          agree to these terms.
        </p>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Acceptance of Terms</h2>
          <p className="text-sm leading-7 text-slate-300">
            By using this website, you confirm that you have read and accepted these
            Terms. If you use the website for an organization, you confirm that you
            are authorized to act on its behalf.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">
            Use of the Website and Services
          </h2>
          <p className="text-sm leading-7 text-slate-300">
            You may use this website for lawful business purposes, including reviewing
            product information and contacting our team. Any future service features
            are subject to separate commercial or technical agreements.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Prohibited Use</h2>
          <p className="text-sm leading-7 text-slate-300">
            You must not misuse this website, including by attempting unauthorized
            access, introducing malicious code, violating laws, infringing rights, or
            interfering with normal site operations.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Intellectual Property</h2>
          <p className="text-sm leading-7 text-slate-300">
            Website content, branding, and related materials are owned by{" "}
            {siteConfig.companyName} or used with permission. You may not copy,
            distribute, or reuse materials without prior written approval.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Disclaimer</h2>
          <p className="text-sm leading-7 text-slate-300">
            This website and its content are provided on an as-is and as-available
            basis. We do not guarantee uninterrupted availability or specific business
            outcomes from website content.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Limitation of Liability</h2>
          <p className="text-sm leading-7 text-slate-300">
            To the extent permitted by law, {siteConfig.companyName} is not liable for
            indirect or consequential damages arising from use of this website.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Termination</h2>
          <p className="text-sm leading-7 text-slate-300">
            We may restrict or suspend access to the website if these Terms are violated
            or if needed to protect legal, security, or operational interests.
          </p>
        </section>

        <section className="mt-8 space-y-6">
          <h2 className="text-xl font-semibold text-white">Contact Information</h2>
          <p className="text-sm leading-7 text-slate-300">
            For questions about these Terms, contact {siteConfig.companyName} at{" "}
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
