import { Navbar } from "@/components/navigation";
import CategorySection from "@/components/learn/CategorySection";
import SearchTopics from "@/components/learn/SearchTopics";
import RecentlyViewed from "@/components/learn/RecentlyViewed";
import { technologyCategories } from "@/data/technologies";
import {
  ArrowDown,
  ArrowRight,
  BookOpen,
  Code2,
  Layers3,
  Sparkles,
} from "lucide-react";

export default function LearnPage() {
  const technologyCount = technologyCategories.reduce(
    (total, category) =>
      total + category.technologies.length,
    0
  );

  return (
    <>
      <Navbar />

      <main className="min-h-screen bg-background">
        {/* ================================================== */}
        {/* HERO */}
        {/* ================================================== */}

        <section className="relative overflow-hidden border-b border-border">
          {/* Background grid */}
          <div
            className="
              pointer-events-none absolute inset-0
              bg-[linear-gradient(to_right,hsl(var(--border)/0.25)_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border)/0.25)_1px,transparent_1px)]
              bg-[size:48px_48px]
              [mask-image:linear-gradient(to_bottom,black,transparent)]
            "
          />

          {/* Main glow */}
          <div className="pointer-events-none absolute left-1/2 top-[-100px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-emerald-500/10 blur-[120px]" />

          {/* Small glow */}
          <div className="pointer-events-none absolute left-[20%] top-[35%] h-40 w-40 rounded-full bg-emerald-500/5 blur-3xl" />

          <div className="relative mx-auto max-w-6xl px-4 py-24 text-center sm:px-6 lg:px-8 lg:py-32">
            {/* Badge */}
            <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-4 py-2 text-xs font-medium text-emerald-500 backdrop-blur">
              <Sparkles className="h-3.5 w-3.5" />

              <span>THE DEVELOPER KNOWLEDGE ATLAS</span>
            </div>

            {/* Heading */}
            <h1 className="mx-auto mt-8 max-w-5xl text-5xl font-bold tracking-[-0.045em] sm:text-6xl lg:text-7xl xl:text-8xl">
              Master the technology
              <br />

              <span className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-400 bg-clip-text text-transparent">
                that builds the future.
              </span>
            </h1>

            {/* Description */}
            <p className="mx-auto mt-7 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              Learn programming and modern development through
              structured paths, practical notes, examples,
              projects, and real-world concepts.
            </p>

            {/* Search */}
            <div className="mx-auto mt-10 max-w-2xl">
              <SearchTopics />
            </div>

            {/* Popular topics */}
            <div className="mt-5 flex flex-wrap items-center justify-center gap-2 text-sm">
              <span className="mr-1 text-muted-foreground">
                Popular:
              </span>

              {[
                "JavaScript",
                "React",
                "TypeScript",
                "Node.js",
              ].map((item) => (
                <span
                  key={item}
                  className="
                    rounded-full
                    border border-border
                    bg-background/60
                    px-3 py-1.5
                    text-muted-foreground
                    transition
                    hover:border-emerald-500/40
                    hover:bg-emerald-500/5
                    hover:text-emerald-500
                  "
                >
                  {item}
                </span>
              ))}
            </div>

            {/* Stats */}
            <div className="mx-auto mt-14 flex max-w-2xl flex-wrap justify-center gap-x-12 gap-y-6 border-t border-border pt-8">
              <div>
                <p className="text-2xl font-bold">
                  {technologyCount}+
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Technologies
                </p>
              </div>

              <div className="h-10 w-px bg-border" />

              <div>
                <p className="text-2xl font-bold">
                  {technologyCategories.length}
                </p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Categories
                </p>
              </div>

              <div className="h-10 w-px bg-border" />

              <div>
                <p className="text-2xl font-bold">100+</p>

                <p className="mt-1 text-xs text-muted-foreground">
                  Concepts
                </p>
              </div>
            </div>

            {/* Scroll indicator */}
            <a
              href="#technologies"
              className="
                mx-auto mt-14
                flex w-fit
                flex-col items-center gap-2
                text-xs text-muted-foreground
                transition hover:text-foreground
              "
            >
              <span>Explore learning paths</span>

              <ArrowDown className="h-4 w-4 animate-bounce" />
            </a>
          </div>
        </section>

        {/* ================================================== */}
        {/* RECENTLY VIEWED */}
        {/* ================================================== */}

        <RecentlyViewed />

        {/* ================================================== */}
        {/* TECHNOLOGIES */}
        {/* ================================================== */}

        <section
          id="technologies"
          className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28"
        >
          {/* Section header */}
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <div className="mb-4 flex items-center gap-2 text-sm font-medium text-emerald-500">
                <Layers3 className="h-4 w-4" />

                <span>EXPLORE THE ATLAS</span>
              </div>

              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Choose your technology.
              </h2>

              <p className="mt-3 max-w-2xl text-muted-foreground">
                Follow a structured learning path from
                fundamentals to advanced concepts.
              </p>
            </div>

            <div className="hidden items-center gap-2 text-sm text-muted-foreground sm:flex">
              <BookOpen className="h-4 w-4" />

              <span>Learn at your own pace</span>
            </div>
          </div>

          {/* Categories */}
          <div className="mt-14 space-y-20">
            {technologyCategories.map((category) => (
              <CategorySection
                key={category.name}
                {...category}
              />
            ))}
          </div>
        </section>

        {/* ================================================== */}
        {/* BOTTOM CTA */}
        {/* ================================================== */}

        <section className="border-t border-border">
          <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6 lg:px-8 lg:py-28">
            <div
              className="
                relative overflow-hidden
                rounded-3xl
                border border-border
                bg-muted/20
                p-8
                sm:p-12
                lg:p-16
              "
            >
              {/* Glow */}
              <div className="pointer-events-none absolute right-[-100px] top-[-100px] h-80 w-80 rounded-full bg-emerald-500/10 blur-[100px]" />

              <div className="relative max-w-2xl">
                {/* Icon */}
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-500">
                  <Code2 className="h-5 w-5" />
                </div>

                <h2 className="mt-6 text-3xl font-bold tracking-tight sm:text-4xl">
                  Your learning journey
                  <br />
                  starts here.
                </h2>

                <p className="mt-4 max-w-xl leading-7 text-muted-foreground">
                  Pick a technology, follow the path,
                  understand the fundamentals, and keep
                  building until you can create things
                  on your own.
                </p>

                <a
                  href="#technologies"
                  className="
                    group
                    mt-8
                    inline-flex
                    items-center
                    gap-2
                    rounded-lg
                    bg-emerald-500
                    px-5 py-3
                    text-sm
                    font-medium
                    text-white
                    transition
                    hover:bg-emerald-600
                  "
                >
                  Start exploring

                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}