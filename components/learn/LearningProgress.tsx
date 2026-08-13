"use client";

import { CheckCircle2 } from "lucide-react";
import { useEffect, useState } from "react";
import { technologyTopics } from "@/data/topics";

interface LearningProgressProps {
  technology: string;
}

export default function LearningProgress({
  technology,
}: LearningProgressProps) {
  const [completed, setCompleted] = useState(0);

  const slug = technology.toLowerCase();
  const topics = technologyTopics[slug] ?? [];

  useEffect(() => {
    function calculateProgress() {
      const count = topics.filter((topic) => {
        return (
          localStorage.getItem(
            `devatlas-completed-${slug}-${topic.slug}`
          ) === "true"
        );
      }).length;

      setCompleted(count);
    }

    calculateProgress();

    window.addEventListener(
      "storage",
      calculateProgress
    );

    window.addEventListener(
      "devatlas-progress-updated",
      calculateProgress
    );

    return () => {
      window.removeEventListener(
        "storage",
        calculateProgress
      );

      window.removeEventListener(
        "devatlas-progress-updated",
        calculateProgress
      );
    };
  }, [slug, topics]);

  const total = topics.length;
  const percentage =
    total > 0
      ? Math.round((completed / total) * 100)
      : 0;

  return (
    <div className="border-b border-border bg-background/80 px-4 py-3 backdrop-blur-md sm:px-6">
      <div className="mx-auto flex max-w-4xl items-center gap-4">
        <div className="flex min-w-0 flex-1 items-center gap-3">
          <CheckCircle2
            className={`h-4 w-4 shrink-0 ${
              percentage === 100
                ? "text-emerald-500"
                : "text-muted-foreground"
            }`}
          />

          <div className="min-w-0 flex-1">
            <div className="mb-1 flex items-center justify-between gap-3">
              <span className="truncate text-xs font-medium text-muted-foreground">
                Learning progress
              </span>

              <span className="shrink-0 text-xs font-semibold text-foreground">
                {completed}/{total}
              </span>
            </div>

            <div className="h-1.5 overflow-hidden rounded-full bg-muted">
              <div
                className="h-full rounded-full bg-emerald-500 transition-[width] duration-500"
                style={{
                  width: `${percentage}%`,
                }}
              />
            </div>
          </div>
        </div>

        <span className="hidden shrink-0 text-xs font-semibold text-emerald-500 sm:block">
          {percentage}%
        </span>
      </div>
    </div>
  );
}