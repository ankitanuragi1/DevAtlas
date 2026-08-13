import {
  AlertCircle,
  CheckCircle2,
  Info,
  Lightbulb,
  TriangleAlert,
} from "lucide-react";

interface CalloutProps {
  type?: "info" | "tip" | "warning" | "danger" | "success";
  title?: string;
  children: React.ReactNode;
}

const styles = {
  info: {
    icon: Info,
    label: "Info",
    className:
      "border-blue-500/20 bg-blue-500/5 text-blue-500",
  },
  tip: {
    icon: Lightbulb,
    label: "Tip",
    className:
      "border-emerald-500/20 bg-emerald-500/5 text-emerald-500",
  },
  warning: {
    icon: TriangleAlert,
    label: "Warning",
    className:
      "border-yellow-500/20 bg-yellow-500/5 text-yellow-500",
  },
  danger: {
    icon: AlertCircle,
    label: "Important",
    className:
      "border-red-500/20 bg-red-500/5 text-red-500",
  },
  success: {
    icon: CheckCircle2,
    label: "Success",
    className:
      "border-emerald-500/20 bg-emerald-500/5 text-emerald-500",
  },
};

export default function Callout({
  type = "info",
  title,
  children,
}: CalloutProps) {
  const style = styles[type] ?? styles.info;
  const Icon = style.icon;

  return (
    <div
      className={`my-8 rounded-xl border p-5 ${style.className}`}
    >
      <div className="flex gap-4">
        <div className="mt-0.5 shrink-0">
          <Icon className="h-5 w-5" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="mb-1 text-sm font-semibold">
            {title ?? style.label}
          </div>

          <div className="text-sm leading-7 text-foreground/80">
            {children}
          </div>
        </div>
      </div>
    </div>
  );
}