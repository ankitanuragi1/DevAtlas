import Link from "next/link";
import { ArrowRight, Search } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-border">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_40%)]" />

      <div className="mx-auto max-w-5xl px-4 py-4 text-center sm:px-6 lg:py-10">
        <div className="mb-6 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2 text-sm text-emerald-400">
          Learn. Build. Master.
        </div>

        <h1 className="text-5xl font-bold tracking-tight sm:text-6xl lg:text-6xl">
          Master the
          <span className="text-emerald-500"> Technologies </span>
          That Build the Web.
        </h1>

        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">
          Complete developer notes, practical examples, roadmaps and
          resources — organized in one place.
        </p>

        {/* <div className="mx-auto mt-8 flex max-w-xl items-center rounded-xl border border-border bg-card px-4 py-3 shadow-lg">
          <Search className="mr-3 h-5 w-5 text-muted-foreground" />

          <input
            type="text"
            placeholder="Search HTML, JavaScript, React..."
            className="w-full bg-transparent outline-none placeholder:text-muted-foreground"
          />
        </div> */}

        <div className="mt-8 flex flex-col justify-center gap-4 sm:flex-row">
          <Link
            href="/learn"
            className="inline-flex items-center justify-center rounded-lg bg-emerald-500 px-6 py-3 font-medium text-black transition hover:bg-emerald-400"
          >
            Start Learning
            <ArrowRight className="ml-2 h-4 w-4" />
          </Link>

          <Link
            href="/roadmaps"
            className="inline-flex items-center justify-center rounded-lg border border-border px-6 py-3 font-medium transition hover:bg-muted"
          >
            Explore Roadmaps
          </Link>
        </div>
      </div>
    </section>
  );
}