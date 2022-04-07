import "./PlayList.css";
import { getPlaylists } from "../../api/apicalls";
import { useVideoContext } from "../../context/VideoContext";
import { useEffect } from "react";
import { PlaylistCard } from "../../components/playlist-card/PlaylistCard";
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
			{videoState.playlists.length < 1 && <h1>You have no playlists </h1>}

			<div className="grid  grid-4-responsive">
				{videoState.playlists.map((item) => {
					return <PlaylistCard playlist={item} key={item._id} />;
				})}
			</div>
		</div>
	);
};

export { PlayList };
