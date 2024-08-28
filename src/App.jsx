import Homepage from "./pages/Homepage"
import Login from "./pages/LoginAdmin"
import { Routes, Route } from "react-router-dom"
import ChoiceLogin from "./pages/ChoiceLogin"
import ChoiceRegister from "./pages/ChoiceRegister"
import CourseDetails from "./pages/CourseDetails"
import DashboardNavbar from "./components/DashboardNavbar"
import Navbar from "./components/Navbar"
import RegisterAdmin from "./pages/RegisterAdmin"
import LoginAdmin from "./pages/LoginAdmin"
import LoginUser from "./pages/LoginUser"
import RegisterUser from "./pages/RegisterUser"
import AdminDashboardNavbar from "./components/AdminDashboardNavbar"

function App() {
  
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/login" element={<ChoiceLogin />} />
        <Route path="/login/admin" element={<LoginAdmin />} />
        <Route path="/login/user" element={<LoginUser />} />
        <Route path="/register" element={<ChoiceRegister />} />
        <Route path="/register/user" element={<RegisterUser />} />
        <Route path="/register/admin" element={<RegisterAdmin />} />
        <Route path="/dashboard/*" element={<DashboardNavbar />}/>
        <Route path="/admindashboard/*" element={<AdminDashboardNavbar />}/>
        <Route path="/coursedetails/:id" element={<CourseDetails />} />
      </Routes>
    </>
  )
}

export default App
