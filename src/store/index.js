import {applyMiddleware, combineReducers, createStore} from "redux";
import { authReducer, cartReducer, categoryReducer, ordersReducer, productReducer } from "./reducers";

import thunk from 'redux-thunk';

const rootReducer=combineReducers({
    products:productReducer,
    category:categoryReducer,
    cart:cartReducer,
    orders:ordersReducer,
    auth:authReducer,
    
});

export default createStore(rootReducer,applyMiddleware(thunk));