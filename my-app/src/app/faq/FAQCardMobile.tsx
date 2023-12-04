import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQCardProps } from "./FAQCard";

import style from "./FAQ.module.css";
import Image from "next/image";

export const AcrodionToggle = () => <><div className="absolute right-10 top-2 peer h-2 w-2 bg-transparent"></div><div className="absolute hover:block w-20 h-20 right-10 top-4 peer-hover:block hidden"><Image fill alt='icon' src={'/accordion-icon.png'}/></div></>

export default function FAQCardMobile({ index, text, title }: FAQCardProps) {
  return (
    <AccordionItem
      value={`${index}`}
      className={` 720:py-2 ${style.accordionItem}`}
    >
      <AccordionTrigger
        className={`px-[5px] text-white  hover:no-underline ${style.noUnderline}`}
      >
        <div className="flex gap-5 items-center">
          <div className={style.title}>
            <span className="absolute blur-[0.5px] left-0">{title}</span>
            {title}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className={` ${style.content}`}>
        {text}
      </AccordionContent>
    </AccordionItem>
  );
}
