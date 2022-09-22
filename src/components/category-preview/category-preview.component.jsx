import "./category-preview.styles.jsx";
import { Link } from "react-router-dom";
import React from "react";
import ProductCard from "../product-card/product-card.component";
import {
  CategoryPreviewContainer,
  CategoryPreviewItems,
  CategoryTitle,
} from "./category-preview.styles.jsx";

const CategoryPreview = ({ title, products }) => {
  return (
    <CategoryPreviewContainer>
      <h2>
        <CategoryTitle to={title}>{title.toUpperCase()}</CategoryTitle>
      </h2>

      <CategoryPreviewItems>
        {products
          .filter((_, idx) => idx < 4)
          .map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
      </CategoryPreviewItems>
    </CategoryPreviewContainer>
  );
};

export default CategoryPreview;
