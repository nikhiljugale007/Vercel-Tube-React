import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { getVideoById } from "../../api/apicalls";
import "./SingleVideo.css";
import { HzVideoCard, VideoPlayer } from "../../components";
import { useVideoContext } from "../../context/VideoContext";
const SingleVideo = () => {
	const { videoState } = useVideoContext();
	const { id } = useParams();
	const [loading, setLoading] = useState(true);
	const [video, setVideo] = useState();
	useEffect(() => {
		const getVideo = async () => {
			setLoading(true);
			const response = await getVideoById(id);
			if (response.success) {
				setVideo(response.video);
				setLoading(false);
			} else {
				alert("Error!. Check Console");
			}
		};
		getVideo();
	}, [id]);

	return (
		<div>
			{loading ? (
				<h1>Loading</h1>
			) : (
				<div className="page-container">
					<div className="videoplayer-container">
						<VideoPlayer video={video} />
						<div className="video-description-container">
							<div className="flex-hz">
								<img
									className="channel-logo"
									alt="avatar"
									loading="lazy"
									src={video.authorImageUrl}
								/>
								<div className="flex-vt g-1">
									<p className="typo-label ellipsis">{video.channelName}</p>
									<div className="card-sub-container text-gray">
										<p className="typo-label text-gray flex-hz">
											<p>205,387 views</p>
											<p>Mar 30, 2022</p>
										</p>
									</div>

									<p className="text-small text-gray">{video.description}</p>
								</div>
							</div>
							<button className="btn btn-danger">Subscribe</button>
						</div>
					</div>
					<div className="suggested-video-container">
						{videoState.videos.map((item) => {
							return <HzVideoCard key={item._id} video={item} />;
						})}
					</div>
				</div>
			)}
		</div>
	);
};

export { SingleVideo };
