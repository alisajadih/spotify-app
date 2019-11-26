import {
  GET_USER_INFO,
  GET_FEATURES_VALUE,
  GET_NEWRELEASES_VALUE,
  TOGGLE_MODAL,
  ADD_PLAYLIST,
  LOAD_PLAYLISTS,
  DELETE_PALYLIST,
  ADD_TRACK_TO_PLAYLIST,
  UPDATE_SINGLE_PLAYLIST
} from "./actionTypes";

export const getUserInfo = data => {
  return { type: GET_USER_INFO, payload: data };
};

export const getFeaturesValue = data => {
  return { type: GET_FEATURES_VALUE, payload: data };
};

export const getNewReleasesValue = data => {
  return { type: GET_NEWRELEASES_VALUE, payload: data };
};
export const toggleModal = (modalType) => {
   return { type: TOGGLE_MODAL,payload:modalType };

};

export const addPlaylist = (playlist) =>{
  return{type:ADD_PLAYLIST,payload:playlist}
}
export const loadPlaylists = (data)=>{
  return {type:LOAD_PLAYLISTS,payload:data}
}
export const deletePlaylist = (id) =>{
  return{type:DELETE_PALYLIST,payload:id}
  }
  export const updateSingleplaylist = (data,id) =>{
    return {type:UPDATE_SINGLE_PLAYLIST,payload:{data,id}}
  }
// export const addTrackToPlaylist =(track)=>{
//   return {type:ADD_TRACK_TO_PLAYLIST,payload:track}
// }