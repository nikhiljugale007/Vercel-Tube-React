import "./WatchLater.css";
import { useEffect } from "react";
import { getWatchLater } from "../../api/apicalls";
import { useVideoContext } from "../../context/VideoContext";
import { VideoCard } from "../../components";
import { empty_list } from "./../../assets/index";
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
			<p className="typo-title flex-hz-center">Watch Later</p>
			{videoState.watchlater.length < 1 && (
				<div>
					<p className="typo-title flex-hz-center">
						You have no videos in watch later
					</p>
					<img className="img-responsive" src={empty_list} alt="empty-list" />
				</div>
			)}
			<div className="grid  grid-4-responsive">
				{videoState.watchlater.map((video) => {
					return <VideoCard key={video._id} video={video} />;
				})}
			</div>
		</div>
	);
};

export { WatchLater };
