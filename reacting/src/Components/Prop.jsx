import React, { useState } from "react";

export default function Prop({values, handleFriend, index}) {
 const {name, profession, image, isFriend} = values;
  return (
    <div className="w-60  bg-zinc-100 rounded">
      <div className="w-full h-60 bg-sky-300 rounded overflow-hidden">
        <img
          className="w-full object-cover"
          src={image}
          alt=""
        />
      </div>
      <div className="px-2 py-2">
        <h1 className="font-semibold text-xl">{name}</h1>
        <h5 className="text-zinc-400 text-[12px]">{profession}</h5>
        <button
            type="button"
            className={`px-3 py-1 mt-3 bg-${isFriend ? "green" : "blue"}-600 text-xs font-semibold rounded text-white`}
            onClick={()=> handleFriend(index)}
          >
          {!isFriend ? 'Add friend': 'Remove friend'}
        </button>
      </div>
    </div>
  );
}
