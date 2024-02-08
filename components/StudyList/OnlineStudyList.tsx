"use client";
import { useEffect, useRef, useState } from "react";

import { A11y } from "swiper/modules";
import { Swiper as SwiperContianer, SwiperSlide } from "swiper/react";
import Swiper from "swiper";
import { cn } from "@/lib/utils";
import "swiper/css";

import StudyContainer from "./StudyContainer";

import { IoChevronBackSharp } from "react-icons/io5";
import { IoChevronForwardSharp } from "react-icons/io5";
import { GoDot, GoDotFill } from "react-icons/go";

const OnlineStudyList = () => {
  const [sliderCnt, setSliderCnt] = useState(1);
  const [sliderIndex, setSliderIndex] = useState<number>();
  const [pageIndex, setPageIndex] = useState<0 | 1 | 2>(0);

  const swiperRef = useRef<Swiper>();
  const pageRef = useRef<Swiper>();
  const sliderContentsCnt = 10;

  const handleSliderChange = () => {
    const prevIndex = sliderIndex;
    setSliderIndex(swiperRef.current?.activeIndex);
    if (swiperRef.current?.activeIndex! - prevIndex! > 0) {
      if (pageIndex !== 2) setPageIndex((prev) => (prev + 1) as 1 | 2);
      if (pageIndex === 2) pageRef.current?.slideNext();
    }
    if (swiperRef.current?.activeIndex! - prevIndex! < 0) {
      if (pageIndex !== 0) setPageIndex((prev) => (prev - 1) as 0 | 1);
      if (pageIndex === 0) pageRef.current?.slidePrev();
    }
  };

  const handleSlideLeft = () => {
    swiperRef.current?.slidePrev();
  };

  const handleSlideRight = () => {
    swiperRef.current?.slideNext();
  };

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
        <div>💻 온라인 회화 모임!</div>
        <div className="flex gap-1 text-sm items-center">
          <div
            className={cn(
              "rounded-full p-1 transition",
              sliderIndex === 0
                ? "text-neutral-400"
                : "hover:bg-neutral-200 hover:cursor-pointer"
            )}
            onClick={handleSlideLeft}>
            <IoChevronBackSharp size={25} />
          </div>
          <div
            className={cn(
              "rounded-full p-1 transition",
              sliderIndex === sliderContentsCnt - sliderCnt
                ? "text-neutral-400"
                : "hover:bg-neutral-200 hover:cursor-pointer"
            )}
            onClick={handleSlideRight}>
            <IoChevronForwardSharp size={25} />
          </div>
        </div>
      </div>
      <div>
        <SwiperContianer
          modules={[A11y]}
          spaceBetween={10}
          slidesPerView={sliderCnt}
          onSlideChange={() => handleSliderChange()}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
            setSliderIndex(swiper.activeIndex);
          }}>
          {Array.from({ length: 10 }, (_, index) => (
            <SwiperSlide key={index} className="bg-red-50">
              <StudyContainer />
            </SwiperSlide>
          ))}
        </SwiperContianer>
        <div className="flex justify-center items-center">
          <div className="w-[80px]">
            <SwiperContianer
              modules={[A11y]}
              spaceBetween={0}
              slidesPerView={5}
              onSwiper={(swiper) => {
                pageRef.current = swiper;
              }}>
              <SwiperSlide>
                <div className="w-4 h-4" />
              </SwiperSlide>
              {Array.from(
                { length: Math.ceil(sliderContentsCnt / sliderCnt) },
                (_, index) => (
                  <SwiperSlide key={index}>
                    {index === sliderIndex ? <GoDotFill /> : <GoDot />}
                  </SwiperSlide>
                )
              )}
              <SwiperSlide>
                <div className="w-4 h-4" />
              </SwiperSlide>
            </SwiperContianer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineStudyList;
