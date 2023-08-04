import { TOGGLE_HEADER } from "../actions/headerAction";

const initialState = {
  isHidden: true,
};

const utilsReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case TOGGLE_HEADER:
      return { ...state, isHidden: !state.isHidden };
    default:
      return state;
  }
};

export default utilsReducer
