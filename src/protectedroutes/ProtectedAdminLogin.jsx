import React from "react";
import { Navigate } from "react-router-dom";

const ProtectedAdminLogin = ({ isAdminAuthenticated, children }) => {
	console.log(isAdminAuthenticated);

	return <>{isAdminAuthenticated ? children : <Navigate to="/login" />}</>;
};

export default ProtectedAdminLogin;
