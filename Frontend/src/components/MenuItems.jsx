import React from "react";
import menuItems from "./MenuData";

const MenuItems = ({ selectedCategory }) => {
  const categories =
    selectedCategory === "Full Menu"
      ? Object.values(menuItems).flat()
      : menuItems[selectedCategory] || [];

  return (
    <>
      {
        categories.map((item , ind)=>{
          console.log(item);
          
        })
      }
    </>
  );
};

export default MenuItems;
