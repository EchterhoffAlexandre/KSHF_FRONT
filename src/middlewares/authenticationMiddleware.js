import { axiosPrivate } from "../axios/axiosPrivate";
import { axiosPublic } from "../axios/axiosPublic";
import { SUBMIT_LOGIN } from "../actions/authAction";
import { saveSuccessfulAuth } from "../actions/authAction";
import { CREATE_TRANSACTION } from "../actions/Transactions";
import { saveUserInfo } from "../actions/userAction";
import { fetchBudgets, fetchDailyData, fetchExpenses, fetchMonthlyData, fetchWeeklyData, fetchYearlyData, saveDaylyData, saveMonthlyData, saveWeeklyData, saveYearlyData } from "../actions/fetchDataActions";

const authMiddleware = (store) => (next) => (action) => {
  switch (action.type) {
    case SUBMIT_LOGIN:
      const { email, password } = store.getState().login;
      axiosPublic
        .post("/login", {
          email,
          password,
        })
        .then((response) => {
          const { data } = response;
          const { token, refreshToken } = data;
          const user = (data.responseWithoutPassword);
          
          const {
            budget,
            email,
            family,
            firstname,
            id,
            lastname,
            level,
            quests,
            wallet 
          } = user;
          const session = { token, refreshToken };
          localStorage.setItem("session", JSON.stringify(session));
          localStorage.setItem("user", JSON.stringify(user))
          localStorage.setItem("userName",JSON.stringify(firstname) )
          console.log(localStorage.getItem("user").id)
          store.dispatch(saveSuccessfulAuth(user));

          store.dispatch(
            saveUserInfo(
              budget,
              email,
              family,
              firstname,
              id,
              lastname,
              level,
              quests,
              wallet 
            )
            
          );
          store.dispatch(fetchDailyData())
          store.dispatch(fetchWeeklyData())
          store.dispatch(fetchMonthlyData())
          store.dispatch(fetchYearlyData())
          store.dispatch(fetchBudgets())
          store.dispatch(fetchExpenses())
        })
       

        .catch((error) => {
          console.log(error);
        });
       
        
      break;
    default:
  }

  next(action);
};

export default authMiddleware;
