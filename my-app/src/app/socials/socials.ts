export type typeSocials = "telegram" | "discord" | "instagram";

export const socials: typeSocials[] = ["telegram", "discord", "instagram"];

import telegramQR from "../../../public/telegramQR.png";
import discordQR from "../../../public/discordQR.png";
import instagramQR from "../../../public/instagramQR.png";

export interface socialsLinksDataItem {
  label: string;
  link: string;
  img: string;
  alt: string;
}

export const socialsLinksData: {
  telegram: socialsLinksDataItem;
  discord: socialsLinksDataItem;
  instagram: socialsLinksDataItem;
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
