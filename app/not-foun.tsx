import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="text-center">
        <p className="text-sm font-medium text-emerald-500">
          404
        </p>

        <h1 className="mt-2 text-4xl font-bold">
          Page Not Found
        </h1>

        <p className="mt-4 text-muted-foreground">
          The page you're looking for doesn't exist.
        </p>

        <Link
          href="/learn"
          className="mt-6 inline-block rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-400"
        >
          Back to Learning
        </Link>
      </div>
    </main>
  );
}