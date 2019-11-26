import React, { createContext, useReducer, useContext } from "react";
import userReducer from "./Reducers/UserReducer";
import FeaturesReducer from "./Reducers/FeaturesReducer";
import NewReleaseReducer from "./Reducers/NewReleaseReducer";
import modalReducer from "./Reducers/modalReducer";
import PlaylistReducer from "./Reducers/PlaylistReducer";

const userContext = createContext();
const featuresContext = createContext();
const newReleaseContext = createContext();
const modalContext = createContext();
const playListsContext = createContext();

export const ContextProvider = props => {
  return (
    <userContext.Provider value={useReducer(userReducer, {})}>
      <featuresContext.Provider
        value={useReducer(FeaturesReducer, [])}
      >
        <newReleaseContext.Provider
          value={useReducer(NewReleaseReducer, [])}
        >
          <playListsContext.Provider
            value={useReducer(PlaylistReducer, [])}
          >
            <modalContext.Provider
              value={useReducer(modalReducer, {create:false,delete:false})}
            >
              {props.children}
            </modalContext.Provider>
          </playListsContext.Provider>
        </newReleaseContext.Provider>
      </featuresContext.Provider>
    </userContext.Provider>
  );
};

export const useUserValue = () => useContext(userContext);
export const useFeaturesValue = () => useContext(featuresContext);
export const useNewReleasesValue = () =>
  useContext(newReleaseContext);
export const useModalValue = () => useContext(modalContext);
export const usePlayListValue = () => useContext(playListsContext);
