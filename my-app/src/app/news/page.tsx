import PostCard from "@/components/PostCard";
import posts from "../../../posts";
import Footer from "@/components/footer/Footer";

export default function News() {
  return (
    <div
      className="flex flex-col items-center gap-[50px] pt-[40px] lg:pt-[80px]"
      style={{ fontFamily: "TacticSans-Bld, sans-serif" }}
    >
      <h1 className="min-[560px]:text-[40px] min-[420px]:text-[32px] text-[24px] text-center leading-[40px] text-white relative uppercase">
        <span className="absolute w-[80%] h-[66px] bg-red-header left-1/2 -translate-x-1/2 -z-10 blur-[100px]" />
        Про
        <br />
        <span className="min-[560px]:text-[48px] min-[420px]:text-[40px] text-[30px] text-red-header">метаморфикс</span>
      </h1>
      <div
        className="grid grid-cols-2 gap-[54px] mt-5"
        style={{ gridTemplateRows: "450px" }}
      >
        {posts.map((elem) => (
          <PostCard key={elem.slug} {...elem} />
        ))}
      </div>
      <Footer />
    </div>
  );
}
