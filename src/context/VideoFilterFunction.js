const getFilteredVideos = (videos, filters) => {
	return filters.categoryName === "All"
		? videos
		: videos.filter((video) => video.categoryName === filters.categoryName);
};
export { getFilteredVideos };
