import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderImages from "../assets/images/slide4_image_1.png";

function CarouselSlider() {
  return (
    <div className="">
      <Swiper
        className=""
        spaceBetween={50}
        onNavigationShow={true}
        onPaginationRender={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <div className="absolute top-[661px] left-[600px] gap-2">
            <div className="absolute z-40 border-[3px] w-[359px] h-[76px] flex justify-center items-center cursor-pointer">
              <h1 className=" text-[#FFFFFF] font-[400] text-[24px] p-3 flex justify-center items-center">
                Meet Chef Matt
              </h1>
            </div>
          </div>
          <img className="" src={SliderImages} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute top-[661px] left-[600px] gap-2">
            <div className="absolute z-40 border-[3px] w-[359px] h-[76px] flex justify-center items-center cursor-pointer">
              <h1 className=" text-[#FFFFFF] font-[400] text-[24px] p-3 flex justify-center items-center">
                Meet Chef Matt
              </h1>
            </div>
          </div>
          <img className="" src={SliderImages} alt="img2" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute top-[661px] left-[600px] gap-2">
            <div className="absolute z-40 border-[3px] w-[359px] h-[76px] flex justify-center items-center cursor-pointer">
              <h1 className=" text-[#FFFFFF] font-[400] text-[24px] p-3 flex justify-center items-center">
                Meet Chef Matt
              </h1>
            </div>
          </div>
          <img className="" src={SliderImages} alt="img3" />
        </SwiperSlide>
        <SwiperSlide>
          <div className="absolute top-[661px] left-[600px] gap-2">
            <div className="absolute z-40 border-[3px] w-[359px] h-[76px] flex justify-center items-center cursor-pointer">
              <h1 className=" text-[#FFFFFF] font-[400] text-[24px] p-3 flex justify-center items-center">
                Meet Chef Matt
              </h1>
            </div>
          </div>
          <img className="" src={SliderImages} alt="img4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselSlider;
