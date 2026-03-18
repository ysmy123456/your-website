import { siteConfig } from "@/config/site";

export function AnnouncementBar() {
  return (
    <div className="border-b border-indigo-300/20 bg-indigo-500/10">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-center px-6 py-2 text-center text-xs text-indigo-100 sm:text-sm">
        <p>{siteConfig.announcement}</p>
      </div>
    </div>
  );
}
