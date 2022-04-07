import React from "react";
import { Navigate } from "react-router";
import { useAuthContext } from "../../context/AuthContext";

const RequireAuth = ({ children }) => {
	const { authState } = useAuthContext();
	return authState.isLoggedIn ? children : <Navigate to="/login" replace />;
};

export { RequireAuth };
