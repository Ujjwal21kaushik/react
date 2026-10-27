import React from "react";
const img = "https://plus.unsplash.com/premium_photo-1792912876223-0789eefc71b5?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
export default function Card({item, handleRemove, id, image=img}){
    return(
        <div className="w-44 bg-orange-200 flex flex-col items-center  p-2 rounded-xl">
            <div className="w-14 h-14 bg-zinc-200 rounded-full overflow-hidden">
                <img className="w-full h-full object-cover text-center" src={item.image ? item.image : image} alt={item.name} />
            </div>
            <h1 className="font-semibold">{item.name}</h1>
            <h5 className="font-semibold text-[10px] text-zinc-600 ">{item.email}</h5>
            <p className="text-center text-zinc-600 text-xs mt-1">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsam, libero?</p>
            <button 
                onClick={()=> handleRemove(id)}
                className="text-zinc-200 text-xs px-2 py-1 bg-red-600 rounded-xl mt-2 cursor-pointer"
                type="button"
                >
                    Remove it
            </button>
        </div>
    )
}