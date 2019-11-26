import React from "react";
import styled from "styled-components";
import background from "../backgrounds/LoginBackground.jpg";

const MainDiv = styled.div`
  background: url(${background});
  background-size: cover;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
//rgb(8, 6, 107,0.35)
const FormSection = styled.div`
  width: 30%;
  height: 500px;
  background: rgb(0, 0, 30, 0.4);
  border-radius: 10px;
  text-align: center;
  padding: 20px 30px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const FormHeader = styled.h1`
  color: white;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 2px;
`;
const Line = styled.span`
  display: inline-block;
  width: 80%;
  background-color: #515151;
  border: 1px solid #515151;
`;
const SpotLogin = styled.a`
  padding: 5px 60px;
  border: 4px solid #f5f5f5;
  border-radius: 25px;
  background-color: #121212;
  color: #f5f5f5;
  font-weight: 700;
  font-size: 13px;
  text-transform: uppercase;
  letter-spacing: 1px;
  margin: 0 20px;
  text-decoration: none;
  &:hover {
    cursor: pointer;
    background-color: #272727;
  }
`;

const client_id = "76470db262f34cdd87b1ad04a3f90d6c";

const Login = props => {
  console.log(props.location.state);
  const { from } = props.location.state || {from:'/main/home'};

  React.useEffect(() => {
    localStorage.setItem("redirectPath", JSON.stringify(from));
  }, [from]);
  return (
    <MainDiv>
      <FormSection>
        <FormHeader>Log In</FormHeader>
        <Line />
        <SpotLogin
          href={`https://accounts.spotify.com/authorize?client_id=${client_id}&response_type=token&redirect_uri=http://localhost:3000/callback/&scope=playlist-modify-public playlist-read-collaborative`}
        >
          Login With Spotify
        </SpotLogin>
      </FormSection>
    </MainDiv>
  );
};

export default Login;
