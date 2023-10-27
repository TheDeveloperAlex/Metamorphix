"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { socials } from "../socials";
import SocialsListItem from "../socialsListItem";
import { EffectCoverflow, Pagination } from "swiper/modules";
import TopListItem from "../topList/TopListItem";

export default function SocialsSlider() {
  const sliderItems = [...socials, ...socials].map((social) => {
    return (
      <SwiperSlide key={social}>
        <div>
          <TopListItem type={social} />
          <SocialsListItem type={social} />
        </div>
      </SwiperSlide>
    );
  });

  return (
    <Swiper
      // spaceBetween={50}
      // slidesPerView={3}
      // onSlideChange={() => console.log("slide change")}
      // onSwiper={(swiper) => console.log(swiper)}
      slidesPerView={3}
      initialSlide={1}
      effect={"coverflow"}
      coverflowEffect={{
        rotate: 0,
        stretch: 0,
        depth: 0,
        modifier: 2.5,
        slideShadows: false,
      }}
      grabCursor={true}
      loop={true}
      modules={[EffectCoverflow]}
      class={""}
    >
      {[...sliderItems]}
    </Swiper>
  );
}
