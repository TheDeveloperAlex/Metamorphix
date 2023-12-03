export interface ILink {
  href: string;
  label: string;
  target?: string;
}

export type typeSocials = "telegram" | "discord" | "instagram";

export interface socialsLinksImagesDataItem {
  label: string;
  link: string;
  img: string;
  alt: string;
}

export interface socialsLinksDataItem {
  label: typeSocials;
  link: string;
  //   img: string;
  //   alt: string;
}
