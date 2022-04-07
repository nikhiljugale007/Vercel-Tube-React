import React from "react";
import {
	FaBars,
	AiOutlineCloseCircle,
	FaYoutube,
	FaUserCircle,
	FaSearch,
	FaMicrophone,
} from "../../icons";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
const Header = ({ mobileSidebar, setMobileSidebar }) => {
	const { authState } = useAuthContext();

	return (
		<nav className="nav">
			<div className="nav-sub-container">
				<button
					className="btn btn-icon btn-sidebar-menu"
					onClick={() => setMobileSidebar((prev) => !prev)}
				>
					{mobileSidebar ? (
						<AiOutlineCloseCircle size={20} />
					) : (
						<FaBars className="" size={20} />
					)}
				</button>
				<Link to="/" className="link-no-style">
					<p className="flex-hz youtube-icon">
						<FaYoutube size={30} />
						VercelTube
					</p>
				</Link>
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
				<Link to="/profile" className="link-no-style">
					{authState.isLoggedIn ? (
						<button className="btn btn-icon">
							<FaUserCircle size={20} />
						</button>
					) : (
						<button className="btn btn-primary">LOGIN</button>
					)}
				</Link>
			</div>
		</nav>
	);
};

export { Header };
