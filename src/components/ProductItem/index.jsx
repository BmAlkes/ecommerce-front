// Styles
import { ProductContainer, ProductImage, ProductInfo } from "./styles";
import { Bag } from "styled-icons/ionicons-sharp";
import { Heart } from "styled-icons/zondicons";

// Utilities

const ProductItem = ({ product }) => {
  return (
    <ProductContainer>
      <div className="block">
        <div>
          <Bag />
          <Heart className="like" />
        </div>
      </div>
      <ProductImage imageUrl={product.imageUrl}></ProductImage>

      <ProductInfo>
        <p>{product.name}</p>
        <p>R${product.price}</p>
      </ProductInfo>
    </ProductContainer>
  );
};

export default ProductItem;
