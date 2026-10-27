import React, { useEffect, useState } from "react";
import Card from "./Components/Card"
import CardOne from "./Components/CardOne"
import Navbar from "./Components/Navbar"
import Usestate from "./Components/Usestate"
import Imagecard from "./Components/Imagecard"
import Page from "./Components/Page"
import Prop from "./Components/Prop"
import ExcericePropState from "./Components/ExcericePropState"

function App() {
  
  const data = [
    {name: "Sanam Re", artist:"Arijit Singh", isAdded:false, image:"https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
    {name: "Be Intehaan", artist:"Atif & Sunidhi", isAdded:false, image:"https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
    {name: "Bangar", artist:"Badasha", isAdded:false, image:"https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
    {name: "One Bottel down", artist:"Yo Yo honey Singh",isAdded :false, image:"https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
    {name: "3 peg", artist:"kunal", isAdded:false, image:"https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
    {name: "Raat Bhar", artist:"sam", isAdded:false, image:"https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
    {name: "Darasal", artist:"Atif Aslam", isAdded:false, image:"https://plus.unsplash.com/premium_photo-1682125853703-896a05629709?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D"},
  ]
  const [realData, setRealData] = useState(data);

  const handleRealData =(dataindex)=>{

    setRealData((prev)=>{

      return prev.map((item, idx)=>{

        if(idx === dataindex){
          return {...item, isAdded: !item.isAdded};
        }
  
        return item;
      })
    })
  };



  return(
    <div className="w-full h-screen bg-zinc-200">
      <Navbar data={realData}/>
      <div className="w-[60%] mt-10 m-auto grid  grid-cols-4 gap-6">
        {
          realData.map((item, index)=>

            <ExcericePropState key={index} handleRealData={handleRealData} index={index} values={item} />
          
          )
        }
      </div>
    </div>

  )

}

export default App;
