import { Tab, VideoCard } from "../../components";
import "./VideoListing.css";
import { useVideoContext } from "../../context/VideoContext";
import { getAllVideos } from "../../api/apicalls";
import { useEffect, useState } from "react";
import { empty_list } from "./../../assets/index";
const VideoListing = () => {
	const { videoState, filteredData, videoDispatch } = useVideoContext();
	const [loading, setLoading] = useState(true);
	useEffect(() => {
		const getVideos = async () => {
			setLoading(true);
			const response = await getAllVideos();
			if (response.success) {
				videoDispatch({ type: "SET_VIDEOS", payload: response.videos });
				setLoading(false);
			} else {
				console.log("ERR");
			}
		};
		getVideos();
	}, [videoDispatch]);
	return (
		<div>
			{loading ? (
				<p>Loading</p>
			) : (
				<div>
					<div className="tab-container">
						{videoState.categories.map((item, index) => (
							<Tab key={index} label={item} />
						))}
					</div>
					{filteredData.length < 1 && (
						<div className="flex-vt-center">
							<p className="typo-title flex-hz-center">
								No videos matching your requirements
							</p>
							<img
								className="img-responsive"
								src={empty_list}
								alt="empty-list"
							/>
						</div>
					)}
					<div className="grid  grid-4-responsive">
						{filteredData.map((video) => {
							return <VideoCard key={video._id} video={video} />;
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export { VideoListing };
