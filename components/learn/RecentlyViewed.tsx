"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Clock3 } from "lucide-react";

interface RecentItem {
  technology: string;
  topic: string;
}

function formatTitle(slug: string) {
  return slug
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

export default function RecentlyViewed() {
  const [items, setItems] = useState<RecentItem[]>([]);

  useEffect(() => {
    const saved = localStorage.getItem(
      "devatlas-recently-viewed"
    );

    if (!saved) return;

    try {
      setItems(JSON.parse(saved));
    } catch {
      setItems([]);
    }
  }, []);

  if (items.length === 0) {
    return null;
  }

  return (
    <section className="mx-auto max-w-7xl px-4 pb-4 sm:px-6 lg:px-8">
      <div className="mb-6 flex items-center gap-2">
        <Clock3 className="h-5 w-5 text-emerald-500" />

        <h2 className="text-xl font-bold">
          Recently Viewed
        </h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {items.slice(0, 4).map((item) => (
          <Link
            key={`${item.technology}-${item.topic}`}
            href={`/learn/${item.technology}/${item.topic}`}
            className="rounded-lg border border-border bg-card p-4 transition hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-muted"
          >
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-500">
              {formatTitle(item.technology)}
            </p>

            <h3 className="mt-2 font-semibold">
              {formatTitle(item.topic)}
            </h3>

            <p className="mt-2 text-xs text-muted-foreground">
              Continue learning →
            </p>
          </Link>
        ))}
      </div>
    </section>
  );
}