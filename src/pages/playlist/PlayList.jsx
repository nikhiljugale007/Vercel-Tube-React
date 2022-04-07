import "./PlayList.css";
import { getPlaylists } from "../../api/apicalls";
import { useVideoContext } from "../../context/VideoContext";
import { useEffect } from "react";
import { PlaylistCard } from "../../components/playlist-card/PlaylistCard";
import { empty_list } from "./../../assets/index";
const PlayList = () => {
	const { videoState, videoDispatch } = useVideoContext();

	useEffect(() => {
		const getAllPlayList = async () => {
			const response = await getPlaylists();
			if (response.success) {
				videoDispatch({ type: "SET_PLAYLISTS", payload: response.playlists });
			} else {
				console.log("ERR");
			}
		};
		getAllPlayList();
	}, [videoDispatch]);
	return (
		<div>
			{" "}
			<p className="typo-title flex-hz-center">Playlist</p>
			{videoState.playlists.length < 1 && (
				<div>
					<p className="typo-title flex-hz-center">
						You have no playlist created so far
					</p>
					<img className="img-responsive" src={empty_list} alt="empty-list" />
				</div>
			)}
			<div className="grid  grid-4-responsive">
				{videoState.playlists.map((item) => {
					return <PlaylistCard playlist={item} key={item._id} />;
				})}
			</div>
		</div>
	);
};

export { PlayList };
