import Homepage from "./pages/Homepage";
import Login from "./pages/LoginAdmin";
import { Routes, Route } from "react-router-dom";
import ChoiceLogin from "./pages/ChoiceLogin";
import ChoiceRegister from "./pages/ChoiceRegister";
import CourseDetails from "./pages/CourseDetails";
import Navbar from "./components/Navbar";
import RegisterAdmin from "./pages/RegisterAdmin";
import LoginAdmin from "./pages/LoginAdmin";
import LoginUser from "./pages/LoginUser";
import RegisterUser from "./pages/RegisterUser";
import ProtectedAdminLogin from "./protectedroutes/ProtectedAdminLogin";
import { useState } from "react";
import AdminDashboard from "./pages/AdminDashboard";
import UserDashboard from "./pages/UserDashboard";
import ProtectedUserLogin from "./protectedroutes/ProtectedUserLogin";
import CourseModel from "./components/AddCourseModal";

function App() {
	const [loggedIn, setLogged] = useState(false);
	const [isAuthenticated, setIsAuthenticated] = useState(
		JSON.parse(localStorage.getItem("loggedIn"))
	);
	// console.log(typeof JSON.parse(localStorage.getItem(isAuthenticated)))
	// console.log(isAuthenticated);
	// console.log(typeof isAuthenticated);

	return (
		<>
			{/* <CourseModel /> */}
			<Navbar loggedIn={loggedIn} setLogged={setLogged} />
			<Routes>
				<Route path="/" element={<Homepage />} />
				<Route path="/login" element={<ChoiceLogin />} />
				<Route
					path="/login/admin"
					element={<LoginAdmin setLogged={setLogged} />}
				/>
				<Route
					path="/login/user"
					element={<LoginUser setLogged={setLogged} />}
				/>
				<Route path="/register" element={<ChoiceRegister />} />
				<Route path="/register/user" element={<RegisterUser />} />
				<Route path="/register/admin" element={<RegisterAdmin />} />
				<Route path="/dashboard">
					<Route
						path="admin"
						element={
							<ProtectedAdminLogin isAuthenticated={isAuthenticated}>
								<AdminDashboard />
							</ProtectedAdminLogin>
						}
					/>
					<Route
						path="user"
						element={
							<ProtectedUserLogin isAuthenticated={isAuthenticated}>
								<UserDashboard />
							</ProtectedUserLogin>
						}
					/>
				</Route>
				<Route path="/coursedetails/:id" element={<CourseDetails />} />
			</Routes>
		</>
	);
}

export default App;
