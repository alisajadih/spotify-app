import Home from "./Home/Home";
import Search from "./Search/Search";
import Libraries from "./Libraries";
import UserInfo from "../UserInfo";
import Playlist from "./Playlist/Playlist";

export const mainRoutes = [
  {
    path: "/main/home",
    component: Home
  },
  {
    path: "/main/search",
    component: Search
  },
  {
    path: "/main/libraries",
    component: Libraries
  },
  {
    path: "/main/info",
    component: UserInfo
  },
  {
    path: "/main/playlist/:id",
    component: Playlist,
  },
];
