import React, { useRef, useState } from "react";
import { useForm } from "react-hook-form"

export default function Formhandling(){
    // const username = useRef(null);
    // const age = useRef(null);

    // const [val, setVal] = useState({username: "", age:""})

    const {register, handleSubmit, formState: { errors },} = useForm()


    return(
        <form action="#" className="p-4" onSubmit={handleSubmit(data => console.log(data)
        )}>
            
            <input type="text" {...register('username', {
                required: "Username is required"
            })} 
                name="username" id="username" placeholder="name"
            />
            {(<p className="text-red-500 text-sm">{errors.username?.message}</p>)}

            <input type="number" {...register('age',{
                required: "Age is required", 
                valueAsNumber: true, 
            })} 
                name="age" id="age" placeholder="age"
            />
            {(<p className="text-red-500 text-sm">{errors.age?.message}</p>)}

            <input type="submit" value="Submit" />

            
        </form>    
    )
}