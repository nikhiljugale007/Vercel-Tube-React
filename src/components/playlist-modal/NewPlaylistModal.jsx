import { useVideoContext } from "../../context/VideoContext";
import "./Modal.css";
import { FaWindowClose } from "../../icons";
import { useState } from "react";
import { addPlaylist } from "../../api/apicalls";
import { Toast } from "../toast/Toast";
export const NewPlaylistModal = ({ setShowPlaylistModal }) => {
  const { videoDispatch } = useVideoContext();
  const [newPlaylist, setNewPlaylist] = useState(false);
  const [playListName, setPlayListName] = useState("");
  const [toast, setToast] = useState({ label: "", showToast: false });

  const closeModal = () => {
    setShowPlaylistModal(false);
  };
  const handleNewPlaylist = () => {
    setNewPlaylist(true);
  };

  const createNewPlaylist = async () => {
    const playlist = { title: playListName };
    setPlayListName("");
    setToast((prev) => ({
      ...prev,
      label: "Creating new playlist",
      showToast: true,
    }));

    const response = await addPlaylist(playlist);
    if (response.success) {
      videoDispatch({ type: "SET_PLAYLISTS", payload: response.playlists });
      setShowPlaylistModal(false);
      setTimeout(() => {
        setToast((prev) => ({ ...prev, label: "", showToast: false }));
      }, 1000);
    } else {
      console.log("ERR");
    }
  };

  return (
    <div className="playlist-modal">
      {toast.showToast && <Toast label={toast.label} />}
      <div className="flex-hz-space-bw">
        <p className="typo-label">Create New playlist</p>
        <button className="btn-icon p-1" onClick={closeModal}>
          <FaWindowClose />
        </button>
      </div>

      {newPlaylist ? (
        <div className="new-playlist-container">
          <input
            className="input input-outlined"
            placeholder="New Playlist Name"
            value={playListName}
            onChange={(e) => setPlayListName(e.target.value)}
          />
          <button className="btn btn-outlined p-1" onClick={createNewPlaylist}>
            Create
          </button>
        </div>
      ) : (
        <button className="btn btn-outlined p-1" onClick={handleNewPlaylist}>
          Create New
        </button>
      )}
    </div>
  );
};
