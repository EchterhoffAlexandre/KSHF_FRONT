
import { SAVE_SUCCESSFUL_AUTH } from "../actions/authAction";
import {
  CHANGE_EMAIL_FIELD,
  CHANGE_PASSWORD_FIELD,
} from "../actions/actions";
import { LOGOUT } from '../actions/logoutAction'

const initialState = {
  isLogged: false,
  email: "",
  password: "",
};

const loginReducer = (state = initialState, action = {}) => {
  switch(action.type) {
    case SAVE_SUCCESSFUL_AUTH:
      return { ...state, isLogged: true, email: "", password: "" };
    case CHANGE_EMAIL_FIELD:
      return { ...state, email: action.input };
    case CHANGE_PASSWORD_FIELD:
      return { ...state, password: action.input };
    case LOGOUT:
        return {...initialState}
    default:
      return state;
  }
};

export default loginReducer;
