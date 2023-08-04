import { GET_INPUT_VALUE } from '../actions/signUpAction.js'

const initialState = {
    isLogged : false,
    firstname:'',
    lastname:'',
    signUpEmailField:'',
    signUpPasswordField:'',
}

const reducer = (state = initialState, action={})=>{

    switch(action.type){
        case GET_INPUT_VALUE:
            return {...state, [action.name] :action.value}
        default:
            return state
    }
}
