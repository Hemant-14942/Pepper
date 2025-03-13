import React from "react";
import HeroCard from "./HeroCard";

const HeroCardSection = () => {
  return (
    <div className="py-2 mt-22 px-10 w-full">
      <div className="text flex flex-col items-center gap-7">
          <h1 className="text-5xl font-bold">Hot Pizza, Hotter Deals</h1>
          <p className="text-2xl">
            From family-sized deals to solo slices, find the perfect offer for
            your pizza cravings.
          </p>
        </div>
        
        <div className="flex justify-center items-center gap-5 mt-10">
          <HeroCard
            title="Spicy Duo Deal"
            items={["1 Medium Firecracker Inferno", "1 Medium Buffalo Bliss"]}
            price="$21.99 - Save $4"
            images={["/assets/heroPizza.png", "/assets/garlicPizza.png"]}
            bgcolor={"bg-pink-red"}
          />
          <HeroCard
            title="Cheesy Feast"
            items={["1 Large Cheese Lovers", "1 Large Garlic Delight"]}
            price="$19.99 - Save $5"
            images={["/assets/heroPizza.png", "/assets/garlicPizza.png"]}
            bgcolor={"bg-yellow"}
          />
        </div>

        <div className="flex flex-col items-center max-h-[550px] bg-black rounded-3xl shadow-md overflow-hidden my-7">
          <div className="w-full px-16 py-10">
            <div className="w-full h-full  flex flex-col gap-9 items-start">
              <h1 className="text-3xl font-bold text-white">Spicy Duo Deal</h1>
              <ul className="list-disc text-white ">
                <li className="text-xl text-white">
                  1 Medium Firecracker Inferno
                </li>
                <li className="text-xl text-white">1 Medium Buffalo Bliss</li>
              </ul>
              <div className="btnprice flex justify-between items-center w-full mt-4">
                <button
                  type="button"
                  className="px-4 py-2 bg-white rounded-full text-lg font-bold"
                >
                  order now
                </button>
                <span className="text-xl text-white">$21.99 - Save $4</span>
              </div>
            </div>
          </div>
          <div >
          <div className="flex justify-center items-center -mt-10">
          <img
                src="/assets/heroPizza.png"
                className="w-[65%] -mx-20"
                alt="Pepper Pizza"
              />
              <img
                src="/assets/heroPizza.png"
                className=" w-[65%] -mx-20"
                alt="Pepper Pizza"
              />
            </div>
          </div>
        </div>

      <div className="flex justify-center items-center gap-5 mt-5">
        <HeroCard
          title="Pepperoni Special"
          items={["2 Large Pepperoni Pizzas", "1 Large Margherita"]}
          price="$25.99 - Save $6"
          images={["/assets/heroPizza.png", "/assets/garlicPizza.png"]}
          bgcolor={"bg-green"}
        />
        <HeroCard
          title="Veggie Delight"
          items={["1 Large Veggie Supreme", "1 Large Margherita"]}
          price="$18.99 - Save $3"
          images={["/assets/heroPizza.png", "/assets/garlicPizza.png"]}
          bgcolor={"bg-orange"}
        />
      </div>
    </div>
  );
};

export default HeroCardSection;
