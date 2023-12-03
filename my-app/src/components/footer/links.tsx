import { Instagram } from "lucide-react";
import Discord from "../icons/Discord";
import Telegram from "../icons/Telegram";

type SocialLinks = {
  icon: React.ReactNode;
  text: string;
}[];

type Links = {
  title: string;
  links: {
    url: string;
    name: string;
  }[];
}[];

export const socialLinks: SocialLinks = [
  {
    icon: <Telegram />,
    text: "Telegram",
  },
  {
    icon: <Discord />,
    text: "Discord",
  },
  {
    icon: <Instagram width={19} height={18} />,
    text: "Instagram",
  },
];

export const links: Links = [
  {
    title: "Информация",
    links: [
      {
        name: "Условия пользовтаеля",
        url: "#",
      },
      {
        name: "Правила пользования",
        url: "#",
      },
      {
        name: "Политика кондефичальности",
        url: "#",
      },
    ],
  },
  {
    title: "НАВИГАЦИЯ",
    links: [
      {
        name: "Главная",
        url: "/",
      },
      {
        name: "Переходы",
        url: "/socials",
      },
      {
        // name: "Новости сервера",
        name: "Наши проекты",
        url: "/news",
      },
    ],
  },
  {
    title: "КОНТАКТЫ АДМИНИСТРАЦИИ",
    links: [],
  },
];
