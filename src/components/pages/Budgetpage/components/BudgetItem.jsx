
import * as dayjs from 'dayjs'

// rrd imports
import { Form, Link } from "react-router-dom";

// library imports
import { BanknotesIcon, TrashIcon } from "@heroicons/react/24/outline";

import {calculateSpentByBudget, formatCurrency, formatPercentage} from "../helpers/helpers.js";

const BudgetItem = ({ budget, showDelete = false }) => {
    const { id, name, amount, color } = budget;
    const spent = calculateSpentByBudget(id);

    return (
        <div
            className="budget"
            style={{
                "--accent": color,
            }}
        >
            <div className="progress-text">
                <h3>{name}</h3>
                <p>{formatCurrency(amount)} Budgeté</p>
            </div>
            <progress max={amount} value={spent}>
                {formatPercentage(spent / amount)}
            </progress>
            <div className="progress-text">
                <small>{formatCurrency(spent)} dépensés</small>
                <small>{formatCurrency(amount - spent)} restants</small>
            </div>
            {showDelete ? (
                <div className="flex-sm">
                    <Form
                        method="post"
                        action="delete"
                        onSubmit={(event) => {
                            if (
                                !confirm(
                                    "Etes vous sur que vous voulez définitivement supprimer toutes vos données ?"
                                )
                            ) {
                                event.preventDefault();
                            }
                        }}
                    >
                        <button type="submit" className="btn">
                            <span>Suppression du budget</span>
                            <TrashIcon width={20} />
                        </button>
                    </Form>
                </div>
            ) : (
                <div className="flex-sm">
                    <Link to={`/budget/${id}`} className="btn">
                        <span>Détails</span>
                        <BanknotesIcon width={20} />
                    </Link>
                </div>
            )}
        </div>
    );
};
export default BudgetItem;