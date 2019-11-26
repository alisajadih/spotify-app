import { GET_FEATURES_VALUE } from "../actionTypes";

export default (state, action) => {
  switch (action.type) {

    case GET_FEATURES_VALUE:
        return [...action.payload]
    default:
      return state;
  }
}; 