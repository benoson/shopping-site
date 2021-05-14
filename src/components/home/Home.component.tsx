import React, { useEffect, useState } from "react";
import productsService from "../../services/products.service";
import ProductView from "../../models/view-models/product.model.view";
import productsLogic from "../../logic/products.logic";
import ProductCard from "../card/Product-Card.component";
import { useSelector, useDispatch } from "react-redux";
import Product from "../../models/server-models/product.model.server";
import ProductsState from "../../redux/state/products.state";
import "./home.scss";

const Home = () => {
  const [products, updateProducts] = useState<ProductView[]>([]);
  const dispatch = useDispatch();
  const allProductsFromStore = useSelector<
    ProductsState,
    ProductsState["products"]
  >((state) => state.products);

  useEffect(() => {
    // Checking if the global state is empty. If so, get all the products from the server
    if (allProductsFromStore.length === 0) {
      productsService
        .getAllProductsFromServer()
        .then((allProductsFromServer: Product[]) => {
          // Converting the products from the server to be suitable for UI display
          const convertedProductsForDisplay = productsLogic.convertProductsForDisplay(
            allProductsFromServer
          );
          updateProducts(convertedProductsForDisplay);
          dispatch({
            type: "ADD_ALL_PRODUCTS",
            payload: allProductsFromServer,
          });
        });
    } else {
      // Converting the products from the server to be suitable for UI display
      const convertedProductsForDisplay = productsLogic.convertProductsForDisplay(
        allProductsFromStore
      );
      updateProducts(convertedProductsForDisplay);
    }
  }, []);

  return (
    <div className="home">
      {products.map((product: ProductView, index: number) => (
        <ProductCard {...product} key={index} />
      ))}
    </div>
  );
};

export default Home;
