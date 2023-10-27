import FAQCard from "./FAQCard";
import FAQItems from "./FAQItems";
import FAQAcordionMobile from "./FAQAccordionMobile"

export default function FAQ() {
  return (
    <div className="flex flex-col leading-[normal] items-center max-w-[1680px] m-auto pt-[104px] pb-[60px] h-full">
      <h1
        className="text-[40px] text-center leading-[40px] text-white relative"
        style={{ fontFamily: "TacticSans-Bld, sans-serif" }}
      >
        <span className="absolute w-[200px] h-[66px] bg-red-header left-0 top-0 -z-10 blur-[100px]" />
        F.A.Q
        <br />
        <span className="text-[48px] text-red-header">СЕРВЕРА</span>
      </h1>
      <div className="flex justify-between self-stretch max-[372px]:mt-[48px] mt-[60px] max-[372px]:hidden">
        {FAQItems.slice(0, 2).map((elem) => (
          <FAQCard key={elem.index} {...elem} />
        ))}
      </div>
      <FAQCard {...FAQItems[2]} />
      <FAQAcordionMobile />
    </div>
  );
}
