import Image from "next/image";
import { Post } from "../../../posts";
import { Skeleton } from "../ui/skeleton";

import { buttonVariants } from "../ui/button";

import style from "./style.module.css";

export default function PostCardWip({
  date,
  description,
  image,
  title,
  slug,
}: Post) {
  const currentDate: string = date?.toLocaleDateString() ?? "Скоро...";
  const currentTitle: string = title ?? "";
  const currentDescription: string = description ?? "";

  return (
    <div
      className={` ${style.wrapper} text-white-opacity-02 bg-dark-red-card rounded-lg overflow-hidden flex flex-col`}
    >
      <div className="relative h-[166px]">
        {image ? (
          <>
            <Skeleton className="w-full h-full bg-black bg-opacity-50" />
            <Image
              src={image}
              className={"object-cover bg-top blur"}
              alt="Preview"
              fill
            />
          </>
        ) : (
          <div className="relative w-full h-full flex justify-center items-center overflow-hidden">
            <div
              className={`bg-gradient-to-r ${style.imageComingSoon} blur-lg  w-full h-full absolute top-0 left-0`}
            ></div>
            <p className="absolute text-[#fff] ">Coming soon...</p>
          </div>
        )}
      </div>
      <div
        className={`pt-[15px] max-[359px]:pb-[31px] min-[360px]:pb-[50px] relative text-[12px] !leading-normal grow flex flex-col`}
      >
        <div className="text-right">{currentDate}</div>
        <h2 className="max-[359px]:mb-[15px] min-[360px]:mb-[25px] text-[16px] text-white">
          {currentTitle}
        </h2>
        <div className="grow flex flex-col gap-[25px]">
          <p className="overflow-clip shrink max-h-[120px]">
            {currentDescription}
          </p>
          <button
            disabled
            className={buttonVariants({
              variant: "red-hover",
              className: "mt-auto self-center px-5 !text-[12px]",
            })}
          >
            Подробнее...
          </button>
        </div>
      </div>
    </div>
  );
}
