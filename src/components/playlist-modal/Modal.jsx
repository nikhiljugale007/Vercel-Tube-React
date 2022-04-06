import { useVideoContext } from "../../context/VideoContext";
import "./Modal.css";
import { FaWindowClose } from "../../icons";
import { useState } from "react";
import { addPlaylist, addToSpecificPlaylist } from "../../api/apicalls";
export const Modal = ({ setShowPlaylistModal, currentVideo }) => {
	const { videoState, videoDispatch } = useVideoContext();
	const [newPlaylist, setNewPlaylist] = useState(false);
	const [playListName, setPlayListName] = useState("");
	const closeModal = () => {
		console.log(setShowPlaylistModal(false));
	};
	const handleNewPlaylist = () => {
		setNewPlaylist(true);
	};

	const createNewPlaylist = async () => {
		const playlist = { title: playListName };
		setPlayListName("");
		const response = await addPlaylist(playlist);
		if (response.success) {
			videoDispatch({ type: "SET_PLAYLISTS", payload: response.playlists });
		} else {
			console.log("ERR");
		}
	};
	const addVideoToPlayList = async (id) => {
		const response = await addToSpecificPlaylist(id, currentVideo);
		if (response.success) {
			videoDispatch({ type: "SET_PLAYLISTBY_ID", payload: response.playlist });
			console.log(response.playlist);
		} else {
			console.log("ERR");
		}
	};
	return (
		<div className="playlist-modal">
			<div className="flex-hz-space-bw">
				<p className="typo-label">Add to playlist</p>
				<button className="btn-icon p-1" onClick={closeModal}>
					<FaWindowClose />
				</button>
			</div>
			<div className="playlist-container">
				{videoState.playlists.map((item, index) => {
					return (
						// <label htmlFor={item.title} className="playlist-item" key={index}>
						// 	<input type="checkbox" value={item.title} name={item.title} />
						// </label>
						<p
							className="typo-label list-item"
							onClick={() => addVideoToPlayList(item._id)}
						>
							{item.title}
						</p>
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
