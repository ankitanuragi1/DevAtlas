"use client";

export default function Error({
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6">
      <div className="max-w-md text-center">
        <p className="text-sm font-medium text-red-500">
          SOMETHING WENT WRONG
        </p>

        <h1 className="mt-3 text-3xl font-bold">
          Unable to load this note
        </h1>

        <p className="mt-4 text-muted-foreground">
          Please try again.
        </p>

        <button
          onClick={() => reset()}
          className="mt-8 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-400"
        >
          Try Again
        </button>
      </div>
    </main>
  );
}