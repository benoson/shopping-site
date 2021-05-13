import Product from "../models/server-models/product.model.server";
import ProductView from "../models/view-models/product.model.view";

const productsLogic = {
    convertProductsForDisplay: (products: Product[]): ProductView[] => {
        const displayedProductsArray = new Array<ProductView>();
        for (let product of products) {
            const displayedProduct: ProductView = {
                title: product.title,
                description: product.description,
                price: product.price,
                image: product.image
            };
            displayedProductsArray.push(displayedProduct);
        }
        return displayedProductsArray;
    }
}

export default productsLogic;