import { GET_USER_INFO } from "../actionTypes";

export default (state, action) => {
  switch (action.type) {
    case GET_USER_INFO:
      return {
        ...action.payload
      };
    default:
      return state;
  }
};
