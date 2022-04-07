import "./Sidebar.css";
import {
	FaHome,
	FaCompass,
	FaHistory,
	FaClock,
	FaThList,
	FaThumbsUp,
} from "../../icons";
import { NavLink, useLocation } from "react-router-dom";

const Sidebar = ({ mobileSidebar, setMobileSidebar }) => {
	const location = useLocation().pathname;

	return (
		<>
			{/* desktop sidebar */}
			<div className="sidebar-container">
				<NavLink
					to="/"
					className={`sidebar-item link-no-style + ${
						location === "/" ? "active" : ""
					}`}
				>
					<FaHome size={20} /> <p>Home</p>
				</NavLink>
				<NavLink
					to="/videos"
					className={`sidebar-item link-no-style + ${
						location === "/videos" ? "active" : ""
					}`}
				>
					<FaCompass size={20} /> <p>Explore</p>
				</NavLink>
				<NavLink
					to="/playlist"
					className={`sidebar-item link-no-style + ${
						location === "/playlist" ? "active" : ""
					}`}
				>
					<FaThList size={20} /> <p>Playlist</p>
				</NavLink>
				<NavLink
					to="/liked-videos"
					className={`sidebar-item link-no-style + ${
						location === "/liked-videos" ? "active" : ""
					}`}
				>
					<FaThumbsUp size={20} /> <p>Liked Videos</p>
				</NavLink>
				<NavLink
					to="/watch-later"
					className={`sidebar-item link-no-style + ${
						location === "/watch-later" ? "active" : ""
					}`}
				>
					<FaClock size={20} /> <p>Watch Later</p>
				</NavLink>
				<NavLink
					to="/history"
					className={`sidebar-item link-no-style + ${
						location === "/history" ? "active" : ""
					}`}
				>
					<FaHistory size={20} /> <p>History</p>
				</NavLink>
			</div>
			{/* mobile sidebar */}
			{mobileSidebar && (
				<div className="mobile-sidebar-container">
					<NavLink
						to="/"
						className={`sidebar-item link-no-style + ${
							location === "/" ? "active" : ""
						}`}
						onClick={() => setMobileSidebar(false)}
					>
						<FaHome size={20} /> <p>Home</p>
					</NavLink>
					<NavLink
						to="/videos"
						className={`sidebar-item link-no-style + ${
							location === "/videos" ? "active" : ""
						}`}
						onClick={() => setMobileSidebar(false)}
					>
						<FaCompass size={20} /> <p>Explore</p>
					</NavLink>
					<NavLink
						to="/playlist"
						className={`sidebar-item link-no-style + ${
							location === "/playlist" ? "active" : ""
						}`}
						onClick={() => setMobileSidebar(false)}
					>
						<FaThList size={20} /> <p>Playlist</p>
					</NavLink>
					<NavLink
						to="/liked-videos"
						className={`sidebar-item link-no-style + ${
							location === "/liked-videos" ? "active" : ""
						}`}
						onClick={() => setMobileSidebar(false)}
					>
						<FaThumbsUp size={20} /> <p>Liked Videos</p>
					</NavLink>
					<NavLink
						to="/watch-later"
						className={`sidebar-item link-no-style + ${
							location === "/watch-later" ? "active" : ""
						}`}
						onClick={() => setMobileSidebar(false)}
					>
						<FaClock size={20} /> <p>Watch Later</p>
					</NavLink>
					<NavLink
						to="/history"
						className={`sidebar-item link-no-style + ${
							location === "/history" ? "active" : ""
						}`}
						onClick={() => setMobileSidebar(false)}
					>
						<FaHistory size={20} /> <p>History</p>
					</NavLink>
				</div>
			)}
		</>
	);
};

export { Sidebar };
