import axios from "axios";
import Product from '../models/server-models/product.model.server';

const productsService = {
  getAllProductsFromServer: async (): Promise<Product[]> => {
    const response = await axios.get<Product[]>("http://localhost:3001/products");
    const allProducts = response.data;
    return allProducts;
  },
};

export default productsService;