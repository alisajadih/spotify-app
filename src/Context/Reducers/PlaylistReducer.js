import {
  ADD_PLAYLIST,
  LOAD_PLAYLISTS,
  DELETE_PALYLIST,
  UPDATE_SINGLE_PLAYLIST
} from "../actionTypes";

export default (state, action) => {
  switch (action.type) {
    case LOAD_PLAYLISTS:
      return [...action.payload];

    case ADD_PLAYLIST:
      return [...state, action.payload];

    case DELETE_PALYLIST:
      return [...state.filter(pL => pL.id !== action.payload)];

    case UPDATE_SINGLE_PLAYLIST:
      return [
        ...state.map(pL =>
          pL.id === action.payload.id ? action.payload.data : pL
        )
      ];
  }
};
