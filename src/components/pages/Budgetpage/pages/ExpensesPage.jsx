import {useLoaderData} from "react-router-dom";

// import du helpers
import {deleteItem, fetchData} from "../helpers/helpers.js";

// import d'un component
import Table from "../components/Table.jsx";
import {toast} from "react-toastify";

// Création d'un loader
export function expensesLoader () {
    const expenses = fetchData("expenses")
    return { expenses };
}

// Création d'une action
export async function expensesAction({ request }) {
    const data = await request.formData();
    const { _action, ...values } = Object.fromEntries(data);

    if (_action === "deleteExpense") {
        try {
            deleteItem({
                key: "expenses",
                id: values.expenseId,
            });
            return toast.success("Dépense supprimée!");
        } catch (e) {
            throw new Error("Il y a eu un problème dans la suppression de votre dépense");
        }
    }
}

const ExpensesPage = () => {
    const { expenses } = useLoaderData()

    return <div className="grid-lg">
        <h1>Toutes les dépenses</h1>
        {
            expenses && expenses.length > 0
            ? (
                    <div className="grid-md">
                        <h2>Dépenses récentes <small>({expenses.length} au total)</small></h2>
                        <Table expenses={expenses} />
                    </div>
                ) : (
                    <p>Pas de dépenses à montrer</p>
                )
        }
    </div>;
};

export default ExpensesPage;