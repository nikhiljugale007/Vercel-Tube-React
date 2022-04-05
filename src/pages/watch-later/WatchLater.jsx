import "./WatchLater.css";
import { useEffect } from "react";
import { getWatchLater } from "../../api/apicalls";
import { useVideoContext } from "../../context/VideoContext";
import { VideoCard } from "../../components";
const WatchLater = () => {
	const { videoState, videoDispatch } = useVideoContext();

	useEffect(() => {
		const getWatchLaterVideos = async () => {
			const response = await getWatchLater();
			if (response.success) {
				videoDispatch({ type: "SET_WATCHLATER", payload: response.watchlater });
			} else {
				console.log("ERR");
			}
		};
		getWatchLaterVideos();
	}, [videoDispatch]);
	return (
		<div>
			{videoState.watchlater.length < 1 && <h1>No videos in watch later </h1>}
			<div className="grid  grid-4-responsive">
				{videoState.watchlater.map((video) => {
					return <VideoCard key={video._id} video={video} />;
				})}
			</div>
		</div>
	);
};

export { WatchLater };
