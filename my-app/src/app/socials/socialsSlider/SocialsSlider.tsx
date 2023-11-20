"use client";

import React from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import { Autoplay, EffectCoverflow } from "swiper/modules";

import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-coverflow";

import SocialsListItem from "../socialsListItem/SocialsListItem";
import TopListItem from "../topListItem/index";

export default function SocialsSlider() {
  return (
    <section className="w-full">
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
            className="mySwiper"
          >
            <SwiperSlide>
              <div className="mb-[20px]">
                <TopListItem type="discord" />
              </div>
              <SocialsListItem type="discord" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-[20px]">
                <TopListItem type="instagram" />
              </div>
              <SocialsListItem type="instagram" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-[20px]">
                <TopListItem type="telegram" />
              </div>
              <SocialsListItem type="telegram" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-[20px]">
                <TopListItem type="discord" />
              </div>
              <SocialsListItem type="discord" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-[20px]">
                <TopListItem type="instagram" />
              </div>
              <SocialsListItem type="instagram" />
            </SwiperSlide>
            <SwiperSlide>
              <div className="mb-[20px]">
                <TopListItem type="telegram" />
              </div>
              <SocialsListItem type="telegram" />
            </SwiperSlide>
          </Swiper>
        </ul>
      </div>
    </section>
  );
}
