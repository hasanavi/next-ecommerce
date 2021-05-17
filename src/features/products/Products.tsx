import Link from "next/link";
import { FC } from "react";

import styles from "../../styles/util.module.css";

type ProductsProps = {
  list: string[];
};

const Products: FC<ProductsProps> = ({ list }) => {
  return (
    <div>
      <div className={styles.row}>
        {list.map((category, index) => (
          <Link href={`/categories/${category}`}>
            <a>
              <div className={styles.col} key={category}>
                <div className={styles.card}>
                  <img
                    src={`https://picsum.photos/200/300?random=${index}`}
                    alt={category}
                  />
                  <p>{category}</p>
                </div>
              </div>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Products;
