import React from "react";
import axios from "axios";
import { axiosInstance } from "../../../utils/axios/axios";
import styled, { css } from "styled-components/macro";
import { ReactComponent as DefaultLogoSvg } from "../../../assets/LogoDefaultCover.svg";
import { ReactComponent as EmptyLogoSvg } from "../../../assets/LogoEmptyPlaylist.svg";
import { Link } from "react-router-dom";
import {
  useUserValue,
  usePlayListValue,
  useModalValue
} from "../../../Context";
import { PlaylistUi } from "../../../Components/Main/playlist/PlaylistUi";
import {
  deletePlaylist,
  toggleModal,
  updateSingleplaylist
} from "../../../Context/Actions";
import { DELETE } from "../../../Context/modalTypes";
import PlayListDeleteModal from "../../../Components/Main/MainUi/PlayListDeleteModal";
import AuthUtils from "../../../utils/AuthUtils";
import { UPDATE_SINGLE_PLAYLIST } from "../../../Context/actionTypes";

const { useEffect, useState } = React;
const Playlist = props => {
  const [currentPlaylist, setCurrentPlaylist] = useState({});
  const [showRecommended, setShowRecommended] = useState(false);
  const [recommendedList, setRecommendedList] = useState([]);

  const [user] = useUserValue();
  const [showModal, showModalDispatch] = useModalValue();
  const [playlists, dispatchplaylists] = usePlayListValue();

  const playlistId = props.match.params.id;

  useEffect(() => {
    console.log("currentplaylist changes");
    if (currentPlaylist.name) loadRecommended();
  }, [currentPlaylist.name]);

  useEffect(() => {
    console.log("playlist id changes");
    getCurrentPlaylist();
    setShowRecommended(false);
  }, [playlistId]);

  const getCurrentPlaylist = () => {
    axiosInstance.get(`/playlists/${playlistId}`).then(res => {
      console.log("this is orginal current play list", res.data);
      setCurrentPlaylist(res.data);
    });
  };

  const handleShowRecommended = () => {
    setShowRecommended(prevShow => !prevShow);
  };

  const loadRecommended = () => {
    axiosInstance
      .get("/recommendations", {
        params: {
          seed_genres: currentPlaylist.name.toLowerCase(),
          limit: "10"
        }
      })
      .then(res => {
        setRecommendedList(res.data.tracks);
      });
  };

  const handleShow = () => {
    showModalDispatch(toggleModal(DELETE));
  };
  const addTrackToPlaylist = trackId => {
    axios({
      method: "POST",
      url: `https://api.spotify.com/v1/playlists/${playlistId}/tracks`,
      params: {
        uris: `spotify:track:${trackId}`
      },
      headers: {
        Authorization: "Bearer " + AuthUtils.getToken(),
        "Content-Type": "application/json"
      }
    }).then(() => {
      console.log("updating");
      axiosInstance.get(`/playlists/${playlistId}`).then(res => {
        dispatchplaylists(updateSingleplaylist(res.data, playlistId));
      });
      getCurrentPlaylist();
    });
  };

  console.log("currentplaylist", currentPlaylist);

  return (
    <div
      css={css`
        width: 100%;
        height: 100%;
        background: #0a0a0a;
      `}
    >
      {Object.entries(currentPlaylist).length !== 0 ? (
        <>
          <PlaylistUi>
            <PlaylistUi.Info
              header={currentPlaylist.name}
              username={user.display_name}
              handleDelete={handleShow}
            />
            {currentPlaylist.tracks.items.length === 0 ? (
              <PlaylistUi.Empty />
            ) : (
              <PlaylistUi.Tracks
                tracks={currentPlaylist.tracks.items}
              />
            )}
            <PlaylistUi.Recommended
              handleShowRecommended={handleShowRecommended}
              showRecommended={showRecommended}
              loadRecommended={loadRecommended}
              recommendedList={recommendedList}
              addTrackToPlaylist={addTrackToPlaylist}
            />
          </PlaylistUi>
          <PlayListDeleteModal
            show={showModal}
            handleShow={handleShow}
            playlistId={playlistId}
          />
        </>
      ) : null}
    </div>
  );
};
export default Playlist;
