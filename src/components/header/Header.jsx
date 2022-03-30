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
const Header = () => {
	return (
		<nav className="nav">
			<div className="nav-sub-container">
				<FaBars className="" size={20} />
				<p className="flex-hz">
					<FaYoutube size={30} className="youtube-icon" />
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
				<button className="btn btn-icon">
					<FaUserCircle size={20} />
				</button>
			</div>
		</nav>
	);
};

export { Header };
