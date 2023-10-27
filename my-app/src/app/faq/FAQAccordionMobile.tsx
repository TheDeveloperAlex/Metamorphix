"use client";

import {
  Accordion,
} from "@/components/ui/accordion";
import { useEffect, useState } from "react";
import FAQItems from "./FAQItems";
import FAQCardMobile from "./FAQCardMobile";

export default function AccordionMobile() {
  const [width, setWidth] = useState<number>(1920);

  useEffect(() => {
    window.addEventListener("resize", function (e) {
      setWidth(this.innerWidth);
    });
    setWidth(window.innerWidth)
  }, []);

  return (
    <>
    {width>372 ? null :
      <div className="px-[27px] bg-[rgba(19, 19, 19, 0.40)]">
        dasas
        <Accordion type="single" collapsible className="w-full">
          {FAQItems.map((elem) => (
            <FAQCardMobile key={elem.index} {...elem} />
          ))}
        </Accordion>
      </div>
    }
    </>
  );
}
