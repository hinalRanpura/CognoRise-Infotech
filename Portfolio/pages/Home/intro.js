import React from "react";

function Intro(){
    return(
        <div className="h-[80vh] w-[50h] bg-primary flex flex-col items-start justify-center gap-8">
            <h1 className="text-white">Hi, I am</h1>
            <h1 className="text-8xl sm:text-2xl text-secondary font-semibold">Hinal Ranpura</h1>
            <h1 className=" text-7xl text-white font-semibold" >
                I build things for the web.
            </h1>
            <p className="text-white w-2/3">
                I am fullstack Web Developer. I'm a Student who is willing to start a journey as IT Person.
            </p>
            <button className="border-2 border-tertiary text-tertiary px-10 py-3 rounded ">Get Started</button>
        </div>
    )
}

export default Intro