import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedUserLogin = ({ children }) => {
	// console.log(isUserAuthenticated);

	// console.log("User", isUserAuthenticated);
	let isUserAuthenticated = localStorage.getItem("loggedUser");
	return <>{isUserAuthenticated ? children : <Navigate to="/login/user" />}</>;
};

export default ProtectedUserLogin;
