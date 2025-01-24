"use client";
import React from 'react'
import { Tabs,TabsContent,TabsList,TabsTrigger } from '@/components/ui/tabs';
import { useState } from 'react';
import ProjectCard  from '@/components/ProjectCard';

const projectData=[
  {
    image:"/QGEN.jpg",
    category:"Flask",
    name:"QGen:Question Paper Generator",
    description:"Python, Flask, Bootstrap, PyTorch",
    github:"https://github.com/rohanrjp/QGen-Question_Paper_Generator"
  },
  {
    image:"/News_Weather.jpg",
    category:"Python",
    name:"News and Weather Summarizer",
    description:"Python,Github Actions",
    github:"https://github.com/rohanrjp/News_Summarizer"
  },
  {
    image:"/John_snow_EDA.jpg",
    category:"Data Analysis",
    name:"John Snow’s Ghost Map Analysis",
    description:"Python,Pandas,Matplotlib,Folium",
    github:"https://github.com/rohanrjp/JohnSnow_GhoseMap_DA"
  },
  {
    image:"/DVD_Regression.jpg",
    category:"Data Analysis",
    name:"Rental DVD Duration Prediction: Regression Analysis",
    description:"Python,Pandas,Matplotlib,Scikit-learn",
    github:"https://github.com/rohanrjp/rental_DVD_regression"
  },
  {
    image:"/Netflix_EDA.jpg",
    category:"Data Analysis",
    name:"Netflix Movie Duration Trends: An EDA Scatter Plot",
    description:"Python,Pandas,Matplotlib",
    github:"https://github.com/rohanrjp/Netflix_EDA"
  }
]

const setProjects=[
  'All Projects', ...new Set(projectData.map((item)=>item.category)),
];


const Projects = () => {
  const[categories,setCategories]=useState(setProjects);
  const[category,setCategory]=useState("All Projects");

  const filteredProj=projectData.filter((project)=>{
    return category==='All Projects'?project:project.category===category;
  });

  return (
    <section className='min-h-screen pt-12'>
      <div className='container mx-auto'>
        <h2 className='section-title mb-8 xl:mb-16 text-center mx-auto'>
        My Projects
        </h2>
        <Tabs defaultValue={category} className='mb-24 xl:mb-48'>
          <TabsList className="w-full grid h-full md:grid-cols-4 lg:max-w-[640px] mb-12 mx-auto md:borderdark:border-none">
            {categories.map((category,index)=>{
              return <TabsTrigger onClick={()=>setCategory(category)} value={category} key={index} className="capitalize w-[162px] md:w-auto">{category}</TabsTrigger>
            })}
          </TabsList>
          <div className='text-lg xl:mt-8 grid grid-cols-1 lg:grid-cols-3 gap-4'>
            {filteredProj.map((project,index)=>{
              return (
                <TabsContent value={category} key={index}>
                  <ProjectCard project={project}></ProjectCard>
                </TabsContent>
              )
            })}
          </div>
        </Tabs>
      </div>
    </section>
  )
}

export default Projects;