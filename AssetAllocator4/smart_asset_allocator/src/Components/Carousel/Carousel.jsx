import React, { useRef } from "react";
import { IoMdArrowBack, IoMdArrowForward } from "react-icons/io";
import { Skeleton } from "antd";

const Carousel = ({ items, loading, onItemClick, isPlanCarousel = false }) => {
  const carouselContainer = useRef();

  const navigation = (dir) => {
    const container = carouselContainer.current;
    const scrollAmount =
      dir === "left"
        ? container.scrollLeft - container.offsetWidth / 2
        : container.scrollLeft + container.offsetWidth / 2;
    container.scrollTo({ left: scrollAmount, behavior: "smooth" });
  };

  return (
    <div className="relative mb-6">
      <IoMdArrowBack
        className="absolute left-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 shadow-md hover:scale-110 transition-all"
        onClick={() => navigation("left")}
      />

      <div
        ref={carouselContainer}
        className="flex overflow-x-auto gap-4 py-4 scrollbar-hide px-2"
      >
        {!loading
          ? items.map((item) => (
              <div
                key={item.id}
                onClick={() => onItemClick(item.id)}
                className={`flex-shrink-0 ${
                  isPlanCarousel ? "w-56 h-40" : "w-48 h-32"
                } rounded-lg flex flex-col items-center justify-center cursor-pointer hover:shadow-md transition-all border-2 ${
                  item.isActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-100 bg-gray-50"
                }`}
              >
                {!isPlanCarousel && (
                  <span className="text-3xl mb-2">{item.icon}</span>
                )}
                <p className="text-center font-medium px-2">{item.name}</p>
                {isPlanCarousel && (
                  <p className="text-sm text-gray-500 mt-1">{item.category}</p>
                )}
              </div>
            ))
          : [1, 2, 3].map((item) => (
              <Skeleton
                key={item}
                className={`flex-shrink-0 ${
                  isPlanCarousel ? "w-56 h-40" : "w-48 h-32"
                } rounded-lg`}
                active
              />
            ))}
      </div>

      <IoMdArrowForward
        className="absolute right-0 top-1/2 transform -translate-y-1/2 z-10 cursor-pointer bg-white rounded-full p-2 shadow-md hover:scale-110 transition-all"
        onClick={() => navigation("right")}
      />
    </div>
  );
};

export default Carousel;
