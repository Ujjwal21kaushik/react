import React, { useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";

function Page() {

    const data = [
        {
            image: "https://images.unsplash.com/photo-1649734926695-1b1664e98842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

        },
        {
            image: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

        },
        {
            image: "https://plus.unsplash.com/premium_photo-1680807869086-e08309acfb24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",

        },
        {
            image: "https://plus.unsplash.com/premium_photo-1789080178308-24a2baf5a9d6?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        },
        {
            image: "https://images.unsplash.com/photo-1792090894054-a5312e786da1?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"
        }


    ]

    const [val, setVal] = useState(0);

    const handleNext = ()=> {

        setVal(prev => {
            // if(prev === data.length - 1){
            //     return 0;
            // }

            return prev + 1;
        }
            
        )
    }
    const handlePrev = ()=> {

    
        setVal(prev => {
            // if(prev === 0){
            //     return data.length - 1;
            // }

            return prev - 1;           
        }
            
        )
    }
    
    return(
        <div className="w-full h-screen flex justify-center items-center bg-zinc-500 ">
            <div className=" relative w-150 h-80 bg-zinc-200 rounded-md overflow-hidden">
                <div className="flex h-full transition-transform duration-500 ease-in-out"
                    style={{ transform: `translateX(-${val * 100}%)` }}>
                {
                    data.map((item, index)=> (
                        <div key={index} className="w-full h-full shrink-0">
                            <img className="w-full h-full object-cover " src={item.image} alt="" />
                        </div>
                            
                        ))
                }   
                </div>



                <div className="absolute bottom-0 left-1/2 -translate-x-[50%] -translate-y-[50%] flex justify-center items-center gap-4">
                    <span  
                        onClick={val < 1 ? undefined : handlePrev}
                        className={`w-10 h-10 flex justify-center items-center rounded-full bg-[#dadada8b] ${val < 1 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}>
                        <FaArrowLeftLong size={".9em"} />
                    </span>
                    <span 
                        onClick={val > data.length - 2 ? undefined :handleNext} 
                        className={`w-10 h-10 flex justify-center items-center rounded-full bg-[#dadada8b] ${val > data.length - 2 ? "opacity-30 cursor-not-allowed" : "cursor-pointer"}`}>
                        <FaArrowRightLong size={".9em"} />
                    </span>
                </div>
            </div>
        </div>
    )

}

export default Page;