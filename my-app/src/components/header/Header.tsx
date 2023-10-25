'use client';

import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./Header.module.css";
import { links } from "./Header.constants";

export default function Header() {
  const pathname = usePathname();

  return (
    <header className={classes.header}>
      <nav className={classes.nav}>
        {
          links.map(({ href, label }) => {
            return (
              <Link key={href} href={href} className={pathname === `${href}` ? classes.active : ""}>{label}</Link>
            );
          })
        }
      </nav>
    </header>
  );
}
