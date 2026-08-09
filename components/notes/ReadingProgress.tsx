"use client";

import { useEffect, useState } from "react";

export default function ReadingProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    function updateProgress() {
      const scrollTop = window.scrollY;
      const documentHeight =
        document.documentElement.scrollHeight -
        window.innerHeight;

      if (documentHeight <= 0) {
        setProgress(0);
        return;
      }

      const percentage =
        (scrollTop / documentHeight) * 100;

      setProgress(Math.min(100, Math.max(0, percentage)));
    }

    updateProgress();

    window.addEventListener("scroll", updateProgress);

    return () => {
      window.removeEventListener(
        "scroll",
        updateProgress
      );
    };
  }, []);

  return (
    <div className="fixed left-0 right-0 top-0 z-[100] h-1 bg-transparent">
      <div
        className="h-full bg-emerald-500 transition-[width] duration-100"
        style={{
          width: `${progress}%`,
        }}
      />
    </div>
  );
}