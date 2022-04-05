import { useEffect } from "react";
import { getLikedVideos } from "../../api/apicalls";
import { useVideoContext } from "../../context/VideoContext";
import { VideoCard } from "../../components";
const LikedVideos = () => {
	const { videoState, videoDispatch } = useVideoContext();

	useEffect(() => {
		const getLikedVideo = async () => {
			const response = await getLikedVideos();
			if (response.success) {
				videoDispatch({
					type: "SET_LIKED_VIDEOS",
					payload: response.likes,
				});
			} else {
				console.log("ERR");
			}
		};
		getLikedVideo();
	}, [videoDispatch]);
	return (
		<div>
			{videoState.likedvideos.length < 1 && <h1>No liked videos </h1>}

			<div className="grid  grid-4-responsive">
				{videoState.likedvideos.map((video) => {
					return <VideoCard key={video._id} video={video} />;
				})}
			</div>
		</div>
	);
};

export { LikedVideos };
