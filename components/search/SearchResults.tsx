"use client";

import { Search } from "lucide-react";
import SearchResultItem from "./SearchResultItem";

interface SearchResult {
  technology: string;
  topic: string;
  title: string;
}

interface SearchResultsProps {
  results: SearchResult[];
  query: string;
  selectedIndex: number;
  resultRefs: React.MutableRefObject<
    (HTMLAnchorElement | null)[]
  >;
  onResultClick: () => void;
}

export default function SearchResults({
  results,
  query,
  selectedIndex,
  resultRefs,
  onResultClick,
}: SearchResultsProps) {
  return (
    <div
      className="
        max-h-[55vh]
        overflow-y-auto
        overscroll-contain
        px-2
        pb-2
      "
    >
      {results.length > 0 ? (
        results.map((result, index) => (
          <SearchResultItem
            key={`${result.technology}-${result.topic}`}
            technology={result.technology}
            topic={result.topic}
            title={result.title}
            query={query}
            index={index}
            selectedIndex={selectedIndex}
            resultRef={(element) => {
              resultRefs.current[index] = element;
            }}
            onClick={onResultClick}
          />
        ))
      ) : (
        /* Empty State */
        <div
          className="
            flex
            flex-col
            items-center
            justify-center
            px-4
            py-14
            text-center
          "
        >
          <div
            className="
              mb-4
              flex
              h-12
              w-12
              items-center
              justify-center
              rounded-xl
              bg-muted
            "
          >
            <Search
              className="
                h-5
                w-5
                text-muted-foreground
              "
            />
          </div>

          <p className="text-sm font-medium">
            No results found
          </p>

          <p
            className="
              mt-1
              max-w-xs
              text-xs
              leading-5
              text-muted-foreground
            "
          >
            Try searching for a different
            technology or topic.
          </p>
        </div>
      )}
    </div>
  );
}