import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedUserLogin = ({ isUserAuthenticated, children }) => {
	return <>{isUserAuthenticated ? children : <Navigate to="/login/user" />}</>;
};

export default ProtectedUserLogin;
