import Link from "../../../node_modules/next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import { buttonVariants } from "../ui/button";

// import style from "./AboutUs.module.css";

export default function AboutUs() {
  return (
    <div className="flex items-center gap-[11px] max-w-[960px] m-auto">
      <Avatar className="w-[38px] h-[38px] mr-[9px]">
        <AvatarImage src="/logo.gif" alt="logo" />
        <AvatarFallback>M</AvatarFallback>
      </Avatar>
      <p className="text-[12px] -mr-[2px]">
        <span className="text-white">это DIscord сообщество</span> где ты можешь
        найти себе друзей или колег. Наш дискорд сервер предоставит тебе
        комфортную работу в каждой из сфер
      </p>
      <Link
        href="/faq"
        className={buttonVariants({
          variant: "outline",
          className: "px-4 gap-[9px] !text-[13px] items-center",
        })}
      >
        ПРО НАС
      </Link>
    </div>
  );
}
