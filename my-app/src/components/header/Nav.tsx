import { usePathname } from "next/navigation";
import Link from "next/link";
import { links, linksRules } from "./Header.constants";

import style from "./Nav.module.css";

interface props {
  className: string | undefined;
  mobile: boolean | undefined;
  onOpenChange: Function | undefined;
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
      {links.map(({ href, label }) => {
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
      {linksRules.map(({ href, label }) => {
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
