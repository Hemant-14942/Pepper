import React from 'react';

const LabelCards = () => {
  return (
    <div className="rounded-4xl overflow-hidden shadow-sm bg-white p-2">
      <div className="flex justify-center items-start ">
        <img
          src="/assets/pepproni.png"
          alt="Pepperoni Popper"
          className="w-full h-88 object-contain -mt-4 "
        />
      </div>
      <div className="p-4">
        <h2 className="text-gray text-xl font-bold">Pepperoni Popper</h2>
        <p className="text-gray-600 text-sm mt-2">
          Double pepperoni, mozzarella, spicy marinara sauce, crushed red pepper, black olives
        </p>
        <div className="mt-4 flex items-center justify-between">
          <button className="bg-pink-red text-white px-4 py-2 rounded-[50px] font-semibold hover:bg-red-600 transition ease-in-out">
            Order Now
          </button>
          <span className="text-gray-700 text-lg font-semibold">
            from <span className="text-gray text-xl font-bold">$14.99</span>
          </span>
        </div>
      </div>
    </div>
  );
};

export default LabelCards;
