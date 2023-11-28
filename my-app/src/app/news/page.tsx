import PostCard from "@/components/PostCard";
import posts from "../../../posts";

export default function News() {
  return (
    <div
      className="flex flex-col items-center gap-[60px]"
      style={{ fontFamily: "TacticSans-Bld, sans-serif" }}
    >
      <h1 className="text-[40px] text-center leading-[40px] text-white relative pt-[80px]">
        <span className="absolute w-[200px] h-[66px] bg-red-header left-0 -z-10 blur-[100px]" />
        НОВОСТИ
        <br />
        <span className="text-[48px] text-red-header">СЕРВЕРА</span>
      </h1>
      <div
        className="grid grid-cols-2 gap-[54px] mt-5 grow"
        style={{ gridTemplateRows: "450px" }}
      >
        {posts.map((elem) => (
          <PostCard key={elem.slug} {...elem} />
        ))}
      </div>
    </div>
  );
}
