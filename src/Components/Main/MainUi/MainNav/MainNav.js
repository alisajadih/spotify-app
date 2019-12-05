import styled from "styled-components";
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ReactComponent as UserSvg } from "../../../../assets/LogoUser.svg";
import PlayLists from "./PlayLists";

/**TODO:
 * hovering in menu items
 *
 */

const activeClassName = "Active";

const MainNav = styled.div`
  grid-area: nav;
  background-color: black;
  text-align: center;
  padding: 10px 0px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: sticky;
  top: 0;
`;
const SpotDiv = styled.div`
  padding: 0px 20px;
`;
const NavbarUl = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
  list-style-type: none;
  font-size: 1rem;
  margin-top: 20px;
  font-weight: 500;
  @media (max-width: 575.98px) {
    font-size: 0.6rem;
    margin-top: 10px;
  }
`;
const NavbarLi = styled.li``;
const NavbarLiLink = styled(NavLink).attrs(props => ({
  activeClassName
}))`
  padding: 10px 20px;
  @media (max-width: 575.98px) {
    padding: 5px 10px;
  }
  display: flex;
  justify-content: start;
  align-items: center;
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
    background-color: #282828;
    ::before {
      display: block;
    }
    color: white;
  }
`;
const NavbarLiP = styled.p`
  padding-left: 20px;
  @media (max-width: 575.98px) {
    padding-left: 5px;
  }
`;
//Login
const DivA = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  padding-bottom: 30px;
  justify-content: center;
`;
const Login = styled(Link)`
  padding: 5px 40px;
  border: 2px solid #f5f5f5;
  border-radius: 25px;
  background-color: #121212;
  color: #f5f5f5;
  font-weight: 500;
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 20px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #272727;
  }
  @media (max-width: 575.98px) {
    font-size: 0.5rem;
    font-weight: 500;
  }
  @media (max-width: 1190px) {
    padding: 5px 20px;
  }
`;

const UserDiv = styled.div`
  flex: 1;
  display: flex;
  align-items: flex-end;
  padding-bottom: 30px;
  justify-content: center;
`;
const UserInfo = styled(NavLink).attrs(props => {
  return {
    activeClassName
  };
})`
  width: 90%;
  margin: 0 auto;
  display: flex;
  padding: 0 10px;
  justify-content: space-around;
  /* background-color: white; */
  align-items: center;
  color: white;
  height: 40px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
  }

  &.${activeClassName} {
    color: green;
    /* background-color:white; */
  }
`;
const UserInfoP = styled.p`
  font-size: 1rem;
  font-weight: 300;
  text-decoration: none;
  @media (max-width: 575.98px) {
    font-size : .5rem
  }

`;

const UserLogo = styled(UserSvg)`
  width: 35px;
  height: 35px;
  @media (max-width: 575.98px) {
    width: 20px;
    height:20px;
  }
`;

MainNav.MainLogo = ({ Logo }) => (
  <SpotDiv>
    <Logo />
  </SpotDiv>
);

MainNav.NavUl = ({ children }) => <NavbarUl>{children}</NavbarUl>;
MainNav.NavLi = ({ Logo, name, to, exact }) => (
  <NavbarLi>
    <NavbarLiLink to={to} exact={exact}>
      <Logo />
      <NavbarLiP>{name}</NavbarLiP>
    </NavbarLiLink>
  </NavbarLi>
);
MainNav.Login = ({ name }) => (
  <DivA>
    <Login to="/login">{name}</Login>
  </DivA>
);
MainNav.Info = ({ avatar, name }) => {
  return (
    <UserDiv>
      <UserInfo to="/main/info">
        {avatar ? <img src={avatar} alt="user" /> : <UserLogo />}
        <p
          style={{
            fontSize: "1rem",
            fontWeight: 300,
            textDecoration: "none"
          }}
        >
          {name}
        </p>
      </UserInfo>
    </UserDiv>
  );
};

MainNav.PlayList = ({ Logo, playlists, handleShow }) => (
  <PlayLists
    Logo={Logo}
    playlists={playlists}
    handleShow={handleShow}
  />
);

export default MainNav;
