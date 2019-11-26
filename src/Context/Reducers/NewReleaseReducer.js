import { GET_NEWRELEASES_VALUE } from "../actionTypes";

export default (state, action) => {
  switch (action.type) {
    case GET_NEWRELEASES_VALUE:
      return [...action.payload]
    default:
      return state;
  }
}; 