import Link from "next/link";
import { FC, useState } from "react";
import type { Product } from "./productsAPI";

import styles from "../../styles/util.module.css";
import productStyle from "./Products.module.css";

interface ProductsProp {
  list: Product[];
}

const Products: FC<ProductsProp> = ({ list }) => {
  const [isGridView, setIsGridView] = useState(true);

  const handleLayout = () => {
    setIsGridView(!isGridView);
  };

  const gridClasses = [styles.grid, isGridView ? "" : styles.listView];
  const cardClasses = [styles.card, isGridView ? "" : styles.cardList];

  return (
    <div>
      <div className={productStyle.layoutselector}>
        <button onClick={handleLayout}>
          {isGridView ? "List" : "Grid"} View
        </button>
      </div>
      <div className={gridClasses.join(" ")}>
        {list.map((product: Product) => (
          <div className={cardClasses.join(" ")} key={product.id}>
            <Link href={`/product/${product}`}>
              <a>
                <div className={styles.imageContainer}>
                  <img src={product.image} alt={product.title} />
                </div>

                <p>{product.title}</p>
                <p>£{product.price}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
