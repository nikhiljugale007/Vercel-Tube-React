import { VideoCard } from "../../components";
import "./Home.css";
import { videos } from "../video-listing/TabData";
const Home = () => {
	return (
		<div>
			<div
				className="ad-container"
				style={{
					backgroundImage: `url("https://images.indianexpress.com/2020/12/India-vs-Australia.jpg")`,
				}}
			>
				<p>RIOT GAMES</p>
				<p className="h1 text-bold text-white">VALORENT Masters:</p>
				<p className="typo-label pv-1">Watch live matches from Berlin</p>
				<button className="btn btn-primary width-fit-content">Watch now</button>
			</div>
			<div>
				<p className="typo-title pv-2">Trending Videos</p>
				<div className="horizontal-video-list">
					{videos.map((video) => {
						return <VideoCard key={video._id} video={video} />;
					})}
				</div>
			</div>
			<div>
				<p className="typo-title pv-2">Suggestion For you</p>
				<div className="horizontal-video-list">
					{videos.map((video) => {
						return <VideoCard key={video._id} video={video} />;
					})}
				</div>
			</div>
		</div>
	);
};

export { Home };
