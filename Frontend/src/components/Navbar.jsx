import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-6 md:px-10 py-5 bg-white shadow-md">
      <div>
        <span className="font-logo text-3xl text-pink-red font-bold">Pepper</span>
      </div>

      <div className="hidden md:flex gap-10">
        <span className="font-semibold text-lg cursor-pointer hover:text-pink-red transition">Home</span>
        <span className="font-semibold text-lg cursor-pointer hover:text-pink-red transition">Menu</span>
        <span className="font-semibold text-lg cursor-pointer hover:text-pink-red transition">About Us</span>
        <span className="font-semibold text-lg cursor-pointer hover:text-pink-red transition">Contact</span>
      </div>

      <div className="hidden md:flex gap-6">
        <Button className="px-4 py-2 font-semibold text-gray text-md" variant="outline">
          SignUp/Login
        </Button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg py-5 flex flex-col items-center gap-4 md:hidden">
          <span className="font-semibold text-lg cursor-pointer hover:text-pink-red transition">Home</span>
          <span className="font-semibold text-lg cursor-pointer hover:text-pink-red transition">Menu</span>
          <span className="font-semibold text-lg cursor-pointer hover:text-pink-red transition">About Us</span>
          <span className="font-semibold text-lg cursor-pointer hover:text-pink-red transition">Contact</span>
          <Button className="px-4 py-2 font-semibold text-gray text-md" variant="outline">
            SignUp/Login
          </Button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
