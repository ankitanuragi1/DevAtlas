export default function Loading() {
  return (
    <main className="flex min-h-[60vh] items-center justify-center">
      <div className="text-center">
        <div className="mx-auto h-8 w-8 animate-spin rounded-full border-2 border-muted border-t-emerald-500" />

        <p className="mt-4 text-sm text-muted-foreground">
          Loading DevAtlas...
        </p>
      </div>
    </main>
  );
}