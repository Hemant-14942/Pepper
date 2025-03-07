import React from "react";
import { Button } from "@/components/ui/button";
function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center px-10 py-5">
        <div>
         <span className="font-logo text-3xl text-pink-red font-bold">Pepper</span>
        </div>
        <div className="flex gap-10 ">
          <span className="font-semibold text-lg">Home</span>
          <span className="font-semibold text-lg">Menu</span>
          <span className="font-semibold text-lg">About Us</span>
          <span className="font-semibold text-lg">Contact</span>
        </div>
        <div className="flex gap-6">
          <Button className="px-4 py-6 font-semibold text-gray text-md" variant="outline">SignUp/Login</Button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
