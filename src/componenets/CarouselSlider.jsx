import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import SliderImages from "../assets/images/slide4_image_1.png";
import NamePlate from "./NamePlate";

function CarouselSlider() {
  return (
    <div className="">
      <Swiper
        className="ml-[150px]"
        spaceBetween={50}
        onNavigationShow={true}
        onPaginationRender={true}
        slidesPerView={1}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide>
          <NamePlate />
          <img className="" src={SliderImages} alt="img1" />
        </SwiperSlide>
        <SwiperSlide>
          <NamePlate />
          <img className="" src={SliderImages} alt="img2" />
        </SwiperSlide>
        <SwiperSlide>
          <NamePlate />
          <img className="" src={SliderImages} alt="img3" />
        </SwiperSlide>
        <SwiperSlide>
          <NamePlate />
          <img className="" src={SliderImages} alt="img4" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default CarouselSlider;
