import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full flex justify-between items-center px-6 md:px-10 py-5 bg-white shadow-xs">
      <div>
        <span className="font-logo text-3xl text-pink-red font-bold">
          Pepper
        </span>
      </div>

      <div className="hidden md:flex gap-10">
        <a
          href="/"
          className="font-semibold text-lg cursor-pointer hover:text-pink-red transition"
        >
          Home
        </a>
        <a
          href="/menu"
          className="font-semibold text-lg cursor-pointer hover:text-pink-red transition"
        >
          Menu
        </a>
        <a
          href="/about"
          className="font-semibold text-lg cursor-pointer hover:text-pink-red transition"
        >
          About Us
        </a>
        <a
          href="/contact"
          className="font-semibold text-lg cursor-pointer hover:text-pink-red transition"
        >
          Contact
        </a>
      </div>

      <div className="hidden md:flex gap-6">
        <Button className="px-4 py-3 rounded-3xl font-semibold text-gray text-md bg-red-500 hover:text-white hover:bg-red-600 transition transform duration-100 hover:scale-105">
          Order Now
        </Button>
      </div>

      <div className="md:hidden">
        <button onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white shadow-lg py-5 flex flex-col items-center gap-4 md:hidden">
          <span className="font-semibold text-lg cursor-pointer hover:text-pink-red transition">
            Home
          </span>
          <span className="font-semibold text-lg cursor-pointer hover:text-pink-red transition">
            Menu
          </span>
          <span className="font-semibold text-lg cursor-pointer hover:text-pink-red transition">
            About Us
          </span>
          <span className="font-semibold text-lg cursor-pointer hover:text-pink-red transition">
            Contact
          </span>
          <Button
            className="px-4 py-2 font-semibold text-gray text-md"
            variant="outline"
          >
            SignUp/Login
          </Button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
