import { Tab, VideoCard } from "../../components";
import "./VideoListing.css";
import { TabData } from "./TabData";
const VideoListing = () => {
	return (
		<div>
			<div className="tab-container">
				{TabData.map((item, index) => (
					<Tab key={index} label={item} />
				))}
			</div>
			<grid className="grid  grid-4-responsive">
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
				<VideoCard />
			</grid>
		</div>
	);
};

export { VideoListing };
