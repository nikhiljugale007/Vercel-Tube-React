import "./HzVideoCard.css";
import { useVideoContext } from "../../context/VideoContext";
import { addToHistory, removeFromHistory } from "../../api/apicalls";
import { useNavigate } from "react-router-dom";

const HzVideoCard = ({ video }) => {
	const { _id, title, thumbnailImageUrl, channelName } = video;
	const { videoState, videoDispatch } = useVideoContext();
	const navigate = useNavigate();

	const checkVideoInHistory = () => {
		return videoState.history.find((item) => item._id === _id);
	};
	const addVideoToHistory = async () => {
		const response = await addToHistory(video);
		if (response.success) {
			videoDispatch({ type: "SET_HISTORY", payload: response.history });
		} else {
			console.log("error");
		}
	};
	const removeVideoFromHistory = async () => {
		const response = await removeFromHistory(_id);

		if (response.success) {
			videoDispatch({ type: "SET_HISTORY", payload: response.history });
		} else {
			console.log("ERR");
		}
	};
	const handleVideoCardClick = () => {
		if (checkVideoInHistory()) {
			removeVideoFromHistory();
		}
		addVideoToHistory();
		navigate(`/videos/${_id}`);
	};

	return (
		<div className="hz-video-card" onClick={handleVideoCardClick}>
			<img
				className="img-responsive hz-card-image"
				src={thumbnailImageUrl}
				alt="thumbnail"
			/>
			<div className="flex-vt g-1 ">
				<p className="typo-label ellipsis">{title}</p>
				<div>
					<p className="typo-subtext text-gray">{channelName}</p>
					<div className="card-footer-icon g-1">
						<p className="typo-subtext text-gray">48k likes</p>
						<p className="typo-subtext text-gray">5 month ago</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export { HzVideoCard };
