import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Header } from "./components";
import { Home, VideoListing } from "./pages";
function App() {
	return (
		<>
			<Header />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/videos" element={<VideoListing />} />
			</Routes>
		</>
	);
}

export default App;
