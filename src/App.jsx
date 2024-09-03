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
import LearnCourse from "./pages/LearnCourse";
import ProtectedLearning from "./protectedroutes/ProtectedLearning";
import ProtectedCourseDetails from "./protectedroutes/ProtectedCourseDetails";

function App() {
	const [loggedIn, setLogged] = useState(false);
	const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(
		localStorage.getItem("loggedAdmin")
	);

	// console.log(isUserAuthenticated);

	// console.log(typeof JSON.parse(localStorage.getItem(isAuthenticated)))
	// console.log(isAuthenticated);
	// console.log(typeof isAuthenticated);

	return (
		<>
			<Navbar loggedIn={loggedIn} setLogged={setLogged} />
			{/* <iframe
				width="560"
				height="315"
				src="https://www.youtube.com/embed/4D3X6Xl5c_Y?si=H8OoZrE3rWdG9IQ5"
				title="YouTube video player"
				frameborder="0"
				allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
				referrerpolicy="strict-origin-when-cross-origin"
				allowfullscreen
			></iframe> */}
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
							<ProtectedUserLogin>
								<UserDashboard />
							</ProtectedUserLogin>
						}
					/>
					{/* <Route path="learn/:id" element={<LearnCourse />} /> */}
					<Route
						path="learn/:id"
						element={
							<ProtectedLearning>
								<LearnCourse />
							</ProtectedLearning>
						}
					/>
					<Route
						path="coursedetails/:id"
						element={
							<ProtectedCourseDetails>
								<CourseDetails />
							</ProtectedCourseDetails>
						}
					/>
				</Route>
			</Routes>
		</>
	);
}

export default App;
