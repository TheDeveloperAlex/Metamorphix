import Discord from "@/components/icons/Discord";
import Telegram from "@/components/icons/Telegram";
import { Instagram } from "lucide-react";
// import { typeSocials } from "../socials";
import { typeSocials } from "../../../linksData/linksData.typings";

// import { typeTopList } from "./TopList.interface";

import style from "./TopListItem.module.css";

interface props {
  type: typeSocials;
}

const getColor = (type: typeSocials) => {
  switch (type) {
    case "telegram":
      return "#01a8db";
    case "discord":
      return "#5b00ef";
    case "instagram":
      return "#e98b01";

    default:
      return "";
  }
};
const getIcon = (type: typeSocials) => {
  switch (type) {
    case "telegram":
      return <Telegram />;
    case "discord":
      return <Discord />;
    case "instagram":
      return <Instagram />;

    default:
      return "";
  }
};
const getLabel = (type: typeSocials) => {
  switch (type) {
    case "telegram":
      return "Telegram";
    case "discord":
      return "Discord";
    case "instagram":
      return "Instagram";

    default:
      return "";
  }
};

export default function TopListItem({ type }: props) {
  const background = getColor(type);
  const icon = getIcon(type);
  const label = getLabel(type);

  return (
    <div className={style.item}>
      <div className={style.square} style={{ background }}>
        {icon}
      </div>
      <p className="font-['TacticSans-Bld'] text-white min-[768px]: text-[20px] ">
        {label}
      </p>
    </div>
  );
}
