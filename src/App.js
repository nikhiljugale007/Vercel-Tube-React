import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header, Sidebar } from "./components";
import {
	Home,
	VideoListing,
	PlayList,
	WatchLater,
	History,
	LikedVideos,
} from "./pages";
import Mockman from "mockman-js";

function App() {
	return (
		<>
			<Header />
			<div className="content-section">
				<aside className="aside">
					<Sidebar />
				</aside>
				<div className="main-section">
					<Routes>
						<Route path="/" element={<Home />} />
						<Route path="/videos" element={<VideoListing />} />
						<Route path="/playlist" element={<PlayList />} />
						<Route path="/watch-later" element={<WatchLater />} />
						<Route path="/history" element={<History />} />
						<Route path="/liked-videos" element={<LikedVideos />} />
						<Route path="/mockman" element={<Mockman />} />
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
