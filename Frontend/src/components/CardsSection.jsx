import React from 'react'
import HeroCard from './HeroCard';

const CardsSection = () => {
  return (
    <>
      <div className="container-cards flex flex-col justify-between items-center gap-17 py-2 mt-22">
        <div className="text flex flex-col items-center gap-7">
          <h1 className="text-5xl font-bold">Hot Pizza, Hotter Deals</h1>
          <p className="text-2xl">
            From family-sized deals to solo slices, find the perfect offer for
            your pizza cravings.
          </p>
        </div>
        <div className="cards flex ">
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
      </div>
      <div className="bigcard-cont w-full flex justify-center items-center overflow-hidden rounded-md ">
        <div className="flex flex-col items-center w-[79%]  h-[750px] ml-6 mb-2 bg-black rounded-3xl shadow-md">
          <div className="info-cont w-full h-[55%]  px-7 py-6 ">
            <div className="info w-full h-full p-1 flex flex-col gap-9 items-start">
              <h1 className="text-3xl font-bold text-white">Spicy Duo Deal</h1>
              <ul className="list-disc text-white ml-5">
                <li className="text-xl text-white">
                  1 Medium Firecracker Inferno
                </li>
                <li className="text-xl text-white">1 Medium Buffalo Bliss</li>
              </ul>
              <div className="btnprice flex justify-between items-center w-full mt-4">
                <button
                  type="button"
                  className="px-2 bg-white rounded-full text-2xl"
                >
                  order now
                </button>
                <span className="text-xl text-white">$21.99 - Save $4</span>
              </div>
            </div>
          </div>
          <div className="img  w-full overflow-hidden rounded-3xl">
            <div className="img-sub overflow-hidden flex justify-center w-full h-full mt-6 ">
              <img
                src="/assets/heroPizza.png"
                className="w-[110%] h-[110%] scale-128 mt-9"
                alt="Pepper Pizza"
              />
              <img
                src="/assets/heroPizza.png"
                className=" w-[110%] h-[110%] scale-128 mt-9"
                alt="Pepper Pizza"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center  mt-7">
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
    </>
  );
}

export default CardsSection