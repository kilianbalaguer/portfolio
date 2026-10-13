import type { Metadata } from "next";

// Protected by proxy.ts (login required). Rendered per request so the env var is read at runtime.
export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Stats",
  robots: { index: false, follow: false },
};

export default function StatsPage() {
  const shareUrl = process.env.STATS_SHARE_URL;

  return (
    // Full-screen layer on top of the regular site header/footer
    <div className="fixed inset-0 z-[60] flex flex-col bg-ink-950">
      <div className="flex items-center justify-between border-b border-white/10 px-4 py-3 text-sm">
        <span className="font-medium">Kilian Balaguer — Stats</span>
        {shareUrl && (
          <a
            href={shareUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 transition-colors hover:text-white"
          >
            Open in Umami ↗
          </a>
        )}
      </div>

      {shareUrl ? (
        <iframe src={shareUrl} title="Umami stats" className="w-full flex-1 border-0 bg-white" />
      ) : (
        <div className="grid flex-1 place-items-center p-6 text-center text-zinc-400">
          <p>
            Stats aren&apos;t connected yet. Add <code className="text-white">STATS_SHARE_URL</code> in
            Vercel and redeploy.
          </p>
        </div>
      )}
    </div>
  );
}
