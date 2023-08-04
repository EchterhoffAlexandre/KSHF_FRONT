import {  SAVE_SHOPS_DATA } from "../store/actions/fetchShopsDataActions"


const initialState = {
    products : [],
    loading: true
}

const shopsReducer = (state = initialState, action ={}) =>{
    switch (action.type){
        case SAVE_SHOPS_DATA:
            return {...state, products: action.payload, loading: false}
        default:
            return state
    }
}


export default shopsReducer
