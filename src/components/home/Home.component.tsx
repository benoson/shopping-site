import React, { useEffect, useState } from "react";
import productsService from "../../services/products.service";
import ProductView from "../../models/view-models/product.model.view";
import productsLogic from "../../logic/products.logic";
import ProductCard from "../card/Product-Card.component";
import "./home.scss";

const Home = () => {
  const [products, updateProducts] = useState<ProductView[]>([]);

  useEffect(() => {
    productsService.getAllProductsFromServer().then((allProductsFromServer) => {
      const convertedProductsForDisplay = productsLogic.convertProductsForDisplay(
        allProductsFromServer
      );
      updateProducts(convertedProductsForDisplay);
    });
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
