import React, { useState } from 'react'
import { Outlet, Route, Routes } from 'react-router-dom'
import mindsprint from "../assets/mindsprint-logo.svg"
import DropdownBtn from "../components/DropdownBtn"
import Footer from './Footer'
import Dashboard from '../pages/Dashboard'
import CourseDetails from '../pages/CourseDetails'
import AdminDashboard from '../pages/AdminDashboard'

const AdminDashboardNavbar = () => {
  return (
    <>
        {/* <nav className="w-full h-16 flex justify-between lg:justify-between" >
          <div className="w-3/12 lg:w-2/12 ml-10 flex justify-center ">
              <img src={mindsprint} alt="mindsprint logo" className="bg-cover bg-no-repeat bg-center  rounded-md"/>
          </div>
          <div className="links flex justify-center items-center gap-4 mr-4 text-md">
              <DropdownBtn title="Profile"/>
          </div>
        </nav> */}
        
        <Routes>
            <Route path="/details" element={<AdminDashboard/>}/>
        </Routes>
    </>
  )
}

export default AdminDashboardNavbar