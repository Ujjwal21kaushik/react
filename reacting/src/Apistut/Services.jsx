import React, { useEffect } from "react";

export default function Services(){

    useEffect (()=>{
        console.log("Services Connected");
        

        return()=>{
            console.log("Services Deleted"); // callback function --> as we go to another component we se deleted services..
            
        }
    })

    return(
        <h1>Services</h1>
    )
}