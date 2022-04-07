import "./Toast.css";
const Toast = ({ label }) => {
	return (
		<div className="toast snackbar snackbar-primary">
			{label}
			<button className="snackbar-action">
				<i className="far fa-check-circle fa-lg"></i>
			</button>
			<div className="line"></div>
		</div>
	);
};

export { Toast };
