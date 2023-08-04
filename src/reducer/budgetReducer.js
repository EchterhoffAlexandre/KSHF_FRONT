import { SAVE_BUDGETS_STATE, SAVE_EXPENSES_STATE } from "../actions/budgetActions"

const initialstate = {
    budgets:[],
    expenses:[]
}

const budgetReducer =  (state = initialstate, action = {}) => {
    switch(action.type){
        case SAVE_BUDGETS_STATE:
            return {...state, budgets: action.budgets}
        case SAVE_EXPENSES_STATE:
            return {...state, expenses: action.expenses}
        default:
            return state
    }
}

export default budgetReducer