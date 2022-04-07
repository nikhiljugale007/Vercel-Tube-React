import React from "react";
import {
	FaBars,
	FaYoutube,
	FaUserCircle,
	FaSearch,
	FaMicrophone,
	FaBell,
} from "../../icons";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
const Header = ({ setMobileSidebar }) => {
	const { authState } = useAuthContext();

	return (
		<nav className="nav">
			<div className="nav-sub-container">
				<button
					className="btn btn-icon"
					onClick={() => setMobileSidebar((prev) => !prev)}
				>
					<FaBars className="" size={20} />
				</button>
				<p className="flex-hz youtube-icon">
					<FaYoutube size={30} />
					VercelTube
				</p>
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
				<button className="btn btn-icon">
					<FaBell size={20} />
				</button>
				<NavLink
					to="/profile"
					className="inactive-link"
					style={{ backgroundColor: "transparent", border: "none" }}
				>
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
