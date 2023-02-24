import {applyMiddleware, combineReducers, createStore} from "redux";
import { cartReducer, categoryReducer, ordersReducer, productReducer } from "./reducers";

import thunk from 'redux-thunk';

const rootReducer=combineReducers({
    products:productReducer,
    category:categoryReducer,
    cart:cartReducer,
    orders:ordersReducer,
    
});

export default createStore(rootReducer,applyMiddleware(thunk));