import React from "react";
import Header from "../../components/Header";
import Intro from "../../pages/Home/intro";
import About from "./about";
import Experiences from "./Experiences";
import Projects from "./Projects";
import Contact from "./Contact";
import Footer from "./Footer";
function Home(){
    return(
        <div>  
            <Header/>
            <div className="bg-primary px-40">
                <Intro />
                <About/>
                <Experiences/>
                <Projects />
                <Contact />
                <Footer />
            </div>
            
        </div>
    )
}

export default Home