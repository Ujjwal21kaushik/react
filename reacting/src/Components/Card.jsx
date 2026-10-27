import React from "react"


export default function Card() {

    const data = [
        {
            image: "https://images.unsplash.com/photo-1649734926695-1b1664e98842?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            name:"Amazon Basics",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, modi?",
            available:true,
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1720287601920-ee8c503af775?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            name:"Lectcode 150+",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, modi?",
            available:false,
        },
        {
            image: "https://plus.unsplash.com/premium_photo-1680807869086-e08309acfb24?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D",
            name:"Placement prep",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, modi?",
            available:false,
        }
    ]


  return (
    <div className="h-screen w-full bg-zinc-200 flex justify-center items-center gap-6">
        {
            data.map((value, idx)=> (
                <div key={idx} className="w-52 bg-zinc-100  rounded-md overflow-hidden">
                    <div className="w-full h-30 bg-zinc-300">
                        <img className="w-full h-full object-cover" src={value.image} alt="" />
                    </div>
                    <div className="w-full px-3 py-4">
                        <h1 className="font-semibold">{value.name}</h1>
                        <p className="mt-3 text-xs">{value.para}</p>

                        <button type="button" disabled={value.available == false}
                            className={`px-4 py-1 ${value.available ? 'bg-blue-600' : 'bg-red-600  opacity-60'}

                            ${value.available ? 'cursor-pointer' : 'cursor-not-allowed'} mt-3 rounded text-zinc-100 text-xs`}>

                            {value.available ? "In Stock" : "Out Of Stock"}
                        </button>
                    </div>
                </div>
            ))
        }
    </div>
  )
}
