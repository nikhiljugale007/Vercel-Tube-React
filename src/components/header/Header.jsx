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
import { Link, NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
const Header = () => {
	const { authState } = useAuthContext();
	return (
		<nav className="nav">
			<div className="nav-sub-container">
				<FaBars className="" size={20} />
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
				<Link to="/profile" className="link-no-style">
					<button className="btn btn-icon">
						{authState.isLoggedIn ? <FaUserCircle size={20} /> : <p>LOGIN</p>}
					</button>
				</Link>
			</div>
		</nav>
	);
};

export { Header };
