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
	SingleVideo,
} from "./pages";
import Mockman from "mockman-js";
import { useVideoContext } from "./context/VideoContext";
import { useEffect } from "react";
import { getPlaylists } from "./api/apicalls";
function App() {
	const { videoDispatch } = useVideoContext();

	useEffect(() => {
		const getAllPlaylists = async () => {
			const response = await getPlaylists();
			console.log(response);
			if (response.success) {
				videoDispatch({ type: "SET_PLAYLISTS", payload: response.playlists });
			} else {
				console.log("ERR");
			}
		};
		getAllPlaylists();
	}, [videoDispatch]);
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
						<Route path="/videos/:id" element={<SingleVideo />} />
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
