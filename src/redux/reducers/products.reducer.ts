import Product from "../../models/server-models/product.model.server";
import Action from '../actions/products.action';
import ProductsState from '../state/products.state';

const initialProductsState = {
    products: new Array<Product>()
};

const productsReducer = (state: ProductsState = initialProductsState, action: Action) => {
    switch (action.type) {
        case 'ADD_ALL_PRODUCTS':
            return { products: action.payload };

        case 'ADD_PRODUCT':
            return { ...state, products: [...state.products, action.payload] };

        case 'UPDATE_PRODUCT':
        // return { ...state, products: [...state.products, action.payload] };

        case 'DELETE_PRODUCT':
        // return { ...state, products: [...state.products, action.payload] };

        default:
            return state;
    }
}

export default productsReducer;