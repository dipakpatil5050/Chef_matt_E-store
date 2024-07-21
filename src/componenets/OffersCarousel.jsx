import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import offer from "../assets/images/Rectangle7.png";

import Item from "./Item";
import OfferPage from "./OfferPage";

function OffersCarousel() {
  return (
    <div className="w-full ">
      <Swiper
        className=""
        spaceBetween={-50}
        onNavigationShow={true}
        onPaginationRender={true}
        slidesPerView={1}
        autoplay
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className="">
          <OfferPage />
        </SwiperSlide>
        <SwiperSlide className="">
          <OfferPage />
        </SwiperSlide>
        <SwiperSlide className="">
          <OfferPage />
        </SwiperSlide>
        <SwiperSlide className="">
          <OfferPage />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default OffersCarousel;
