import React from "react";
import { toast } from "react-toastify";

const CarouselCard = ({
  lobDisplayText,
  newHeroOfferCardUrl,
  heroUrl,
  newHeroUrl,
  hero,
  pTl,
  pTx,
}) => {
  return (
    <article className=" max-w-[375px] w-[375px] md:w-[476px] md:max-w-[476px]  h-[200px]  m-2 shadow-md rounded-lg hover:shadow-2xl hover:scale-101 shrink-0 bg-white overflow-hidden cursor-pointer transition-all duration-300">
      <div className=" max-w-full w-full m-2 flex">
        <img
          src={newHeroOfferCardUrl || newHeroUrl}
          alt={pTl}
          width={150}
          height={80}
          className="m-2 rounded-md bg-gray-100 flex-grow-0 aspect-square"
        />
        <div className="details p-2  text-left w-full text-ellipsis overflow-hidden ">
          <h2 className="font-medium  capitalize text-slate-400  text-md md:text-base pb-1">
            {lobDisplayText?.toLowerCase()}{" "}
          </h2>
          <h3 className="font-medium text-xs md:text-lg text-wrap truncate pb-1 ">
            {pTl}
          </h3>
          <p className=" text-slate-500 text-wrap text-xs md:text-lg text-clip pt-1">
            {pTx}
          </p>
        </div>
      </div>
      {/* <div
        className="w-full my-2 p-1 border-t-2 border-dotted font-medium text-md md:text-lg text-blue-500 hover:bg-blue-100 transition-all duration-300"
        onClick={() => {
          toast.info("Page is Under Construction \n Sorry for Inconvenience");
        }}
      >
        <span>View Details</span>
      </div> */}
    </article>
  );
};

export default CarouselCard;
