import type { Metadata } from "next";

import Header from "@/components/header/Header";
import Language from "@/components/language/Language";
import Footer from "@/components/footer/index";

import "./globals.css";
import "./scroll.css";

export const metadata: Metadata = {
  title: "Metamorphix",
  description:
    "Мы - комьюнити заряженных молодых парней, которые развиваются 24/7, помогают друг другу и никогда не сдаются.Если ты хочешь превзойти свои горизонты - присоединяйся, мы ждём тебя",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      style={{
        scrollBehavior: "smooth",
      }}
      className={"dark"}
    >
      <body>
        <Header />
        <div className="page-content">{children}</div>
        <Footer />
        {/* <div className="language">
          <Language />
        </div> */}
      </body>
    </html>
  );
}
