"use client";

import PostCard from "@/components/postCards/PostCard";
import PostCardWip from "@/components/postCards/PostCardWip";
import posts from "../../../../posts";

import { Autoplay, Pagination } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

export default function NewsSlider() {
  const slides = posts.map((item, index) => {
    return (
      <SwiperSlide key={item.slug} virtualIndex={index}>
        <div className="w-full flex justify-center">
          {item.wip ? <PostCardWip {...item} /> : <PostCard {...item} />}
        </div>
      </SwiperSlide>
    );
  });

  return (
    <div className="w-full">
      <Swiper
        loop={true}
        modules={[Pagination, Autoplay]}
        className="newsSlider"
        autoplay={{
          delay: 3000,
          disableOnInteraction: true,
        }}
        // slidesPerView={2}
        // spaceBetween={-70}
        pagination={{
          clickable: true,
        }}
      >
        {slides}
      </Swiper>
    </div>
  );
}
