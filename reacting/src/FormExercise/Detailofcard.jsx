import React, { useState } from "react";
import { MdOutlineMailOutline, MdOutlinePermIdentity } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { AiOutlineInstagram, AiOutlineDiscord, AiOutlineLinkedin } from "react-icons/ai";
import { TbMichelinStarFilled } from "react-icons/tb";
import { CgDetailsMore } from "react-icons/cg";
const img= "https://plus.unsplash.com/premium_photo-1676496046182-356a6a0ed002?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
const imgp ="https://images.unsplash.com/photo-1792861249890-ffabf961d3ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
export default function Detailofcard({val, setVal}){
    
  return (
    <div 
      className={`w-88 bg-yellow-200 rounded-xl z-10 absolute -top-15 -left-15 p-4 transition-opacity duration-300 ease-in-out ${
        !val ? "opacity-0 pointer-events-none" : "opacity-100"
      }`}
    >
        <div className="w-full h-10 flex justify-between items-center">
            <TbMichelinStarFilled />
            <IoMdClose 
                onClick={()=> setVal(false)}
                cursor={"pointer"} />
        </div>

        <div className="relative w-full h-34">
            <div className="w-full h-24 overflow-hidden">
                <img 
                    className="w-full h-full object-cover"
                    src={img} alt="" />
            </div>

            <div className="absolute top-25 left-1/2 -translate-x-[50%] -translate-y-[50%] 
                bg-white w-22 h-22 overflow-hidden p-[2px]
            ">
                <img 
                className="w-full h-full object-cover"
                src={imgp} alt="" />
            </div>
        </div>

        <div className="w-full bg-yellow-400/20 p-2">
            <div className="w-full mb-4 flex justify-between items-center">
                <div>
                    <h1 className="text-[16px] font-semibold">Dr. Alisi Martin</h1>
                    <h5 className="text-[12px] text-zinc-600">alisi@gmail.com</h5>
                </div>

                <div className="flex gap-1">
                    <AiOutlineInstagram />
                    <AiOutlineLinkedin />
                </div>

            </div>

            <div className="w-full mb-6">
                <p className="text-[12px] text-zinc-600">Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo rerum illum beatae veritatis et! Repudiandae et tenetur ab quas molestiae.</p>
            </div>

            {/* <div className="w-fit m-auto">
                <button 
                    className="px-3 py-1 text-zinc-100 bg-yellow-700 rounded-md cursor-pointer" 
                    type="button"
                >
                        read more
                </button>
            </div> */}
        </div>
    </div>
  );
}
