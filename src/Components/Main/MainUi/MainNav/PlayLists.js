import React from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
import PlayListItem from "./PlayListItem";
import AuthUtils from "../../../../utils/AuthUtils";
import { CREATE } from "../../../../Context/modalTypes";

const activeClassName = "Active";
const PlayListDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  text-align: left;

  font-size: 0.7rem;
  text-transform: uppercase;
  font-weight: 100;
  letter-spacing: 1.5px;
  color: #dddddd;
`;

const PlayListUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  list-style-type: none;
  font-size: 14px;
  font-weight: 700;
  flex-basis: 100%;
`;
const PlayListLi = styled.li``;
const PlayListLiLink = styled(NavLink).attrs(props => {
  return { activeClassName };
})`
  width: 100%;

  display: block;
  padding: 5px 20px;
  position: relative;
  text-decoration: none;
  color: #c1c1c1;
  transition: color 0.2s;
  &::before {
    content: "";
    position: absolute;
    border: 2px solid green;
    top: 0;
    bottom: 0;
    left: 0;
    display: none;
  }
  &:hover {
    cursor: pointer;

    color: white;
  }
  &.${activeClassName} {
    ::before {
      display: block;
    }
    color: white;
  }
`;

const PlayLists = ({ Logo, playlists = [], handleShow }) => {
  const handleModal = () => {
    handleShow(CREATE);
  };

  return (
    <PlayListDiv>
      <p
        style={{
          margin: "10px 20px"
        }}
      >
        PlayLists
      </p>

      <PlayListItem handleModal={handleModal} Logo={Logo} />
      {AuthUtils.isUserLoggedIn() ? (
        <PlayListUl>
          {playlists.map(playlist => (
            <PlayListLi key={playlist.name}>
              <PlayListLiLink to={`/main/playlist/${playlist.id}`}>
                {playlist.name}
              </PlayListLiLink>
            </PlayListLi>
          ))}
        </PlayListUl>
      ) : null}
    </PlayListDiv>
  );
};

export default PlayLists;
