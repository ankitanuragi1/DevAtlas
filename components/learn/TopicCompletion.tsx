import { CheckCircle2 } from "lucide-react";

interface TopicCompletionProps {
  technologyTitle: string;
}

export default function TopicCompletion({
  technologyTitle,
}: TopicCompletionProps) {
  return (
    <div className="mb-10 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-5 sm:p-6">
      <div className="flex gap-4">
        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-emerald-500/10">
          <CheckCircle2 className="h-5 w-5 text-emerald-500" />
        </div>

        <div>
          <h2 className="font-semibold">Finished this topic?</h2>

          <p className="mt-1 text-sm leading-6 text-muted-foreground">
            Continue to the next concept and keep progressing
            through the {technologyTitle} learning path.
          </p>
        </div>
      </div>
    </div>
  );
}