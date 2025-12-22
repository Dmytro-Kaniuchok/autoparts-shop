import Image from "next/image";
import Link from "next/link";

export default function Logo() {
  return (
    <Link href="/">
      <div>
        <Image src="/logo.png" alt="AGROAVTO" width={180} height={100} />
      </div>
    </Link>
  );
}
