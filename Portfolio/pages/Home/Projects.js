
import React from 'react'
import SectionTitle from "../../components/SectionTitle"
import { project } from "../../resources/project"

function Projects(){
    const [selectedItemIndex,setSelectedItemIndex] = React.useState(0)

    return(
        <div>
            <SectionTitle title="Project" />
            <div className='flex py-10 gap-20 sm:flex-col sm:overflow-scoll sm:w-full'>
                <div className='flex flex-col gap-10 border-l-2 border-tertiary w-1/4'>
                    {
                      project.map((project,index) => (
                        <div className='cursor-pointer'
                        onClick={() => {
                            setSelectedItemIndex(index)
                        }} >
                            <h1 className={`text-xl 
                            px-5
                            ${
                                selectedItemIndex === index 
                                ? "text-tertiary border-tertiary border-l-4 -ml-[3px] bg-[#1a7f5a31] py-3 sm:w-40" : "text-white"
                                }`}>
                                {project.title}
                            </h1> 
                        </div>
                      ))
                    }
                </div>
                <div className='flex items-center justify-center gap-10'>
                    <img 
                        src={project[selectedItemIndex].image} 
                        alt='' 
                        className='h-62 w-72 ' 
                        />

                </div>
                <div className='flex flex-col gap-10 '>
                    <h1 className='text-secondary text-2xl'>
                        {
                            project[selectedItemIndex].title
                        }
                    </h1>
                    <p className='text-white'>
                        {
                            project[selectedItemIndex].description
                        }
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Projects