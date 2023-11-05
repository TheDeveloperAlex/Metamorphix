import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQCardProps } from "./FAQCard";

import style from "./FAQ.module.css";

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
