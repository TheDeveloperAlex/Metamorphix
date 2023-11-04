import TxtParser from "@/components/TxtParser";
import LinksPolicy from "../../components/LinkParser";

export default async function PrivacyPolicy() {
  return (
    <div
      className="flex flex-col items-center h-full gap-[90px] py-[122px] absolute w-full top-0 text-white"
      style={{ fontFamily: "TacticSans-Bld, sans-serif" }}
    >
      <h1 className="text-[30px] md:text-[40px] text-center leading-[40px] text-white relative">
        <span className="absolute w-[80%] md:w-[554px] h-[66px] bg-red-header left-1/2 -translate-x-1/2 bottom-0 -z-10 blur-[100px]" />
        ПОЛИТИКА
        <br />
        <span className="sm:text-[36px] md:text-[48px] text-red-header">
          КОНФИДЕНЦИ
          <span className="min-[480px]:hidden inline">
            -<br />
          </span>
          АЛЬНОСТИ
        </span>
      </h1>
      <div
        className="overflow-y-scroll max-w-[1352px] px-2 max-[480px]:text-[16px] text-[19px] mx-2"
        style={{ fontFamily: "Gilroy, sans-serif" }}
      >
        <h2 className="text-center text-[28px] font-bold">PRIVACY POLICY</h2>
        <h3 className="text-center text-[22px] font-semibold">
          Last updated October 26, 2023
        </h3>
        <div className="text-white-opacity-07 mb-4">
          <h4 className="font-semibold">TABLE OF CONTENTS</h4>
          <LinksPolicy filePath="./public/privacy/tableOfContents.txt" />
        </div>
        <div className="flex flex-col gap-[14px] text-white-opacity-07 leading-normal grow">
          <TxtParser filePath="./public/privacy/privacy.txt" />
        </div>
      </div>
    </div>
  );
}
