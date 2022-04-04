import { VideoCard } from "../../components";
import "./Home.css";
import { videos } from "../video-listing/TabData";
const Home = () => {
	const bg_image =
		"https://s01.sgp1.cdn.digitaloceanspaces.com/article/156848-arkadmhmgb-1616914190.jpg";
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
				<button className="btn btn-primary width-fit-content">Watch now</button>
			</div>
			<div>
				<p className="typo-title pv-2">Trending Videos</p>
				<grid className="grid  grid-4-responsive">
					{videos.map((video) => {
						return <VideoCard key={video._id} video={video} />;
					})}
				</grid>
			</div>
			<div>
				<p className="typo-title pv-2">Suggestion For you</p>
				<grid className="grid  grid-4-responsive">
					{videos.map((video) => {
						return <VideoCard key={video._id} video={video} />;
					})}
				</grid>
			</div>
		</div>
	);
};

export { Home };
