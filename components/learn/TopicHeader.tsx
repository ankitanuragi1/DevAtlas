import Link from "next/link";
import { BookOpen, Clock3, Home } from "lucide-react";

interface TopicHeaderProps {
  technology: string;
  technologyTitle: string;
  topicTitle: string;
  level?: string;
  duration?: string;
  currentIndex: number;
  totalTopics: number;
  progress: number;
}

export default function TopicHeader({
  technology,
  technologyTitle,
  topicTitle,
  level,
  duration,
  currentIndex,
  totalTopics,
  progress,
}: TopicHeaderProps) {
  return (
    <div className="mx-auto max-w-4xl px-5 pb-8 pt-8 sm:px-8 lg:px-10 lg:pt-12">
      <div className="mb-6 flex flex-wrap items-center gap-2 text-xs text-muted-foreground">
        <Link
          href="/learn"
          className="inline-flex items-center gap-1 hover:text-foreground"
        >
          <Home className="h-3.5 w-3.5" />
          Learn
        </Link>

        <span>/</span>

        <Link
          href={`/learn/${technology}`}
          className="hover:text-foreground"
        >
          {technologyTitle}
        </Link>

        <span>/</span>

        <span className="text-foreground">{topicTitle}</span>
      </div>

      {level && (
        <div className="mb-4 inline-flex rounded-full border border-emerald-500/20 bg-emerald-500/5 px-3 py-1 text-xs font-medium text-emerald-500">
          {level}
        </div>
      )}

      <h1 className="text-3xl font-black tracking-tight sm:text-4xl lg:text-5xl">
        {topicTitle}
      </h1>

      <div className="mt-6 flex flex-wrap gap-5 text-xs text-muted-foreground">
        {duration && (
          <span className="inline-flex items-center gap-1.5">
            <Clock3 className="h-4 w-4" />
            {duration}
          </span>
        )}

        <span className="inline-flex items-center gap-1.5">
          <BookOpen className="h-4 w-4" />
          Topic {currentIndex + 1} of {totalTopics}
        </span>
      </div>

      <div className="mt-8 rounded-xl border border-border bg-card/50 p-4">
        <div className="mb-2 flex justify-between text-xs">
          <span className="font-medium">Learning progress</span>
          <span className="text-muted-foreground">{progress}%</span>
        </div>

        <div className="h-1.5 overflow-hidden rounded-full bg-muted">
          <div
            className="h-full rounded-full bg-emerald-500 transition-all"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </div>
  );
}