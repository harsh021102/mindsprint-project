import Homepage from "./pages/Homepage"
import Login from "./pages/Login"
import { Routes, Route } from "react-router-dom"
import ChoiceLogin from "./pages/ChoiceLogin"
import ChoiceRegister from "./pages/ChoiceRegister"
import CourseDetails from "./pages/CourseDetails"
import DashboardNavbar from "./components/DashboardNavbar"
import Navbar from "./components/Navbar"

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<ChoiceLogin />} />
        <Route path="/login/admin" element={<Login />} />
        <Route path="/register" element={<ChoiceRegister />} />
        <Route path="/dashboard/*" element={<DashboardNavbar />}/>
        <Route path="/coursedetails" element={<CourseDetails />} />
      </Routes>
    </>
  )
}

export default App
