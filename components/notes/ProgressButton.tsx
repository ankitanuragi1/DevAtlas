"use client";

import { useEffect, useState } from "react";
import { Check } from "lucide-react";

interface ProgressButtonProps {
  technology: string;
  topic: string;
}

export default function ProgressButton({
  technology,
  topic,
}: ProgressButtonProps) {
  const key = `devatlas-progress-${technology}-${topic}`;

  const [completed, setCompleted] = useState(false);

  useEffect(() => {
    setCompleted(localStorage.getItem(key) === "true");
  }, [key]);

  function toggleComplete() {
    const next = !completed;

    setCompleted(next);

    if (next) {
      localStorage.setItem(key, "true");
    } else {
      localStorage.removeItem(key);
    }
  }

  return (
    <button
      onClick={toggleComplete}
      className={`mt-10 flex items-center gap-2 rounded-lg border px-4 py-2.5 text-sm font-medium transition ${
        completed
          ? "border-emerald-500/40 bg-emerald-500/10 text-emerald-500"
          : "border-border hover:bg-muted"
      }`}
    >
      <Check className="h-4 w-4" />

      {completed
        ? "Completed"
        : "Mark as complete"}
    </button>
  );
}