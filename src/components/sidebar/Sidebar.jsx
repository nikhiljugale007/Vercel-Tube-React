import "./Sidebar.css";
import {
	FaHome,
	FaCompass,
	FaHistory,
	FaClock,
	FaThList,
	FaThumbsUp,
} from "../../icons";
import { NavLink } from "react-router-dom";

const Sidebar = () => {
	const getActiveStyle = ({ isActive }) => ({
		color: isActive ? "white" : "",
	});
	return (
		<div className="sidebar-container">
			<NavLink
				to="/"
				className="sidebar-item link-no-style "
				style={getActiveStyle}
			>
				<FaHome size={20} /> <p>Home</p>
			</NavLink>
			<NavLink
				to="/videos"
				className="sidebar-item link-no-style"
				style={getActiveStyle}
			>
				<FaCompass size={20} /> <p>Explore</p>
			</NavLink>
			<NavLink
				to="/playlist"
				className="sidebar-item link-no-style "
				style={getActiveStyle}
			>
				<FaThList size={20} /> <p>Playlist</p>
			</NavLink>
			<NavLink
				to="/liked-videos"
				className="sidebar-item link-no-style "
				style={getActiveStyle}
			>
				<FaThumbsUp size={20} /> <p>Liked Videos</p>
			</NavLink>
			<NavLink
				to="/watch-later"
				className="sidebar-item link-no-style "
				style={getActiveStyle}
			>
				<FaClock size={20} /> <p>Watch Later</p>
			</NavLink>
			<NavLink
				to="/history"
				className="sidebar-item link-no-style "
				style={getActiveStyle}
			>
				<FaHistory size={20} /> <p>History</p>
			</NavLink>
		</div>
	);
};

export { Sidebar };
