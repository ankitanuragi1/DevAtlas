interface CalloutProps {
  type?: "tip" | "note" | "warning" | "important";
  title?: string;
  children: React.ReactNode;
}

const config = {
  tip: {
    label: "TIP",
    icon: "💡",
    className:
      "border-emerald-500/30 bg-emerald-500/5",
  },

  note: {
    label: "NOTE",
    icon: "📝",
    className:
      "border-blue-500/30 bg-blue-500/5",
  },

  warning: {
    label: "WARNING",
    icon: "⚠️",
    className:
      "border-amber-500/30 bg-amber-500/5",
  },

  important: {
    label: "IMPORTANT",
    icon: "❗",
    className:
      "border-red-500/30 bg-red-500/5",
  },
};

export default function Callout({
  type = "note",
  title,
  children,
}: CalloutProps) {
  const current = config[type];

  return (
    <div
      className={`mt-6 rounded-xl border p-5 ${current.className}`}
    >
      <div className="flex items-center gap-2 font-semibold">
        <span>{current.icon}</span>

        <span>
          {title ?? current.label}
        </span>
      </div>

      <div className="mt-3 text-sm leading-7 text-muted-foreground">
        {children}
      </div>
    </div>
  );
}