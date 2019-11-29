import React from "react";
import styled from "styled-components";
import { rgba } from "style-value-types";

const CardItem = styled.div`
  width:200px;
  height: 200px;
  display: flex;
  flex-direction: column;
  text-align: center;
  margin: 10px 20px;
`;
const CardImage = styled.div`
  width: 100%;
  height: 100%;
  background: ${props =>
    props.image ? `url(${props.image})` : rgba(0, 0, 0, 0.8)};
  display: flex;
  justify-content: center;
  align-items: center;
  background-size: cover;
  position: relative;
  &::before {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
    z-index: 9;
    background: linear-gradient(rgb(0, 0, 0, 0.8), rgb(0, 0, 0, 0.8));
    opacity: 0;
    transition: all 0.1s;
  }
  &:hover {
    ::before {
      opacity: 1;
    }

    ${`.far.fa-play-circle`} {
      opacity: 1;
      font-size: 60px;
      color: white;
      position: absolute;
      z-index: 10;
      transition: all 0.1s;
      &:hover {
        transform: scale(1.1);
        cursor: pointer;
      }
    }
    ${`.fas.fa-music`} {
      opacity: 1;
      font-size: 60px;
      color: white;
      position: absolute;
      z-index: 10;
    }
  }
`;

const CardBody = styled.h4`
  color: white;
  letter-spacing: 1.3;
  font-weight: 600;
  margin-top: 10px;
`;

const PlayIcon = styled.i`
  opacity: 0;
`;

//should make item ui
const Item = ({ image, name }) => {
  return (
    <>
      <CardItem>
        <CardImage image={image}>
          {image ? (
            <PlayIcon className="far fa-play-circle"></PlayIcon>
          ) : (
            <i className="fas fa-music"></i>
          )}
        </CardImage>
        <CardBody>{name}</CardBody>
      </CardItem>
    </>
  );
};

export default Item;
