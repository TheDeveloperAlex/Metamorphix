import {
  ILink,
  socialsLinksDataItem,
  socialsLinksImagesDataItem,
  typeSocials,
} from "./linksData.typings";

import telegramQR from "../../public/discordQR.png";
import discordQR from "../../public/discordQR.png";
import instagramQR from "../../public/instagramQR.png";

export const informationLinks: ILink[] = [
  {
    href: "/user-agreement",
    label: "Условия пользовтаеля",
  },
  {
    href: "/terms-of-use",
    label: "Правила пользования",
  },
  {
    href: "/privacy-policy",
    label: "Политика кондефициальности",
  },
];

export const navigationLinks: ILink[] = [
  { href: "/", label: "Главная" },
  { href: "/socials", label: "Переходы" },
  { href: "/news", label: "Новости сервера" },
];

export const contactsLinks: ILink[] = [
  {
    href: "https://t.me/metamorphix_support",
    label: "https://t.me/metamorphix_support",
    target: "_blank",
  },
  {
    href: "mailto:metamorphix1.0@gmail.com",
    label: "metamorphix1.0@gmail.com",
    target: "_blank",
  },
  {
    href: "https://t.me/Zentoren",
    label: "https://t.me/Zentoren",
    target: "_blank",
  },
];

export const headerLinks: ILink[] = [
  ...navigationLinks,
  { href: "/faq", label: "ПРО НАС" },
];

export const socials: typeSocials[] = ["telegram", "discord", "instagram"];

export const socialsLinksImagesData: {
  telegram: socialsLinksImagesDataItem;
  discord: socialsLinksImagesDataItem;
  instagram: socialsLinksImagesDataItem;
  getItemData: Function;
} = {
  telegram: {
    label: "telegram",
    link: "https://t.me/metamorphix_x",
    img: telegramQR.src,
    alt: "telegramQR",
  },
  discord: {
    label: "discord",
    link: "https://discord.gg/AsGgHr7HGT",
    img: discordQR.src,
    alt: "discordQR",
  },
  instagram: {
    label: "instagram",
    link: "https://www.instagram.com/metamorphix_x/",
    img: instagramQR.src,
    alt: "instagramQR",
  },
  getItemData: function (key: "telegram" | "discord" | "instagram") {
    return this[key];
  },
};

export const socialsLinksData: socialsLinksDataItem[] = [
  {
    label: "telegram",
    link: "https://t.me/metamorphix_x",
  },
  {
    label: "discord",
    link: "https://discord.gg/AsGgHr7HGT",
  },
  {
    label: "instagram",
    link: "https://www.instagram.com/metamorphix_x/",
  },
];
