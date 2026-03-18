import Link from "next/link";
import { navLinks, siteConfig } from "@/config/site";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-slate-950">
      <div className="mx-auto grid w-full max-w-6xl gap-5 px-6 py-10 sm:grid-cols-2 sm:items-end">
        <div>
          <p className="text-base font-semibold text-white">{siteConfig.brandName}</p>
          <p className="mt-2 text-sm text-slate-400">
            AI-powered marketing automation platform for modern businesses.
          </p>
        </div>
        <div className="sm:justify-self-end">
          <div className="flex flex-wrap gap-4 text-sm text-slate-300">
            {navLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition-colors hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <a
            href={`mailto:${siteConfig.supportEmail}`}
            className="mt-4 inline-block text-sm text-slate-300 transition-colors hover:text-white"
          >
            Support: {siteConfig.supportEmail}
          </a>
        </div>
      </div>
    </footer>
  );
}
