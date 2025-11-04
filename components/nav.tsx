import Link from "next/link";

interface NavProps {
  containerStyles?: string;
  listStyles?: string;
  linkStyles?: string;
}

const navLinks = [
  { href: "/", label: "home" },
  { href: "/", label: "find hotel" },
  { href: "/", label: "about us" },
  { href: "/", label: "contact us" },
];

export const Nav = ({ containerStyles, listStyles, linkStyles }: NavProps) => {
  return (
    <nav className={containerStyles}>
      <ul className={listStyles}>
        {navLinks.map(({ href, label }) => (
          <li key={label}>
            <Link href={href} className={linkStyles}>
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
