"use client";

import { useEffect, useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import mobileMenu from "/public/mobileMenu.svg";
import Language from "../language/index";
import Nav from "./Nav";

import style from "./Header.module.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  const onOpenChange = () => {
    setOpen((s) => !s);
  };

  // useEffect(() => {
  //   if (open) {
  //     document.body.setAttribute(
  //       "style",
  //       "overflow-x: hidden !important;"
  //       // " margin-right: 0px !important;"
  //       // margin-right: 0px !important;
  //       // overflow-x: hidden !important;
  //       // overflow-y: hidden !important;
  //     );
  //   } else {
  //     document.body.removeAttribute("style");
  //   }
  // }, [open]);

  useEffect(() => {
    // if (open) {
    //   document.body.setAttribute("style", "overflow: auto !important; ");
    // } else {
    //   document.body.removeAttribute("style");
    // }
  }, []);

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
