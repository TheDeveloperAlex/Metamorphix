import Link from "../../../../node_modules/next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../../ui/avatar";
import { buttonVariants } from "../../ui/button";

import style from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className={style.wrapper}>
      <Avatar className="w-[38px] h-[38px] mr-[9px]">
        <AvatarImage src="/logo.gif" alt="logo" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <p className={style.paragraph}>
        <span className="text-white">Мы - комьюнити</span> заряженных молодых
        парней, которые развиваются 24/7, помогают друг другу и никогда не
        сдаются.
        <br />
        Если ты хочешь превзойти свои горизонты - присоединяйся, мы ждём тебя
      </p>
      <Link
        href="/faq"
        className={buttonVariants({
          variant: "outline",
          className: style.button,
        })}
      >
        ПРО НАС
      </Link>
    </div>
  );
}
