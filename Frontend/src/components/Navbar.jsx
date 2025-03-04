import React from "react";
import { Button } from "@/components/ui/button";
function Navbar() {
  return (
    <div>
      <nav className="flex justify-between items-center px-10 py-5">
        <div>
         <span className="font-logo text-3xl text-pink-red font-bold">Pepper</span>
        </div>
        <div className="flex gap-10">
          <span className="font-bold">Home</span>
          <span className="font-bold">Menu</span>
          <span className="font-bold">About Us</span>
          <span className="font-bold">Contact</span>
        </div>
        <div className="flex gap-6">
          <Button variant="outline">Login</Button>
          <Button className="bg-purple-700">Signup</Button>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
