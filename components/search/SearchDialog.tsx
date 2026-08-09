"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { Search, X } from "lucide-react";
import { technologyTopics } from "@/data/topics";

interface SearchResult {
  technology: string;
  topic: string;
  title: string;
}

function formatTitle(value: string) {
  return value
    .split("-")
    .map(
      (word) =>
        word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");

  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (
        (event.ctrlKey || event.metaKey) &&
        event.key.toLowerCase() === "k"
      ) {
        event.preventDefault();
        setOpen(true);
      }

      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);

    return () =>
      window.removeEventListener(
        "keydown",
        handleKeyDown
      );
  }, []);

  const results: SearchResult[] = Object.entries(
    technologyTopics
  ).flatMap(([technology, topics]) =>
    topics.map((topic) => ({
      technology,
      topic: topic.slug,
      title: topic.title,
    }))
  );

  const filteredResults = results.filter((result) => {
    const text =
      `${result.technology} ${result.title}`.toLowerCase();

    return text.includes(query.toLowerCase());
  });

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 rounded-lg border border-border px-3 py-2 text-sm text-muted-foreground transition hover:bg-muted hover:text-foreground"
      >
        <Search className="h-4 w-4" />

        <span className="hidden sm:inline">
          Search
        </span>

        <kbd className="hidden rounded border border-border px-1.5 py-0.5 text-xs sm:inline">
          Ctrl K
        </kbd>
      </button>

      {open && (
        <div className="fixed inset-0 z-[100]">
          <div
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />

          <div className="relative mx-auto mt-[12vh] w-[calc(100%-2rem)] max-w-2xl overflow-hidden rounded-xl border border-border bg-background shadow-2xl">
            <div className="flex items-center border-b border-border px-4">
              <Search className="mr-3 h-5 w-5 text-muted-foreground" />

              <input
                autoFocus
                value={query}
                onChange={(event) =>
                  setQuery(event.target.value)
                }
                placeholder="Search technologies and topics..."
                className="h-14 flex-1 bg-transparent text-sm outline-none placeholder:text-muted-foreground"
              />

              <button
                onClick={() => setOpen(false)}
                className="rounded-md p-2 hover:bg-muted"
                aria-label="Close search"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <div className="max-h-[60vh] overflow-y-auto p-2">
              {filteredResults.length > 0 ? (
                filteredResults.map((result) => (
                  <Link
                    key={`${result.technology}-${result.topic}`}
                    href={`/learn/${result.technology}/${result.topic}`}
                    onClick={() => {
                      setOpen(false);
                      setQuery("");
                    }}
                    className="block rounded-lg px-4 py-3 transition hover:bg-muted"
                  >
                    <p className="text-sm font-medium">
                      {result.title}
                    </p>

                    <p className="mt-1 text-xs text-muted-foreground">
                      {formatTitle(result.technology)}
                    </p>
                  </Link>
                ))
              ) : (
                <div className="px-4 py-10 text-center text-sm text-muted-foreground">
                  No results found.
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}