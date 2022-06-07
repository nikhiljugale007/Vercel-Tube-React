import "./WatchLater.css";
import { useEffect } from "react";
import { getWatchLater } from "../../api/apicalls";
import { useVideoContext } from "../../context/VideoContext";
import { VideoCard } from "../../components";
import { empty_list } from "./../../assets/index";
import { Helmet } from "react-helmet";

const WatchLater = () => {
  const { videoState, videoDispatch } = useVideoContext();

  useEffect(() => {
    const getWatchLaterVideos = async () => {
      const response = await getWatchLater();
      if (response.success) {
        videoDispatch({ type: "SET_WATCHLATER", payload: response.watchlater });
      } else {
        console.log("ERR");
      }
    };
    getWatchLaterVideos();
  }, [videoDispatch]);
  return (
    <div>
      <Helmet>
        <title>WatchLater | VercelTube</title>
      </Helmet>
      <p className="typo-title flex-hz-center">Watch Later</p>
      {videoState.watchlater.length < 1 && (
        <div className="flex-vt-center">
          <p className="typo-title flex-hz-center">
            You have no videos in watch later
          </p>
          <img className="img-responsive" src={empty_list} alt="empty-list" />
        </div>
      )}
      <div className="grid  grid-4-responsive">
        {videoState.watchlater.map((video) => {
          return <VideoCard key={video._id} video={video} />;
        })}
      </div>
    </div>
  );
};

export { WatchLater };
