import React from "react";
import ProductItem from "../../components/ProductItem";
import { CategoryContainer, CategoryTitle, ProductsContainer } from "./styles";

const Product = ({ category }) => {
  <CategoryContainer>
    <CategoryTitle>{category.displayName}</CategoryTitle>

    <ProductsContainer>
      {category.products?.map((product) => (
        <ProductItem key={product.id} product={product} />
      ))}
    </ProductsContainer>
  </CategoryContainer>;
};

export default Product;
