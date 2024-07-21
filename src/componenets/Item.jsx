import React from "react";
import product1 from "../assets/images/Ellipse5.png";

function Item({ productImg, Name, oldPrice, newPrice }) {
  return (
    <>
      <div className="w-[234px] h-[314px] top-[1252] left-[242px]">
        <div className="w-[234px] h-[234px]">
          <img src={productImg} alt="item1" />
        </div>
        <h1 className="text-[#D29A5A] w-[162px] h-[62px] top-[1512px] left-[308px] font-[400] text-[18px] ml-9 flex justify-center items-center leading-[21px]">
          {Name}
        </h1>
        <h2 className="text-white w-[98px] h-[24px] font-[400] align-middle text-[14px] ml-[70px] mb-16 leading-[21px] flex item-center justify-center gap-3">
          <span className="line-through">{oldPrice}</span>
          {newPrice}
        </h2>
      </div>
    </>
  );
}

export default Item;
