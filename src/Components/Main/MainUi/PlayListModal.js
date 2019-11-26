import React from "react";
import styled, { css } from "styled-components/macro";
import { toggleModal, addPlaylist } from "../../../Context/Actions";
import { white } from "ansi-colors";
import { axiosInstance } from "../../../utils/axios/axios";
import axios from "axios";
import AuthUtils from "../../../utils/AuthUtils";
import { useUserValue, usePlayListValue } from "../../../Context";
import { ADD_PLAYLIST } from "../../../Context/actionTypes";
import { CREATE } from "../../../Context/modalTypes";

/**
 * TODO:
 * - Edit axios
 */

const Modal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgb(0, 0, 0, 0.8);
  z-index: 999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const ModalContainer = styled.div`
  width: 100%;
  height: 100px;
  background: #282828;
  padding: 20px 400px;
`;

const ModalInput = styled.input`
  display: block;
  width: 100%;
  height: 50px;
  border: none;
  color: white;
  background: transparent;
  font-size: 2rem;
  :focus {
    outline: none;
  }
  ::placeholder {
    color: #535353;
    font-size: 2rem;
    letter-spacing: 1.5px;
  }
`;
const Times = styled.i.attrs(props => ({
  className: "fas fa-times"
}))`
  color: #c1c1c1;
  font-size: 50px;
  transition: all 0.2s;
  &:hover {
    transform: scale(1.4);
    cursor: pointer;
    color: white;
  }
  margin-bottom: 10px;
`;

const Header = styled.h1`
  color: white;
  margin-bottom: 10px;
  margin-bottom: 10px;
`;
const ButtonsContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  margin-top: 30px;
`;
const CreateButton = styled.button`
  padding: 10px 50px;
  color: white;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  font-size: 15px;
  border-radius: 40px;
  background-color: #139942;
  border: none;
  outline: none;
  margin: 0px 5px;
  transition: all 0.2s;
  transform: perspective(1000px) translateZ(0px);
  &:hover {
    background-color: #1be954;
    cursor: pointer;
    /* transform: scale(1.05); */
    transform: perspective(1000px) translateZ(80px);
  }
`;

const CancelButton = styled.button`
padding: 10px 50px;
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

const { useEffect, useState } = React;

const PlayListModal = ({ show, handleShow }) => {


  const [inputValue, setInputValue] = useState("");

  const handleChange = e => {
    setInputValue(e.target.value);
  };

  const [user] = useUserValue();
  const [playlists, playlistsDispatch] = usePlayListValue();

  const setplayList = () => {
    const playlist = {
      name: inputValue
    };
    axios({
      method: "post",
      url: `https://api.spotify.com/v1/users/${user.id}/playlists`,

      data: playlist,
      dataType: "json",
      headers: {
        Authorization: "Bearer " + AuthUtils.getToken(),
        "Content-Type": "application/json"
      }
    })
      .then(res => {
        console.log('added play list', res.data)
        handleShow(CREATE);
        playlistsDispatch(addPlaylist(res.data));
        setInputValue('')
      })
      .catch(e => console.log(e));
  };

  return (
    <>
      {show.create ? (
        <Modal>
          <Times onClick={() => handleShow(CREATE)}></Times>
          <Header>Create New Playlist</Header>
          <ModalContainer>
            <p
              css={css`
                color: white;
              `}
            >
              Playlist Name
            </p>
            <ModalInput
              placeholder="New Playlist"
              value={inputValue}
              onChange={handleChange}
            />
          </ModalContainer>
          <ButtonsContainer>
            <CancelButton onClick={() => handleShow(CREATE)}>
              Cancel
            </CancelButton>
            <CreateButton onClick={setplayList}>Create</CreateButton>
          </ButtonsContainer>
        </Modal>
      ) : null}
    </>
  );
};

export default PlayListModal;
