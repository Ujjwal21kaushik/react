import React from "react";
import Card from "./Card"

export default function Cards({user, handleRemove}){
    return(
        <div className="h-85 w-full flex items-center justify-center">
            {user.length === 0 ? (
                <p className="text-base text-xl font-semibold text-center">No Card is Available...✌️</p>

            ) : (

                <div className="w-full  max-h-85 p-4 flex flex-wrap items-center justify-center gap-4 overflow-auto">
                    {
                        user.map((item, index)=>(
                            <Card handleRemove={handleRemove} id={index} key={index} item={item}/>
                        ))
                    }
                </div> 
            )}       
        </div>

    )
} 