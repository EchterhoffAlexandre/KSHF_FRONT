// Importation composants react router dom
import { Form, useFetcher } from "react-router-dom"

// Import de react
import {useEffect, useRef} from "react";

// Import de librairie(s)
import { CurrencyEuroIcon } from "@heroicons/react/24/solid"
import { useDispatch } from "react-redux";
import { saveNewBudget } from "../../../../actions/fetchDataActions";

const AddBudgetForm = () => {
    const fetcher = useFetcher();
    const isSubmitting = fetcher.state === "submitting";

    // Réinitialisation du formulaire après avoir soumis (les champs redeviennent vides)
    const formRef = useRef()
    const focusRef = useRef();
    useEffect(() => {
        if(!isSubmitting){
            // Réinitialisation des champs
            formRef.current.reset()
            // La sélection retourne au premier champ avec le focus
            focusRef.current.focus()
        }
    }, [isSubmitting])

    const handleBudgetAmountChange = (event) => {
        const input = event.target;
        const value = Number.parseFloat(input.value);
        if (value < 0) {
            input.setCustomValidity("Le montant doit être positif");
        } else {
            input.setCustomValidity("");
        }
    };

    const dispatch = useDispatch()

    const handleSaveNewBudget = (event) => {
        dispatch(saveNewBudget())
    }

    return (
        <div className="form-wrapper">
            <h2 className="h3">
                Créer un budget
            </h2>
            <fetcher.Form
                method="post"
                className="grid-sm"
                ref={formRef}
            >
                <div className="grid-xs">
                    <label htmlFor="newBudget">Nom du budget</label>
                    <input
                        type="text"
                        name="newBudget"
                        id="newBudget"
                        placeholder="ex : Courses"
                        required
                        ref={focusRef}
                    />
                </div>
                <div className="grid-xs">
                    <label htmlFor="newBudgetAmount">Montant</label>
                    <input
                        type="number"
                        step="0.01"
                        name="newBudgetAmount"
                        id="newBudgetAmount"
                        placeholder="ex : 1000"
                        required
                        inputMode="decimal"
                        onChange={handleBudgetAmountChange}
                    />
                </div>
                <input type="hidden" name="_action" value="createBudget"/>
                <button type="submit" className="btn btn--dark" disabled={isSubmitting}>
                    {
                        isSubmitting ? <span>Création en cours</span> :
                        (
                            <>
                                <span>Créer</span>
                                <CurrencyEuroIcon width={20} />
                            </>
                        )
                    }
                </button>
            </fetcher.Form>
        </div>
    )
}
export default AddBudgetForm