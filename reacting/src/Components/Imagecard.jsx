import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";

function Imagecard() {

    const [val, setVal] = useState(false);

    return(
        <div className="w-full h-screen flex justify-center items-center">
            <div className="relative w-72 h-40 rounded-md bg-zinc-300 flex overflow-hidden" >
                <img className={`shrink-0 transition-transform duration-600 ease-in-out ${val === false ? "-translate-x-[0%]":"-translate-x-[100%]"} w-full h-full object-cover `} src="https://plus.unsplash.com/premium_photo-1789080178308-24a2baf5a9d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
                <img className={`shrink-0 transition-transform duration-600 ease-in-out ${val === false ? "-translate-x-[0%]":"-translate-x-[100%]"} w-full h-full object-cover `}  src="https://images.unsplash.com/photo-1792090894054-a5312e786da1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D" alt="" />
                
                <span 
                    onClick={()=> setVal(()=> !val)}
                    className="w-8 h-8 absolute flex justify-center items-center bottom-[0%] left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-full bg-[#dadada8b] cursor-pointer">
                    <FaArrowRightLong size={".8em"} className={`transition-transform duration-600 ease-in-out ${val ? "rotate-180" : "rotate-0"}`} />
                </span>
                
            </div>
        </div>
    )

}

export default Imagecard;