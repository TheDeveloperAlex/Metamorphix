import {
  informationLinks,
  navigationLinks,
  contactsLinks,
} from "@/linksData/linksData.contracts";

import { ILink } from "@/linksData/linksData.typings";

import Link from "next/link";

import style from "./FooterBottomPart.module.css";

interface props {
  key: string;
  header: string;
  links: ILink[];
}

const data: props[] = [
  { key: "information", header: "ИНФОРМАЦИЯ", links: informationLinks },
  { key: "navigation", header: "НАВИГАЦИЯ", links: navigationLinks },
  { key: "contacts", header: "КОНТАКТЫ АДМИНИСТРАЦИИ", links: contactsLinks },
];

const getClassName = (key: string) => {
  switch (key) {
    case "information":
      return style.side;
    case "navigation":
      return style.side;
    case "contacts":
      return style.center;

    default:
      return "";
  }
};

export default function FooterBottomPart() {
  const items = data.map(({ key, header, links }) => {
    return (
      <div key={key} className={`${style.item} ${getClassName(key)}`}>
        <p className={style.header}>{header}</p>
        <ul className={style.list}>
          {links.map(({ href, label, target }) => {
            return (
              <li key={href}>
                <Link href={href} target={target}>
                  {label}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  });

  return (
    <>
      <div className={style.border}></div>
      <div className={style.wrapper}>{items}</div>
    </>
  );
}
