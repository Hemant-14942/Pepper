import React from "react";
import MenuTop from "../components/MenuTop";
import MenuItems from "../components/MenuItems";

const Menu = () => {
  return (
    <div className="menu-cont px-15">
      <MenuTop /> 
      <MenuItems/>
    </div>
  );
};

export default Menu;
