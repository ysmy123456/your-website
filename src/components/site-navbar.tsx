import Image from "next/image";
import Link from "next/link";
import { navLinks, siteConfig } from "@/config/site";

export function SiteNavbar() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/85 backdrop-blur">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 py-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo-placeholder.svg"
              alt={`${siteConfig.brandName} logo`}
              width={28}
              height={28}
              priority
            />
            <span className="text-sm font-semibold tracking-wide text-white">
              {siteConfig.brandName}
            </span>
          </Link>
          <Link
            href="/contact"
            className="rounded-full bg-white px-4 py-2 text-xs font-semibold text-slate-900 transition hover:bg-slate-200 md:hidden"
          >
            {siteConfig.mainCta}
          </Link>
        </div>

        <div className="flex items-center justify-between gap-4">
          <nav className="flex items-center gap-4 text-xs text-slate-300 sm:gap-6 sm:text-sm">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </nav>
          <div className="hidden items-center gap-2 md:flex">
            <Link
              href="/contact"
              className="rounded-full border border-white/20 px-4 py-2 text-sm font-medium text-white transition hover:border-white/40 hover:bg-white/10"
            >
              {siteConfig.secondaryCta}
            </Link>
            <Link
              href="/contact"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900 transition hover:bg-slate-200"
            >
              {siteConfig.mainCta}
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
