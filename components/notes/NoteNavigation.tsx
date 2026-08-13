import Link from "next/link";

interface NoteNavigationProps {
  technology: string;
  previous: string | null;
  next: string | null;
}

export default function NoteNavigation({
  technology,
  previous,
  next,
}: NoteNavigationProps) {
  return (
    <div className="mt-16 grid grid-cols-2 gap-4 border-t border-border pt-6">
      {previous ? (
        <Link
          href={`/learn/${technology}/${previous}`}
          className="
            group rounded-xl border border-border
            px-5 py-4
            transition-colors
            hover:bg-muted/50
          "
        >
          <span className="block text-xs text-muted-foreground">
            Previous
          </span>

          <span className="mt-1 block text-sm font-medium text-foreground">
            ← Previous topic
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/learn/${technology}/${next}`}
          className="
            group rounded-xl border border-border
            px-5 py-4 text-right
            transition-colors
            hover:border-emerald-500/40
            hover:bg-emerald-500/5
          "
        >
          <span className="block text-xs text-muted-foreground">
            Next
          </span>

          <span className="mt-1 block text-sm font-medium text-foreground transition-colors group-hover:text-emerald-500">
            Next topic →
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}