import Link from "next/link";
import Image from "next/image";

interface LogoProps {
  className?: string;
  footer?: boolean;
}

export const Logo = ({ className, footer = false }: LogoProps) => {
  return (
    <Link href="/" className={className}>
      <Image
        src={footer ? "/footer/logo.svg" : "/header/logo.svg"}
        alt="Hotely logo"
        width={90}
        height={46}
        className="mb-2"
      />
    </Link>
  );
};
