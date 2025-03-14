import React from "react";
import Carousel from "./ui/Carousel";

const OPTIONS = { loop: true };
const SLIDE_COUNT = 5;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

const CarouselSection = () => {
  return (
    <div className="relative">
    <div className="overflow-hidden bg-gray ">
      <Carousel slides={SLIDES} options={OPTIONS} />
    </div>
    <div className="absolute top-[30%] left-[4%] text-white">
        <div className="flex flex-col space-y-5 w-[55%]">
        <div className="text-xl">⭐⭐⭐⭐⭐</div>
        <h3 className="text-5xl font-bold">Pizza Perfection,<br/> Expertly Rated</h3>
        <h4 className="text-xl">Top foodies and chefs share their thoughts on why our pizzas stand out from the crowd.</h4>
        </div>
    </div>
    </div>
  );
};

export default CarouselSection;
