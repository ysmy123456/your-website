import Link from "next/link";
import { AnnouncementBar } from "@/components/announcement-bar";
import { siteConfig } from "@/config/site";

const features = [
  "Multi-channel content publishing",
  "AI-assisted content creation",
  "Lead capture workflows",
  "Customer engagement automation",
  "Analytics and performance tracking",
  "CRM and workflow integration",
];

const steps = [
  {
    title: "Connect your channels",
    description:
      "Connect your publishing, communication, and CRM tools in one workspace.",
  },
  {
    title: "Create and launch faster",
    description:
      "Use AI-assisted drafting to prepare content, then publish to multiple channels.",
  },
  {
    title: "Track outcomes and improve",
    description:
      "Review performance metrics and automate lead follow-up based on engagement.",
  },
];

const useCases = [
  "Automotive dealers",
  "Local businesses",
  "Agencies",
  "Sales teams",
];

const faqs = [
  {
    question: "Who is this platform built for?",
    answer:
      `${siteConfig.productName} is designed for ${siteConfig.targetAudience.toLowerCase()}.`,
  },
  {
    question: "Do I need technical resources to get started?",
    answer:
      "Most teams can begin with standard integrations and simple workflows without building custom systems.",
  },
  {
    question: "Can we connect our existing CRM?",
    answer:
      "Yes. The platform is built to work with CRM and workflow tools used by marketing and sales teams.",
  },
  {
    question: "How does the AI support content creation?",
    answer:
      "AI assists with drafting and adapting content for different channels, while your team keeps final review control.",
  },
  {
    question: "Is this suitable for regulated or trust-sensitive markets?",
    answer:
      "The platform focuses on clear processes, controlled publishing, and transparent performance reporting.",
  },
  {
    question: "How do we request a demo or pricing details?",
    answer:
      "Visit the contact page to book a demo or speak with our sales team.",
  },
];

export default function Home() {
  return (
    <main>
      <AnnouncementBar />
      <section className="mx-auto grid w-full max-w-6xl gap-12 px-6 py-20 lg:grid-cols-[1.3fr_1fr] lg:py-28">
        <div>
          <p className="inline-flex rounded-full border border-indigo-300/30 bg-indigo-400/10 px-4 py-1 text-xs font-medium tracking-wide text-indigo-100">
            {siteConfig.tagline}
          </p>
          <h1 className="mt-8 max-w-3xl text-4xl font-semibold tracking-tight text-white sm:text-5xl lg:text-6xl">
            Marketing automation built for practical execution.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300">
            {siteConfig.shortDescription}
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              {siteConfig.mainCta}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-6 py-3 text-sm font-semibold text-white transition hover:border-white/40 hover:bg-white/10"
            >
              {siteConfig.secondaryCta}
            </Link>
          </div>
        </div>
        <div className="rounded-2xl border border-white/10 bg-slate-900/60 p-6 shadow-2xl shadow-black/20">
          <h2 className="text-lg font-semibold text-white">Platform Focus</h2>
          <div className="mt-5 space-y-4 text-sm text-slate-300">
            <p>AI-assisted creation to reduce manual campaign effort.</p>
            <p>Multi-channel publishing with consistent messaging.</p>
            <p>Lead capture and engagement workflows connected to CRM.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <div className="rounded-2xl border border-white/10 bg-slate-900/50 p-8">
          <p className="text-sm font-medium uppercase tracking-widest text-slate-400">
            Trusted foundation
          </p>
          <h2 className="mt-3 text-2xl font-semibold text-white">
            Built for modern businesses
          </h2>
          <p className="mt-4 max-w-3xl text-slate-300">
            {siteConfig.productName} is designed for {siteConfig.targetAudience.toLowerCase()} who need dependable
            operations for publishing, engagement, and lead generation.
          </p>
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-semibold text-white">Features</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-6 transition hover:border-indigo-300/40 hover:bg-slate-900"
            >
              <h3 className="text-base font-semibold text-white">{feature}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Built for daily marketing execution with clear workflow control and reliable output quality.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-semibold text-white">How it works</h2>
        <div className="mt-8 grid gap-4 md:grid-cols-3">
          {steps.map((step, idx) => (
            <article
              key={step.title}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-6"
            >
              <p className="text-sm font-semibold text-indigo-200">Step {idx + 1}</p>
              <h3 className="mt-3 text-lg font-semibold text-white">{step.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{step.description}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-semibold text-white">Use cases</h2>
        <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {useCases.map((item) => (
            <article
              key={item}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-6"
            >
              <h3 className="text-base font-semibold text-white">{item}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                Practical automation tailored to how {item.toLowerCase()} publish content and manage pipeline activity.
              </p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-12">
        <h2 className="text-3xl font-semibold text-white">Frequently asked questions</h2>
        <div className="mt-8 space-y-4">
          {faqs.map((faq) => (
            <article
              key={faq.question}
              className="rounded-2xl border border-white/10 bg-slate-900/50 p-6"
            >
              <h3 className="text-base font-semibold text-white">{faq.question}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">{faq.answer}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="mx-auto w-full max-w-6xl px-6 py-16">
        <div className="rounded-3xl border border-indigo-300/30 bg-indigo-400/10 p-8 sm:p-12">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">
            Bring consistency to your marketing operations.
          </h2>
          <p className="mt-4 max-w-2xl text-slate-200">
            Talk with Zenova to review your current workflow and identify a practical rollout plan for automation.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              {siteConfig.mainCta}
            </Link>
            <Link
              href="/contact"
              className="rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10"
            >
              {siteConfig.secondaryCta}
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
