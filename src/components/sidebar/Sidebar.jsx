import "./Sidebar.css";
import {
	FaHome,
	FaCompass,
	FaHistory,
	FaClock,
	FaThList,
	FaThumbsUp,
} from "../../icons";
import { Link, NavLink, useLocation } from "react-router-dom";

const Sidebar = () => {
	const location = useLocation().pathname;
	return (
		<div className="sidebar-container">
			<Link
				to="/"
				className={`sidebar-item link-no-style + ${
					location === "/" ? "active" : ""
				}`}
			>
				<FaHome size={20} /> <p>Home</p>
			</Link>
			<NavLink
				to="/videos"
				className={`sidebar-item link-no-style + ${
					location === "/videos" ? "active" : ""
				}`}
			>
				<FaCompass size={20} /> <p>Explore</p>
			</NavLink>
			<Link
				to="/playlist"
				className={`sidebar-item link-no-style + ${
					location === "/playlist" ? "active" : ""
				}`}
			>
				<FaThList size={20} /> <p>Playlist</p>
			</Link>
			<Link
				to="/liked-videos"
				className={`sidebar-item link-no-style + ${
					location === "/liked-videos" ? "active" : ""
				}`}
			>
				<FaThumbsUp size={20} /> <p>Liked Videos</p>
			</Link>
			<Link
				to="/watch-later"
				className={`sidebar-item link-no-style + ${
					location === "/watch-later" ? "active" : ""
				}`}
			>
				<FaClock size={20} /> <p>Watch Later</p>
			</Link>
			<Link
				to="/history"
				className={`sidebar-item link-no-style + ${
					location === "/history" ? "active" : ""
				}`}
			>
				<FaHistory size={20} /> <p>History</p>
			</Link>
		</div>
	);
};

export { Sidebar };
