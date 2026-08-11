import Link from "next/link";
import Image from "next/image";

export default function Logo() {
  return (
    <>
    <Link href="/" className="text-2xl font-bold tracking-tight">
          {/* <span className="text-white">Dev</span>
          <span className="text-emerald-500">Atlas</span> */}

          {/* Light mode */}
      <Image
        src="/images/logo/devatlas-dark.png"
        alt="DevAtlas"
        width={140}
        height={40}
        className="block dark:hidden"
      />

      {/* Dark mode */}
      <Image
        src="/images/logo/devatlas-light.png"
        alt="DevAtlas"
        width={140}
        height={40}
        className="hidden dark:block"
      />
    </Link>
    </>
  );
}