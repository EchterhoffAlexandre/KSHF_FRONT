
import { saveNewBudget, saveNewExpense } from '../../../../actions/fetchDataActions';
import store from '../../../../store/store'
export const waait = () => new Promise(res => setTimeout(res, Math.random() * 800))

// Générateur de couleur aléatoire
const generateRandomColor = () => {
    const existingBudgetLength = fetchData("budgets")?.length ?? 0;
    return `${existingBudgetLength * 34} 65% 50%`
}

// Stockage local
export const fetchData = (key) => {
    return JSON.parse(localStorage.getItem(key));
};

// Récupérer tous les items du stockage local
export const getAllMatchingItems = ({ category, key, value }) => {
    const data = fetchData(category) ?? [];
    return data.filter((item) => item[key] === parseInt(value));
};

// Suppression d'un item du stockage local
export const deleteItem = ({ key, id }) => {
    const existingData = fetchData(key);
    if (id) {
        const newData = existingData.filter((item) => item.id !== id);
        return localStorage.setItem(key, JSON.stringify(newData));
    }
    return localStorage.removeItem(key);
};

// création d'un budget
export const createBudget = ({
    name, amount
}) => {
    const newItem = {
        // id: crypto.randomUUID(),
        name: name,
        createdAt: Date.now(),
        amount: +amount,
        color: generateRandomColor()
    }
    store.dispatch(saveNewBudget(newItem))
     
}

// création d'une dépense
export const createExpense = ({
                                 name, amount, budgetId
                             }) => {
    const newItem = {
        // id: crypto.randomUUID(),
        name: name,
        created_at: Date.now(),
        amount: +amount,
        budget_id: budgetId
    }
    store.dispatch(saveNewExpense(newItem))
}

// Calcul du total dépensé par budget
export const calculateSpentByBudget = (budget_id) => {
    // On prend notre budget avec "budgetId"
    const expenses = fetchData("expenses") ?? [];
    const budgetSpent = expenses.reduce((acc, expense) => {
        // Vérification si la expense.id (l'id de la dépense) === budgetId (l'id du budget) qui a été entrée
        if(expense.budget_id != budget_id) return acc
        // Ajout du montant courant au total
        return acc += Number.parseFloat(expense.amount)
    }, 0)
    return budgetSpent;
}

// Formatage
export const formatDateToLocaleString = (epoch) => new Date(epoch).toLocaleDateString();

// Formatage des pourcentages
export const formatPercentage = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "percent",
        minimumFractionDigits: 0,
    })
}

// Format de la monnaie
export const formatCurrency = (amt) => {
    return amt.toLocaleString(undefined, {
        style: "currency",
        currency: "EUR"
    })
}