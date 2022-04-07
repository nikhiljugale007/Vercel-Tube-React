import { useVideoContext } from "../../context/VideoContext";
import "./Modal.css";
import { FaWindowClose } from "../../icons";
import { useState } from "react";
import {
	addPlaylist,
	addToSpecificPlaylist,
	deleteFromSpecificPlaylist,
} from "../../api/apicalls";
import { Toast } from "../toast/Toast";
export const Modal = ({ setShowPlaylistModal, currentVideo }) => {
	const { videoState, videoDispatch } = useVideoContext();
	const [newPlaylist, setNewPlaylist] = useState(false);
	const [playListName, setPlayListName] = useState("");
	const [toast, setToast] = useState({ label: "", showToast: false });

	const closeModal = () => {
		setShowPlaylistModal(false);
	};
	const handleNewPlaylist = () => {
		setNewPlaylist(true);
	};

	const createNewPlaylist = async () => {
		const playlist = { title: playListName };
		setPlayListName("");
		setToast((prev) => ({
			...prev,
			label: "Creating new playlist",
			showToast: true,
		}));

		const response = await addPlaylist(playlist);
		if (response.success) {
			videoDispatch({ type: "SET_PLAYLISTS", payload: response.playlists });
			setTimeout(() => {
				setToast((prev) => ({ ...prev, label: "", showToast: false }));
			}, 1000);
		} else {
			console.log("ERR");
		}
	};
	const addVideoToPlayList = async (id) => {
		setToast((prev) => ({
			...prev,
			label: "Adding video to playlist",
			showToast: true,
		}));
		const response = await addToSpecificPlaylist(id, currentVideo);
		if (response.success) {
			videoDispatch({ type: "SET_PLAYLISTBY_ID", payload: response.playlist });
			setTimeout(() => {
				setToast((prev) => ({ ...prev, label: "", showToast: false }));
			}, 1000);
		} else {
			console.log("ERR");
		}
	};
	const removeVideoFromSpecificPlaylist = async (playlistId) => {
		setToast((prev) => ({
			...prev,
			label: "Removing video from playlist",
			showToast: true,
		}));
		const response = await deleteFromSpecificPlaylist(
			playlistId,
			currentVideo._id
		);
		if (response.success) {
			videoDispatch({ type: "SET_PLAYLISTBY_ID", payload: response.playlist });
			setTimeout(() => {
				setToast((prev) => ({ ...prev, label: "", showToast: false }));
			}, 1000);
		} else {
			console.log("ERR");
		}
	};
	const checkVideoInPlaylist = (playlistId) => {
		const individualPlaylist = videoState.playlists.find(
			(item) => item._id === playlistId
		);
		return individualPlaylist.videos.find(
			(item) => item._id === currentVideo._id
		);
	};
	return (
		<div className="playlist-modal">
			{toast.showToast && <Toast label={toast.label} />}
			<div className="flex-hz-space-bw">
				<p className="typo-label">Add to playlist</p>
				<button className="btn-icon p-1" onClick={closeModal}>
					<FaWindowClose />
				</button>
			</div>
			<div className="playlist-container">
				{videoState.playlists.map((item, index) => {
					return (
						<div key={index}>
							{checkVideoInPlaylist(item._id) ? (
								<label
									className="typo-label list-item"
									onClick={() => removeVideoFromSpecificPlaylist(item._id)}
								>
									<input type="checkbox" defaultChecked={true} />
									{item.title + " "}
								</label>
							) : (
								<p
									className="typo-label list-item"
									onClick={() => addVideoToPlayList(item._id)}
								>
									<input type="checkbox" defaultChecked={false} />
									{item.title + " "}
								</p>
							)}
						</div>
					);
				})}
			</div>
			{newPlaylist ? (
				<div className="new-playlist-container">
					<input
						className="input input-outlined"
						placeholder="New Playlist Name"
						value={playListName}
						onChange={(e) => setPlayListName(e.target.value)}
					/>
					<button className="btn btn-outlined p-1" onClick={createNewPlaylist}>
						Create
					</button>
				</div>
			) : (
				<button className="btn btn-outlined p-1" onClick={handleNewPlaylist}>
					Create New
				</button>
			)}
		</div>
	);
};
