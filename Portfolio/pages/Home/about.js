import React from "react";
import SectionTitle from "../../components/SectionTitle";

function About(){

    const skills=[
        "JavaScript",
        "React",
        "Node",
        "Express",
        "MongoDB",
        "Firebase",
    ];

    return(
        <div>  
            <SectionTitle title="About"/>
            <div className="flex w-full items-center">
                <div className="h-[70vh] w-1/2">
                <lottie-player
                    src="https://assets6.lottiefiles.com/private_files/lf30_WdTEui.json"
                    background='transparent'
                    speed='1'
        
                    autoplay
                >

                </lottie-player>
                </div>
                <div className="flex flex-col gap-5 w-1/2">
                    <p className="text-white">
                    Aspiring IT professional with a foundational understanding of [mention key areas, e.g., "software development," "networking," "cybersecurity"]. Recently completed [mention any relevant degree or certification, e.g., "a Bachelor’s degree in Computer Science," "a certification in CompTIA A+"] with hands-on experience through projects and internships. 


                    </p>
                    <p className="text-white">Proficient in [list relevant technologies or programming languages, e.g., "Python, Java, HTML, CSS"] and eager to apply knowledge in a real-world setting. Known for strong problem-solving skills, a collaborative mindset, and a passion for continuous learning in the dynamic field of information technology. Seeking an entry-level position to leverage my skills and contribute to innovative projects while growing professionally.

</p>
                </div>
            </div>
            <div className="py-5">
                <h1 className="text-tertiary text-xl">
                    Here are a few technologies I've been working with recently:
                </h1>
                <div className="flex flex-wrap gap-10 mt-5">
                {
                    skills.map((skill,index) => (
                        <div className="border border-tertiary py-3 px-10 text-tertiary">
                            <h1 className="text-tertiaty">{skill}</h1>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
    )
}

export default About