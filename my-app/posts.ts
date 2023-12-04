export interface Post {
  title?: string;
  description?: string;
  file: string;
  slug: string;
  image?: string;
  date?: Date;
  wip?: boolean;
}

const posts: Post[] = [
  {
    date: new Date("October 29, 2023 22:03:05"),
    file: "saitor-shop.md",
    title: "Saitor Shop",
    image: "https://i.imgur.com/xJPJjxG.png",
    description: "Сайт дропшипингова онлайн магазина",
    slug: "saitor-shop",
  },
  {
    file: "",
    title: "Сайт Bitrades Technologies",
    description: "Онлайн платформа для предугадывания курса криптовалют",
    slug: "bitradesTechnologies-website",
    wip: true,
  },
];

export default posts;
