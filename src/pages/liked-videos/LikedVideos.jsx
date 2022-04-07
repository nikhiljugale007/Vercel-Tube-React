import { useEffect } from "react";
import { getLikedVideos } from "../../api/apicalls";
import { useVideoContext } from "../../context/VideoContext";
import { VideoCard } from "../../components";
import { empty_list } from "./../../assets/index";
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
			<p className="typo-title flex-hz-center">Liked Videos</p>
			{videoState.likedvideos.length < 1 && (
				<div className="flex-vt-center">
					<p className="typo-title flex-hz-center">No liked videos yet</p>
					<img className="img-responsive" src={empty_list} alt="empty-list" />
				</div>
			)}

			<div className="grid  grid-4-responsive">
				{videoState.likedvideos.map((video) => {
					return <VideoCard key={video._id} video={video} />;
				})}
			</div>
		</div>
	);
};

export { LikedVideos };
