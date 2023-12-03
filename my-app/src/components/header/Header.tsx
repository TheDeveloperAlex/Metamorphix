"use client";

import { useRef, useEffect, useState } from "react";

import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import mobileMenu from "/public/mobileMenu.svg";
import Language from "../language/index";
import Nav from "./Nav";

import style from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  const wrapper = useRef(null);

  const onOpenChange = () => {
    setOpen((s) => !s);
  };

  useEffect(() => {
    if (!wrapper || !wrapper.current) return;

    const handleResize = () => {
      const size = wrapper?.current?.clientWidth;

      if (size > 1023 && open) {
        setOpen(false);
      }
    };

    handleResize();

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [wrapper, open]);

  return (
    <header className={style.header} ref={wrapper}>
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
            <Nav mobile onOpenChange={onOpenChange} />
            <div className={style.mobileDelimiter}></div>
            <Language />
          </SheetContent>
        </Sheet>
      </div>
      <Nav className={style.desktop} />
    </header>
  );
}
