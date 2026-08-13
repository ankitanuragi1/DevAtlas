"use client";

import SearchTrigger from "./SearchTrigger";
import SearchResults from "./SearchResults";
import SearchInput from "./SearchInput";
import SearchFooter from "./SearchFooter";
import { useEffect, useMemo, useRef, useState } from "react";

import { createPortal } from "react-dom";
import { technologyTopics } from "@/data/topics";

interface SearchResult {
  technology: string;
  topic: string;
  title: string;
}


export default function SearchDialog() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [mounted, setMounted] = useState(false);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const resultRefs = useRef<
    (HTMLAnchorElement | null)[]
  >([]);

  /*
   * Search data
   */
  const results = useMemo<SearchResult[]>(() => {
    return Object.entries(technologyTopics).flatMap(
      ([technology, topics]) =>
        topics.map((topic) => ({
          technology,
          topic: topic.slug,
          title: topic.title,
        }))
    );
  }, []);

  /*
   * Filter search results
   */
  const filteredResults = useMemo(() => {
    const search = query.trim().toLowerCase();

    if (!search) {
      return results.slice(0, 8);
    }

    return results
      .filter((result) => {
        const text = [
          result.technology,
          result.topic,
          result.title,
        ]
          .join(" ")
          .toLowerCase();

        return text.includes(search);
      })
      .slice(0, 10);
  }, [query, results]);

  /*
   * Ctrl + K / Cmd + K
   */
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

  /*
   * Focus search input
   */
  useEffect(() => {
    if (open) {
      setTimeout(() => {
        inputRef.current?.focus();
      }, 0);
    }
  }, [open]);

  /*
   * Reset selection
   */
  useEffect(() => {
    setSelectedIndex(0);
  }, [query]);

  /*
   * Automatically scroll selected result
   */
  useEffect(() => {
    resultRefs.current[selectedIndex]?.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
    });
  }, [selectedIndex]);

  /*
   * Keyboard navigation
   */
  function handleInputKeyDown(
    event: React.KeyboardEvent<HTMLInputElement>
  ) {
    if (event.key === "ArrowDown") {
      event.preventDefault();

      setSelectedIndex((current) =>
        Math.min(
          current + 1,
          filteredResults.length - 1
        )
      );
    }

    if (event.key === "ArrowUp") {
      event.preventDefault();

      setSelectedIndex((current) =>
        Math.max(current - 1, 0)
      );
    }

    if (event.key === "Enter") {
      const result =
        filteredResults[selectedIndex];

      if (result) {
        window.location.href =
          `/learn/${result.technology}/${result.topic}`;
      }
    }
  }

  function closeSearch() {
    setOpen(false);
    setQuery("");
    setSelectedIndex(0);
  }

  return (
    <>
      <SearchTrigger onOpen={() => setOpen(true)} />
      {/* ================================================= */}
      {/* SEARCH DIALOG */}
      {/* ================================================= */}

      {open &&
        mounted &&
        createPortal(
          <div className="fixed inset-0 z-[9999]">

            {/* Background */}
            <button
              type="button"
              aria-label="Close search"
              onClick={closeSearch}
              className="
              absolute
              inset-0
              cursor-default
              bg-black/60
              backdrop-blur-md
            "
            />

            {/* Dialog */}
            <div
              role="dialog"
              aria-modal="true"
              aria-label="Search documentation"
              className="
              relative
              mx-auto
              mt-[9vh]
              w-[calc(100%-1.5rem)]
              max-w-2xl
              overflow-hidden
              rounded-2xl
              border
              border-border/80
              bg-background
              shadow-2xl
              shadow-black/30
              sm:w-[calc(100%-2rem)]
            "
            >

              <SearchInput
                query={query}
                setQuery={setQuery}
                inputRef={inputRef}
                onKeyDown={handleInputKeyDown}
                onClose={closeSearch}
              />

              {/* ================================================= */}
              {/* RESULT HEADER */}
              {/* ================================================= */}

              <div
                className="
                flex
                items-center
                justify-between
                px-4
                py-3
              "
              >
                <div>
                  <p className="text-xs font-semibold text-foreground">
                    {query
                      ? "Search results"
                      : "Explore topics"}
                  </p>

                  <p className="mt-0.5 text-[11px] text-muted-foreground">
                    {query
                      ? `${filteredResults.length} results found`
                      : "Browse your learning topics"}
                  </p>
                </div>

                <span
                  className="
                  hidden
                  text-[10px]
                  text-muted-foreground
                  sm:block
                "
                >
                  ↑ ↓ Navigate · Enter Open
                </span>
              </div>

              {/* ================================================= */}
              {/* RESULTS */}
              {/* ================================================= */}

              <SearchResults
                results={filteredResults}
                query={query}
                selectedIndex={selectedIndex}
                resultRefs={resultRefs}
                onResultClick={closeSearch}
              />

              {/* ================================================= */}
              {/* FOOTER */}
              {/* ================================================= */}
              <SearchFooter onClose={closeSearch} />
            </div>
          </div>,
          document.body
        )}
    </>
  );
}