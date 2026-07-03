export default function Home() {
  return (
    <main className="flex min-h-[calc(100vh-2rem)] items-center justify-center px-4 py-8 text-center">
      <div className="max-w-xl space-y-6 rounded-3xl border border-black/10 bg-white/80 px-8 py-12 shadow-2xl shadow-black/5 backdrop-blur dark:border-white/10 dark:bg-black/40">
        <p className="text-sm font-semibold uppercase tracking-[0.35em] text-gray-500 dark:text-gray-400">
          Site Revamp
        </p>
        <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
          Website in progress
        </h1>
        <p className="text-base leading-7 text-gray-600 dark:text-gray-300 sm:text-lg">
          I’m currently rebuilding this site. The rest of the portfolio is hidden for now and will be back once the refresh is ready.
        </p>
      </div>
    </main>
  );
}
