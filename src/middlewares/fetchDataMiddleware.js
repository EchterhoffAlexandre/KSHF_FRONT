import * as dayjs from "dayjs";
import {
    FETCH_DAILY_DATA,
    FETCH_MONTHLY_DATA,
    FETCH_WEEKLY_DATA,
    FETCH_YEARLY_DATA,
    FETCH_BUDGETS,
    FETCH_EXPENSES,
    SAVE_NEW_BUDGET,
    SAVE_NEW_EXPENSE,
    saveDaylyData,
    saveWeeklyData,
    saveMonthlyData,
    saveYearlyData, DELETE_EXPENSE,
} from "../actions/fetchDataActions";
import { axiosPrivate } from "../axios/axiosPrivate";
import { saveBudgetsState, saveExpensesState } from "../actions/budgetActions";

const fetchDataMiddleware = (store) => (next) => (action) => {


  switch (action.type) {
    case FETCH_DAILY_DATA:
      axiosPrivate
        .get(`/transactions/day`)
        .then((response) => {
          const daylyData = response.data;
          localStorage.setItem("daylyData", JSON.stringify(daylyData));
          store.dispatch(saveDaylyData(daylyData));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_WEEKLY_DATA:
      axiosPrivate
        .get(`/transactions/week`)
        .then((response) => {
          const weeklyData = response.data;
          localStorage.setItem("weeklyData", JSON.stringify(weeklyData));
          store.dispatch(saveWeeklyData(weeklyData));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_MONTHLY_DATA:
      axiosPrivate
        .get(`/transactions/month`)
        .then((response) => {
          const monthlyData = response.data;
          localStorage.setItem("monthlyData", JSON.stringify(monthlyData));
          store.dispatch(saveMonthlyData(monthlyData));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_YEARLY_DATA:
      axiosPrivate
        .get(`/transactions/year`)
        .then((response) => {
          const yearlyData = response.data;
          localStorage.setItem("yearlyData", JSON.stringify(yearlyData));
          store.dispatch(saveYearlyData(yearlyData));
          console.log(yearlyData);
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_BUDGETS:
      axiosPrivate
        .get(`/budget-user`)
        .then((response) => {
          const budgets = response.data
          localStorage.setItem("budgets", JSON.stringify(budgets));
          store.dispatch(saveBudgetsState(budgets));
        })

        .catch((error) => {
          console.log(error);
        });
      break;
    case FETCH_EXPENSES:
      axiosPrivate
        .get(`/transactions/user`)
        .then((response) => {
          const expenses = response.data
          localStorage.setItem("expenses", JSON.stringify(expenses));
          store.dispatch(saveExpensesState(expenses));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case SAVE_NEW_BUDGET:
      const lastBudget = action.newItem;
      axiosPrivate
        .post("/budget", {
          lastBudget,
        })
        .then((response) => {
          const budgets = response.data;
          localStorage.setItem("budgets", JSON.stringify(budgets));
          store.dispatch(saveBudgetsState(budgets));
        })
        .catch((error) => {
          console.log(error);
        });
      break;
    case SAVE_NEW_EXPENSE:
      const lastExpense = action.newItem;
      axiosPrivate
        .post("/transaction", {
          lastExpense,
        })
        .then((response) => {
          const expenses = response.data;
          localStorage.setItem("expenses", JSON.stringify(expenses));
          store.dispatch(saveExpensesState(expenses));
        })
        .catch((error) => {
          console.log(error);
        });
      break;

      case DELETE_EXPENSE:
          const expenseId = action.id;
          axiosPrivate.delete(`/transaction/${expenseId}`)
              .then((response) =>{
                  console.log(response);
              })
          break;

    default:
  }
  next(action);
};

export default fetchDataMiddleware;
