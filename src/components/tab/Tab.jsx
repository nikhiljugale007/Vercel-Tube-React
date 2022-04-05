import { useVideoContext } from "../../context/VideoContext";
import "./Tab.css";
const Tab = ({ label }) => {
	const { videoDispatch } = useVideoContext();

	const addToCategoryFilter = () => {
		videoDispatch({ type: "FILTER_BY_CATEGORY", payload: label });
	};

	return (
		<div className="tab" onClick={addToCategoryFilter}>
			{label}
		</div>
	);
};

export { Tab };
