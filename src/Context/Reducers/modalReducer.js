import { TOGGLE_MODAL } from "../actionTypes";

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_MODAL:
      return {
        ...state,
        [action.payload]:!state[action.payload]
      }
  }
};
