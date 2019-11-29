import React from "react";
import { ReactComponent as DefaultLogoSvg } from "../../../assets/LogoDefaultCover.svg";
import { ReactComponent as EmptyLogoSvg } from "../../../assets/LogoEmptyPlaylist.svg";

import styled, { css } from "styled-components/macro";
import { Link } from "react-router-dom";

const dropDown = "fas fa-caret-down";
const dropUp = "fas fa-caret-up";
const show = "show";

export const PlaylistUi = styled.div`
  width: 93%;
  overflow: scroll;
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  padding-top: 100px;
  flex-wrap: wrap;
`;
//playlist info ------------------------

const PlaylistInfo = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;
const PlaylistInfoContainer = styled.div`
  width: 280px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const Cover = styled.div`
  width: 280px;
  height: 280px;
  background: #282828;
  align-self: flex-start;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 10px;
`;

const CoverDefaultLogo = styled(DefaultLogoSvg)`
  color: #c1c1c1;
`;
const InfoHeader = styled.h4`
  color: white;
  margin-bottom: 10px;
`;
const UserName = styled(Link)`
  color: #898989;
  text-decoration: none;
  &:hover {
    color: #a3a7a7;
    text-decoration: underline;
  }
  margin-bottom: 15px;
`;

const DeleteButton = styled.button`
  padding: 10px 38px;
  color: white;
  background-color: black;
  border: 1.5px solid #c1c1c1;
  border-radius: 40px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-size: 15px;
  outline: none;
  margin: 0px 5px;
  transform: perspective(1000px) translateZ(0px);
  transition: all 0.2s;
  &:hover {
    border: 1.5px solid white;
    /* transform: scale(1.05); */
    transform: perspective(1000px) translateZ(80px);
    cursor: pointer;
  }
`;

//playlist empty---------------
const PlaylistEmpty = styled.div`
  width: 60%;
  height: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  justify-content: center;
`;
const PlaylistEmptyLogo = styled(EmptyLogoSvg)`
  color: #c1c1c1;
  margin-bottom: 30px;
`;
const PlaylistEmptyHeader = styled.h1`
  color: white;
  font-size: 60px;
  margin-bottom: 30px;
  font-weight: bold;
`;
const PlaylistNewReleaseButton = styled(Link)`
  padding: 10px 38px;
  color: black;
  background-color: white;
  border-radius: 40px;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-size: 12px;
  outline: none;
  margin: 0px 5px;
  transform: perspective(1000px) translateZ(0px);
  transition: all 0.2s;
  &:hover {
    /* transform: scale(1.05); */
    transform: perspective(1000px) translateZ(80px);
    cursor: pointer;
  }
`;
//PlayList Tracks (Not Empty)

const PlayListTracksContainer = styled.div`
  width: 70%;
`;

const PlayListTracksUl = styled.ul`
  list-style-type: none;
`;
const PlayListTracksLi = styled.li`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  padding:5px 10px;
  border-radius:5px ;
  margin-bottom: 18px;
  transition : all .2s;
  background-color:transparent;
  &:hover {
    background-color : #6d6d6d;
  }
`;
const PlaylistTracksLiHeader = styled.h6`
  color: white;
  margin-bottom: 5px;
  font-size: 14px;
`;
const PlaylistTracksLiP = styled.p`
  color: #c1c1c1;
`;
const PlaylistTracksDuration = styled.p`
  color: #c1c1c1;
`;

//Recommended List ...
const PlaylistRecomendedContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: flex-end;
`;
const PlaylistRecomended = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

const PlaylistRecomendedHeader = styled.h5`
  color: ${props => (props.customColor ? "white" : "#c1c1c1")};
  margin-bottom: 8px;
  &:hover {
    cursor: pointer;
    color: white;
  }
`;

const PlaylistRecomendedDropIcon = styled.i.attrs(props => ({
  className: props.dropUp ? dropUp : dropDown
}))`
  margin-left: 8px;
  color: #c1c1c1;
  &:hover {
    color: white;
  }
`;

const PlaylistRecomendedP = styled.p.attrs(props =>
  props.show ? { className: show } : null
)`
  color: #c1c1c1;
  font-size: 13px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;
  transition-delay: 0.1s;
  &${".show"} {
    opacity: 1;
    visibility: visible;
  }
`;
const PlaylistRecomendedRefreshButton = styled.button.attrs(props =>
  props.show ? { className: show } : null
)`
  padding: 10px 38px;
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;
  transition-delay: 0.1s;
  color: white;
  background-color: black;
  border: 1.5px solid #c1c1c1;
  border-radius: 40px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-size: 12px;
  outline: none;
  margin: 0px 5px;
  transform: perspective(1000px) translateZ(0px);
  transition: all 0.2s;
  &:hover {
    border: 1.5px solid white;
    /* transform: scale(1.05); */
    transform: perspective(1000px) translateZ(80px);
    cursor: pointer;
  }
  &${".show"} {
    opacity: 1;
    visibility: visible;
  }
`;
const PlaylistRecomendedUl = styled.ul.attrs(props =>
  props.show ? { className: show } : null
)`
  opacity: 0;
  visibility: hidden;
  transition: all 0.2s;
  list-style-type: none;
  &${".show"} {
    opacity: 1;
    visibility: visible;
  }
`;

