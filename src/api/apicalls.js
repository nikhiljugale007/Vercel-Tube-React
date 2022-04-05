import axios from "axios";
const auth =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiIxZjY1YzdlMC1lNWQyLTQ1NTktOWI4Mi04OTE4MmE1NTU2YjgiLCJlbWFpbCI6ImFkYXJzaGJhbGlrYUBnbWFpbC5jb20ifQ.C48kdE1B0-zI6Gbtl7EG_FE2bNBezhXGB9yur-OvcwQ";
const headers = { authorization: auth };

const signupuser = async (user) => {
	try {
		const response = await axios.post("/api/auth/signup", { user });
		return { token: response.data.encodedToken, success: true };
	} catch (err) {
		return { token: "", success: false };
	}
};
const loginuser = async (user) => {
	try {
		const response = await axios.post("/api/auth/login", { user });
		return { token: response.data.encodedToken, success: true };
	} catch (err) {
		return { token: "", success: false };
	}
};

const getAllVideos = async () => {
	try {
		const response = await axios.get("/api/videos");
		return { videos: response.data.videos, success: true };
	} catch (err) {
		return { products: [], success: false };
	}
};

const addToWatchLater = async (video) => {
	try {
		const response = await axios.post(
			"/api/user/watchlater",
			{ video },
			{ headers }
		);
		return { watchlater: response.data.watchlater, success: true };
	} catch (err) {
		console.log(err);
		return { watchlater: [], success: false };
	}
};
const removeFromWatchLater = async (itemId) => {
	try {
		const response = await axios.delete(`/api/user/watchlater/${itemId}`, {
			headers,
		});
		return { watchlater: response.data.watchlater, success: true };
	} catch (err) {
		return { watchlater: [], success: false };
	}
};
const getWatchLater = async () => {
	try {
		const response = await axios.get("/api/user/watchlater", { headers });
		return { watchlater: response.data.watchlater, success: true };
	} catch (err) {
		console.log(err);
		return { watchlater: [], success: false };
	}
};

const addToLikedVideos = async (video) => {
	try {
		const response = await axios.post(
			"/api/user/likes",
			{ video },
			{ headers }
		);
		return { likes: response.data.likes, success: true };
	} catch (err) {
		console.log(err);
		return { likes: [], success: false };
	}
};
const removeFromLikedVideos = async (itemId) => {
	try {
		const response = await axios.delete(`/api/user/likes/${itemId}`, {
			headers,
		});
		return { likes: response.data.likes, success: true };
	} catch (err) {
		return { likes: [], success: false };
	}
};
const getLikedVideos = async () => {
	try {
		const response = await axios.get("/api/user/likes", { headers });
		return { likes: response.data.likes, success: true };
	} catch (err) {
		console.log(err);
		return { likes: [], success: false };
	}
};

const addToHistory = async (video) => {
	try {
		const response = await axios.post(
			"/api/user/history",
			{ video },
			{ headers }
		);
		return { history: response.data.history, success: true };
	} catch (err) {
		console.log(err);
		return { history: [], success: false };
	}
};
const removeFromHistory = async (itemId) => {
	try {
		const response = await axios.delete(`/api/user/history/${itemId}`, {
			headers,
		});
		return { history: response.data.history, success: true };
	} catch (err) {
		return { history: [], success: false };
	}
};
const removeAllFromHistory = async (itemId) => {
	try {
		const response = await axios.delete("/api/user/history/all", {
			headers,
		});
		return { history: response.data.history, success: true };
	} catch (err) {
		return { history: [], success: false };
	}
};
const getHistory = async () => {
	try {
		const response = await axios.get("/api/user/history", { headers });
		return { history: response.data.history, success: true };
	} catch (err) {
		console.log(err);
		return { history: [], success: false };
	}
};
const getCategories = async () => {
	try {
		const response = await axios.get("/api/categories");
		return { categories: response.data.categories, success: true };
	} catch (err) {
		console.log(err);
		return {
			categories: [],
			success: false,
		};
	}
};
export {
	getAllVideos,
	addToWatchLater,
	removeFromWatchLater,
	getWatchLater,
	addToLikedVideos,
	removeFromLikedVideos,
	getLikedVideos,
	addToHistory,
	removeFromHistory,
	removeAllFromHistory,
	getHistory,
	signupuser,
	loginuser,
	getCategories,
};
