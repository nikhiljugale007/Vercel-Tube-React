import { Link } from "react-router-dom";
import "./HzVideoCard.css";
const HzVideoCard = ({ video }) => {
	const { _id, title, thumbnailImageUrl, channelName } = video;
	return (
		<Link to={`/videos/${_id}`} className="link-no-style">
			<div className="hz-video-card">
				<img
					className="img-responsive hz-card-image"
					src={thumbnailImageUrl}
					alt="thumbnail"
				/>
				<div className="flex-vt g-1 ">
					<p className="typo-label ellipsis">{title}</p>
					<div>
						<p className="typo-subtext text-gray">{channelName}</p>
						<div className="card-footer-icon g-1">
							<p className="typo-subtext text-gray">48k likes</p>
							<p className="typo-subtext text-gray">5 month ago</p>
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export { HzVideoCard };
