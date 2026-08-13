"use client";

export default function TestTouch() {
  return (
    <button
      type="button"
      onClick={() => alert("TOUCH WORKING")}
      className="rounded-lg bg-red-500 px-4 py-2 text-white"
    >
      TEST
    </button>
  );
}