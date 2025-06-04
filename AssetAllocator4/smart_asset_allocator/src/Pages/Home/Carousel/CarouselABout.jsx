import React from "react";
import CarouselCard from "./CarouselCard";

const CarouselABout = ({ details, loading }) => {
  return (
    <div className="flex flex-wrap justify-center items-center gap-2 ">
      {!loading
        ? details?.cards?.map((item) => (
            <CarouselCard key={item.id} {...item} />
          ))
        : [1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className=" w-full  h-[220px] p-4 m-2 rounded-lg hover:shadow-all bg-white overflow-hidden cursor-pointer transition-all duration-300"
            >
              Loading...
            </div>
          ))}
    </div>
  );
};

export default CarouselABout;
