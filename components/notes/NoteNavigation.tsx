import Link from "next/link";

interface NoteNavigationProps {
  technology: string;
  previous: string | null;
  next: string | null;
}

function formatTopic(topic: string) {
  return topic
    .split("-")
    .map(
      (word) => word.charAt(0).toUpperCase() + word.slice(1)
    )
    .join(" ");
}

export default function NoteNavigation({
  technology,
  previous,
  next,
}: NoteNavigationProps) {
  return (
    <div className="mt-14 flex items-center justify-between border-t border-border pt-6">
      {previous ? (
        <Link
          href={`/learn/${technology}/${previous}`}
          className="group rounded-lg border border-border px-5 py-3 transition hover:bg-muted"
        >
          <span className="block text-xs text-muted-foreground">
            Previous
          </span>

          <span className="mt-1 block font-medium group-hover:text-emerald-500">
            ← {formatTopic(previous)}
          </span>
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/learn/${technology}/${next}`}
          className="group rounded-lg border border-border px-5 py-3 text-right transition hover:bg-muted"
        >
          <span className="block text-xs text-muted-foreground">
            Next
          </span>

          <span className="mt-1 block font-medium group-hover:text-emerald-500">
            {formatTopic(next)} →
          </span>
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}