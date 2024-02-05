"use client";
import { Navigation, Pagination, A11y } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import { useEffect, useState } from "react";
import StudyContainer from "./StudyContainer";

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
      <div className="font-semibold my-2 text-xl">🚩 내 주변 회화 모임!</div>
      <Swiper
        modules={[Pagination, A11y]}
        spaceBetween={10}
        slidesPerView={sliderCnt}
        pagination={{ clickable: true }}
        onSwiper={(swiper) => console.log(swiper)}
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
  );
};

export default StudyNearbyList;
