import {
  configureStore
} from '@reduxjs/toolkit'
import authMiddleware from '../middlewares/authenticationMiddleware'
import fetchDataMiddleware from '../middlewares/fetchDataMiddleware'
import rootReducer from '../reducer/rootReducer'
import signupMiddleware from '../middlewares/signupMiddleware'
import fetchShopsDataMiddleware from '../middlewares/fetchShopDataMiddleware'



export default configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware, fetchDataMiddleware, signupMiddleware, fetchShopsDataMiddleware),
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(authMiddleware),
})