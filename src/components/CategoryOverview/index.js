// Styles
import { CategoryContainer, CategoryTitle, ProductsContainer } from "./style";

// Utilities

// Components
import ProductItem from "../ProductItem";

const CategoryOverview = ({ category }) => {
  return (
    <CategoryContainer>
      <CategoryTitle>{category.displayName}</CategoryTitle>

      <ProductsContainer>
        {category.products?.slice(0, 3).map((product) => (
          <ProductItem key={product.id} product={product} />
        ))}
      </ProductsContainer>
    </CategoryContainer>
  );
};

export default CategoryOverview;
