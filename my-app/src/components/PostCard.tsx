import Image from "next/image";
import { Skeleton } from "./ui/skeleton";
import { Button, buttonVariants } from "./ui/button";
import Link from "next/link";
import { Post } from "../../posts";
import { cn } from "@/lib/utils";

export default function PostCard({
  date,
  description,
  image,
  title,
  slug,
}: Post) {
  return (
    <div className="w-[323px] bg-dark-red-card text-white-opacity-02 rounded-lg flex flex-col">
      <div className="relative h-[166px]">
        <Skeleton className="w-full h-full bg-black bg-opacity-50" />
        <Image src={image} alt="Preview" fill />
      </div>
      <div className="flex flex-col gap-6 px-5 pt-[26px] pb-12 relative text-[12px] !leading-normal grow">
        <span className="absolute right-3 top-3">
          {date.toLocaleDateString()}
        </span>
        <h2 className="text-[16px] text-white">{title}</h2>
        <p className="overflow-clip shrink max-h-[120px]">{description}</p>
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
