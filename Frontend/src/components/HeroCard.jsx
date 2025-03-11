import React from 'react'

const HeroCard = ({ title, items, price, images,bgcolor }) => {
  return (
    <div
      className={`flex flex-col items-center w-[580px] h-[520px] ml-6 mb-2 ${bgcolor} rounded-3xl shadow-md overflow-hidden`}
    >
      <div className="info-cont w-full h-[52%]  px-7 py-6 ">
        <div className="info w-full h-full p-1 flex flex-col gap-9 items-start">
          <h1 className="text-3xl font-bold text-white">{title}</h1>
          <ul className="list-disc text-white ml-5">
            {items.map((item, index) => (
              <li key={index} className="text-xl text-white">
                {item}
              </li>
            ))}
          </ul>
          <div className="btnprice flex justify-between items-center w-full mt-4">
            <button
              type="button"
              className="px-5 bg-white rounded-full text-lg font-bold py-2"
            >
              order now
            </button>
            <span className="text-xl text-white">{price}</span>
          </div>
        </div>
      </div>
      <div className="img  w-full h-[50%] overflow-hidden">
        <div className="img-sub overflow-hidden flex justify-center w-full h-full mt-6 ">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="w-full h-full scale-140 mt-6"
              alt="Pizza"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCard