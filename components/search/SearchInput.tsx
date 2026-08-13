"use client";

import { Search, X } from "lucide-react";

interface SearchInputProps {
  query: string;
  setQuery: (value: string) => void;
  inputRef: React.RefObject<HTMLInputElement | null>;
  onKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void;
  onClose: () => void;
}

export default function SearchInput({
  query,
  setQuery,
  inputRef,
  onKeyDown,
  onClose,
}: SearchInputProps) {
  return (
    <div className="flex h-16 items-center gap-3 border-b border-border/70 px-4">
      <Search className="h-5 w-5 shrink-0 text-muted-foreground" />

      <input
        ref={inputRef}
        autoFocus
        value={query}
        onChange={(event) => setQuery(event.target.value)}
        onKeyDown={onKeyDown}
        placeholder="Search anything..."
        className="
          min-w-0
          flex-1
          bg-transparent
          text-sm
          outline-none
          placeholder:text-muted-foreground
        "
      />

      {/* Clear Search */}
      {query && (
        <button
          type="button"
          onClick={() => setQuery("")}
          className="
            rounded-lg
            p-1.5
            text-muted-foreground
            transition
            hover:bg-muted
            hover:text-foreground
          "
          aria-label="Clear search"
        >
          <X className="h-4 w-4" />
        </button>
      )}

      {/* Close Dialog */}
      <button
        type="button"
        onClick={onClose}
        className="
          rounded-lg
          border
          border-border
          p-1.5
          text-muted-foreground
          transition
          hover:bg-muted
          hover:text-foreground
        "
        aria-label="Close search"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}