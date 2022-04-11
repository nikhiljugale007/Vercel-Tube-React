import { useState } from "react";
import {
	FaBars,
	AiOutlineCloseCircle,
	FaYoutube,
	FaUserCircle,
	FaSearch,
	FaMicrophone,
} from "../../icons";
import "./Header.css";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import { useVideoContext } from "../../context/VideoContext";
const Header = ({ mobileSidebar, setMobileSidebar }) => {
	const { authState } = useAuthContext();
	const { videoDispatch } = useVideoContext();

	const [searchInput, setSearchInput] = useState("");

	const submitForm = (e) => {
		e.preventDefault();
		videoDispatch({ type: "SET_SEARCH_INPUT_FILTER", payload: searchInput });
	};
	const getActiveStyle = ({ isActive }) => ({
		backgroundColor: "transparent",
		border: "none",
	});
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
				<NavLink to="/" className="header-link" style={getActiveStyle}>
					<p className="flex-hz youtube-icon">
						<FaYoutube size={30} />
						VercelTube
					</p>
				</NavLink>
			</div>
			<div className="nav-sub-container hide">
				<form className="search-bar" onSubmit={submitForm}>
					<input
						type="text"
						placeholder="Search"
						value={searchInput}
						onChange={(e) => setSearchInput(e.target.value)}
					/>
					<button className="btn-icon" type="submit">
						<FaSearch />
					</button>
				</form>
				<button className="btn btn-primary btn-icon">
					<FaMicrophone />
				</button>
			</div>
			<div className="nav-sub-container">
				<NavLink to="/profile" className="header-link">
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
