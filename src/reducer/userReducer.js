import { SAVE_USER_INFO } from "../actions/userAction";
import { DELETE_USER_INFO } from "../actions/userAction";

// const expenses =
//   operations.reduce(
//     (accumulator, operations) => accumulator + operations.operation,
//     0
//   ) || 0;
// const labelList = operations.map((operation) => operation.label);

const initialState = {
  budget : [],
  email: '',
  family: {},
  firstname: '',
  id: 0,
  lastname: '',
  level: 0,
  quests: [],
  wallet: 0, 
};

const userReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SAVE_USER_INFO:
      return {
        ...state,
        budget: action.budget,
        email: action.email,
        family: action.family,
        firstname: action.firstname,
        id: action.id,
        lastname: action. lastname,
        level: action.level,
        quests: action.quests,
        wallet: action.wallet 
      };
    case DELETE_USER_INFO:
      localStorage.clear();
      return { ...initialState };
    default:
      return state;
  }
};

export default userReducer;
