"use client";

import { useEffect, useState } from "react";
import { Bookmark } from "lucide-react";

interface BookmarkButtonProps {
  technology: string;
  topic: string;
}

export default function BookmarkButton({
  technology,
  topic,
}: BookmarkButtonProps) {
  const key = `devatlas-bookmark-${technology}-${topic}`;

  const [bookmarked, setBookmarked] = useState(false);

  useEffect(() => {
    setBookmarked(localStorage.getItem(key) === "true");
  }, [key]);

  function toggleBookmark() {
    const next = !bookmarked;

    setBookmarked(next);

    if (next) {
      localStorage.setItem(key, "true");
    } else {
      localStorage.removeItem(key);
    }
  }

  return (
    <button
      onClick={toggleBookmark}
      className={`mt-4 flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition ${
        bookmarked
          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-500"
          : "border-border hover:bg-muted"
      }`}
    >
      <Bookmark
        className="h-4 w-4"
        fill={bookmarked ? "currentColor" : "none"}
      />

      {bookmarked ? "Bookmarked" : "Bookmark"}
    </button>
  );
}