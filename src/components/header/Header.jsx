import React from "react";
import {
	FaBars,
	FaYoutube,
	FaUserCircle,
	FaSearch,
	FaMicrophone,
} from "../../icons";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
const Header = () => {
	const { authState } = useAuthContext();
	const getActiveStyle = ({ isActive }) => ({
		color: isActive ? "blue" : "",
		backgroundColor: "transparent",
		border: "none",
	});
	return (
		<nav className="nav">
			<div className="nav-sub-container">
				<button className="btn btn-icon btn-sidebar-menu hide">
					<FaBars className="" size={20} />
				</button>
				<NavLink to="/login" className="header-link" style={getActiveStyle}>
					<p className="flex-hz youtube-icon">
						<FaYoutube size={30} />
						VercelTube
					</p>
				</NavLink>
			</div>
			<div className="nav-sub-container hide">
				<form className="search-bar">
					<input type="text" placeholder="Search" />
					<button className="btn-icon" type="submit">
						<FaSearch />
					</button>
				</form>
				<button className="btn btn-primary btn-icon">
					<FaMicrophone />
				</button>
			</div>
			<div className="nav-sub-container">
				<NavLink to="/profile" className="header-link" style={getActiveStyle}>
					{authState.isLoggedIn ? (
						<button className="btn btn-icon">
							<FaUserCircle size={20} />
						</button>
					) : (
						<button className="btn btn-primary">LOGIN</button>
					)}
				</NavLink>
			</div>
		</nav>
	);
};

export { Header };
