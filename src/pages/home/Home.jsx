import { VideoCard } from "../../components";
import { useVideoContext } from "../../context/VideoContext";
import "./Home.css";
import { getAllVideos } from "../../api/apicalls";
import { useEffect } from "react";
const Home = () => {
	const bg_image =
		"https://s01.sgp1.cdn.digitaloceanspaces.com/article/156848-arkadmhmgb-1616914190.jpg";

	const { videoState, videoDispatch } = useVideoContext();
	useEffect(() => {
		const getVideos = async () => {
			const response = await getAllVideos();
			if (response.success) {
				videoDispatch({ type: "SET_VIDEOS", payload: response.videos });
			} else {
				console.log("ERR");
			}
		};
		getVideos();
	}, [videoDispatch]);
	return (
		<div>
			<div
				className="ad-container"
				style={{
					backgroundImage: `url(${bg_image})`,
				}}
			>
				<p>3rd ODI </p>
				<p className="h1 text-bold text-white">India vs England</p>
				<p className="typo-label pv-1">Watch live from Wankhede, Mumbai</p>
				<button className="btn btn-primary width-fit-content">
					Coming soon
				</button>
			</div>
			<div>
				<p className="typo-title pv-2">Trending Videos</p>
				<div className="grid  grid-4-responsive">
					{videoState.videos.map((video) => {
						return <VideoCard key={video._id} video={video} />;
					})}
				</div>
			</div>
			<div>
				<p className="typo-title pv-2">Suggestion For you</p>
				<div className="grid  grid-4-responsive">
					{videoState.videos.map((video) => {
						return <VideoCard key={video._id} video={video} />;
					})}
				</div>
			</div>
		</div>
	);
};

export { Home };
