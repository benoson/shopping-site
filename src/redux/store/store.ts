import { createStore } from "redux";
import productsReducer from '../reducers/products.reducer';

export const store = createStore(productsReducer)