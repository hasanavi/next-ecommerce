import Link from "next/link";
import { FC } from "react";

import styles from "../../styles/util.module.css";

type CategoriesProps = {
  list: string[];
};

const Categories: FC<CategoriesProps> = ({ list }) => {
  return (
    <div>
      <div className={styles.grid}>
        {list.map((category, index) => (
          <div className={styles.card} key={category}>
            <Link href={`/categories/${category}`}>
              <a>
                <img
                  src={`https://picsum.photos/230/300?random=${index}`}
                  alt={category}
                />
                <p>{category}</p>
              </a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Categories;
