"use client";

export default function Error({
  reset,
}: {
  reset: () => void;
}) {
  return (
    <main className="flex min-h-[60vh] items-center justify-center px-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold">
          Something went wrong
        </h1>

        <p className="mt-3 text-muted-foreground">
          We couldn't load this page.
        </p>

        <button
          onClick={() => reset()}
          className="mt-6 rounded-lg bg-emerald-500 px-5 py-2.5 text-sm font-medium text-black transition hover:bg-emerald-400"
        >
          Try again
        </button>
      </div>
    </main>
  );
}