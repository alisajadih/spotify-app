//to be refactor
import React from "react";

import styled, { css } from "styled-components/macro";
import { NavLink } from "react-router-dom";
import { renderRoutes } from "../..";
import { homeRoutes } from "./HomeItems";
const activeClassName = "Active";
const NavUl = styled.ul`
  display: flex;
  justify-content: space-around;
  padding: 50px 200px;
  list-style: none;
`;
const NavLi = styled.li``;
const NavLinkItem = styled(NavLink).attrs(props => ({
  activeClassName
}))`

  padding: 10px 30px;
  /* border: 1px solid red; */
  font-size: 14px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #9f9d9d;
  text-decoration: none;
  transition: color 0.1s ease-in;
  position: relative;

  &::before {
    content: "";
    bottom: 0;
    left: 40%;
    right: 40%;
    position: absolute;
    border: 1.3px solid #1db954;
    background: #1db954;
    display: none;
  }
  &:hover {
    color: white;
  }
  &.${activeClassName} {
    ::before {
      display: block;
    }

    color: white;
  }
`;

const HomeDiv = styled.div`
  background: linear-gradient(-45deg, #0b0b0b, #444244);
  width: 100%;
  height: 100%;
  
`;

const Home = () => {
  return (
    <HomeDiv>
      <NavUl>
        <NavLi>
          <NavLinkItem to="/main/home/releases">
            New Releases
          </NavLinkItem>
          <NavLinkItem to="/main/home/features">Features</NavLinkItem>
        </NavLi>
      </NavUl>
      <div
        css={css`
          width: 95%;
          height: 80%;
          margin: 0 auto;
        `}
      >
        {renderRoutes(homeRoutes)}
      </div>
    </HomeDiv>
  );
};

export default Home;
