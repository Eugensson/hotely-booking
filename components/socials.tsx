import Link from "next/link";

import { socialsData } from "@/lib/data";

interface SocialsProps {
  containerStyles?: string;
  linkStyles?: string;
}

export const Socials = ({ containerStyles, linkStyles }: SocialsProps) => {
  return (
    <ul className={containerStyles}>
      {socialsData.map(({ label, href, icon: Icon }) => (
        <li key={label}>
          <Link
            href={href}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`${label} link`}
            className={linkStyles}
          >
            <Icon size={24} />
          </Link>
        </li>
      ))}
    </ul>
  );
};
