import React from "react";
import styled from "styled-components";
import backGround from "../backgrounds/InfoBackGround.jpg";
import { ReactComponent as UserSvg } from "../assets/LogoUser.svg";
import { Link } from "react-router-dom";
import { useUserValue } from "../Context";
import AuthUtils from "../utils/AuthUtils";
const User = styled.div`
  background:#0A0A0A;
  height: 100%;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Div = styled.div`
  width: 40%;
  height: 70%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const LogoDiv = styled.div``;
const UserLogo = styled(UserSvg)`
  color: #b3b3b3;
  width: 100px;
  height: 100px;
`;
const UserName = styled.p`
  margin-top: 30px;
  color: white;
  font-size: 50px;
  font-weight: bold;
`;
const LogOut = styled(Link)`
  padding: 10px 80px;
  border: 4px solid #f5f5f5;
  border-radius: 25px;
  background-color: #121212;
  color: #f5f5f5;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;

  margin-top:50px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #272727;
  }
`;

const UserInfo = () => {
    const [info,] = useUserValue();
    const logOut = () => AuthUtils.removeToken()
  return (
    <User>
      <Div>
        <LogoDiv>
          <UserLogo />
        </LogoDiv>
        <UserName>{info.display_name}</UserName>
        <LogOut to='/' onClick={logOut}>Log Out</LogOut>
      </Div>
    </User>
  );
};

export default UserInfo;
