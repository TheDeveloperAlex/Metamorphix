import FAQCard from "./FAQCard";
import FAQItems from "./FAQItems";
import FAQAcordionMobile from "./FAQAccordionMobile";

export default function FAQ() {
  return (
    <div className="flex flex-col leading-[normal] items-center max-w-[1680px] m-auto max-720:pt-[80px] pt-[104px] lg:pb-[60px] h-full max-720:gap-12">
      <h1
        className="text-center leading-[40px] text-white relative max-720:text-[30px] text-[40px]"
        style={{ fontFamily: "TacticSans-Bld, sans-serif" }}
      >
        <span className="absolute w-[200px] h-[66px] bg-red-header left-0 top-0 -z-10 blur-[100px]" />
        F.A.Q
        <br />
        <span className="max-372:text-[40px] text-[48px] text-red-header">СЕРВЕРА</span>
      </h1>
      <div className="flex max-lg:flex-col max-lg:items-center justify-between self-stretch mt-[60px] max-720:hidden">
        {FAQItems.slice(0, 2).map((elem) => (
          <FAQCard key={elem.index} {...elem} />
        ))}
      </div>
      <FAQCard {...FAQItems[2]} />
      <FAQAcordionMobile />
    </div>
  );
}
