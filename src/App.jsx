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

function App() {
	const [loggedIn, setLogged] = useState(false);
	const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
		localStorage.getItem("loggedAdmin")
	);
	const [isUserAuthenticated, setIsUserAuthenticated] = useState(
		localStorage.getItem("loggedUser")
	);
	console.log(isUserAuthenticated);

	// console.log(typeof JSON.parse(localStorage.getItem(isAuthenticated)))
	// console.log(isAuthenticated);
	// console.log(typeof isAuthenticated);

	return (
		<>
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
							<ProtectedAdminLogin isAdminAuthenticated={isAdminAuthenticated}>
								<AdminDashboard />
							</ProtectedAdminLogin>
						}
					/>
					<Route
						path="user"
						element={
							<ProtectedUserLogin isUserAuthenticated={isUserAuthenticated}>
								<UserDashboard />
							</ProtectedUserLogin>
						}
					/>
					<Route path="course/:id" element={<CourseDetails />} />
					{/* <Route path="/coursedetails/:id" element={CourseDetails} /> */}
				</Route>
			</Routes>
		</>
	);
}

export default App;
