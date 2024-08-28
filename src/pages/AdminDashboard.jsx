// import { Link } from "react-router-dom"

import Card from "../components/Card"
import React, { useState } from 'react'
import { categories, courses,allcourses,users } from '../assets/links'
import { HorizontalCard } from "../components/HorizontalCard"
import Footer from "../components/Footer"
import AdminCard from "../components/AdminCard"
import AdminCourseCard from "../components/AdminCourseCard"


const AdminDashboard = () => {
  const [display,setDisplay] = useState(true)
  
    const showHome = ()=>{
        if(!display)
            setDisplay(true)
        console.log("show home",display);
        
        
    }
    const showLearning = ()=>{
        if(display)
            setDisplay(false)
        console.log("show learning",display);
    }
  return (
    <>
      {/* Most popular courses */}
      <div className="w-full text-normal h-12 flex gap-4  justify-start items-end border-b-1 border-slate-400">
          <button className={`h-full px-4 font-oswald font-light ml-10 p-2 text-end ${display?'border-b-2 border-blue-700':''}`} onClick={showHome}>Users</button>
          <button className={`h-full px-4 font-oswald font-light p-2 text-end ${!display?'border-b-2 border-blue-700':''}`} onClick={showLearning}>Courses</button>
      </div>
      {
        display?
        (<>
          <section className="py-12 my-12 mx-2 md:mx-4 md:my-0 flex flex-col px-3 lg:px-24">
            <h1 className="text-2xl md:text-3xl py-3 mb-4 font-oswald font-normal w-full">All Users</h1>
            <div className="flex flex-col gap-6 md:gap-5 justify-items-center md:justify-items-start h-screen overflow-y-scroll">
              {
                users.map((item,index)=>(
                  <AdminCard key={index} username={item.username} email={item.email}/>
                ))
              }
            </div>
          </section>
        </>):(<>
          <section className="py-12 my-12 mx-2 md:mx-4 md:my-0 flex flex-col px-3 lg:px-24">
            <h1 className="text-2xl md:text-3xl py-3 mb-4 font-oswald font-normal w-full">All Users</h1>
            <div className="flex flex-col gap-6 md:gap-5 justify-items-center md:justify-items-start h-screen overflow-y-scroll">
              {
                allcourses.map((item,index)=>(
                  <AdminCourseCard key={index} title={item.title} description={item.description}/>
                ))
              }
            </div>
          </section>
        </>)
      }
      <section className="px-3 lg:px-24  pt-14">
            <Footer/>
      </section>
    </>
  )
}

export default AdminDashboard