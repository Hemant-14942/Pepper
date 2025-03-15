import React from 'react'

const DeliveryZones = ({item}) => {
  return (
    <div className=" p-2  ">
      <h2 className="text-sm font-bold mb-2">{item?.title} :</h2>
      <ol className="text-gray-600 list-disc pl-5">
        {item?.descriptions?.map((desc, index) => (
          <li key={index}>{desc?.points}</li>
        ))}
      </ol>
    </div>
  );

};

export default DeliveryZones