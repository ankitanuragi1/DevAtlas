import type { Metadata } from "next";
import { notFound } from "next/navigation";

import LearningSidebar from "@/components/learn/LearningSidebar";
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

export async function generateMetadata({
  params,
}: TopicPageProps): Promise<Metadata> {
  const { technology, topic } = await params;

  const technologyTitle =
    technology.charAt(0).toUpperCase() + technology.slice(1);

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
      `Learn ${topicTitle} in ${technologyTitle} with structured notes, examples, and concepts.`,
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

  const technologyTitle =
    technology.charAt(0).toUpperCase() + technology.slice(1);

  const topics = technologyTopics[technology] ?? [];

  const currentIndex = topics.findIndex(
    (item) => item.slug === topic
  );

  const previous =
    currentIndex > 0
      ? topics[currentIndex - 1].slug
      : null;

  const next =
    currentIndex >= 0 &&
    currentIndex < topics.length - 1
      ? topics[currentIndex + 1].slug
      : null;

  return (
    <div className="min-h-screen bg-background">
      {/* Reading progress */}
      <ReadingProgress />

      {/* Documentation header */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/85 backdrop-blur-xl">
        <div className="mx-auto flex h-14 max-w-[1600px] items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-0 items-center gap-3">
            <span className="text-sm font-bold tracking-tight">
              DevAtlas
            </span>

            <span className="text-muted-foreground/40">
              /
            </span>

            <span className="truncate text-sm font-medium text-muted-foreground">
              {technologyTitle}
            </span>
          </div>

          <div className="hidden items-center gap-2 text-xs text-muted-foreground sm:flex">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
            Learning
          </div>
        </div>
      </header>

      {/* Documentation layout */}
      <div className="mx-auto flex max-w-[1600px]">
        {/* Left documentation navigation */}
        <aside className="hidden w-64 shrink-0 border-r border-border/60 lg:block">
          <div className="sticky top-14 h-[calc(100vh-3.5rem)] overflow-y-auto py-8">
            <LearningSidebar
              technology={technologyTitle}
            />
          </div>
        </aside>

        {/* Main documentation area */}
        <main className="min-w-0 flex-1">
          <div className="mx-auto flex max-w-5xl">
            <div className="min-w-0 flex-1">
              <NotesContent
                content={content}
                technology={technology}
                topic={topic}
              />

              {/* Bottom navigation */}
              <div className="mx-auto max-w-4xl px-6 pb-12 lg:px-10">
                <div className="border-t border-border/60 pt-8">
                  <NoteNavigation
                    technology={technology}
                    previous={previous}
                    next={next}
                  />
                </div>

                <RecentlyViewedTracker
                  technology={technology}
                  topic={topic}
                />
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}