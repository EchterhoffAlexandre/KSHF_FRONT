export const FETCH_DAILY_DATA = 'FETCH_DAILY_DATA';
export const FETCH_WEEKLY_DATA = 'FETCH_WEEKLY_DATA';
export const FETCH_MONTHLY_DATA = 'FETCH_MONTHLY_DATA';
export const FETCH_YEARLY_DATA = 'FETCH_YEARLY_DATA';
export const SAVE_DAILY_TRANSACTIONS  = 'SAVE_DAILY_TRANSACTIONS';
export const SAVE_WEEKLY_TRANSACTIONS  = 'SAVE_WEEKLY_TRANSACTIONS';
export const SAVE_MONTHLY_TRANSACTIONS  = 'SAVE_MONTHLY_TRANSACTIONS';
export const SAVE_YEARLY_TRANSACTIONS  = 'SAVE_YEARLY_TRANSACTIONS';
export const FETCH_BUDGETS = 'FETCH_BUDGETS';
export const FETCH_EXPENSES ='FETCH_EXPENSES';
export const SAVE_NEW_BUDGET ='SAVE_NEW_BUDGET';
export const DELETE_BUDGET = 'DELETE_BUDGET';
export const SAVE_NEW_EXPENSE = 'SAVE_NEW_EXPENSE';
export const DELETE_EXPENSE = 'DELETE_EXPENSE';


export const fetchWeeklyData = () => ({
    type: FETCH_WEEKLY_DATA
})
export const saveWeeklyData = (weeklyData) => ({
    type:SAVE_WEEKLY_TRANSACTIONS,
    weeklyData,
})


export const fetchDailyData = () => ({
    type: FETCH_DAILY_DATA
})
export const saveDaylyData = (daylyData) => ({
    type:SAVE_DAILY_TRANSACTIONS,
    daylyData,
})


export const fetchMonthlyData = () => ({
    type: FETCH_MONTHLY_DATA
})
export const saveMonthlyData = (monthlyData) => ({
    type:SAVE_MONTHLY_TRANSACTIONS,
    monthlyData,
})


export const fetchYearlyData = () => ({
    type: FETCH_YEARLY_DATA
})
export const saveYearlyData = (yearlyData) => ({
    type:SAVE_YEARLY_TRANSACTIONS,
    yearlyData,
})


export const fetchBudgets = () => ({
    type: FETCH_BUDGETS
})

export const fetchExpenses = () => ({
    type: FETCH_EXPENSES
})

export const saveNewBudget = (newItem) => ({
    type: SAVE_NEW_BUDGET,
    newItem
    
})

export const deleteBudget = (id) => ({
    type: DELETE_BUDGET,
    id
})

export const saveNewExpense = (newItem) => ({
    type: SAVE_NEW_EXPENSE,
    newItem
})

export const deleteExpense = (id) => ({
    type: DELETE_EXPENSE,
    id
})
