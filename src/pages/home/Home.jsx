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
				<grid className="grid  grid-4-responsive">
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
				</grid>
			</div>
			<div>
				<p className="typo-title pv-2">Suggestion For you</p>
				<grid className="grid  grid-4-responsive">
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
					<VideoCard />
				</grid>
			</div>
		</div>
	);
};

export { Home };
