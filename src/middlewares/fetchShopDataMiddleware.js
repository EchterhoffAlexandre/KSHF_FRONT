
import { saveShopsData, FETCH_SHOPS_DATA } from "../store/actions/fetchShopsDataActions";
import { axiosPrivate } from "../axios/axiosPrivate";

const fetchShopsDataMiddleware = (store) => (next) => (action) => {
    switch(action.type){
        case FETCH_SHOPS_DATA:
            axiosPrivate
            .get(`/shops`)
            .then((response) => {
                const products = response.data
                store.dispatch(saveShopsData(products))
            })
            .catch((error)=>{
                console.log(error)
            })
            break;
        default:
    }
    next(action);
}

export default fetchShopsDataMiddleware