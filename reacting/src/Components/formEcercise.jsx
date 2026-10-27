import React, { useEffect, useState } from "react";
import Card from "./Components/Card"
import CardOne from "./Components/CardOne"
import Navbar from "./Components/Navbar"
import Usestate from "./Components/Usestate"
import Imagecard from "./Components/Imagecard"
import Page from "./Components/Page"
import Prop from "./Components/Prop"
import ExcericePropState from "./Components/ExcericePropState"
import Formhandling from "./Components/Formhandling"

import Form from "./FormExercise/Form.jsx"
import Cards from "./FormExercise/Cards.jsx"
import Newcard from "./FormExercise/Newcard.jsx"

function App() {
  const [user, setUser] = useState([]);

  const handleFormSubmitData = (data)=>{
    setUser([...user, data]);
  }

  const handleRemove =(id) =>{
    setUser(()=> user.filter((item, index) => index != id))
  }

  return(
    <div className="w-full h-screen bg-zinc-200 flex items-center justify-center">
      <div className="w-[90%] mx-auto">

        <Cards user={user} handleRemove={handleRemove} />
        <Form handleFormSubmitData={handleFormSubmitData} />

      </div>
    </div>
  )

}

export default App;
