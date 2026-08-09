"use client";

import Link from "next/link";
import { Search, X } from "lucide-react";
import { useMemo, useState } from "react";
import { technologyTopics } from "@/data/topics";

interface SearchResult {
  technology: string;
  technologyTitle: string;
  topic: string;
  title: string;
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

export default function SearchTopics() {
  const [query, setQuery] = useState("");

  const results = useMemo<SearchResult[]>(() => {
    const search = query.trim().toLowerCase();

    if (!search) return [];

    const matches: SearchResult[] = [];

    Object.entries(technologyTopics).forEach(
      ([technology, topics]) => {
        topics.forEach((topic) => {
          const title = topic.title.toLowerCase();

          if (
            title.includes(search) ||
            technology.includes(search)
          ) {
            matches.push({
              technology,
              technologyTitle: formatTitle(technology),
              topic: topic.slug,
              title: topic.title,
            });
          }
        });
      }
    );

    return matches.slice(0, 10);
  }, [query]);

  return (
    <div className="relative w-full max-w-xl">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

        <input
          value={query}
          onChange={(event) =>
            setQuery(event.target.value)
          }
          placeholder="Search topics..."
          className="w-full rounded-lg border border-border bg-background py-3 pl-10 pr-10 text-sm outline-none transition focus:border-emerald-500"
        />

        {query && (
          <button
            type="button"
            onClick={() => setQuery("")}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
            aria-label="Clear search"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {query && (
        <div className="absolute left-0 right-0 top-full z-50 mt-2 overflow-hidden rounded-xl border border-border bg-background shadow-xl">
          {results.length > 0 ? (
            <div className="max-h-96 overflow-y-auto p-2">
              {results.map((result) => (
                <Link
                  key={`${result.technology}-${result.topic}`}
                  href={`/learn/${result.technology}/${result.topic}`}
                  onClick={() => setQuery("")}
                  className="block rounded-lg px-4 py-3 transition hover:bg-muted"
                >
                  <p className="font-medium text-foreground">
                    {result.title}
                  </p>

                  <p className="mt-1 text-xs text-muted-foreground">
                    {result.technologyTitle}
                  </p>
                </Link>
              ))}
            </div>
          ) : (
            <div className="px-4 py-8 text-center text-sm text-muted-foreground">
              No topics found.
            </div>
          )}
        </div>
      )}
    </div>
  );
}