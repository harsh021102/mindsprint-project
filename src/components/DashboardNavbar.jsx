import React, { useState } from 'react'
import { Outlet } from 'react-router-dom'
import mindsprint from "../assets/mindsprint-logo.svg"
import DropdownBtn from "../components/DropdownBtn"
import Footer from './Footer'

const DashboardNavbar = () => {
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
        <nav className="w-full h-16 flex justify-between lg:justify-between" >
          <div className="w-3/12 lg:w-2/12 ml-10 flex justify-center ">
              <img src={mindsprint} alt="mindsprint logo" className="bg-cover bg-no-repeat bg-center  rounded-md"/>
          </div>
          <div className="links flex justify-center items-center gap-4 mr-4 text-md">
              <DropdownBtn title="Profile"/>
          </div>
        </nav>
        <div className="w-full text-normal h-12 flex gap-4  justify-start items-end border-b-1 border-slate-400">
            <button className={`h-full px-4 font-oswald font-light ml-10 p-2 text-end ${display?'border-b-2 border-blue-700':''}`} onClick={showHome}>Home</button>
            <button className={`h-full px-4 font-oswald font-light p-2 text-end ${!display?'border-b-2 border-blue-700':''}`} onClick={showLearning}>My Learning</button>
        </div>
        <Outlet context={[display,setDisplay]}/>
        <section className="px-3 lg:px-24  pt-14">
            <Footer/>
        </section>
    </>
  )
}

export default DashboardNavbar