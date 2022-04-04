import { Tab, VideoCard } from "../../components";
import "./VideoListing.css";
import { useVideoContext } from "../../context/VideoContext";
import { getAllVideos } from "../../api/apicalls";
import { useEffect } from "react";
const VideoListing = () => {
	const { videoState, filteredData, videoDispatch } = useVideoContext();

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
			<div className="tab-container">
				{videoState.categories.map((item, index) => (
					<Tab key={index} label={item} />
				))}
			</div>
			<div className="grid  grid-4-responsive">
				{filteredData.map((video) => {
					return <VideoCard key={video._id} video={video} />;
				})}
			</div>
		</div>
	);
};

export { VideoListing };
