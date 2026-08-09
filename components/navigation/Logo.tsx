import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/" className="text-2xl font-bold tracking-tight">
      <span className="text-white">Dev</span>
      <span className="text-emerald-500">Atlas</span>
    </Link>
  );
}