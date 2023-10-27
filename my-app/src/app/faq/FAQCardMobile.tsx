import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQCardProps } from "./FAQCard";

export default function FAQCardMobile({ index, text, title }: FAQCardProps) {
  return (
    <AccordionItem value={`${index}`} className="border-none">
      <AccordionTrigger className="px-[5px] text-white hover:no-underline pt-[5px] pb-[10px]">
        <div className="flex gap-5 items-center">
          <div className="text-white-opacity-02 text-[25px] relative">
            <span className="absolute blur-[2px] left-0">{index}</span>
            {index}
          </div>
          <div className="relative text-[12px] max-372:text-[10px]  max-w-[202px] text-left font-bold">
            <span className="absolute blur-[0.5px] left-0">{title}</span>
            {title}
          </div>
        </div>
      </AccordionTrigger>
      <AccordionContent className="text-[10px] max-372:text-[8px] leading-[normal] text-white-opacity-02 font-medium pt-3 border-t rounded-t-[1px]">
        {text}
      </AccordionContent>
    </AccordionItem>
  );
}
