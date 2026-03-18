import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto flex min-h-[60vh] w-full max-w-3xl items-center px-6 py-16">
      <section className="w-full rounded-2xl border border-white/10 bg-slate-900/60 p-10 text-center">
        <p className="text-sm uppercase tracking-widest text-slate-400">404</p>
        <h1 className="mt-3 text-3xl font-semibold text-white">Page not found</h1>
        <p className="mt-4 text-sm leading-7 text-slate-300">
          The page you requested does not exist or may have been moved.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex rounded-full bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
        >
          Back to Home
        </Link>
      </section>
    </main>
  );
}
