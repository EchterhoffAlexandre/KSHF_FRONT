// import react router dom
import { redirect } from "react-router-dom";

// import de la librairie react toastify
import { toast } from "react-toastify";

// import de mes fonctions helpers
import { deleteItem, getAllMatchingItems } from "../helpers/helpers.js";

export function deleteBudget({ params }) {
    try {
        deleteItem({
            key: "budgets",
            id: params.id,
        });

        const associatedExpenses = getAllMatchingItems({
            category: "expenses",
            key: "budgetId",
            value: params.id,
        });

        associatedExpenses.forEach((expense) => {
            deleteItem({
                key: "expenses",
                id: expense.id,
            });
        });
        toast.success("Ton budget a bien été supprimé");
    } catch (e) {
        throw new Error("Il y a eu un problème pendant la suppression de ton budget");
    }
    return redirect("/budget");
}