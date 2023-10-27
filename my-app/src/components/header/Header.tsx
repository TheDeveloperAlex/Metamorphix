"use client";

import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import mobileMenu from "/public/mobileMenu.svg";
import Language from "../language";
import Nav from "./Nav";

import style from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  const onOpenChange = () => {
    setOpen((s) => !s);
  };

  return (
    <header className={style.header}>
      <div className={style.mobile}>
        <Sheet open={open}>
          <SheetTrigger>
            <img
              src={mobileMenu.src}
              className={style.mobileMenuButton}
              onClick={onOpenChange}
            />
          </SheetTrigger>
          <SheetContent onClose={() => setOpen(false)}>
            <Nav mobile className={undefined} onOpenChange={onOpenChange} />
            <div className={style.mobileDelimiter}></div>
            <Language />
          </SheetContent>
        </Sheet>
      </div>
      <Nav
        mobile={undefined}
        className={style.desktop}
        onOpenChange={undefined}
      />
    </header>
  );
}
