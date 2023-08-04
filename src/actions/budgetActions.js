export const SAVE_BUDGETS_STATE = 'SAVE_BUDGETS_STATE';
export const SAVE_EXPENSES_STATE = 'SAVE_EXPENSES_STATE';


export const saveBudgetsState = (budgets)=>({
    type:SAVE_BUDGETS_STATE,
    budgets
})

export const saveExpensesState = (expenses)=>({
    type:SAVE_EXPENSES_STATE,
    expenses
})

