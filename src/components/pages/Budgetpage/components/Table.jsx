// component import
import ExpenseItem from "./ExpenseItem.jsx";

const Table = ({ expenses, showBudget = true }) => {
    return (
        <div className="table">
            <table>
                <thead>
                <tr>
                    {["Nom", "Montant", "Date", showBudget ? "Budget" : "", ""].map(
                        (i, index) => (
                            <th key={index}>{i}</th>
                        )
                    )}
                </tr>
                </thead>
                <tbody>
                {expenses.map((expense) => (
                    <tr key={expense.id}>
                        <ExpenseItem expense={expense} showBudget={showBudget} />
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    );
};
export default Table;