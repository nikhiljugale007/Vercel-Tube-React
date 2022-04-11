//catergory wise filtered data
const getFilteredVideos = (videos, filters) => {
	return filters.categoryName === "All"
		? videos
		: videos.filter((video) => video.categoryName === filters.categoryName);
};

//search wise filtered data
const searchFilteredData = (videos, filters) => {
	const typeFilterData = getFilteredVideos(videos, filters);
	const searchData = typeFilterData.filter((video) => {
		return video.title
			.toLowerCase()
			.includes(
				filters.searchBarInput === undefined
					? ""
					: filters.searchBarInput.toLowerCase()
			);
	});
	return searchData;
};
export { getFilteredVideos, searchFilteredData };
