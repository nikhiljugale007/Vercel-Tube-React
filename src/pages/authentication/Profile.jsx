import { useVideoContext } from "../../context/VideoContext";
import "./authentication.css";
const Profile = () => {
	const { videoDispatch } = useVideoContext();
	const signoutUser = () => {
		localStorage.removeItem("token");
		videoDispatch({ type: "RESET_PRODUCT_STATE" });
	};
	return (
		<div>
			<p className="typo-title flex-hz-center p-2">My Profile</p>
			<div className="flex-hz-center">
				<button className="btn btn-outlined" onClick={signoutUser}>
					Sign Out
				</button>
			</div>
		</div>
	);
};

export { Profile };
