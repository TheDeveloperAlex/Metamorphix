"use client";

import { usePathname } from "next/navigation";

import AboutUs from "./aboutUs/AboutUs";
import SocialsLinks from "./socialsLinks/SocialsLinks";
import FooterBottomPart from "./footerBottomPart/FooterBottomPart";

export default function Footer() {
  const pathname = usePathname();

  if (pathname === "/") return <></>;
  if (pathname === "/faq") {
    return (
      <div>
        <SocialsLinks />
        <FooterBottomPart />
      </div>
    );
  }

  return (
    <div>
      <AboutUs />
      <FooterBottomPart />
    </div>
  );
}
