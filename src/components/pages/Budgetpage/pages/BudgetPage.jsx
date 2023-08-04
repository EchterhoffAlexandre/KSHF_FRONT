// Imports de react router dom
import {useLoaderData} from "react-router-dom";

// Import d'un helper
import { toast } from "react-toastify";
import {createExpense, deleteItem, getAllMatchingItems} from "../helpers/helpers.js";
import BudgetItem from "../components/BudgetItem.jsx";
import AddExpenseForm from "../components/AddExpenseForm.jsx";
import Table from "../components/Table.jsx";
import {deleteExpense} from "../../../../actions/fetchDataActions.js";
import {useSelector} from "react-redux";



// création d'un loader
export async function budgetLoader({ params }) {
    const budget = await getAllMatchingItems({
        category: "budgets",
        key: "id",
        value: params.id,
    })[0];
   

    const expenses = await getAllMatchingItems({
        category: "expenses",
        key: "budget_id",
        value: params.id,
    });
   
   
    if (!budget) {
        throw new Error("Le budget que tu essayes de trouver n'existe pas");
    }

    return { budget, expenses };
}

// création d'une action
export async function budgetAction({ request }) {
    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data);

    if (_action === "createExpense") {
        try {
            createExpense({
                name: values.newExpense,
                amount: values.newExpenseAmount,
                budgetId: values.newExpenseBudget,
            });
            return toast.success(`Dépense ${values.newExpense} créée!`);
        } catch (e) {
            throw new Error("Il y a eu un problème dans la création de ta dépense");
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
            throw new Error("Il y a eu un problème dans la suppression de ta dépense");
        }
    }
}

const BudgetPage = () => {
    const { budget } = useLoaderData();
    const { expenses } = useSelector((state) => state.budget);
    console.log({budget, expenses})

    return (
        <div
            className="grid-lg"
            style={{
                "--accent": budget.color,
            }}
        >
            <h1 className="h2">
                <span className="accent">{budget.name}</span>
            </h1>
            <div>
                <BudgetItem budget={budget} showDelete={true} />
                <AddExpenseForm budgets={[budget]}/>
            </div>
            {expenses && expenses.length > 0 && (
                <div className="grid-md">
                    <h2>
                        <span className="accent">{budget.name}</span>
                    </h2>
                    <Table expenses={expenses.filter(expense => expense.budget_id === budget.id)} showBudget={false} />
                </div>
            )}
        </div>
    );
};
export default BudgetPage;