import { GET_INPUT_VALUE, SUCCESSFUL_SIGNUP } from "../actions/signUpAction.js";


const initialState = {
  firstname: "",
  lastname: "",
  signUpEmailField: "",
  signUpPasswordField: "",
  confirmPassword:"",
  ok: false,
};

const signupReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case GET_INPUT_VALUE:
      return { ...state, [action.name]: action.value };
    case SUCCESSFUL_SIGNUP:
      return { ...state, ok: true };
      
    default:
      return state;
  }
};

export default signupReducer;
