// Import d'une fonction de helpers
import { deleteItem } from "../helpers/helpers.js";

// Import de react router dom
import { redirect } from "react-router-dom";

// Import de libraire(s)
import {toast} from "react-toastify";

export async function logoutAction() {
    // suppression de l'utilisateur
    deleteItem({
        key: "userName"
    })
    deleteItem({
        key: "budgets"
    })
    deleteItem({
        key: "expenses"
    })

    toast.success("Tu as supprimé ton compte et tes données")
    // redirection
    return redirect("/")
}