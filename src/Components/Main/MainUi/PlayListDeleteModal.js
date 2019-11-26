import React from "react";
import styled, { css } from "styled-components/macro";
import { toggleModal, deletePlaylist } from "../../../Context/Actions";
import { white } from "ansi-colors";
import { axiosInstance } from "../../../utils/axios/axios";
import axios from "axios";
import AuthUtils from "../../../utils/AuthUtils";
import { useUserValue, usePlayListValue } from "../../../Context";
import { ADD_PLAYLIST } from "../../../Context/actionTypes";
import { DELETE } from "../../../Context/modalTypes";
import {withRouter} from 'react-router-dom'

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

const PlayListDeleteModal = ({ show, handleShow,playlistId ,...props}) => {
  const [user] = useUserValue();
  const [playlists, playlistDispatch] = usePlayListValue();

  const deleteCurrentPlaylist = () => {
    axiosInstance
      .delete(`/playlists/${playlistId}/followers`)
      .then(res => {
        playlistDispatch(deletePlaylist(playlistId));
        handleShow(DELETE)
        props.history.push('/main/home')
        console.log(props)
      });
  };

  return (
    <>
      {show.delete ? (
        <Modal>
          <Times onClick={() => handleShow(DELETE)}></Times>
          <Header>
            Do you really want to delete this playlist ?
          </Header>
          <ButtonsContainer>
            <CancelButton onClick={() => handleShow(DELETE)}>
              Cancel
            </CancelButton>
            <CreateButton onClick={deleteCurrentPlaylist}>
              Delete
            </CreateButton>
          </ButtonsContainer>
        </Modal>
      ) : null}
    </>
  );
};

export default withRouter(PlayListDeleteModal);
