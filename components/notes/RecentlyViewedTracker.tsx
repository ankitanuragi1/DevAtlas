"use client";

import { useEffect } from "react";

interface RecentlyViewedTrackerProps {
  technology: string;
  topic: string;
}

export default function RecentlyViewedTracker({
  technology,
  topic,
}: RecentlyViewedTrackerProps) {
  useEffect(() => {
    const key = "devatlas-recently-viewed";

    const saved = localStorage.getItem(key);

    let items: {
      technology: string;
      topic: string;
    }[] = [];

    try {
      items = saved ? JSON.parse(saved) : [];
    } catch {
      items = [];
    }

    const current = { technology, topic };

    const filtered = items.filter(
      (item) =>
        !(
          item.technology === technology &&
          item.topic === topic
        )
    );

    const updated = [current, ...filtered].slice(0, 10);

    localStorage.setItem(
      key,
      JSON.stringify(updated)
    );
  }, [technology, topic]);

  return null;
}