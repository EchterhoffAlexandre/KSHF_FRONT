import { SAVE_DAILY_TRANSACTIONS, SAVE_MONTHLY_TRANSACTIONS, SAVE_WEEKLY_TRANSACTIONS, SAVE_YEARLY_TRANSACTIONS } from "../actions/fetchDataActions"


const initialState = {
    dailyTransactions : [],
    weeklyTransactions : [],
    monthlyTransactions: [],
    yearlyTransactions: [],
}

const transactionsReducer = (state = initialState, action ={}) =>{
    switch (action.type){
        case SAVE_DAILY_TRANSACTIONS:
            return {...state, dailyTransactions: action.daylyData}
        case SAVE_WEEKLY_TRANSACTIONS:
            return {...state, weeklyTransactions: action.weeklyData}
        case SAVE_MONTHLY_TRANSACTIONS:
            return {...state, monthlyTransactions: action.monthlyData}
        case SAVE_YEARLY_TRANSACTIONS:
            return {...state, yearlyTransactions: action.yearlyData}
        default:
            return state
    }
}


export default transactionsReducer