import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQCardProps } from "./FAQCard";
import classes from "./FAQ.module.css";

export default function FAQCardMobile({ index, text, title }: FAQCardProps) {
  return (
    <AccordionItem value={`${index}`} className="border-none 720:py-2">
      <AccordionTrigger
        className={`px-[5px] text-white pt-[5px] pb-[10px] hover:no-underline ${classes.noUnderline}`}
      >
        <div className="flex gap-5 items-center">
          <div className="text-white-opacity-02 text-[25px] lg:text-[32px] relative">
            <span className="absolute blur-[2px] left-0">{index}</span>
            {index}
          </div>
          <div className="relative text-[12px] lg:text-[19px] max-372:text-[10px] text-left font-bold mr-2">
            <span className="absolute blur-[0.5px] left-0">{title}</span>
            {title}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-[10px] lg:text-[14px] max-372:text-[8px] leading-[normal] text-white-opacity-02 font-medium pt-3 border-t border-white rounded-t-[1px]">
        {text}
      </AccordionContent>
    </AccordionItem>
  );
}
