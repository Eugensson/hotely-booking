import Link from "next/link";

export const Contacts = () => {
  return (
    <ul className="flex flex-col gap-y-6 text-lg">
      <li>
        <Link
          href="tel:+491234567890"
          className="hover:text-soft-green transition-colors duration-300"
          rel="noreferrer noopener"
          aria-label="Call to phone"
        >
          49 123 456 7890
        </Link>
      </li>
      <li>
        <Link
          href="mailto:info@hotely.com"
          className="hover:text-soft-green transition-colors duration-300"
          target="_blank"
          rel="noreferrer noopener"
          aria-label="Send email"
        >
          info@hotely.com
        </Link>
      </li>
      <li>
        <Link
          href="/"
          className="hover:text-soft-green transition-colors duration-300"
        >
          hotely.com
        </Link>
      </li>
    </ul>
  );
};
