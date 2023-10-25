import { notFound } from "next/navigation";
import posts from "../../../../posts";

interface PageProps {
  params: {
    slug: string;
  };
}

export default async function ProjectsNews({ params: { slug } }: PageProps) {
  let post = posts.find((elem) => elem.slug === slug);

  if (!post) return notFound();

  return <div>{post.title}</div>;
}
