import React from "react";
import { MdOutlineMailOutline, MdOutlinePermIdentity } from "react-icons/md";
import { CgDetailsMore } from "react-icons/cg";
import Detailofcard from "./Detailofcard.jsx"

const imgp ="https://images.unsplash.com/photo-1792861249890-ffabf961d3ba?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D";
export default function Newcard({val, setVal}) {
    const[val, setVal] = useState(false);

    return (
        <div className="w-full h-screen flex items-center justify-center bg-zinc-200">
            <div className="relative w-48 h-50 rounded-xl bg-yellow-300">
                <div className="image p-2 h-full">
                    <img
                        className="w-full h-full rounded-[10px] object-cover"
                        src={imgp}
                        alt=""
                    />
                </div>
 
                <div className="w-16 h-6 rounded-tl-[38px] bg-yellow-300 absolute top-[96px] right-0 flex items-center justify-center shadow-[0_-6px_12px_rgba(0,0,0,0.20)] z-2">
                    <CgDetailsMore size={"1.2rem"} cursor={"pointer"} onClick={()=> setVal(true)}/>
                   
                    
                </div>
                <Detailofcard val={val} setVal={setVal} /> 

                <div className="w-full h-20 bg-yellow-300 absolute bottom-0 p-3 rounded-b-xl shadow-[0_-8px_14px_rgba(0,0,0,0.20)] z-1">

                    <div className="flex items-center gap-2 mt-2">
                        <MdOutlinePermIdentity size={"0.8rem"} />
                        <h2 className="font-semibold text-[16px]">Dr. Alisi Martin</h2>
                    </div>

                    <div className="flex items-center gap-2">
                        <MdOutlineMailOutline size={"0.8rem"} color="gray"/>
                        <h4 className="text-zinc-600 text-[12px]">alisi@gmail.com</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}