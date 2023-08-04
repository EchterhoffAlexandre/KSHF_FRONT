// rrd imports
import { Link, useFetcher } from "react-router-dom";

// library import
import { TrashIcon } from "@heroicons/react/24/solid";

// helper imports
import {formatCurrency, formatDateToLocaleString, getAllMatchingItems,} from "../helpers/helpers.js";
import {useDispatch} from "react-redux";
import {deleteExpense, fetchBudgets, fetchExpenses} from "../../../../actions/fetchDataActions.js";

import { toast } from "react-toastify";

const ExpenseItem = ({ expense, showBudget }) => {
    const dispatch = useDispatch();
    console.log(expense)
    const fetcher = useFetcher();

    const budget = getAllMatchingItems({
        category: "budgets",
        key: "id",
        value: expense.budget_id,
    })[0];
   console.log('expenseitem-budget', budget)

    const handleDeleteExpense = (event) => {
        event.preventDefault();
        dispatch(deleteExpense(expense.id));
        toast.success("Dépense supprimée!")
        dispatch(fetchBudgets())
        dispatch(fetchExpenses())
    }

    return (
        <>
            <td style={{verticalAlign: "middle"}}>{expense.name}</td>
            <td style={{verticalAlign: "middle"}}>{formatCurrency(expense.amount)}</td>
            <td style={{verticalAlign: "middle"}}>{formatDateToLocaleString(expense.created_at)}</td>
            {showBudget && (
                <td style={{verticalAlign: "middle"}}>
                    <Link
                        to={`/budget/${budget.id}`}
                        className="budget__link"
                        style={{
                            "--accent": budget.color,
                        }}
                    >
                        {budget.name}
                    </Link>
                </td>
            )}
            <td>
                <fetcher.Form method="post" className="form__container-btn">
                    <input type="hidden" name="_action" value="deleteExpense" />
                    <input type="hidden" name="expenseId" value={expense.id} />
                    <button
                        onClick={handleDeleteExpense}
                        type="submit"
                        className="trash-btn"
                        aria-label={`Delete ${expense.name} expense`}
                        style={{ verticalAlign: "middle" }}
                    >
                        <TrashIcon width={20} />
                    </button>
                </fetcher.Form>
            </td>
        </>
    );
};
export default ExpenseItem;