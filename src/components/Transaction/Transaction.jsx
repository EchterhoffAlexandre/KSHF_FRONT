import { TextField, Button } from "@mui/material"
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createTransaction } from "../../actions/Transactions";


const Transaction = () => {
    const dispatch = useDispatch()
    const { budget } = useSelector(state =>state.user)
    console.log(budget)
    const [label, setLabel] = useState('');
    const [transaction, setTransaction] = useState(0);

    const handleChangeLabel = (event) => {
        setLabel(event.target.value)
    };

    const handleChangeTransaction = (event) => {
        setTransaction(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(createTransaction(label, operation, userId, budgetId))
    };



    return(
        <form onSubmit={handleSubmit} method='POST'>
            <TextField onChange={handleChangeLabel} value={label} id="label" label="label" variant="standard" />
            <TextField onChange={handleChangeTransaction} value={transaction} id="transaction" label="transaction" variant="standard" />
            <Button type='submit' variant="contained">Valider</Button>
        </form>
    )
};

export default Transaction