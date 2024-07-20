import React from "react";
import Slider from "./CarouselSlider.jsx";
function HomePage() {
  return (
    <div className="w-[1440px] h-[959px]">
      {/* <div className="absolute top-[661px] left-[600px] gap-2">
        <div className="absolute z-40 border-[3px] w-[359px] h-[76px] flex justify-center items-center">
          <h1 className=" text-[#FFFFFF] font-[400] text-[24px] p-3 flex justify-center items-center">
            Meet Chef Matt
          </h1>
        </div>
      </div> */}
      <Slider />
    </div>
  );
}

export default HomePage;
