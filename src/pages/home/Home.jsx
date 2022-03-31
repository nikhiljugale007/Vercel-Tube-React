import { VideoCard } from "../../components";
import "./Home.css";
const Home = () => {
	return (
		<div>
			<div className="ad-container">
				<p>RIOT GAMES</p>
				<p className="h1 text-bold text-white">VALORENT Masters:</p>
				<p className="typo-label pv-1">Watch live matches from Berlin</p>
				<button className="btn btn-primary width-fit-content">Watch now</button>
			</div>
			<div>
				<p className="typo-title pv-2">Trending Videos</p>
				<div className="horizontal-video-list">
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
				</div>
			</div>
			<div>
				<p className="typo-title pv-2">Suggestion For you</p>
				<div className="horizontal-video-list">
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
				</div>
			</div>
		</div>
	);
};

export { Home };
