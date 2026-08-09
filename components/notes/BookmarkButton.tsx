"use client";

import { Bookmark } from "lucide-react";
import { useEffect, useState } from "react";

interface BookmarkButtonProps {
  technology: string;
  topic: string;
}

export default function BookmarkButton({
  technology,
  topic,
}: BookmarkButtonProps) {
  const [bookmarked, setBookmarked] = useState(false);

  const storageKey = `devatlas-bookmark-${technology}-${topic}`;

  useEffect(() => {
    const saved = localStorage.getItem(storageKey);
    setBookmarked(saved === "true");
  }, [storageKey]);

  function toggleBookmark() {
    const newValue = !bookmarked;

    setBookmarked(newValue);

    if (newValue) {
      localStorage.setItem(storageKey, "true");
    } else {
      localStorage.removeItem(storageKey);
    }
  }

  return (
    <button
      type="button"
      onClick={toggleBookmark}
      className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition ${
        bookmarked
          ? "border-emerald-500/50 bg-emerald-500/10 text-emerald-500"
          : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
      aria-label={
        bookmarked
          ? "Remove bookmark"
          : "Bookmark this topic"
      }
    >
      <Bookmark
        className="h-4 w-4"
        fill={bookmarked ? "currentColor" : "none"}
      />

      {bookmarked ? "Bookmarked" : "Bookmark"}
    </button>
  );
}