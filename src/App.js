import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header, RequireAuth, Sidebar } from "./components";
import {
	Home,
	VideoListing,
	PlayList,
	WatchLater,
	History,
	LikedVideos,
	SingleVideo,
	Login,
	Profile,
	Signup,
} from "./pages";
import Mockman from "mockman-js";
import { useVideoContext } from "./context/VideoContext";
import { useEffect } from "react";
import { getPlaylists } from "./api/apicalls";
import { SinglePlaylist } from "./pages/single-playlist/SinglePlaylist";
function App() {
	// const { videoDispatch } = useVideoContext();
	// useEffect(() => {
	// 	const getAllPlaylists = async () => {
	// 		const response = await getPlaylists();
	// 		if (response.success) {
	// 			videoDispatch({ type: "SET_PLAYLISTS", payload: response.playlists });
	// 		} else {
	// 			console.log("ERR");
	// 		}
	// 	};
	// 	getAllPlaylists();
	// }, [videoDispatch]);

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
						<Route
							path="/playlist"
							element={
								<RequireAuth from="/playlist">
									<PlayList />
								</RequireAuth>
							}
						/>
						<Route path="/playlist/:playlistId" element={<SinglePlaylist />} />
						<Route
							path="/watch-later"
							element={
								<RequireAuth from="/watch-later">
									<WatchLater />
								</RequireAuth>
							}
						/>
						<Route
							path="/history"
							element={
								<RequireAuth from="/history">
									<History />
								</RequireAuth>
							}
						/>
						<Route
							path="/liked-videos"
							element={
								<RequireAuth from="/liked-videos">
									<LikedVideos />
								</RequireAuth>
							}
						/>
						<Route path="/mockman" element={<Mockman />} />
						<Route path="/login" element={<Login />} />
						<Route path="/signup" element={<Signup />} />
						<Route
							path="/profile"
							element={
								<RequireAuth from="/profile">
									<Profile />
								</RequireAuth>
							}
						/>
					</Routes>
				</div>
			</div>
		</>
	);
}

export default App;
