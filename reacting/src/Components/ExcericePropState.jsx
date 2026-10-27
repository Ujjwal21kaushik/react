import React from "react";
import { FaRegHeart } from "react-icons/fa6";
import { FcLike } from "react-icons/fc";

export default function ExcericePropState({ values, handleRealData, index }) {
  const { name, artist, isAdded, image } = values;
  return (
    <div className="w-55 h-32 bg-zinc-100 rounded-md p-2">
      <div className="flex items-start justify-between gap-4">
        <div className="w-12 h-12 bg-orange-400 rounded-md overflow-hidden shrink-0">
          <img
            className="w-full h-full object-cover "
            src={image}
            alt=""
          />
        </div>

        <button
          type="button"
          onClick={()=>handleRealData(index)}
          className={`p-2 bg-[#dadada7b] text-xs font-semibold rounded-full text-white cursor-pointer`}
        >
          {!isAdded ? <FaRegHeart size={"1rem"} />: <FcLike size={"1rem"} />}
        </button>
      </div>

        <div className="mt-4">
          <h1 className="font-semibold whitespace-nowrap">{name}</h1>
          <h5 className="text-black text-[12px]">{artist}</h5>
        </div>
    </div>
  );
}
