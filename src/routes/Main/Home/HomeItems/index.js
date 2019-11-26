import NewReleases from "./NewReleases";
import Features from "./Features";

export const homeRoutes = [
  {
    path: "/main/home/releases",
    component: NewReleases,
    auth: true
  },
  {
    path: "/main/home/features",
    component: Features,
    auth: true
  }
];
