const VideoReducerFunction = (state, action) => {
	switch (action.type) {
		case "FILTER_BY_CATEGORY":
			return {
				...state,
				filters: {
					...state.filters,
					categoryName: action.payload,
				},
			};
		case "SET_VIDEOS":
			return {
				...state,
				videos: action.payload,
			};
		case "SET_WATCHLATER":
			return {
				...state,
				watchlater: action.payload,
			};
		case "SET_LIKED_VIDEOS":
			return {
				...state,
				likedvideos: action.payload,
			};
		case "SET_HISTORY":
			return {
				...state,
				history: action.payload,
			};
		case "SET_CATEGORY":
			return {
				...state,
				categories: action.payload,
			};
		case "SET_PLAYLISTS":
			return {
				...state,
				playlists: action.payload,
			};
		case "SET_PLAYLISTBY_ID":
			return {
				...state,
				playlists: state.playlists.map((item) =>
					item._id === action.payload._id ? action.payload : item
				),
			};
		case "RESET_VIDEO_STATE":
			return {
				videos: [],
				watchlater: [],
				likedvideos: [],
				history: [],
				playlists: [],
				filters: {
					categoryName: "All",
				},
			};
		default:
			return state;
	}
};
export { VideoReducerFunction };
