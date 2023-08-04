export const CHANGE_EMAIL_FIELD = 'CHANGE_EMAIL_FIELD';
export const CHANGE_PASSWORD_FIELD = 'CHANGE_PASSWORD_FIELD';
export const SUCCESSFUL_SIGNUP = 'SUCCESSFUL_SIGNUP';

export const changeEmailField = (input) => ({
    type:CHANGE_EMAIL_FIELD,
    input,
})

export const changePasswordField = (input) => ({
    type:CHANGE_PASSWORD_FIELD,
    input,
})

export const successfulSignup = () => ({
    type:SUCCESSFUL_SIGNUP,
})