import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "./utils/font";
import "@fontsource/poppins";
import "@fontsource-variable/playfair-display";

export const metadata: Metadata = {
  title: "Genim Store",
  description: "The classic fashion store",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
