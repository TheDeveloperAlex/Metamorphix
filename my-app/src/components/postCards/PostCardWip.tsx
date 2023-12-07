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
      className={` ${style.wrapper}  bg-dark-red-card rounded-lg overflow-hidden flex flex-col`}
    >
      <div className="relative h-[166px]">
        {image ? (
          <>
            <Skeleton className="w-full h-full bg-black bg-opacity-50" />
            <img
              src={image}
              alt="Preview"
              className={
                "absolute top-0 left-0 w-full h-full object-cover bg-center"
              }
            />
          </>
        ) : (
          <div className="relative w-full h-[166px] flex justify-center items-center overflow-hidden">
            <div
              className={`bg-gradient-to-r ${style.imageComingSoon} blur-lg  w-full h-full absolute top-0 left-0`}
            ></div>
            <p className="absolute text-[#fff] ">Coming soon...</p>
          </div>
        )}
      </div>
      <div className={style.content}>
        <div
          className="max-[359px]:text-[12px] min-[360px]:text-[14px] text-right mb-[4px]"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          {currentDate}
        </div>
        <h2 className={style.title}>{currentTitle}</h2>
        <div className={style.buttonWrapper}>
          <p
            className="max-[359px]:text-[12px] min-[360px]:text-[14px] overflow-clip shrink max-h-[120px]"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
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
