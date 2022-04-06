import "./VideoPlayer.css";
import {
	MdFeaturedPlayList,
	FaClock,
	AiFillLike,
	AiOutlineLike,
} from "../../icons";
import {
	addToWatchLater,
	addToLikedVideos,
	removeFromWatchLater,
	removeFromLikedVideos,
} from "../../api/apicalls";
import { useVideoContext } from "../../context/VideoContext";

const VideoPlayer = ({ video }) => {
	const { videoState, videoDispatch } = useVideoContext();

	const addVideoToWatchLater = async () => {
		const response = await addToWatchLater(video);
		if (response.success) {
			videoDispatch({ type: "SET_WATCHLATER", payload: response.watchlater });
		} else {
			console.log("error");
		}
	};
	const removeVideoFromWatchLater = async () => {
		const response = await removeFromWatchLater(video._id);
		if (response.success) {
			videoDispatch({ type: "SET_WATCHLATER", payload: response.watchlater });
			console.log("ERROR");
		}
	};

	const addVideoToLikedVideo = async () => {
		const response = await addToLikedVideos(video);
		if (response.success) {
			console.log(response);
			videoDispatch({ type: "SET_LIKED_VIDEOS", payload: response.likes });
		} else {
			console.log("error");
		}
	};
	const removeVideoFromLikedVideos = async () => {
		const response = await removeFromLikedVideos(video._id);
		if (response.success) {
			videoDispatch({ type: "SET_LIKED_VIDEOS", payload: response.likes });
		} else {
			console.log("ERROR");
		}
	};
	const checkVideoInWatchLater = () => {
		return videoState.watchlater.find((item) => item._id === video._id);
	};

	const checkVideoInLikedVideo = () => {
		return videoState.likedvideos.find((item) => item._id === video._id);
	};

	return (
		<div className="video-player-container flex-vt">
			<iframe
				className="video-player"
				src={video.url}
				title="video-player"
				frameBorder="0"
				allowFullScreen
			></iframe>
			<div className="flex-vt pv-1">
				<p className="typo-title">{video.title}</p>
				<div className="flex-hz-space-bw pv-1">
					<p className="typo-label option-container">
						<div className="flex-hz g-1">
							{checkVideoInLikedVideo() ? (
								<li
									className="list-item"
									onClick={() => removeVideoFromLikedVideos()}
								>
									<AiFillLike size={20} className="filled-icon" />
									<p className="hide">Remove from liked Videos</p>
								</li>
							) : (
								<li
									className="list-item"
									onClick={() => addVideoToLikedVideo()}
								>
									<AiOutlineLike size={20} />
									<p className="hide"> Add to liked Videos</p>
								</li>
							)}
						</div>

						<div className="flex-hz g-1">
							{checkVideoInWatchLater() ? (
								<li
									className="list-item"
									onClick={() => removeVideoFromWatchLater()}
								>
									<FaClock className="filled-icon" />
									<p className="hide">Remove From watch later</p>
								</li>
							) : (
								<li
									className="list-item"
									onClick={() => addVideoToWatchLater()}
								>
									<FaClock />
									<p className="hide">Add to watch later</p>
								</li>
							)}
						</div>
						<div className="flex-hz g-1">
							<li className="list-item">
								<MdFeaturedPlayList />
								<p className="hide">Add to playlist</p>
							</li>
						</div>
					</p>
				</div>
			</div>
		</div>
	);
};
export { VideoPlayer };
