import {
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { FAQCardProps } from "./FAQCard";

export default function FAQCardMobile({ index, text, title }: FAQCardProps) {
  return (
    <AccordionItem value={`${index}`}>
      <AccordionTrigger>{title}</AccordionTrigger>
      <AccordionContent>{text}</AccordionContent>
    </AccordionItem>
  );
}
