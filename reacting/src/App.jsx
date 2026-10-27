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
import Detailofcard from "./FormExercise/Detailofcard.jsx"

function App() {
  

  return(
    <>
      <Newcard val={val} setVal={setVal}/>
      
    </>
  )

}

export default App;
