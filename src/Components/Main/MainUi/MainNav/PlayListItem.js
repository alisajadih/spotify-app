import React from "react";
import styled from "styled-components";
import PlayListModal from "../PlayListModal";


/**
 * TODO:
 * -redirect to login if user not login
 */

const PlayListCreator = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-left: 20px;
  padding-right: 20px;
  margin-bottom: 10px;
  transition: all 0.2s;
  ${".create-logo"} {
    background: #c1c1c1;
  }
  &:hover {
    cursor: pointer;
    color: white;
    ${".create-logo"} {
      background: white;
    }
  }
`;


const PlayListItem = ({Logo,handleModal})=> {
 

  return (
      <>
    <PlayListCreator onClick={handleModal}>
      <Logo
        className="create-logo"
        style={{
          width: "40px",
          height: "40px"
        }}
      />
      <p>Create Playlist</p>
    </PlayListCreator>
    </>
  );
};

export default PlayListItem;
