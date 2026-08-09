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
    <div className="mt-14 flex items-center justify-between border-t border-border pt-6">
      {previous ? (
        <Link
          href={`/learn/${technology}/${previous}`}
          className="rounded-lg border border-border px-5 py-2.5 text-sm font-medium transition hover:bg-muted"
        >
          ← Previous
        </Link>
      ) : (
        <div />
      )}

      {next ? (
        <Link
          href={`/learn/${technology}/${next}`}
          className="rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-400"
        >
          Next →
        </Link>
      ) : (
        <div />
      )}
    </div>
  );
}