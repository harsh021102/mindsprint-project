import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedUserLogin = ({ isUserAuthenticated, children }) => {
	// console.log(isUserAuthenticated);

	console.log("User", isUserAuthenticated);

	return <>{isUserAuthenticated ? children : <Navigate to="/login/user" />}</>;
};

export default ProtectedUserLogin;
