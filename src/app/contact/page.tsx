import type { Metadata } from "next";
import { siteConfig } from "@/config/site";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${siteConfig.brandName} for product questions, demos, and sales inquiries.`,
};

export default function ContactPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-6 py-16">
      <section className="grid gap-8 lg:grid-cols-[1fr_1.1fr]">
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8">
          <h1 className="text-3xl font-semibold text-white">Contact</h1>
          <p className="mt-4 text-sm leading-7 text-slate-300">
            Reach the Zenova team for product questions, implementation planning, and commercial discussions.
          </p>

          <div className="mt-8 space-y-6">
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">Support Email</p>
              <a
                href={`mailto:${siteConfig.supportEmail}`}
                className="mt-2 inline-block text-sm font-medium text-white hover:text-indigo-200"
              >
                {siteConfig.supportEmail}
              </a>
            </div>
            <div>
              <p className="text-xs uppercase tracking-widest text-slate-400">Sales Contact</p>
              <a
                href={`mailto:${siteConfig.salesEmail}`}
                className="mt-2 inline-block text-sm font-medium text-white hover:text-indigo-200"
              >
                {siteConfig.salesEmail}
              </a>
            </div>
          </div>
        </div>

        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-8">
          <h2 className="text-xl font-semibold text-white">Book a Demo</h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            This form is for initial inquiries only. Submission handling is not connected to a backend yet.
          </p>
          <form className="mt-6 space-y-4">
            <div>
              <label htmlFor="name" className="text-sm text-slate-300">
                Full Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Your full name"
                className="mt-2 w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-300/70"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm text-slate-300">
                Work Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="you@company.com"
                className="mt-2 w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-300/70"
              />
            </div>
            <div>
              <label htmlFor="company" className="text-sm text-slate-300">
                Company
              </label>
              <input
                id="company"
                name="company"
                type="text"
                placeholder="Your company"
                className="mt-2 w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-300/70"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm text-slate-300">
                What are you looking to automate?
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Tell us about your publishing channels, lead goals, and current process."
                className="mt-2 w-full rounded-xl border border-white/15 bg-slate-950 px-4 py-3 text-sm text-white outline-none transition focus:border-indigo-300/70"
              />
            </div>
            <button
              type="button"
              className="w-full rounded-full bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </section>
    </main>
  );
}
