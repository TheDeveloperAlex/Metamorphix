import { Button } from "@/components/ui/button";
import { typeSocials } from "../socials";

import style from "./SocialsListItem.module.css";

interface props {
  type: typeSocials;
}

const getLabel = (type: typeSocials) => {
  switch (type) {
    case "telegram":
      return "telegram";
    case "discord":
      return "discord";
    case "instagram":
      return "instagram";
    default:
      return <></>;
  }
};

const getImg = (type: typeSocials) => {
  switch (type) {
    case "telegram":
      return "telegram";
    case "discord":
      return "discord";
    case "instagram":
      return "instagram";
    default:
      return <></>;
  }
};

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
  const className: any = getClassName(type);
  const img: any = getImg(type);
  const label: any = getLabel(type);

  return (
    <div className={`${style.item} ${""}`}>
      <div className={`${style.background} ${className}`}></div>
      <>img: {img}</>
      <p className={style.label}>{label}</p>
      <Button className={style.button}>{"Перейти"}</Button>
    </div>
  );
}
