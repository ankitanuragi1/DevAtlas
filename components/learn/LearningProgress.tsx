"use client";

import { useEffect, useState } from "react";
import { technologyTopics } from "@/data/topics";

interface LearningProgressProps {
    technology: string;
}

export default function LearningProgress({
    technology,
}: LearningProgressProps) {
    const [completed, setCompleted] = useState(0);

    const topics = technologyTopics[technology] ?? [];

    useEffect(() => {
        function calculateProgress() {
            const count = topics.filter((topic) => {
                return (
                    localStorage.getItem(
                        `devatlas-completed-${technology}-${topic.slug}`
                    ) === "true"
                );
            }).length;

            setCompleted(count);
        }

        calculateProgress();

        window.addEventListener(
            "progress-updated",
            calculateProgress
        );

        return () => {
            window.removeEventListener(
                "progress-updated",
                calculateProgress
            );
        };
    }, [technology, topics]);

    const total = topics.length;
    const percentage =
        total > 0 ? Math.round((completed / total) * 100) : 0;

    return (
        <section className="mx-auto max-w-7xl px-4 pb-8 sm:px-6 lg:px-8">
            <div className="rounded-xl border border-border bg-card p-5">
                <div className="flex items-center justify-between">
                    <div>
                        <h2 className="font-semibold">
                            {technology} Progress
                        </h2>

                        <p className="mt-1 text-sm text-muted-foreground">
                            {completed} of {total} topics completed
                        </p>
                    </div>

                    <span className="text-lg font-bold text-emerald-500">
                        {percentage}%
                    </span>
                </div>

                <div className="mt-4 h-2 overflow-hidden rounded-full bg-muted">
                    <div
                        className="h-full rounded-full bg-emerald-500 transition-all duration-500"
                        style={{ width: `${percentage}%` }}
                    />
                </div>
            </div>
        </section>
    );
}