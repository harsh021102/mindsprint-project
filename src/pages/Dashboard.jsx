// import { Link } from "react-router-dom"

import Card from "../components/Card"
import React, { useState } from 'react'
import { categories, courses } from '../assets/links'
import { HorizontalCard } from "../components/HorizontalCard"
import { useOutletContext } from "react-router-dom"


const Dashboard = () => {
  const [display, setDisplay] = useOutletContext();
  
  return (
    <>
      {/* Most popular courses */}
      {
        display?
        (<>
          <section className="py-12 my-12 mx-2 md:mx-4 md:my-0 flex flex-col px-3 lg:px-24">
            <h1 className="text-2xl md:text-3xl py-3 mb-4 font-oswald font-normal w-full">Most Popular courses</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-5 justify-items-center md:justify-items-start">
              {
                courses.map((item,index)=>(
                  <Card key={index} company={item.company} course={item.course} imageUrl={item.imageUrl} type={item.type}/>
                ))
              }
            </div>
          </section>
          {/* Personalized Specializations for You */}
          <section className="py-12 my-12 mx-2 md:mx-4 md:my-0 flex flex-col px-3 lg:px-24">
            <h1 className="text-2xl md:text-3xl py-3 mb-4 font-oswald font-normal w-full">Personalized Specializations for You</h1>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-5 justify-items-center md:justify-items-start">
              {
                courses.map((item,index)=>(
                  <Card key={index} company={item.company} course={item.course} imageUrl={item.imageUrl} type={item.type}/>
                ))
              }
            </div>
          </section>
          {/* Categories */}
          <section className="py-12 my-12 mx-2 md:mx-4 md:my-0 flex flex-col px-3 lg:px-24">
          <h1 className="text-4xl mt-6 mb-14">Explore Categories</h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-5">
            {
                categories.map((item,index)=>(
                    <HorizontalCard key={index} name={item.name} number={item.number} image={item.image}/>
                ))
            }
          </div>
        </section>
        </>):<div>Hello</div>
      }
    </>
  )
}

export default Dashboard