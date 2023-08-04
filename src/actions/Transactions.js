export const CREATE_TRANSACTION = 'CREATE_TRANSACTION';

export const createTransaction = (label, transaction)=>({
    type:CREATE_TRANSACTION,
    label,
    transaction,
})