interface SearchFooterProps {
  onClose?: () => void;
}

export default function SearchFooter({
  onClose,
}: SearchFooterProps) {
  return (
    <div
      className="
        hidden
        items-center
        justify-between
        border-t
        border-border/70
        px-4
        py-2.5
        sm:flex
      "
    >
      {/* Left */}
      <span className="text-[10px] text-muted-foreground">
        Search across all topics
      </span>

      {/* Shortcuts */}
      <div className="flex items-center gap-3">

        {/* Arrow Keys */}
        <span className="text-[10px] text-muted-foreground">
          <kbd className="rounded border border-border px-1">
            ↑
          </kbd>{" "}
          <kbd className="rounded border border-border px-1">
            ↓
          </kbd>
        </span>

        {/* Enter */}
        <span className="text-[10px] text-muted-foreground">
          <kbd className="rounded border border-border px-1">
            Enter
          </kbd>{" "}
          Open
        </span>

        {/* Escape */}
        <span className="text-[10px] text-muted-foreground">
          <kbd className="rounded border border-border px-1">
            Esc
          </kbd>{" "}
          Close
        </span>

      </div>
    </div>
  );
}