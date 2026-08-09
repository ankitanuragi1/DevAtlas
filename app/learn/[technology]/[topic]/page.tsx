import type { Metadata } from "next";
import LearningSidebar from "@/components/learn/LearningSidebar";
import NotesContent from "@/components/notes/NotesContent";
import NoteNavigation from "@/components/notes/NoteNavigation";
import ReadingProgress from "@/components/notes/ReadingProgress";
import RecentlyViewedTracker from "@/components/notes/RecentlyViewedTracker";
import { getNoteContent } from "@/lib/content";
import { technologyTopics } from "@/data/topics";
import { notFound } from "next/navigation";

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
    technology.charAt(0).toUpperCase() +
    technology.slice(1);

  const topicData = technologyTopics[technology]?.find(
    (item) => item.slug === topic
  );

  const topicTitle =
    topicData?.title ??
    topic
      .split("-")
      .map(
        (word) =>
          word.charAt(0).toUpperCase() +
          word.slice(1)
      )
      .join(" ");

  return {
    title: `${topicTitle} — ${technologyTitle}`,
    description:
      topicData?.description ??
      `Learn ${topicTitle} in ${technologyTitle} with structured notes, examples, and concepts.`,
  };
}

export default async function TopicPage({
  params,
}: TopicPageProps) {
  const { technology, topic } = await params;

  const content = getNoteContent(
    technology,
    topic
  );

  if (!content) {
    notFound();
  }

  const technologyTitle =
    technology.charAt(0).toUpperCase() +
    technology.slice(1);

  const topics =
    technologyTopics[technology] ?? [];

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
    <>
      <ReadingProgress />
      <header className="border-b border-border">
        <div className="mx-auto flex max-w-7xl items-center px-6 py-4">
          <span className="font-bold">
            DevAtlas
          </span>

          <span className="ml-4 text-sm text-muted-foreground">
            / {technologyTitle}
          </span>
        </div>
      </header>

      <div className="mx-auto flex max-w-7xl">
        <LearningSidebar
          technology={technologyTitle}
        />

        <main className="min-w-0 flex-1">
          <NotesContent
            content={content}
            technology={technology}
            topic={topic}
          />

          <div className="mx-auto max-w-3xl px-6 pb-10 lg:px-10">
        

            <NoteNavigation
              technology={technology}
              previous={previous}
              next={next}
            />

            <RecentlyViewedTracker
              technology={technology}
              topic={topic}
            />

          </div>
        </main>
      </div>
    </>
  );
}