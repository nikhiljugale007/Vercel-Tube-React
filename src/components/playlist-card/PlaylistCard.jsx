import "./PlaylistCard.css";
import { AiFillDelete } from "../../icons";
import { removePlaylist } from "../../api/apicalls";
import { useVideoContext } from "../../context/VideoContext";
import { Link } from "react-router-dom";
export const PlaylistCard = ({ playlist }) => {
	const { _id, title, videos } = playlist;
	const { videoDispatch } = useVideoContext();
	const deletePlaylist = async () => {
		console.log(_id);
		const response = await removePlaylist(_id);
		console.log(response);

		if (response.success) {
			videoDispatch({ type: "SET_PLAYLISTS", payload: response.playlists });
		} else {
			console.log("ERR");
		}
	};
	return (
		<Link to={`/playlist/${_id}`} className="link-no-style">
			<div className="card p-2">
				<div className="flex-hz-space-bw">
					<p className="typo-title">{title}</p>
					<button className="btn btn-icon" onClick={deletePlaylist}>
						<AiFillDelete size={20} />
					</button>
				</div>
				<p className="typo-label">{videos.length} videos</p>
			</div>
		</Link>
	);
};
