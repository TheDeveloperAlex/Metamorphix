"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

import { socials } from "@/linksData/linksData.contracts";

import SocialsListItem from "../socialsListItem/SocialsListItem";
import TopListItem from "../topListItem/index";

export default function SocialsSlider() {
  const socialItems = [...socials, ...socials].map((social, i) => {
    return (
      <SwiperSlide key={`${socials}_${i}`}>
        <div className="mb-[20px]">
          <TopListItem type={social} />
        </div>
        <SocialsListItem type={social} />
      </SwiperSlide>
    );
  });

  return (
    <section className={`w-full max-[767px]:mt-[58px] min-[768px]:mt-[80px]`}>
      <div>
        <ul className=" w-full">
          <Swiper
            loop={true}
            effect={"coverflow"}
            centeredSlides={true}
            slidesPerView={"auto"}
            autoplay={{
              delay: 3000,
              disableOnInteraction: true,
              // disableOnInteraction: false,
            }}
            coverflowEffect={{
              rotate: 0,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            spaceBetween={80}
            modules={[EffectCoverflow, Autoplay]}
            className="socialsSlider"
          >
            {socialItems}
          </Swiper>
        </ul>
      </div>
    </section>
  );
}
