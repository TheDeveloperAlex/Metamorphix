export interface Post {
  title: string;
  description: string;
  file: string;
  slug: string;
  image: string;
  date: Date;
}

const posts: Post[] = [
  {
    date: new Date("October 25, 2023 22:47:00"),
    file: 'metamorphix-site.md',
    title: "Сайт Metamorphix",
    image: "/news/metamorphix-preview.png",
    description: "Lorem ipsum dolor sit amet, consectetur",
    slug: "metamorphix-website",
  },
  {
    date: new Date("October 25, 2023 22:47:00"),
    file: "",
    title: "Сайт Metamorphix",
    image: "/news/metamorphix-preview.png",
    description: "Lorem ipsum dolor sit amet, consectetur",
    slug: "metamorphix-website",
  },
];

export default posts;
