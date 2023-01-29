// Styles
import { ProductContainer, ProductImage, ProductInfo } from "./styles";
import Button from "../CustomButton";

// Utilities

const ProductItem = ({ product }) => {
  return (
    <ProductContainer>
      <ProductImage imageUrl={product.imageUrl}></ProductImage>

      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
      <Button>Buy Now</Button>
    </ProductContainer>
  );
};

export default ProductItem;
