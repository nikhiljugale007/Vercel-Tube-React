import { NavLink } from "react-router-dom";
import {
	FaHome,
	FaCompass,
	FaHistory,
	FaClock,
	FaThList,
	FaThumbsUp,
} from "../../icons";
import "./MobileNavigation.css";
export const MobileNavigation = () => {
	const getActiveStyle = ({ isActive }) => ({
		color: isActive ? "blue" : "",
		backgroundColor: "transparent",
		border: "none",
	});
	return (
		<div className="flex-hz-space-bw full-width">
			<NavLink
				className="flex-vt-center p-1 link-no-style"
				to="/"
				style={getActiveStyle}
			>
				<FaHome size={20} />
				<p className="text-small">Home</p>
			</NavLink>
			<NavLink
				className="flex-vt-center p-1 link-no-style"
				to="/videos"
				style={getActiveStyle}
			>
				<FaCompass size={20} />
				<p className="text-small">Explore</p>
			</NavLink>
			<NavLink
				className="flex-vt-center p-1 link-no-style"
				to="/playlist"
				style={getActiveStyle}
			>
				<FaThList size={20} />
				<p className="text-small">Playlist</p>
			</NavLink>
			<NavLink
				className="flex-vt-center p-1 link-no-style"
				to="/liked-videos"
				style={getActiveStyle}
			>
				<FaThumbsUp size={20} />
				<p className="text-small">Like</p>
			</NavLink>
			<NavLink
				className="flex-vt-center p-1 link-no-style"
				to="/watch-later"
				style={getActiveStyle}
			>
				<FaClock size={20} />
				<p className="text-small">WatchLater</p>
			</NavLink>
			<NavLink
				className="flex-vt-center p-1 link-no-style"
				to="/history"
				style={getActiveStyle}
			>
				<FaHistory size={20} />
				<p className="text-small">History</p>
			</NavLink>
		</div>
	);
};
