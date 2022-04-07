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
	addToHistory,
	removeFromHistory,
	deleteFromSpecificPlaylist,
} from "../../api/apicalls";
import { useNavigate, useParams } from "react-router-dom";
import { useVideoContext } from "../../context/VideoContext";
import { Modal } from "../playlist-modal/Modal";
const VideoCard = ({ video, card_type }) => {
	const { videoState, videoDispatch } = useVideoContext();
	const [showDropDown, setShowDropDown] = useState(false);
	const [showPlaylistModal, setShowPlaylistModal] = useState(false);
	const navigate = useNavigate();
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
		// checking wheather video is already in history or not
		if (checkVideoInHistory()) {
			// if yes them remove that entry
			removeVideoFromHistory();
		}
		// add video to history
		addVideoToHistory();
		navigate(`/videos/${_id}`);
	};
	const handlePlaylist = () => {
		setShowPlaylistModal(true);
		setShowDropDown(false);
	};
	const { playlistId } = useParams();
	const removeVideoFromPlaylist = async () => {
		const response = await deleteFromSpecificPlaylist(playlistId, _id);
		if (response.success) {
			videoDispatch({ type: "SET_PLAYLISTBY_ID", payload: response.playlist });
		} else {
			console.log("ERR");
		}
	};
	return (
		<>
			{showPlaylistModal && (
				<Modal
					setShowPlaylistModal={setShowPlaylistModal}
					currentVideo={video}
				/>
			)}
			<div className="card">
				<div className="badge-image-container">
					<img
						className="card-img-container"
						src={thumbnailImageUrl}
						alt="thumbnail"
						onClick={handleVideoCardClick}
					/>
					{card_type === "HISTORY_CARD" && (
						<button
							className="btn btn-outlined btn-icon ecommerce-chip-right"
							onClick={removeVideoFromHistory}
						>
							<AiFillCloseCircle size={20} className="filled-icon" />
						</button>
					)}
					{card_type === "PLAY_LIST_CARD" && (
						<button
							className="btn btn-outlined btn-icon ecommerce-chip-right"
							onClick={removeVideoFromPlaylist}
						>
							<AiFillCloseCircle size={20} className="filled-icon" />
						</button>
					)}
				</div>
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
										<li className="list-item" onClick={handlePlaylist}>
											<MdFeaturedPlayList />
											Add to playlist
										</li>
										{checkVideoInWatchLater() ? (
											<li
												className="list-item"
												onClick={() => removeVideoFromWatchLater()}
											>
												<FaClock className="filled-icon" size={20} />
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
												<FaThumbsUp className="filled-icon" size={20} /> Remove
												from liked Videos
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
		</>
	);
};

export { VideoCard };
