import {useFetcher} from "react-router-dom";
import {useEffect, useRef} from "react";
import { PlusCircleIcon } from "@heroicons/react/24/solid/index.js";

const AddExpenseForm = ({ budgets }) => {
    const fetcher = useFetcher()
    const isSubmitting = fetcher.state === "submitting";
    const formRef = useRef()
    const focusRef = useRef()

    useEffect(() =>{
        if(!isSubmitting){
            // Réinitialisation du formulaire
            formRef.current.reset()
            // Sélection du premier champ après le reset
            focusRef.current.focus()
        }
    }, [isSubmitting])

    const handleExpenseAmountChange = (event) => {
        const input = event.target;
        const value = Number.parseFloat(input.value);
        if (value < 0) {
            input.setCustomValidity("Le montant doit être positif");
        } else {
            input.setCustomValidity("");
        }
    };

    return (
        <div className="form-wrapper">
            <h2 className="h3">{" "}<span className="accent">{budgets.length === 1 && `${budgets.map((budg) => budg.name)}`}</span>{" "}Ajouter une dépense</h2>
            <fetcher.Form
                method="post"
                className="grid-sm"
                ref={formRef}
            >
                <div className="expenses-inputs">
                    <div className="grid-sx">
                        <label htmlFor="newExpense">Nom de la dépense</label>
                        <input
                            type="text"
                            name="newExpense"
                            id="newExpense"
                            placeholder="ex : Café"
                            ref={focusRef}
                            required
                        />
                    </div>
                    <div className="grid-xs">
                        <label htmlFor="newExpenseAmount">Montant</label>
                        <input
                            type="number"
                            step="0.01"
                            inputMode="decimal"
                            name="newExpenseAmount"
                            id="newExpenseAmount"
                            placeholder="ex: 2.50"
                            required
                            onChange={handleExpenseAmountChange}
                        />
                    </div>
                </div>
                <div className="grid-xs" hidden={budgets.length === 1}>
                    <label htmlFor="newExpenseBudget">Catégorie de budget</label>
                    <select name="newExpenseBudget" id="newExpenseBudget" required>
                        {
                            budgets
                                .sort((a, b) => a.createdAt - b.createdAt)
                                .map((budget) => {
                                    return (
                                        <option key={budget.id} value={budget.id}>{budget.name}</option>
                                    )
                                })

                        }
                    </select>
                </div>
                <input type="hidden" name="_action" value="createExpense"/>
                <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>Création en cours</span> :
                            (
                                <>
                                    <span>Créer la dépense</span>
                                    <PlusCircleIcon width={20} />
                                </>
                            )
                    }
                </button>
            </fetcher.Form>
        </div>
    )
}

export default AddExpenseForm;