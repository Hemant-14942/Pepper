import React from 'react'

const AnimCards = () => {
  return (
    <div className="container w-[200px] h-[200px] relative rounded-lg overflow-hidden">
      <div className="imgdiv w-full h-full relative bg-cover bg-center">
        <img
          className="w-full h-full  absolute top-0 left-0 "
          src="https://picsum.photos/200/300"
          alt="Card"
        />
      </div>
      <div className="textdiv absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <h1 className="text-2xl font-bold whitespace-nowrap">new york</h1>
      </div>
      <div className="buttonsdiv"></div>
    </div>
  );
}

export default AnimCards