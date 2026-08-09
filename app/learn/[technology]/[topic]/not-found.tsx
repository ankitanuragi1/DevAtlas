import Link from "next/link";

export default function NotFound() {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-6xl font-bold text-emerald-500">
          404
        </p>

        <h1 className="mt-6 text-3xl font-bold">
          Topic Not Found
        </h1>

        <p className="mt-4 text-muted-foreground">
          The topic you are looking for does not exist yet.
        </p>

        <Link
          href="/learn"
          className="mt-8 inline-flex rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-400"
        >
          Back to Learning
        </Link>
      </div>
    </main>
  );
}