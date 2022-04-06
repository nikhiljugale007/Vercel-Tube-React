import { useVideoContext } from "../../context/VideoContext";
import { useEffect } from "react";
import "./History.css";
import { getHistory, removeAllFromHistory } from "../../api/apicalls";
import { VideoCard } from "../../components";

const History = () => {
	const { videoState, videoDispatch } = useVideoContext();

	useEffect(() => {
		const getHistoryVideos = async () => {
			const response = await getHistory();
			console.log(response);
			if (response.success) {
				videoDispatch({ type: "SET_HISTORY", payload: response.history });
			} else {
				console.log("ERR");
			}
		};
		getHistoryVideos();
	}, [videoDispatch]);

	const clearAllWatchHistory = async () => {
		const response = await removeAllFromHistory();
		if (response.success) {
			videoDispatch({ type: "SET_HISTORY", payload: response.history });
		} else {
			console.log("ERR");
		}
	};

	return (
		<div>
			<button className="btn btn-outlined m-1" onClick={clearAllWatchHistory}>
				clear history
			</button>
			{videoState.history.length < 1 && <h1>You have no watch history </h1>}
			<div className="grid  grid-4-responsive">
				{videoState.history
					.slice(0)
					.reverse()
					.map((video) => {
						return (
							<VideoCard
								key={video._id}
								video={video}
								card_type={"HISTORY_CARD"}
							/>
						);
					})}
			</div>
		</div>
	);
};

export { History };
