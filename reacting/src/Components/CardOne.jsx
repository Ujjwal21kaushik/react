import React from "react"


export default function CardOne() {

    const data = [
        {
            name:"Mahiya Ve",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, modi?",
            available:true,
        },
        {
            name:"Tera Fitoor",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, modi?",
            available:false,
        },
    ]

    const handleClickDownoload = () =>{ alert("hello")};


    return(
        <div className="w-full h-screen bg-zinc-400 flex flex-col justify-center items-center gap-4">
            {
                data.map((ele, idx) =>(
                    <div key={idx} className="w-100 bg-zinc-100  py-2 px-3 rounded-md">
                        <h1 className="font-semibold text-xl">{ele.name}</h1>
                        <p className="text-xs mt-2">{ele.para}</p>
                        <button type="button" onClick={handleClickDownoload} className="px-2 py-1 text-xs font-semibold bg-blue-400 text-zinc-200 rounded mt-2 cursor-pointer">Downoload Now</button>
                    </div>

                ))
            }
        </div>
    );
}