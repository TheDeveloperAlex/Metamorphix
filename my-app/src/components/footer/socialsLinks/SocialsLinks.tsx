import Link from "next/link";

import { buttonVariants } from "../../ui/button";
import { typeSocials } from "@/linksData/linksData.typings";
import { socialsLinksData } from "@/linksData/linksData.contracts";

import Discord from "../../icons/Discord";
import { Instagram } from "lucide-react";
import Telegram from "../../icons/Telegram";

import style from "./SocialsLinks.module.css";

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

export default function SocialsLinks() {
  const buttons = socialsLinksData.map(({ label, link }) => {
    return (
      <Link
        key={label}
        href={link}
        target={"_blank"}
        className={buttonVariants({
          variant: "outline",
        })}
      >
        <div className="flex gap-[9px] items-center text-[12px]">
          {getIcon(label)}
          {label}
        </div>
      </Link>
    );
  });

  return <div className={style.wrapper}>{buttons}</div>;
}
