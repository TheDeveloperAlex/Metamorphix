import { Skeleton } from "../ui/skeleton";
import { buttonVariants } from "../ui/button";
import Link from "next/link";
import { Post } from "../../../posts";

import style from "./style.module.css";

export default function PostCard({
  date,
  description,
  image,
  title,
  slug,
}: Post) {
  return (
    <div
      className={` ${style.wrapper} bg-dark-red-card rounded-lg overflow-hidden flex flex-col`}
    >
      <div className="relative h-[166px]">
        <Skeleton className="w-full h-full bg-black bg-opacity-50" />
        <img
          src={image}
          alt="Preview"
          className={
            "absolute top-0 left-0 w-full h-full object-cover bg-center"
          }
        />
      </div>
      <div className={style.content}>
        <div
          className="max-[359px]:text-[12px] min-[360px]:text-[14px] text-right mb-[4px]"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          {date?.toLocaleDateString()}
        </div>
        <h2 className={style.title}>{title}</h2>
        <p
          className="max-[359px]:text-[12px] min-[360px]:text-[14px] overflow-clip shrink max-h-[120px]"
          style={{ color: "rgba(255,255,255,0.4)" }}
        >
          {description}
        </p>
        <Link
          href={`news/${slug}`}
          className={buttonVariants({
            variant: "red-hover",
            className: "mt-auto self-center px-5 !text-[12px]",
          })}
        >
          Подробнее...
        </Link>
      </div>
    </div>
  );
}
