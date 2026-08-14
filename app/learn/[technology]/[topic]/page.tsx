import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ArrowRight, List } from "lucide-react";

import LearningSidebar from "@/components/learn/LearningSidebar";
import TopicHeader from "@/components/learn/TopicHeader";
import TopicCompletion from "@/components/learn/TopicCompletion";

import NotesContent from "@/components/notes/NotesContent";
import NoteNavigation from "@/components/notes/NoteNavigation";
import ReadingProgress from "@/components/notes/ReadingProgress";
import RecentlyViewedTracker from "@/components/notes/RecentlyViewedTracker";

import { getNoteContent } from "@/lib/content";
import { technologyTopics } from "@/data/topics";

interface TopicPageProps {
  params: Promise<{
    technology: string;
    topic: string;
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

export async function generateMetadata({
  params,
}: TopicPageProps): Promise<Metadata> {
  const { technology, topic } = await params;

  const technologyTitle = formatTechnologyName(technology);

  const topicData = technologyTopics[technology]?.find(
    (item) => item.slug === topic
  );

  const topicTitle =
    topicData?.title ??
    topic
      .split("-")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");

  return {
    title: `${topicTitle} — ${technologyTitle} | DevAtlas`,
    description:
      topicData?.description ??
      `Learn ${topicTitle} in ${technologyTitle} with structured notes, examples, and practical concepts.`,
  };
}

export default async function TopicPage({
  params,
}: TopicPageProps) {
  const { technology, topic } = await params;

  const content = getNoteContent(technology, topic);

  if (!content) {
    notFound();
  }

  const technologyTitle = formatTechnologyName(technology);

  const topics = technologyTopics[technology] ?? [];

  const currentIndex = topics.findIndex(
    (item) => item.slug === topic
  );

  const currentTopic =
    currentIndex >= 0 ? topics[currentIndex] : null;

  const previous =
    currentIndex > 0
      ? topics[currentIndex - 1].slug
      : null;

  const next =
    currentIndex >= 0 &&
    currentIndex < topics.length - 1
      ? topics[currentIndex + 1].slug
      : null;

  const progress =
    topics.length > 0 && currentIndex >= 0
      ? Math.round(
          ((currentIndex + 1) / topics.length) * 100
        )
      : 0;

  return (
    <div className="min-h-screen bg-background">
      <ReadingProgress />

      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border/60 bg-background/90 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-2">
            <Link
              href="/learn"
              className="shrink-0 text-sm font-bold transition-colors hover:text-emerald-500"
            >
              DevAtlas
            </Link>

            <span className="text-muted-foreground/40">
              /
            </span>

            <Link
              href={`/learn/${technology}`}
              className="truncate text-sm text-muted-foreground hover:text-foreground"
            >
              {technologyTitle}
            </Link>

            <span className="text-muted-foreground/40">
              /
            </span>

            <span className="hidden truncate text-sm font-medium sm:block">
              {currentTopic?.title ?? topic}
            </span>
          </div>

          <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Learning
          </div>
        </div>
      </header>

      <div className="mx-auto flex max-w-[1440px]">
        {/* Sidebar */}
        <aside className="hidden w-60 shrink-0 border-r border-border/60 lg:block">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-6">
            <LearningSidebar
              technology={technologyTitle}
            />
          </div>
        </aside>

        {/* Main */}
        <main className="min-w-0 flex-1">
          {/* Mobile navigation */}
          <div className="border-b border-border/60 lg:hidden">
            <div className="flex items-center justify-between gap-3 px-4 py-3">
              <Link
                href={`/learn/${technology}`}
                className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to {technologyTitle}
              </Link>

              <span className="text-xs text-muted-foreground">
                {currentIndex + 1}/{topics.length}
              </span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-[1180px]">
            <div className="flex">
              {/* Article */}
              <article className="min-w-0 flex-1">
                <TopicHeader
                  technology={technology}
                  technologyTitle={technologyTitle}
                  topicTitle={
                    currentTopic?.title ?? topic
                  }
                  level={currentTopic?.level}
                  duration={currentTopic?.duration}
                  currentIndex={currentIndex}
                  totalTopics={topics.length}
                  progress={progress}
                />

                {/* Content */}
                <NotesContent
                  content={content}
                  technology={technology}
                  topic={topic}
                />

                {/* Bottom section */}
                <div className="mx-auto max-w-4xl px-5 pb-12 sm:px-8 lg:px-10">
                  <TopicCompletion
                    technologyTitle={technologyTitle}
                  />

                  {/* Previous / Next */}
                  <div className="border-t border-border/60 pt-8">
                    <NoteNavigation
                      technology={technology}
                      previous={previous}
                      next={next}
                    />
                  </div>

                  {/* Back to path */}
                  <div className="mt-8 flex justify-center">
                    <Link
                      href={`/learn/${technology}`}
                      className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-emerald-500"
                    >
                      <List className="h-4 w-4" />
                      View complete {technologyTitle} path
                    </Link>
                  </div>

                  <RecentlyViewedTracker
                    technology={technology}
                    topic={topic}
                  />
                </div>
              </article>

              {/* Right navigation */}
              <aside className="hidden w-48 shrink-0 xl:block">
                <div className="sticky top-20 px-5 py-10">
                  <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    On this path
                  </p>

                  <div className="space-y-1">
                    {topics
                      .slice(
                        Math.max(0, currentIndex - 2),
                        Math.min(
                          topics.length,
                          currentIndex + 4
                        )
                      )
                      .map((item) => {
                        const itemIndex = topics.findIndex(
                          (topicItem) =>
                            topicItem.slug === item.slug
                        );

                        const isCurrent =
                          item.slug === topic;

                        return (
                          <Link
                            key={item.slug}
                            href={`/learn/${technology}/${item.slug}`}
                            className={`block rounded-lg px-3 py-2 text-xs leading-5 transition ${
                              isCurrent
                                ? "bg-emerald-500/10 font-medium text-emerald-500"
                                : "text-muted-foreground hover:bg-muted hover:text-foreground"
                            }`}
                          >
                            <span className="mr-2 opacity-50">
                              {String(
                                itemIndex + 1
                              ).padStart(2, "0")}
                            </span>

                            {item.title}
                          </Link>
                        );
                      })}
                  </div>

                  {next && (
                    <div className="mt-6 border-t border-border/60 pt-5">
                      <Link
                        href={`/learn/${technology}/${next}`}
                        className="group flex items-center justify-between gap-3 text-xs"
                      >
                        <span className="text-muted-foreground">
                          Next topic
                        </span>

                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </div>
                  )}
                </div>
              </aside>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}