"use client";

import { usePathname } from "next/navigation";

import AboutUs from "./aboutUs/AboutUs";
import SocialsLinks from "./socialsLinks/SocialsLinks";
import FooterBottomPart from "./footerBottomPart/FooterBottomPart";

export default function Footer() {
  const pathname = usePathname();

  switch (pathname) {
    case "/":
      return <></>;
    case "/socials":
    case "/news":
    case "/user-agreement":
    case "/terms-of-use":
    case "/privacy-policy":
      return (
        <div>
          <AboutUs />
          <FooterBottomPart />
        </div>
      );
    case "/faq":
      return (
        <div>
          <SocialsLinks />
          <FooterBottomPart />
        </div>
      );

    default:
      return <></>;
  }
}
