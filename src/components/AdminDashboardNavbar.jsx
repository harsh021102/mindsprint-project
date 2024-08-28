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
        <Routes>
            <Route path="/details" element={<AdminDashboard/>}/>
        </Routes>
    </>
  )
}

export default AdminDashboardNavbar