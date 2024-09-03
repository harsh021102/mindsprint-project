import { Link, useNavigate } from "react-router-dom";
import mindsprint from "../assets/mindsprint-logo.svg";
import { useEffect, useState } from "react";

const Navbar = ({ loggedIn, setLogged }) => {
	const navigate = useNavigate();
	const loggedUser = localStorage.getItem("loggedUser");
	const handleLogout = () => {
		localStorage.removeItem("loggedUser");
		setLogged(false);
		navigate("/");
	};
	return (
		<nav className="w-full h-16 flex justify-between lg:justify-between">
			<div className="w-3/12 lg:w-2/12 ml-10 flex justify-center ">
				<img
					src={mindsprint}
					alt="mindsprint logo"
					className="bg-cover bg-no-repeat bg-center  rounded-md cursor-pointer"
					onClick={() => {
						setLogged(false);
						navigate("/");
					}}
				/>
			</div>
			<div className="links flex justify-center items-center mr-4 gap-4 md:mr-16 text-md">
				{!loggedUser ? (
					<>
						<button className="p-2 text-blue-600 text-sm md:text-normal">
							<Link to="/login" className="no-underline">
								Login
							</Link>
						</button>
						<button className="py-2 px-2 text-blue-600 border-2 border-blue-600 rounded-md text-sm md:text-normal">
							<Link to="/register" className="no-underline">
								Join for Free
							</Link>
						</button>
					</>
				) : (
					<button className="py-2 px-2 text-blue-600 border-2 border-blue-600 rounded-md text-sm md:text-normal">
						<Link to="/" className="no-underline" onClick={handleLogout}>
							Log out
						</Link>
					</button>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
