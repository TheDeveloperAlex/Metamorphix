import { usePathname } from "next/navigation";

import { headerLinks, informationLinks } from "@/linksData/linksData.contracts";

import Link from "next/link";

import style from "./Nav.module.css";

interface props {
  className?: string;
  mobile?: boolean;
  onOpenChange?: Function;
}

export default function Nav({ className, mobile, onOpenChange }: props) {
  const pathname = usePathname();

  const styleClass: string = mobile ? style.navMobile : style.navDesktop;

  const onClick = () => {
    if (mobile && typeof onOpenChange === "function") {
      onOpenChange();
    }
  };

  return (
    <nav className={`${className} ${styleClass}`}>
      {headerLinks.map(({ href, label }) => {
        const active: boolean = pathname === `${href}`;
        return (
          <Link
            key={href}
            href={href}
            className={active ? style.active : ""}
            onClick={onClick}
          >
            {label}
          </Link>
        );
      })}
      <div className={style.delimiter}></div>
      {informationLinks.map(({ href, label }) => {
        const active: boolean = pathname === `${href}`;
        return (
          <Link
            key={href}
            href={href}
            className={active ? style.active : ""}
            onClick={onClick}
          >
            {label}
          </Link>
        );
      })}
    </nav>
  );
}
