import PostCard from "@/components/PostCard";
import { metamorphixPost } from "./posts";
import Footer from "@/components/footer/Footer";

export default function News() {
  return (
    <div className="flex flex-col items-center gap-[60px]" style={{ fontFamily: "TacticSans-Bld, sans-serif" }}>
      <h1 className="text-[40px] text-center leading-[40px] text-white relative">
        <span className="absolute w-[200px] h-[66px] bg-red-header left-0 -z-10 blur-[100px]"/>
        НОВОСТИ<br />
        <span className="text-[48px] text-red-header">
          СЕРВЕРА
        </span>
      </h1>
      <div className="grid grid-cols-2 gap-[54px] mt-5" style={{gridTemplateRows: "450px"}}>
        <PostCard {...metamorphixPost} />
        <PostCard {...metamorphixPost} />
      </div>
      <Footer />
    </div>
  );
};
