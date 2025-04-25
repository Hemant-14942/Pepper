import React from "react";

const MenuBtn = ({ category, tick, onClick }) => {
  return (
    <button
      onClick={onClick}
      className=" relative flex items-center   px-6 py-3 transition transform duration-300 hover:scale-105 gap-8 "
    >
      <img className="h-6 w-6" src={category.image} alt={category.name} />
      <p className="text-sm capitalize font-normal mr-5">{category.name}</p>

      {/* Tick stays visible when selected */}
      <p
        className={`w-[7px] h-[7px] bg-pink-red rounded-full absolute right-2 transition-all duration-300  ${
          tick ? "opacity-100 scale-100" : "opacity-0 scale-0"
        }`}
      ></p>
    </button>
  );
};

export default MenuBtn;
