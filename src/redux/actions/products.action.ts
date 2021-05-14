import Product from "../../models/server-models/product.model.server";

interface ADD_ALL_PRODUCTS {
    type: 'ADD_ALL_PRODUCTS',
    payload: Product[]
}

interface ADD_PRODUCT {
    type: 'ADD_PRODUCT',
    payload: Product
}

interface UPDATE_PRODUCT {
    type: 'UPDATE_PRODUCT',
    payload: number
}

interface DELETE_PRODUCT {
    type: 'DELETE_PRODUCT',
    payload: number
}

type Action = ADD_ALL_PRODUCTS | ADD_PRODUCT | UPDATE_PRODUCT | DELETE_PRODUCT;

export default Action;