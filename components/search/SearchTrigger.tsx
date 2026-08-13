"use client";

import { Search } from "lucide-react";

interface SearchTriggerProps {
  onOpen: () => void;
}

export default function SearchTrigger({
  onOpen,
}: SearchTriggerProps) {
  return (
    <button
      type="button"
      onClick={onOpen}
      aria-label="Open search"
      className="
        group flex h-9 w-9 shrink-0 items-center justify-center
        rounded-full border border-border/70
        bg-background/60 text-muted-foreground
        transition-all duration-200
        hover:border-emerald-500/40
        hover:bg-muted/50
        hover:text-foreground

        sm:h-10 sm:w-[420px]
        sm:justify-start sm:gap-3
        sm:rounded-xl sm:px-3
      "
    >
      <Search className="h-4 w-4 shrink-0 transition-transform group-hover:scale-105" />

      <span className="hidden flex-1 text-left text-sm sm:block">
        Search anything...
      </span>

      <kbd
        className="
          hidden rounded-md border border-border
          bg-muted/60 px-1.5 py-0.5
          text-[10px] font-medium
          text-muted-foreground sm:block
        "
      >
        Ctrl K
      </kbd>
    </button>
  );
}