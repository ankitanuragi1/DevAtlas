import Link from "next/link";
import {
  ArrowRight,
  BookOpen,
  CheckCircle2,
  Clock,
  Layers3,
  Sparkles,
} from "lucide-react";

import LearningProgress from "@/components/learn/LearningProgress";
import LearningSidebar from "@/components/learn/LearningSidebar";
import { technologyTopics } from "@/data/topics";

interface TechnologyPageProps {
  params: Promise<{
    technology: string;
  }>;
}

function formatTechnologyName(slug: string) {
  const names: Record<string, string> = {
    javascript: "JavaScript",
    typescript: "TypeScript",
    react: "React",
    nodejs: "Node.js",
    express: "Express.js",
    html: "HTML",
    css: "CSS",
    mongodb: "MongoDB",
    mysql: "MySQL",
    cpp: "C++",
    python: "Python",
    git: "Git",
    github: "GitHub",
    docker: "Docker",
  };

  return (
    names[slug] ??
    slug.charAt(0).toUpperCase() + slug.slice(1)
  );
}

export default async function TechnologyPage({
  params,
}: TechnologyPageProps) {
  const { technology } = await params;

  const technologyName = formatTechnologyName(technology);
  const topics = technologyTopics[technology] ?? [];

  if (topics.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="w-full max-w-md text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-emerald-500">
            <BookOpen className="h-6 w-6" />
          </div>

          <h1 className="mt-6 text-3xl font-bold">
            {technologyName}
          </h1>

          <p className="mt-3 leading-7 text-muted-foreground">
            Learning content for this technology is coming soon.
          </p>

          <Link
            href="/learn"
            className="mt-7 inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-medium text-white transition hover:bg-emerald-600"
          >
            Explore other technologies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    );
  }

  const totalMinutes = topics.reduce((total, topic) => {
    const minutes = parseInt(topic.duration);
    return total + (Number.isNaN(minutes) ? 0 : minutes);
  }, 0);

  return (
    <>
      {/* Breadcrumb Header */}
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/learn"
            className="text-sm font-semibold transition-colors hover:text-emerald-500"
          >
            DevAtlas
          </Link>

          <span className="mx-3 text-muted-foreground/50">/</span>

          <span className="text-sm text-muted-foreground">
            Learn {technologyName}
          </span>
        </div>
      </header>

      <div className="mx-auto flex w-full max-w-[1440px]">
        {/* Sidebar */}
        <LearningSidebar technology={technologyName} />

        {/* Main Content */}
        <main className="min-w-0 flex-1">
          <LearningProgress technology={technology} />

          <div className="mx-auto max-w-5xl px-5 py-10 sm:px-8 lg:px-10 lg:py-14">
            {/* Hero */}
            <section className="relative overflow-hidden rounded-3xl border border-border bg-card p-7 sm:p-10">
              {/* Background decoration */}
              <div className="pointer-events-none absolute -right-20 -top-20 h-56 w-56 rounded-full bg-emerald-500/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-24 -left-20 h-48 w-48 rounded-full bg-emerald-500/5 blur-3xl" />

              <div className="relative">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-emerald-500/20 bg-emerald-500/10 text-xl font-bold text-emerald-500">
                    {technologyName.charAt(0)}
                  </div>

                  <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1.5 text-xs font-semibold text-emerald-500">
                    <Sparkles className="h-3.5 w-3.5" />
                    Learning Path
                  </div>
                </div>

                <h1 className="mt-7 text-4xl font-bold tracking-tight sm:text-5xl">
                  Learn{" "}
                  <span className="text-emerald-500">
                    {technologyName}
                  </span>
                </h1>

                <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
                  Follow a structured learning path and build your
                  understanding step by step, from fundamentals to
                  advanced concepts.
                </p>

                <div className="mt-8 flex flex-wrap gap-3">
                  <Link
                    href={`/learn/${technology}/${topics[0].slug}`}
                    className="inline-flex items-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white shadow-sm transition hover:bg-emerald-600 hover:shadow-md"
                  >
                    Start Learning
                    <ArrowRight className="h-4 w-4" />
                  </Link>

                  <div className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 text-sm text-muted-foreground">
                    <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                    Self-paced learning
                  </div>
                </div>
              </div>
            </section>

            {/* Stats */}
            <section className="mt-6 grid gap-4 sm:grid-cols-3">
              <div className="group rounded-2xl border border-border bg-card p-5 transition hover:border-emerald-500/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                  <BookOpen className="h-5 w-5 text-emerald-500" />
                </div>

                <p className="mt-5 text-2xl font-bold">
                  {topics.length}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Topics to learn
                </p>
              </div>

              <div className="group rounded-2xl border border-border bg-card p-5 transition hover:border-emerald-500/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Layers3 className="h-5 w-5 text-emerald-500" />
                </div>

                <p className="mt-5 text-2xl font-bold">
                  Beginner
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Starting level
                </p>
              </div>

              <div className="group rounded-2xl border border-border bg-card p-5 transition hover:border-emerald-500/30">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10">
                  <Clock className="h-5 w-5 text-emerald-500" />
                </div>

                <p className="mt-5 text-2xl font-bold">
                  {totalMinutes} min
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Estimated learning
                </p>
              </div>
            </section>

            {/* Learning Path */}
            <section className="mt-14">
              <div className="mb-7 flex items-end justify-between gap-4">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="h-1.5 w-8 rounded-full bg-emerald-500" />
                    <span className="text-sm font-semibold text-emerald-500">
                      CURRICULUM
                    </span>
                  </div>

                  <h2 className="mt-3 text-2xl font-bold sm:text-3xl">
                    Learning Path
                  </h2>

                  <p className="mt-2 max-w-xl text-sm leading-6 text-muted-foreground sm:text-base">
                    Learn each concept in the recommended order and
                    build your knowledge progressively.
                  </p>
                </div>

                <span className="hidden rounded-full border border-border px-3 py-1.5 text-xs font-medium text-muted-foreground sm:block">
                  {topics.length} lessons
                </span>
              </div>

              <div className="relative">
                {/* Timeline */}
                <div className="absolute bottom-6 left-5 top-6 w-px bg-border" />

                <div className="space-y-3">
                  {topics.map((topic, index) => (
                    <Link
                      key={topic.slug}
                      href={`/learn/${technology}/${topic.slug}`}
                      className="group relative flex gap-4 rounded-2xl border border-border bg-card p-4 transition-all duration-200 hover:-translate-y-0.5 hover:border-emerald-500/40 hover:shadow-md sm:p-5"
                    >
                      {/* Number */}
                      <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-background text-xs font-bold text-muted-foreground transition group-hover:border-emerald-500/30 group-hover:bg-emerald-500/10 group-hover:text-emerald-500">
                        {String(index + 1).padStart(2, "0")}
                      </div>

                      {/* Content */}
                      <div className="min-w-0 flex-1">
                        <div className="flex items-start justify-between gap-4">
                          <h3 className="font-semibold leading-6 transition-colors group-hover:text-emerald-500">
                            {topic.title}
                          </h3>

                          <ArrowRight className="mt-0.5 h-4 w-4 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-emerald-500" />
                        </div>

                        <p className="mt-1.5 text-sm leading-6 text-muted-foreground">
                          {topic.description}
                        </p>

                        <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
                          <span className="rounded-full bg-muted px-2.5 py-1">
                            {topic.level}
                          </span>

                          <span className="text-border">•</span>

                          <span>{topic.duration}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </section>

            {/* Bottom CTA */}
            <section className="mt-12 overflow-hidden rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6 sm:p-8">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-lg font-semibold">
                    Ready to start learning?
                  </p>

                  <p className="mt-1 text-sm text-muted-foreground">
                    Begin with the first topic and progress through
                    the complete {technologyName} path.
                  </p>
                </div>

                <Link
                  href={`/learn/${technology}/${topics[0].slug}`}
                  className="inline-flex shrink-0 items-center justify-center gap-2 rounded-xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
                >
                  Start Learning
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}