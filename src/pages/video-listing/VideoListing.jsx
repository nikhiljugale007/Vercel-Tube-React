import { Tab, VideoCard } from "../../components";
import "./VideoListing.css";
import { TabData, videos } from "./TabData";
const VideoListing = () => {
	return (
		<div>
			<div className="tab-container">
				{TabData.map((item, index) => (
					<Tab key={index} label={item} />
				))}
			</div>
			<grid className="grid  grid-4-responsive">
				{videos.map((video) => {
					return <VideoCard key={video._id} video={video} />;
				})}
			</grid>
		</div>
	);
};

export { VideoListing };
