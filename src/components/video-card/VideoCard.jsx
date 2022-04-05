import "./VideoCard.css";
import { useState } from "react";
import {
	FaEllipsisV,
	MdFeaturedPlayList,
	FaClock,
	FaThumbsUp,
	AiFillCloseCircle,
} from "../../icons";
import {
	addToWatchLater,
	addToLikedVideos,
	removeFromWatchLater,
	removeFromLikedVideos,
} from "../../api/apicalls";
import { Link } from "react-router-dom";
import { useVideoContext } from "../../context/VideoContext";
const VideoCard = ({ video }) => {
	const { videoState, videoDispatch } = useVideoContext();
	const [showDropDown, setShowDropDown] = useState(false);
	const { _id, title, authorImageUrl, thumbnailImageUrl, channelName } = video;
	const toggleOptionMenu = () => {
		setShowDropDown((prev) => !prev);
	};

	const addVideoToWatchLater = async () => {
		const response = await addToWatchLater(video);
		if (response.success) {
			videoDispatch({ type: "SET_WATCHLATER", payload: response.watchlater });
			setShowDropDown((prev) => !prev);
		} else {
			console.log("error");
		}
	};
	const removeVideoFromWatchLater = async () => {
		const response = await removeFromWatchLater(_id);
		if (response.success) {
			videoDispatch({ type: "SET_WATCHLATER", payload: response.watchlater });
			setShowDropDown((prev) => !prev);
		} else {
			console.log("ERROR");
		}
	};

	const addVideoToLikedVideo = async () => {
		const response = await addToLikedVideos(video);
		if (response.success) {
			console.log(response);
			videoDispatch({ type: "SET_LIKED_VIDEOS", payload: response.likes });
			setShowDropDown((prev) => !prev);
		} else {
			console.log("error");
		}
	};
	const removeVideoFromLikedVideos = async () => {
		const response = await removeFromLikedVideos(_id);
		if (response.success) {
			videoDispatch({ type: "SET_LIKED_VIDEOS", payload: response.likes });
			setShowDropDown((prev) => !prev);
		} else {
			console.log("ERROR");
		}
	};
	const checkVideoInWatchLater = () => {
		return videoState.watchlater.find((item) => item._id === _id);
	};

	const checkVideoInLikedVideo = () => {
		return videoState.likedvideos.find((item) => item._id === _id);
	};

	return (
		<div className="card">
			<Link to={`/videos/${_id}`}>
				<img
					className="card-img-container"
					src={thumbnailImageUrl}
					alt="thumbnail"
				/>
			</Link>
			<div className="card-body">
				<div className="card-body-sub-container">
					<div className="flex-hz">
						<img
							className="channel-logo"
							alt="avatar"
							loading="lazy"
							src={authorImageUrl}
						/>
						<div className="flex-vt">
							<p className="h6 ellipsis">{title}</p>
							<p className="text-small text-gray">{channelName}</p>
							<div className="card-sub-container text-gray">
								<p className="text-small">6k Views</p>
								<p>.</p>
								<p className="text-small">5Months ago</p>
							</div>
						</div>
					</div>
					<div className="dropdown-container">
						{showDropDown && (
							<div className="dropdown-menu">
								<ul className="list list-style-nostyle">
									<li className="list-item">
										<MdFeaturedPlayList />
										Add to playlist
									</li>
									{checkVideoInWatchLater() ? (
										<li
											className="list-item"
											onClick={() => removeVideoFromWatchLater()}
										>
											<FaClock />
											Remove From watch later
										</li>
									) : (
										<li
											className="list-item"
											onClick={() => addVideoToWatchLater()}
										>
											<FaClock />
											Add to watch later
										</li>
									)}
									{checkVideoInLikedVideo() ? (
										<li
											className="list-item"
											onClick={() => removeVideoFromLikedVideos()}
										>
											<FaThumbsUp /> Remove from liked Videos
										</li>
									) : (
										<li
											className="list-item"
											onClick={() => addVideoToLikedVideo()}
										>
											<FaThumbsUp /> Add to liked Videos
										</li>
									)}
								</ul>
							</div>
						)}
						<div className="option-icon" onClick={toggleOptionMenu}>
							{showDropDown ? <AiFillCloseCircle /> : <FaEllipsisV />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { VideoCard };
