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
    file: "metamorphix-site.md",
    title: "Saitor Shop",
    image: "/news/saitorShop.png",
    // image: "https://imgur.com/xJPJjxG",
    description: "Сайт дропшипингова онлайн магазина",
    slug: "metamorphix-website",
  },
  {
    date: new Date("October 25, 2023 22:47:00"),
    file: "",
    title: "Сайт Bitrades Technologies",
    // image: "/news/metamorphix-preview.png",
    description: "Онлайн платформа для предугадывания курса криптовалют",
    slug: "metamorphix-website",
    wip: true,
  },
];

export default posts;
