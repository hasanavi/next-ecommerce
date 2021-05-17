import { FC } from "react";
import type { Product } from "./productAPI";

import styles from "./Product.module.css";
import { useAppDispatch } from "../../app/hooks";
import { addToCart } from "../cart/cartSlice";

interface ProductsProp {
  product: Product;
}

const Products: FC<ProductsProp> = ({ product }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart());
  };
  return (
    <div className={styles.productContainer}>
      <div className={styles.imageContainer}>
        <img src={product.image} alt={product.title} />
      </div>

      <div className={styles.description}>
        <p>{product.title}</p>
        <p>Price - £{product.price}</p>
        <p>Category - {product.category}</p>
        <p>{product.description}</p>

        <button
          data-testid="add-to-cart-btn"
          aria-label="Add to cart"
          className={styles.addToBag}
          onClick={handleAddToCart}
        >
          ADD TO BAG
        </button>
      </div>
    </div>
  );
};

export default Products;
