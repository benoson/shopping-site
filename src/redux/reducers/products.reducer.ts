import Product from "../../models/server-models/product.model.server";
const productsState = new Array<Product>();

const productsReducer = (state = productsState, action: any) => {
    switch (action) {
        case 'ADD_PRODUCTS':
            
            break;
    
        default:
            break;
    }
}

export default productsReducer;