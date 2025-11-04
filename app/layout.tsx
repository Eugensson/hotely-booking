import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";

import "./globals.css";

const openSans = Open_Sans({
  variable: "--font-openSans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Hotely - Book Hotels Worldwide",
    template: "%s | Hotely",
  },
  description:
    "Discover and book hotels, apartments, and unique stays worldwide. Compare prices, read verified reviews, get instant confirmation and flexible cancellation. Best rates, 24/7 support.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${openSans.variable} antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
