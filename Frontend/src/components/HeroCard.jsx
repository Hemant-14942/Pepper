import React from 'react'

const HeroCard = ({ title, items, price, images,bgcolor }) => {
  return (
    <div
      className={`flex flex-col items-center w-full max-h-[500px] mb-2 ${bgcolor} rounded-3xl shadow-md overflow-hidden`}
    >
      <div className="info-cont w-full h-auto px-6 py-5 md:px-12 md:py-10 ">
        <div className="info w-full h-full  flex flex-col gap-9 items-start">
          <h1 className="text-2xl font-bold text-white">{title}</h1>

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

      <div >
        <div className="flex justify-center items-center">
          {images.map((img, index) => (
            <img
              key={index}
              src={img}
              className="md:w-[70%] -mx-10"
              alt="Pizza"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroCard