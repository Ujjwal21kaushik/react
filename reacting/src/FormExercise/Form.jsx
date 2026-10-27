import React from "react";
import { useForm } from "react-hook-form"


export default function Form({handleFormSubmitData}){
    const {register, handleSubmit, reset} = useForm()
    const handleFormSubmit =(data)=>{
        handleFormSubmitData(data);
        reset();
    }

    return(
        <div className="mt-10 flex justify-center gap-10">
            <form action="#" className="flex gap-10" onSubmit={handleSubmit(handleFormSubmit)}>
                <input {...register('name')} className="outline-none px-2 py-1 bg-zinc-100 rounded-md font-semibold text-base text-[15px]" type="text" placeholder="name" />
                <input {...register('email')} className="outline-none px-2 py-1 bg-zinc-100 rounded-md font-semibold text-base text-[15px]" type="text" placeholder="email" />
                <input {...register('image')} className="outline-none px-2 py-1 bg-zinc-100 rounded-md font-semibold text-base text-[15px]" type="text" placeholder="image" />
                <input className="px-5 py-1 text-white bg-blue-500 rounded-md" type="submit" value="Submit" />
            </form>
        </div>
    )
}