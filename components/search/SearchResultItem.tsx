"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

interface SearchResultItemProps {
  technology: string;
  topic: string;
  title: string;
  query: string;
  index: number;
  selectedIndex: number;
  resultRef: (element: HTMLAnchorElement | null) => void;
  onClick: () => void;
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

function highlightMatch(text: string, query: string) {
  if (!query.trim()) return text;

  const parts = text.split(
    new RegExp(`(${query})`, "gi")
  );

  return parts.map((part, index) =>
    part.toLowerCase() === query.toLowerCase() ? (
      <mark
        key={index}
        className="rounded bg-emerald-500/15 px-0.5 text-emerald-500"
      >
        {part}
      </mark>
    ) : (
      part
    )
  );
}

export default function SearchResultItem({
  technology,
  topic,
  title,
  query,
  index,
  selectedIndex,
  resultRef,
  onClick,
}: SearchResultItemProps) {
  const isSelected = index === selectedIndex;

  return (
    <Link
      ref={resultRef}
      href={`/learn/${technology}/${topic}`}
      onClick={onClick}
      className={`
        group
        mb-1
        flex
        items-center
        justify-between
        rounded-xl
        border
        px-3
        py-3
        transition-all
        duration-150
        ${
          isSelected
            ? "border-emerald-500/20 bg-emerald-500/10"
            : "border-transparent hover:border-border hover:bg-muted/50"
        }
      `}
    >
      {/* Left Content */}
      <div className="min-w-0">

        {/* Technology */}
        <div className="mb-1.5 flex items-center gap-2">
          <span
            className="
              rounded-md
              bg-muted
              px-1.5
              py-0.5
              text-[10px]
              font-medium
              text-muted-foreground
            "
          >
            {formatTitle(technology)}
          </span>
        </div>

        {/* Title */}
        <p
          className={`
            truncate
            text-sm
            font-medium
            ${
              isSelected
                ? "text-emerald-500"
                : "text-foreground"
            }
          `}
        >
          {highlightMatch(title, query)}
        </p>

        {/* Path */}
        <p
          className="
            mt-1
            truncate
            text-xs
            text-muted-foreground
          "
        >
          Learn
          <span className="mx-1">/</span>

          {formatTitle(technology)}

          <span className="mx-1">/</span>

          {formatTitle(topic)}
        </p>
      </div>

      {/* Arrow */}
      <ArrowRight
        className={`
          ml-4
          h-4
          w-4
          shrink-0
          transition-all
          duration-200
          ${
            isSelected
              ? "translate-x-0 text-emerald-500"
              : "-translate-x-1 text-muted-foreground opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
          }
        `}
      />
    </Link>
  );
}