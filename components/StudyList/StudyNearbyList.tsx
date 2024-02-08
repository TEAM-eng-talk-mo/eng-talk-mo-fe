"use client";
import { A11y } from "swiper/modules";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";

import "swiper/css";
import { useEffect, useRef, useState } from "react";
import StudyContainer from "./StudyContainer";

import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";

// sm 640 md 768 lg 1024 xl 1280
const StudyNearbyList = () => {
  const [sliderCnt, setSliderCnt] = useState<number | undefined>();

  useEffect(() => {
    window.addEventListener("resize", () => {
      const width = window.innerWidth;
      if (width < 640) {
        setSliderCnt(1);
        return;
      }
      if (width < 1024) {
        setSliderCnt(2);
        return;
      }
      setSliderCnt(3);
    });
  }, []);
  return (
    <div>
      <div className="flex justify-between font-semibold my-2 text-xl ">
        <div>🚩 내 주변 회화 모임!</div>
        <div className="flex gap-1 text-sm items-center">
          ellipsis
          <div className=" hover:bg-neutral-100">
            <IoChevronBackSharp />
          </div>
          <div>
            <IoChevronForwardSharp />
          </div>
        </div>
      </div>
      <div className="flex items-center mb-8 gap-2">
        <Swiper
          modules={[A11y]}
          spaceBetween={10}
          slidesPerView={sliderCnt}
          onSlideChange={() => console.log("slide change")}>
          <SwiperSlide className="bg-red-50">
            <StudyContainer />
          </SwiperSlide>
          <SwiperSlide className="bg-red-50">
            <StudyContainer />
          </SwiperSlide>
          <SwiperSlide className="bg-red-50">
            <StudyContainer />
          </SwiperSlide>
          <SwiperSlide className="bg-red-50">
            <StudyContainer />
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
};

export default StudyNearbyList;
