"use client";

import { Check } from "lucide-react";
import { useEffect, useState } from "react";

interface CompleteTopicButtonProps {
  technology: string;
  topic: string;
}

export default function CompleteTopicButton({
  technology,
  topic,
}: CompleteTopicButtonProps) {
  const [completed, setCompleted] = useState(false);

  const key = `devatlas-completed-${technology}-${topic}`;

  useEffect(() => {
    setCompleted(localStorage.getItem(key) === "true");
  }, [key]);

  function toggleCompleted() {
    const next = !completed;

    setCompleted(next);

    if (next) {
      localStorage.setItem(key, "true");
    } else {
      localStorage.removeItem(key);
    }
    window.dispatchEvent(new Event("progress-updated"));
  }

  return (
    <button
      type="button"
      onClick={toggleCompleted}
      className={`inline-flex items-center gap-2 rounded-lg border px-4 py-2 text-sm font-medium transition ${
        completed
          ? "border-emerald-500 bg-emerald-500 text-black"
          : "border-border text-muted-foreground hover:bg-muted hover:text-foreground"
      }`}
    >
      <Check className="h-4 w-4" />

      {completed ? "Completed" : "Mark as Complete"}
    </button>
  );
}