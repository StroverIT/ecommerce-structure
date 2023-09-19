"use client"
import React, { useRef, useState } from "react";
// Next
import Image from "next/image";
import Link from "next/link";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

import style from "./SwiperPag.module.css";
import navStyle from "./SwiperNav.module.css";

// import required modules
import { Pagination, Navigation, Autoplay, EffectFade, HashNavigation } from "swiper";
// Components
import SwiperNav from "./SwiperNav";

export default function SwiperPag({
  images,
  navSize,
  imgHeight_lg = "lg:h-[500px]",
}) {
  return (
    <>
      <Swiper
        pagination={{
          el: `.${style.pagination}`,
          bulletActiveClass: `${style.paginationActive}`,
          clickable: true,
          // renderBullet: function (index, className) {
          //   return `<span class="${className} ${style.test}"> ${menu[index]}</span>`
          // },
        }}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        effect="fade"
        navigation={{
          nextEl: `.${navStyle.swiperNext}`,
          prevEl: `.${navStyle.swiperPrev}`,
          disabledClass: `${navStyle.swiperDisabled}`,
        }}
         hashNavigation={{
          watchState: true,
        }}
        modules={[Pagination, Navigation, Autoplay, EffectFade, HashNavigation]}
        className={`mySwiper relative  w-full  ${imgHeight_lg}  ml-auto`}
      >
        <div className={`${style.paginationCont}`}>
          <div className={`${style.pagination}`}></div>
        </div>

        {images?.slice(0, 10).map((image) => {
          return (
            <SwiperSlide key={image.key} className="" data-hash={image.hash}>
                <div className="flex items-center justify-center ">
                  <Image
                    src={image.src}
                    //  layout="fill"
                    fill
                    alt={image.key}
                    className={`${style.swiperSlideImg} cursor-pointer text-right pl-auto object-contain`}
                  />
                </div>
            </SwiperSlide>
          );
        })}
        <SwiperNav size={navSize} />
      </Swiper>
    </>
  );
}
