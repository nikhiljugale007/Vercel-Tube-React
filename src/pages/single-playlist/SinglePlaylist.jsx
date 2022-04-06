import "./SinglePlaylist.css";
import { useParams } from "react-router-dom";
import { VideoCard } from "../../components";
import { useEffect, useState } from "react";
import { getPlaylistById } from "../../api/apicalls";
const SinglePlaylist = () => {
	const { playlistId } = useParams();
	const [playlist, setPlaylist] = useState();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const getPlaylist = async () => {
			setLoading(true);
			const response = await getPlaylistById(playlistId);
			console.log(response);
			if (response.success) {
				setPlaylist(response.playlist);
				setLoading(false);
			} else {
				console.log("ERR");
			}
		};
		getPlaylist();
	}, [playlistId]);

	return (
		<div>
			{loading ? (
				<h1>Loading</h1>
			) : (
				<div>
					<p className="typo-title pv-1">{playlist.title}</p>
					{playlist.videos.length < 1 && (
						<h1>You have no videos in this playlist </h1>
					)}
					<div className="grid  grid-4-responsive">
						{playlist.videos
							.slice(0)
							.reverse()
							.map((video) => {
								return (
									<VideoCard
										key={video._id}
										video={video}
										card_type={"PLAY_LIST_CARD"}
									/>
								);
							})}
					</div>
				</div>
			)}
		</div>
	);
};

export { SinglePlaylist };
