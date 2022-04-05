import "./VideoPlayer.css";
import { FaThumbsUp, MdFeaturedPlayList, FaClock } from "../../icons";

const VideoPlayer = ({ video }) => {
	return (
		<div className="video-player-container flex-vt">
			<iframe
				className="video-player"
				src={video.url}
				title="video-player"
				frameBorder="0"
				allowFullScreen
			></iframe>
			<div className="flex-vt pv-1">
				<p className="typo-title">{video.title}</p>
				<div className="flex-hz-space-bw pv-1">
					<p className="typo-label option-container">
						<div className="flex-hz g-1">
							<FaThumbsUp />
							<p className="hide">Like</p>
						</div>
						<div className="flex-hz g-1">
							<MdFeaturedPlayList />
							<p className="hide">Add to playlist</p>
						</div>
						<div className="flex-hz g-1">
							<FaClock />
							<p className="hide">Add to watch later</p>
						</div>
					</p>
				</div>
			</div>
		</div>
	);
};
export { VideoPlayer };
