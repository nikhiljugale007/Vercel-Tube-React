import { useVideoContext } from "../../context/VideoContext";
import { useEffect, useState } from "react";
import "./History.css";
import { getHistory, removeAllFromHistory } from "../../api/apicalls";
import { Toast, VideoCard } from "../../components";
import { empty_list } from "../../assets";
import { Helmet } from "react-helmet";

const History = () => {
  const { videoState, videoDispatch } = useVideoContext();
  const [toast, setToast] = useState({ label: "", showToast: false });

  useEffect(() => {
    const getHistoryVideos = async () => {
      const response = await getHistory();
      if (response.success) {
        videoDispatch({ type: "SET_HISTORY", payload: response.history });
      } else {
        console.log("ERR");
      }
    };
    getHistoryVideos();
  }, [videoDispatch]);

  const clearAllWatchHistory = async () => {
    setToast((prev) => ({
      ...prev,
      label: "Clearing your watch history",
      showToast: true,
    }));
    const response = await removeAllFromHistory();
    if (response.success) {
      videoDispatch({ type: "SET_HISTORY", payload: response.history });
      setTimeout(() => {
        setToast((prev) => ({ ...prev, label: "", showToast: false }));
      }, 1000);
    } else {
      console.log("ERR");
    }
  };

  return (
    <div>
      <Helmet>
        <title>History | VercelTube</title>
      </Helmet>
      {toast.showToast && <Toast label={toast.label} />}
      <p className="typo-title flex-hz-center">Watch History</p>
      <div className="flex-hz-center">
        <button className="btn btn-outlined m-1" onClick={clearAllWatchHistory}>
          clear history
        </button>
      </div>
      {videoState.history.length < 1 && (
        <div className="flex-vt-center">
          <p className="typo-title flex-hz-center">You have no watch history</p>
          <img className="img-responsive" src={empty_list} alt="empty-list" />
        </div>
      )}
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
