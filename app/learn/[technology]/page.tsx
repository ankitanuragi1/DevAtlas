import Link from "next/link";
import { ArrowRight, BookOpen, Clock, Layers3 } from "lucide-react";

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

  const technologyName =
    formatTechnologyName(technology);

  const topics = technologyTopics[technology] ?? [];

  if (topics.length === 0) {
    return (
      <main className="flex min-h-screen items-center justify-center px-6">
        <div className="text-center">
          <h1 className="text-3xl font-bold">
            {technologyName}
          </h1>

          <p className="mt-3 text-muted-foreground">
            Learning content for this technology is
            coming soon.
          </p>

          <Link
            href="/learn"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-emerald-600"
          >
            Explore other technologies
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </main>
    );
  }

  return (
    <>
      {/* Header */}
      <header className="border-b border-border">
        <div className="mx-auto flex h-16 max-w-7xl items-center px-4 sm:px-6 lg:px-8">
          <Link
            href="/learn"
            className="text-lg font-bold transition hover:text-emerald-500"
          >
            DevAtlas
          </Link>

          <span className="mx-3 text-muted-foreground">
            /
          </span>

          <span className="text-sm text-muted-foreground">
            {technologyName}
          </span>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl">
        {/* Sidebar */}
        <LearningSidebar
          technology={technologyName}
        />

        {/* Main */}
        <main className="min-w-0 flex-1">
          <div className="mx-auto max-w-4xl px-6 py-12 lg:px-10">
            {/* Hero */}
            <section>
              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-emerald-500/10 text-xl font-bold text-emerald-500">
                {technologyName.charAt(0)}
              </div>

              <p className="mt-6 text-sm font-medium uppercase tracking-wider text-emerald-500">
                Learning Path
              </p>

              <h1 className="mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
                Learn {technologyName}
              </h1>

              <p className="mt-5 max-w-2xl text-lg leading-8 text-muted-foreground">
                Follow a structured learning path and
                build your understanding step by step,
                from fundamentals to advanced concepts.
              </p>
            </section>

            {/* Stats */}
            <section className="mt-10 grid gap-4 sm:grid-cols-3">
              <div className="rounded-xl border border-border p-5">
                <BookOpen className="h-5 w-5 text-emerald-500" />

                <p className="mt-4 text-2xl font-bold">
                  {topics.length}
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Topics
                </p>
              </div>

              <div className="rounded-xl border border-border p-5">
                <Layers3 className="h-5 w-5 text-emerald-500" />

                <p className="mt-4 text-2xl font-bold">
                  Beginner
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Starting Level
                </p>
              </div>

              <div className="rounded-xl border border-border p-5">
                <Clock className="h-5 w-5 text-emerald-500" />

                <p className="mt-4 text-2xl font-bold">
                  {topics.reduce((total, topic) => {
                    const minutes = parseInt(
                      topic.duration
                    );

                    return total + minutes;
                  }, 0)}{" "}
                  min
                </p>

                <p className="mt-1 text-sm text-muted-foreground">
                  Estimated Learning
                </p>
              </div>
            </section>

            {/* Learning Path */}
            <section className="mt-14">
              <div className="mb-6">
                <h2 className="text-2xl font-bold">
                  Learning Path
                </h2>

                <p className="mt-2 text-muted-foreground">
                  Learn each concept in the recommended
                  order.
                </p>
              </div>

              <div className="space-y-3">
                {topics.map((topic, index) => (
                  <Link
                    key={topic.slug}
                    href={`/learn/${technology}/${topic.slug}`}
                    className="group flex items-center gap-4 rounded-xl border border-border p-5 transition hover:border-emerald-500/50 hover:bg-muted/40"
                  >
                    {/* Number */}
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted text-sm font-semibold text-muted-foreground group-hover:bg-emerald-500/10 group-hover:text-emerald-500">
                      {String(index + 1).padStart(2, "0")}
                    </div>

                    {/* Content */}
                    <div className="min-w-0 flex-1">
                      <h3 className="font-semibold group-hover:text-emerald-500">
                        {topic.title}
                      </h3>

                      <p className="mt-1 text-sm text-muted-foreground">
                        {topic.description}
                      </p>

                      <div className="mt-2 flex gap-3 text-xs text-muted-foreground">
                        <span>
                          {topic.level}
                        </span>

                        <span>•</span>

                        <span>
                          {topic.duration}
                        </span>
                      </div>
                    </div>

                    {/* Arrow */}
                    <ArrowRight className="h-5 w-5 shrink-0 text-muted-foreground transition-transform group-hover:translate-x-1 group-hover:text-emerald-500" />
                  </Link>
                ))}
              </div>
            </section>

            {/* Start Button */}
            <section className="mt-10 border-t border-border pt-8">
              <Link
                href={`/learn/${technology}/${topics[0].slug}`}
                className="inline-flex items-center gap-2 rounded-lg bg-emerald-500 px-6 py-3 font-medium text-white transition hover:bg-emerald-600"
              >
                Start Learning
                <ArrowRight className="h-4 w-4" />
              </Link>
            </section>
          </div>
        </main>
      </div>
    </>
  );
}