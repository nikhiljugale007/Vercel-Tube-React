import "./VideoCard.css";
import { useState } from "react";
import {
	FaEllipsisV,
	MdFeaturedPlayList,
	FaClock,
	FaShareSquare,
	AiFillCloseCircle,
} from "../../icons";
const VideoCard = () => {
	const [showDropDown, setShowDropDown] = useState(false);
	return (
		<div className="card">
			<img
				className="card-img-container"
				src="https://material-components.github.io/material-components-web-catalog/static/media/photos/3x2/2.jpg"
				alt="thumbnail"
			/>
			<div className="card-body">
				<div className="card-body-sub-container">
					<img
						className="channel-logo"
						alt="avatar"
						loading="lazy"
						src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
					/>
					<div className="flex-hz-space-bw">
						<p className="h6"> SEN Senitara hi leaks his Team</p>

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
								className="btn btn-icon"
								onClick={() => setShowDropDown((prev) => !prev)}
							>
								{showDropDown ? <AiFillCloseCircle /> : <FaEllipsisV />}
							</div>
						</div>
					</div>
				</div>
				<div className="card-body-sub-container text-gray">
					<p className="card-subheading">6k Views</p>
					<p className="card-subheading ">5 Months ago</p>
				</div>
			</div>
		</div>
	);
};

export { VideoCard };
