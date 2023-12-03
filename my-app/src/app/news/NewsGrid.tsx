import posts from "../../../posts";
import PostCard from "@/components/postCards/PostCard";
import PostCardWip from "@/components/postCards/PostCardWip";

export default function NewsGrid() {
  const slides = posts.map((item) => {
    return item.wip ? (
      <PostCardWip key={item.slug} {...item} />
    ) : (
      <PostCard key={item.slug} {...item} />
    );
  });

  return <div className="flex justify-center gap-[35px]">{slides}</div>;
}
