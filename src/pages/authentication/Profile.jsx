import { useAuthContext } from "../../context/AuthContext";
import { useVideoContext } from "../../context/VideoContext";
import "./authentication.css";
import { useNavigate } from "react-router";
const Profile = () => {
	const { videoDispatch } = useVideoContext();
	const { authDispatch } = useAuthContext();
	const navigate = useNavigate();
	const signoutUser = () => {
		localStorage.removeItem("token");
		videoDispatch({ type: "RESET_PRODUCT_STATE" });
		authDispatch({ type: "LOGOUT_USER" });
		navigate("/");
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
