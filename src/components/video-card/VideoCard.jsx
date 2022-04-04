import "./VideoCard.css";
import { useState } from "react";
import {
	FaEllipsisV,
	MdFeaturedPlayList,
	FaClock,
	FaShareSquare,
	AiFillCloseCircle,
} from "../../icons";
const VideoCard = ({ video }) => {
	const [showDropDown, setShowDropDown] = useState(false);
	const { title, authorImageUrl, thumbnailImageUrl, channelName } = video;
	return (
		<div className="card">
			<img
				className="card-img-container"
				src={thumbnailImageUrl}
				alt="thumbnail"
			/>
			<div className="card-body">
				<div className="card-body-sub-container">
					<img
						className="channel-logo"
						alt="avatar"
						loading="lazy"
						src={authorImageUrl}
					/>
					<div className="flex-vt">
						<p className="h6">{title}</p>
						<p className="text-small text-gray">{channelName}</p>
						<div className="card-sub-container text-gray">
							<p className="text-small">6k Views</p>
							<p>.</p>
							<p className="text-small ">5Months ago</p>
						</div>
					</div>
					<div className="dropdown-container">
						{showDropDown && (
							<div className="dropdown-menu">
								<ul className="list list-style-nostyle">
									<li className="list-item">
										<MdFeaturedPlayList />
										Add to playlist
									</li>
									<li className="list-item">
										<FaClock />
										Add to watch later
									</li>
									<li className="list-item">
										<FaShareSquare /> Share
									</li>
								</ul>
							</div>
						)}
						<div
							className=" btn-icon"
							onClick={() => setShowDropDown((prev) => !prev)}
						>
							{showDropDown ? <AiFillCloseCircle /> : <FaEllipsisV />}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export { VideoCard };
