import Link from "../../../../node_modules/next/link";
import { socialsLinksData, typeSocials } from "../socials";

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
  const src: string = socialsLinksData.getItemData(type)?.img;
  const alt: string = socialsLinksData.getItemData(type)?.alt;
  const label: string = socialsLinksData.getItemData(type)?.label;
  const link: string = socialsLinksData.getItemData(type)?.link;
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
