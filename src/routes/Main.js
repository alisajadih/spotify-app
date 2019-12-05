import React from "react";
import styled from "styled-components";
import { ReactComponent as SpotSvg } from "../assets/LogoSpotifySvg.svg";
import { ReactComponent as HomeSvg } from "../assets/LogoHome.svg";
import { ReactComponent as LibrarySvg } from "../assets/LogoLibrary.svg";
import { ReactComponent as SearchSvg } from "../assets/LogoSearch.svg";
import { ReactComponent as CreatePlayListsSvg } from "../assets/LogoCreatePlayLists.svg";
import MainNav from "../Components/Main/MainUi/MainNav/MainNav";
import MainFooter from "../Components/Main/MainUi/MainFooter";
import AuthUtils, { userId } from "../utils/AuthUtils";
import { axiosInstance } from "../utils/axios/axios";
import {
  useUserValue,
  useModalValue,
  usePlayListValue
} from "../Context";
import {
  getUserInfo,
  loadPlaylists,
  toggleModal
} from "../Context/Actions";
import MainContent from "../Components/Main/MainUi/MainContent";
import { renderRoutes } from ".";
import { mainRoutes } from "./Main/index";
import PlayListModal from "../Components/Main/MainUi/PlayListModal";
import PlayListDeleteModal from "../Components/Main/MainUi/PlayListDeleteModal";
import { CREATE } from "../Context/modalTypes";

/**
 * TODO:
 * MainMenu shouldnt change size while content is more than its height
 */

const MainPage = styled.div`
  width: 100%;
  height: 100%;
  display: Grid;
  grid-template-areas:
    /* "nav menu" */
    "nav content"
    "footer footer";
  /* grid-template-rows: 10% 1fr 15%; */
  grid-template-rows: 1fr 10%;
  grid-template-columns: 15% 1fr;
  position: relative;

  @media (max-width: 575.98px){
    grid-template-columns : 30% 1fr;
  }
`;

//Logos
const SpotLogo = styled(SpotSvg)`
  color: white;
`;
const HomeLogo = styled(HomeSvg)`
  color: white;
`;
const SearchLogo = styled(SearchSvg)`
  color: white;
`;
const LibraryLogo = styled(LibrarySvg)`
  color: white;
`;

//component
const Main = props => {
  const [user, userDispatch] = useUserValue();
  const [playlists, playlistsDispatch] = usePlayListValue();

  React.useEffect(() => {
    if (AuthUtils.isUserLoggedIn()) {
      axiosInstance
        .get("/me")
        .then(res => userDispatch(getUserInfo(res.data)));
    }
  }, [userDispatch]);

  React.useEffect(() => {
    if (user.id)
      axiosInstance.get(`/users/${user.id}/playlists`).then(res => {
        console.log('playlists', res.data.items)
        playlistsDispatch(loadPlaylists(res.data.items));
      });
  }, [playlistsDispatch, user]);

  const [show, showDispatch] = useModalValue();

  const handleShow = modalType => {
    showDispatch(toggleModal(modalType));
  };

  return (
    <MainPage>
      <MainNav>
        <MainNav.MainLogo Logo={SpotLogo} />
        <MainNav.NavUl>
          <MainNav.NavLi
            Logo={HomeLogo}
            name="Home"
            to="/main/home"
            exact={false}
          />
          <MainNav.NavLi
            Logo={SearchLogo}
            name="Search"
            to="/main/search"
            exact={false}
          />
          <MainNav.NavLi
            Logo={LibraryLogo}
            name="Library"
            to="/main/libraries"
            exact={false}
          />
        </MainNav.NavUl>
        {AuthUtils.isUserLoggedIn() ? (
          <>
            <MainNav.PlayList
              Logo={CreatePlayListsSvg}
              playlists={playlists}
              handleShow={handleShow}
            />
            <MainNav.Info name={user.display_name} />
          </>
        ) : (
          <MainNav.Login name="Log In" />
        )}
      </MainNav>
      <PlayListModal show={show} handleShow={handleShow} />

      <MainContent>{renderRoutes(mainRoutes)}</MainContent>

      <MainFooter />
    </MainPage>
  );
};

export default Main;
