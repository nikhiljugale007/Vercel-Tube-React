import { createContext, useContext, useReducer } from "react";
import { TabData } from "../pages/video-listing/TabData";
import { searchFilteredData } from "./VideoFilterFunction";
import { VideoReducerFunction } from "./VideoReducerFunction";

const VideoContext = createContext();

const contextInitialValue = {
	videos: [],
	watchlater: [],
	likedvideos: [],
	history: [],
	categories: TabData,
	playlists: [],
	filters: {
		categoryName: "All",
		searchBarInput: "",
	},
};

const VideoContextProvider = ({ children }) => {
	const [videoState, videoDispatch] = useReducer(
		VideoReducerFunction,
		contextInitialValue
	);

	const filteredData = searchFilteredData(
		videoState.videos,
		videoState.filters
	);

	return (
		<VideoContext.Provider value={{ videoState, filteredData, videoDispatch }}>
			{children}
		</VideoContext.Provider>
	);
};

const useVideoContext = () => useContext(VideoContext);

export { VideoContextProvider, useVideoContext };
