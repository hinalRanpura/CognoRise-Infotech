import React from "react";
import SectionTitle from "../../components/SectionTitle";

function Contact(){

    const user = {
        'name': 'abc',
        'email': 'abc@gmail.com',
        'phone': 9874563210,
        'gender':'female',
        'country':'india'
    }

    return (
        <div>
            <SectionTitle title='Say Hello' />

            <div className="flex  items-center justify-between">
                <div className="flex flex-col gap-1 w-1/3">
                <p className="text-tertiary text-sm">
                    {'{'}
                </p>
                {
                    Object.keys(user).map((key) => (
                        <p className="ml-5">
                            <span className="text-tertiary text-sm">{key} : </span> 
                            <span className="text-tertiary text-sm">{user[key]}</span>
                        </p>
                    ))
                }
                <p className="text-tertiary">
                    {'}'}
                </p>
                </div>
                <div className="h-[400px]">
                <lottie-player
                    src='https://assets9.lottiefiles.com/packages/lf20_eroqjb7w.json'/>
                </div>
            </div>
        </div>
    )
}

export default Contact