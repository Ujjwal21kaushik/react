import React, { useEffect, useState } from "react";

function Usestate(){
    // const [score, setScore] = useState(0);

  
   
  const data = [
        {
            name:"Amazon Basics",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, modi?",
            isBanned:true,
        },
        {
            name:"Lectcode 150+",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, modi?",
            isBanned:false,
        },
        {
            name:"Placement prep",
            para:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, modi?",
            isBanned:false,
        }
    ]
  const [val, setVal] = useState(data);
  
  const handlebutton = (idx) => {

    if(!window.confirm("Are u sure ?")) return;

    setVal(prev => {
      return prev.map((item, i) =>
        i == idx ? {...item, isBanned: !item.isBanned} : item
      ) 
    })
  }


  return (
    <div className="w-full h-40 flex justify-center items-center gap-16 text-center">

      {
        val.map((ele, idx)=> (
          <div key={idx}>
          <h1>{ele.name}</h1>
          <h1>{ele.isBanned.toString()}</h1>
          <button type="button" onClick={() => handlebutton(idx)} className={` px-2 py-1 ${ele.isBanned ? 'bg-blue-400' : 'bg-red-400'} text-xs rounded-md text-zinc-100 font-semibold `}> Click Me </button>
          </div>
        ))
      }
    </div>
  )
}

export default Usestate;


  // const [val, setVal] = useState([1, 2, 3, 4, 5, 6]);
  // const handleDelete = ()=>{
  //   if(val.length < 1) alert("errro");

  //   return setVal(()=> val.filter ((item, index) => index != val.length - 1));
  // };
  
  // return (
  //   <div className="p-10">
  //     {
  //       val.map((item, idx) => 
  //         <h1 key={idx}>{item}</h1>
  //     )
  //   }
    
  //   <button onClick={()=> handleDelete()} className="px-2 py-1 bg-red-600 rounded text-white text-xs mt-2 cursor-pointer">Delete</button>
  //   </div>
  // )