const PlaylistRecomendedLi = styled.li`
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  margin-bottom: 18px;
`;
const PlaylistRecomendedLiHeader = styled.h6`
  color: white;
  margin-bottom: 5px;
  font-size: 14px;
`;
const PlaylistRecomendedLiP = styled.p`
  color: #c1c1c1;
`;
const PlaylistRecomendedAddButton = styled.button`
  padding: 10px 20px;
  color: white;
  background-color: black;
  border: 1.5px solid #c1c1c1;
  border-radius: 40px;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  font-size: 12px;
  outline: none;
  margin: 0px 5px;
  transform: perspective(1000px) translateZ(0px);
  transition: all 0.2s;
  &:hover {
    border: 1.5px solid white;
    /* transform: scale(1.05); */
    transform: perspective(1000px) translateZ(50px);
    cursor: pointer;
  }
`;

PlaylistUi.Info = ({ header, username, handleDelete }) => {
  return (
    <PlaylistInfo>
      <PlaylistInfoContainer>
        <Cover>
          <CoverDefaultLogo></CoverDefaultLogo>
        </Cover>
        <InfoHeader>{header}</InfoHeader>
        <UserName to="/main/info">{username}</UserName>
        <DeleteButton onClick={handleDelete}>delete</DeleteButton>
      </PlaylistInfoContainer>
    </PlaylistInfo>
  );
};

PlaylistUi.Empty = ({}) => (
  <PlaylistEmpty>
    <PlaylistEmptyLogo></PlaylistEmptyLogo>
    <PlaylistEmptyHeader>
      It's a bit empty here...
    </PlaylistEmptyHeader>
    <p
      css={css`
        color: #c1c1c1;
        margin-bottom: 30px;
      `}
    >
      let's find some songs for your playlist
    </p>
    <PlaylistNewReleaseButton to="/main/home/releases">
      New Releases
    </PlaylistNewReleaseButton>
  </PlaylistEmpty>
);
PlaylistUi.Recommended = ({
  handleShowRecommended,
  showRecommended,
  loadRecommended,
  recommendedList,
  addTrackToPlaylist
}) => {
  return (
    <PlaylistRecomendedContainer>
      <PlaylistRecomended>
        <div
          css={css`
            margin-bottom: 30px;
          `}
        >
          <PlaylistRecomendedHeader
            customColor={showRecommended}
            onClick={handleShowRecommended}
          >
            Recommended Songs
            <PlaylistRecomendedDropIcon
              dropUp={showRecommended}
            ></PlaylistRecomendedDropIcon>
          </PlaylistRecomendedHeader>

          <PlaylistRecomendedP show={showRecommended}>
            Based on the title of the playlist
          </PlaylistRecomendedP>
        </div>
        {/* {showRecommended ? ( */}
        <>
          <div>
            <PlaylistRecomendedRefreshButton
              show={showRecommended}
              onClick={loadRecommended}
            >
              Refresh
            </PlaylistRecomendedRefreshButton>
          </div>

          <div
            css={css`
              flex-basis: 100%;
            `}
          >
            <PlaylistRecomendedUl show={showRecommended}>
              {recommendedList.map(rL => (
                <PlaylistRecomendedLi key={rL.id}>
                  <div>
                    <PlaylistRecomendedLiHeader>
                      {rL.name}
                    </PlaylistRecomendedLiHeader>
                    <PlaylistRecomendedLiP>
                      {rL.album.name} . {rL.artists[0].name}
                    </PlaylistRecomendedLiP>
                  </div>
                  <div>
                    <PlaylistRecomendedAddButton
                      onClick={() => addTrackToPlaylist(rL.id)}
                    >
                      Add
                    </PlaylistRecomendedAddButton>
                  </div>
                </PlaylistRecomendedLi>
              )) || []}
            </PlaylistRecomendedUl>
          </div>
        </>
        {/* ) : null} */}
      </PlaylistRecomended>
    </PlaylistRecomendedContainer>
  );
};

PlaylistUi.Tracks = ({tracks =[]}) => {
  const  millisToMinutesAndSeconds = (millis) => {
    let minutes = Math.floor(millis / 60000);
    let seconds = ((millis % 60000) / 1000).toFixed(0);
    return minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
  }
  return (
    <PlayListTracksContainer>
      <PlayListTracksUl>
        {tracks.map(track => (
          <PlayListTracksLi>
            <div>
              <PlaylistTracksLiHeader>
                {track.track.name}
              </PlaylistTracksLiHeader>
              <PlaylistTracksLiP>
                {track.track.album.name} . {track.track.artists[0].name}
              </PlaylistTracksLiP>
            </div>
            <div>
              <PlaylistTracksDuration >
                {millisToMinutesAndSeconds(track.track.duration_ms)}
              </PlaylistTracksDuration>
            </div>
          </PlayListTracksLi>
        )) || []}
      </PlayListTracksUl>
    </PlayListTracksContainer>
  );
};

export default PlaylistUi;
