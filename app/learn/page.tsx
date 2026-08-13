import Link from "next/link";
import { Navbar } from "@/components/navigation";
import Footer from "@/components/footer/Footer";
import CategorySection from "@/components/learn/CategorySection";
import SearchTopics from "@/components/learn/SearchTopics";
import RecentlyViewed from "@/components/learn/RecentlyViewed";
import { technologyCategories } from "@/data/technologies";
import {
  ArrowRight,
  BookOpen,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";

export default function LearnPage() {
  const technologyCount = technologyCategories.reduce(
    (total, category) => total + category.technologies.length,
    0
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen overflow-hidden bg-background">
        {/* ================= HERO ================= */}
        <section className="relative border-border/60">
          {/* Background glow */}
          <div className="pointer-events-none absolute inset-0 overflow-hidden">
            <div className="absolute left-1/2 top-0 h-[500px] w-[900px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-3xl" />
            <div className="absolute left-[10%] top-[30%] h-40 w-40 rounded-full bg-cyan-500/5 blur-3xl" />
            <div className="absolute right-[5%] top-[20%] h-52 w-52 rounded-full bg-emerald-400/5 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-7xl px-6 pb-12 pt-6 sm:px-8 lg:px-10 lg:pb-15 lg:pt-8">

            {/* Badge */}
            <div className="flex justify-center px-4">
              <div
                className="
      inline-flex items-center gap-2 rounded-full
      border border-emerald-500/20
      bg-emerald-500/5
      px-3 py-1.5
      text-xs font-medium text-emerald-500
      sm:gap-2 sm:px-4 sm:py-2 sm:text-sm
    "
              >
                <Sparkles className="h-3.5 w-3.5 shrink-0 sm:h-4 sm:w-4" />
                <span>The Developer Knowledge Atlas</span>
              </div>
            </div>

            {/* Heading */}
            <div className="mx-auto mt-4 max-w-5xl text-center">
              <h1 className="text-3xl font-black tracking-[-0.04em] sm:text-4xl lg:text-5xl">
                Master technology.
                <br />
                <span className="text-emerald-500">
                  Build the future.
                </span>
              </h1>

              <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                Learn modern development through structured paths,
                practical notes, real examples, projects, and concepts
                designed to take you from beginner to builder.
              </p>
            </div>

            {/* Search */}
            <div className="mx-auto mt-4 max-w-2xl">
              <SearchTopics />
            </div>

            {/* Quick links */}
            <div className="mt-4 flex flex-wrap justify-center gap-3">
              <Link
                href="#technologies"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-background/70 px-4 py-2 text-sm font-medium transition hover:border-emerald-500/40 hover:bg-emerald-500/5"
              >
                <BookOpen className="h-4 w-4 text-emerald-500" />
                Explore Technologies
                <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/roadmaps"
                className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium text-muted-foreground transition hover:text-foreground"
              >
                <Layers3 className="h-4 w-4" />
                View Roadmaps
              </Link>
            </div>

            {/* Stats */}
            <div className="mx-auto mt-6 grid max-w-3xl grid-cols-3 overflow-hidden rounded-2xl border border-border bg-card/50 backdrop-blur-sm">
              <div className="border-r border-border px-4 py-6 text-center">
                <div className="text-2xl font-bold sm:text-3xl">
                  {technologyCount}+
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Technologies
                </div>
              </div>

              <div className="border-r border-border px-4 py-6 text-center">
                <div className="text-2xl font-bold sm:text-3xl">
                  {technologyCategories.length}
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Categories
                </div>
              </div>

              <div className="px-4 py-6 text-center">
                <div className="text-2xl font-bold sm:text-3xl">
                  100+
                </div>
                <div className="mt-1 text-xs text-muted-foreground sm:text-sm">
                  Concepts
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ================= RECENTLY VIEWED ================= */}
        <RecentlyViewed />

        {/* ================= TECHNOLOGIES ================= */}
        <section
          id="technologies"
          className="mx-auto max-w-7xl px-6 py-20 sm:px-8 lg:px-10"
        >
          <div className="mb-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <div className="mb-3 flex items-center gap-2 text-sm font-semibold text-emerald-500">
                <Code2 className="h-4 w-4" />
                LEARNING LIBRARY
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Explore technologies
              </h2>

              <p className="mt-3 max-w-2xl text-muted-foreground">
                Pick a technology and follow a structured journey
                from fundamentals to advanced concepts.
              </p>
            </div>

            <Link
              href="/roadmaps"
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-medium text-emerald-500"
            >
              Explore roadmaps
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          <div className="space-y-16">
            {technologyCategories.map((category) => (
              <CategorySection
                key={category.name}
                {...category}
              />
            ))}
          </div>
        </section>
      </main>

      <Footer />

    </>
  );
}