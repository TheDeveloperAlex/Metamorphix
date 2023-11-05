"use client";

import { Accordion } from "@/components/ui/accordion";
import FAQItems from "./FAQItems";
import FAQCardMobile from "./FAQCardMobile";

export default function AccordionMobile() {
  return (
    <div
      className={`self-stretch px-[20px] mt-12  pb-[1.5rem] rounded-[10px] mx-[20px] w-[calc(100% - 40px)] max-w-[1200px] min-[1280px]:w-[1200px] min-[1280px]:mx-auto`}
      style={{
        background: "rgba(19, 19, 19, 0.40)",
        fontFamily: "Montserrat, sans-serif",
      }}
    >
      <Accordion type="multiple" className="w-full">
        {FAQItems.map((elem, index) => (
          <FAQCardMobile key={index} {...elem} index={index} />
        ))}
      </Accordion>
    </div>
  );
}
