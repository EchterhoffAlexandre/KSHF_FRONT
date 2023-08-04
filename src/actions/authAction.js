export const  SUBMIT_LOGIN  = 'SUBMIT_LOGIN';
export const  SAVE_SUCCESSFUL_AUTH  = 'SAVE_SUCCESSFUL_AUTH';


export const submitLogin  = (email, password) => ({ type : SUBMIT_LOGIN, email, password });
export const saveSuccessfulAuth = () => ({ type : SAVE_SUCCESSFUL_AUTH });



