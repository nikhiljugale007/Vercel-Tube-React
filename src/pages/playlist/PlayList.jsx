import "./PlayList.css";
import { getPlaylists } from "../../api/apicalls";
import { useVideoContext } from "../../context/VideoContext";
import { useEffect } from "react";
import { PlaylistCard } from "../../components/playlist-card/PlaylistCard";
import { empty_list } from "./../../assets/index";
import { useState } from "react";
import { Helmet } from "react-helmet";
import { NewPlaylistModal } from "../../components";

const PlayList = () => {
  const { videoState, videoDispatch } = useVideoContext();
  const [showPlaylistModal, setShowPlaylistModal] = useState(false);
  useEffect(() => {
    const getAllPlayList = async () => {
      const response = await getPlaylists();
      if (response.success) {
        videoDispatch({ type: "SET_PLAYLISTS", payload: response.playlists });
      } else {
        console.log("ERR");
      }
    };
    getAllPlayList();
  }, [videoDispatch]);
  return (
    <div>
      <Helmet>
        <title>Playlist | VercelTube</title>
      </Helmet>
      <p className="typo-title flex-hz-center">Playlist</p>
      {showPlaylistModal && (
        <NewPlaylistModal setShowPlaylistModal={setShowPlaylistModal} />
      )}
      <div className="flex-hz-center">
        <button
          className="btn btn-outlined m-2"
          onClick={() => setShowPlaylistModal(true)}
        >
          Create Playlist
        </button>
      </div>
      {videoState.playlists.length < 1 && (
        <div className="flex-vt-center">
          <p className="typo-title flex-hz-center">
            You have no playlist created so far
          </p>
          <img className="img-responsive" src={empty_list} alt="empty-list" />
        </div>
      )}
      <div className="grid  grid-4-responsive">
        {videoState.playlists.map((item) => {
          return <PlaylistCard playlist={item} key={item._id} />;
        })}
      </div>
    </div>
  );
};

export { PlayList };
