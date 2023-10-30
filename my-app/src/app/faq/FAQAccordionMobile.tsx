"use client";

import { Accordion } from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import FAQItems from "./FAQItems";
import FAQCardMobile from "./FAQCardMobile";

export default function AccordionMobile() {
  // const [width, setWidth] = useState<number>(1920);

  // useEffect(() => {
  //   window.addEventListener("resize", function (e) {
  //     setWidth(this.innerWidth);
  //   });
  //   setWidth(window.innerWidth);
  // }, []);

  return (
    <div
      className="mx-[27px] self-stretch px-[10px] mt-12"
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
