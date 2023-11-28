import Link from "../../../../node_modules/next/link";

import { socialsLinksImagesData } from "@/linksData/linksData.contracts";
import { typeSocials } from "@/linksData/linksData.typings";

import { useSwiperSlide } from "swiper/react";

import style from "./SocialsListItem.module.css";

interface props {
  type: typeSocials;
}

const getClassName = (type: typeSocials) => {
  switch (type) {
    case "telegram":
      return style.telegram;
    case "discord":
      return style.discord;
    case "instagram":
      return style.instagram;
    default:
      return "";
  }
};

export default function SocialsListItem({ type }: props) {
  const swiperSlide = useSwiperSlide();

  const className: any = getClassName(type);
  const src: string = socialsLinksImagesData.getItemData(type)?.img;
  const alt: string = socialsLinksImagesData.getItemData(type)?.alt;
  const label: string = socialsLinksImagesData.getItemData(type)?.label;
  const link: string = socialsLinksImagesData.getItemData(type)?.link;
  const contentClassName = swiperSlide?.isActive ? style.contentActive : "";

  return (
    <div className={style.item}>
      <div className={`${style.background} ${className}`}>
        <div className={`${style.content} ${contentClassName} h-[100%]`}>
          <img src={src} alt={alt} className={style.img} />
          <p className={style.label}>{label}</p>
          <Link href={link} className={style.button} target={"_blank"}>
            Перейти
          </Link>
        </div>
      </div>
    </div>
  );
}
