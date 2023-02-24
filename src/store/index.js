import {applyMiddleware, combineReducers, createStore} from "redux";
import { cartReducer, categoryReducer, productReducer } from "./reducers";

import thunk from 'redux-thunk';

const rootReducer=combineReducers({
    products:productReducer,
    category:categoryReducer,
    cart:cartReducer,
    
});

export default createStore(rootReducer,applyMiddleware(thunk));