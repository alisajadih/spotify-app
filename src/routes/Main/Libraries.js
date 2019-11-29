import React from "react";
import styled from "styled-components";

//TODO: Make Library Section

const LibraryContainer = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(45deg, #0a0a0a, #0a0a0a);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const LibraryMessage = styled.h1`
  color: #e5e5e5;
`;

const Libraries = () => {
  return (
    <LibraryContainer>
      <LibraryMessage>Oops ! Working On It ...</LibraryMessage>
    </LibraryContainer>
  );
};

export default Libraries;
