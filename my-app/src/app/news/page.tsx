import NewsBottom from "./NewsBottom";

export default function News() {
  return (
    <div
      className="flex flex-col items-center gap-[60px]"
      style={{ fontFamily: "TacticSans-Bld, sans-serif" }}
    >
      <h1 className="text-[40px] text-center leading-[40px] text-white relative pt-[80px]">
        <span className="absolute w-[200px] h-[66px] bg-red-header left-0 -z-10 blur-[100px]" />
        НАШИ
        <br />
        <span className="text-[48px] text-red-header">ПРОЕКТЫ</span>
      </h1>
      <NewsBottom />
    </div>
  );
}
