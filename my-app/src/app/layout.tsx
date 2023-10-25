import type { Metadata } from "next";

import Header from "@/components/header/Header";

import Language from "@/components/language/Language";

import "./globals.css";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body style={{ background: `var(--background-gradient)`, color: "#fff" }}>
        <Header />
        {children}
        <Language />
      </body>
    </html>
  );
}
