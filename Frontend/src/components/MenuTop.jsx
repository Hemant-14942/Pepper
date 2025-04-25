import React, { useState } from "react";
import MenuBtn from "./MenuBtn";
import MenuItems from "./MenuItems";

const menuCategories = [
  { name: "Full Menu", image: "/assets/heroPizza.png" },
  { name: "Pizza", image: "/assets/heroPizza.png" },
  { name: "Pasta", image: "/assets/heroPizza.png" },
  { name: "Sides", image: "/assets/heroPizza.png" },
  { name: "Deserts", image: "/assets/heroPizza.png" },
  { name: "Drinks", image: "/assets/heroPizza.png" },
];

const MenuTop = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const toggleTick = (index) => {
    setSelectedIndex(index); 
  };
    const selectedCategory = menuCategories[selectedIndex].name;
    console.log(selectedCategory);
    

  return (
    <div className="menu mt-7">
      <div className="text flex flex-col justify-center items-start">
        <h1 className="text-7xl font-bold">Our Menu</h1>
        <p className="text-xl mt-7">
          From savory pizzas to refreshing drinks, we take pride in serving
          dishes that are made with care.
        </p>
        <p className="text-xl">
          Every meal is thoughtfully prepared to give you a culinary experience
          worth remembering.
        </p>
      </div>
      <div className="flex justify-around items-center mt-17 bg-white">
        {menuCategories.map((category, index) => (
          <MenuBtn
            key={index}
            ind={index}
            category={category}
            tick={index === selectedIndex}
            onClick={() => toggleTick(index)}
          />
        ))}
      </div>
      <MenuItems selectedCategory={selectedCategory} />
    </div>
  );
};

export default MenuTop;
