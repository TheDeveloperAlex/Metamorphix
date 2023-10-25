export interface Post {
    title: string,
    description: string,
    text: string,
    slug: string,
    image: string,
    date: Date
}

const posts: Post[] = [
    {
        date: new Date("October 25, 2023 22:47:00"),
        text: "",
        title: "Сайт Metamorphix",
        image: "/news/metamorphix-preview.png",
        description: "Lorem ipsum dolor sit amet, consectetur",
        slug: "metamorphix-website",
    },
    {
        date: new Date("October 25, 2023 22:47:00"),
        text: "",
        title: "Сайт Metamorphix",
        image: "/news/metamorphix-preview.png",
        description: "Lorem ipsum dolor sit amet, consectetur",
        slug: "metamorphix-website",
    },
]

export default posts