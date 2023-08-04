import React, { useEffect } from 'react';
import '../style/dashboard.css';

// Import de React Router DOM
import {Link, useLoaderData} from "react-router-dom";

// Import des functions helpers
import {createBudget, createExpense, deleteItem, fetchData, waait} from "../helpers/helpers.js";

// Import des components
import Intro from '../components/Intro.jsx';
import AddBudgetForm from "../components/AddBudgetForm.jsx";
import AddExpenseForm from "../components/AddExpenseForm.jsx";
import Table from "../components/Table.jsx";

// Import de librairie(s)
import {toast} from "react-toastify";
import BudgetItem from "../components/BudgetItem.jsx";
import { useSelector } from 'react-redux';


// Action
export async function dashBoardAction ({request}){
    await waait();

    const data = await request.formData();
    const { _action, ...values} = Object.fromEntries(data);
    // Soumission d'une donnée d'un nouvel utilisateur
    if(_action === "newUser"){
        try {
            localStorage.setItem("userName", JSON.stringify(values.userName))
            return toast.success(`Bienvenue, ${values.userName}`)
        } catch (e) {
            throw new Error("Il y a eu un problème dans la création de ton compte")
        }
    }
    if (_action === "createBudget") {
        try {
            // création du budget
            createBudget({
                name: values.newBudget,
                amount: values.newBudgetAmount,
            })
            // renvoi du message de confirmation
            return toast.success("Budget créé")
        } catch (e) {
            throw new Error("Il y a eu un problème dans la création de ton budget")
        }
    }
    if (_action === "createExpense") {
        try {
            // création d'une dépense
            createExpense({
                name: values.newExpense,
                amount: values.newExpenseAmount,
                budgetId: values.newExpenseBudget
            })
            // renvoi du message de confirmation
            return toast.success(`Dépense ${values.newExpense} créée`)
        } catch (e) {
            throw new Error("Il y a eu un problème dans la création de ta dépense")
        }
    }
    if (_action === "deleteExpense") {
        try {
            deleteItem({
                key: "expenses",
                id: values.expenseId,
            });
            return toast.success("Dépense supprimée!");
        } catch (e) {
            throw new Error("Il y a eu un problème pendant la suppression de ta dépense");
        }
    }
}

export function dashboardLoader () {
    const userName = fetchData("userName");
    const budgets = fetchData("budgets");
    const expenses = fetchData("expenses")
    return { userName, budgets, expenses }
}

const Dashboard = () => {
    const { userName } = useLoaderData();
    const { budgets, expenses } = useSelector(state => state.budget)


    

    return (
            <>
                {userName ? (
                        <div className="dashboard">
                            <h1>Bon retour à toi, <span className="accent">{userName}</span></h1>
                            <div className="grid-sm">
                                {
                                    budgets && budgets.length > 0
                                    ? (
                                        <div className="grid-lg">
                                            <div className="flex-lg">
                                                <AddBudgetForm />
                                                <AddExpenseForm budgets={budgets} />
                                            </div>
                                            <h2>Budgets</h2>
                                            <div className="budgets">
                                                {
                                                    budgets.map((budget) => (
                                                        <BudgetItem key={budget.id} budget={budget} />
                                                    ))
                                                }
                                            </div>
                                            {
                                                expenses && expenses.length > 0 && (<div className="grid-md">
                                                <h2>Dépenses récentes</h2>
                                                <Table expenses={expenses
                                                    .sort((a, b) => b.createAt - a.createAt)
                                                    .slice(0, 8)
                                                }/>
                                                    {expenses.length > 8 && (
                                                        <Link
                                                            to="expenses"
                                                            className="btn btn--dark"
                                                        >
                                                            Voir toutes les dépenses
                                                        </Link>
                                                    )}
                                                </div>)
                                            }
                                        </div>)
                                        : (
                                            <div className="grid-sm">
                                                <p>Maîtriser ton trésor de guerre, c'est être libre !!</p>
                                                <p>Créé un budget pour commencer</p>
                                                <AddBudgetForm />
                                            </div>
                                        )
                                }
                            </div>
                        </div>
                    ) : <Intro />}
            </>
    )
}

export default Dashboard;