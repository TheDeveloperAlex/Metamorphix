"use client";

// import { Button, buttonVariants } from "../ui/button";
// import Link from "next/link";
// import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
// import { links, socialLinks } from "./links";
// import { usePathname } from "../../../node_modules/next/navigation";
import { usePathname } from "next/navigation";

import AboutUs from "./AboutUs";
import SocialsLinks from "./SocialsLinks";
import FooterBottomPart from "./footerBottomPart/FooterBottomPart";

export default function Footer() {
  const pathname = usePathname();
  // const router = useRouter();
  console.log(pathname);

  switch (pathname) {
    case "/":
      return <></>;
    case "/socials":
    case "/news":
    case "/user-agreement":
    case "/terms-of-service":
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

  return (
    // <div className="flex flex-col gap-5 leading-normal text-white-opacity-02">
    //   <div className="flex items-center gap-[11px] max-w-[960px] m-auto">
    //     <Avatar className="w-[38px] h-[38px] mr-[9px]">
    //       <AvatarImage src="/logo.gif" alt="logo" />
    //       <AvatarFallback>M</AvatarFallback>
    //     </Avatar>
    //     <p className="text-[12px] -mr-[2px]">
    //       <span className="text-white">это DIscord сообщество</span> где ты
    //       можешь найти себе друзей или колег. Наш дискорд сервер предоставит
    //       тебе комфортную работу в каждой из сфер
    //     </p>
    //     {socialLinks.map((elem) => (
    //       <Link
    //         href="#"
    //         key={elem.text}
    //         className={buttonVariants({
    //           variant: "outline",
    //           className: "pl-2 pr-3 gap-[9px] !text-[10px] items-center",
    //         })}
    //       >
    //         {elem.icon}
    //         {elem.text}
    //       </Link>
    //     ))}
    //     <Link
    //       href="#"
    //       className={buttonVariants({
    //         variant: "outline",
    //         className: "px-4 gap-[9px] !text-[13px] items-center",
    //       })}
    //     >
    //       ПРО НАС
    //     </Link>
    //   </div>
    //   <div className="w-[1140px] min-h-[171px] grid grid-cols-3 text-[12px] text-[#DEDEDE]">
    //     {links.map((elem) => (
    //       <div
    //         key={elem.title}
    //         className="text-center border border-b-0 border-border-footer pt-[13px]"
    //       >
    //         <h3 className="text-red-footer text-[14px]">{elem.title}</h3>
    //         <ul className="flex flex-col gap-[14px] mt-4">
    //           {elem.links.map((link) => (
    //             <Link key={link.name} href={link.url}>
    //               <li>{link.name}</li>
    //             </Link>
    //           ))}
    //         </ul>
    //       </div>
    //     ))}
    //   </div>
    // </div>
    <></>
  );
}
