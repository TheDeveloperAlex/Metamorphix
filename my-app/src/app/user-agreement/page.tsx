import TxtParser from "@/components/TxtParser";

export default async function UserAgreement() {
  return (
    <div
      className="flex flex-col items-center h-full pb-[20px] relative w-full top-0 text-white"
      style={{ fontFamily: "TacticSans-Bld, sans-serif" }}
    >
      <h1 className="text-[30px] md:text-[40px] text-center leading-[40px] text-white relative py-[90px] uppercase">
        <span className="absolute  w-[80%] md:w-[554px] h-[66px] bg-red-header left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 -z-10 blur-[100px]" />
        Пользовательское
        <br />
        <span className="max-[480px]:text-[36px] text-red-header text-[40px] md:text-[48px]">
        соглашение
        </span>
      </h1>
      <div
        className="overflow-y-auto max-w-[1352px] px-2 max-[480px]:text-[16px] text-[19px] mx-2"
        style={{ fontFamily: "Gilroy, sans-serif" }}
      >
        <h2 className="text-center text-[28px] font-bold">ACCEPTABLE USE POLICY</h2>
        <h3 className="text-center text-[22px] font-semibold">
          Last updated October 26, 2023
        </h3>
        <div className="text-white-opacity-07 mb-4">
        <div className="flex flex-col gap-[14px] text-white-opacity-07 leading-normal grow">
          <TxtParser filePath="./public/userAgreement/userAgreement.txt" />
        </div>
      </div>
    </div>
    </div>
  );
}
