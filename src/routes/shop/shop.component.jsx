import React, { useContext } from "react";
import { ProductsContext } from "../../contexts/products.context";
import ProductCard from "../../components/product-card/product-card.component";
import "./shop.styles.scss";

const Shop = () => {
  const { products } = useContext(ProductsContext);
  return (
    <div className="product-container">
      {products.map(({ id, ...otherprops }) => (
        <ProductCard key={id} {...otherprops} />
      ))}
    </div>
  );
};

export default Shop;
