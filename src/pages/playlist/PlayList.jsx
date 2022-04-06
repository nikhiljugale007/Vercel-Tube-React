import "./PlayList.css";
import { getPlaylists } from "../../api/apicalls";
import { useVideoContext } from "../../context/VideoContext";
import { useEffect } from "react";
const PlayList = () => {
	const { videoState, videoDispatch } = useVideoContext();

	useEffect(() => {
		console.log("LOAD");
		const getAllPlayList = async () => {
			const response = await getPlaylists();
			console.log(response);
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
			{videoState.playlists.map((item) => {
				return <h1>{item.title}</h1>;
			})}
		</div>
	);
};

export { PlayList };
