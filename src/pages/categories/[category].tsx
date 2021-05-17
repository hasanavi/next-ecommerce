import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import Layout from "../../components/Layout/Layout";

// import Categories from "../features/products/Products";
// import { useAppSelector, useAppDispatch } from "../app/hooks";
// import { getCategories } from "../features/products/productsSlice";
import { useEffect } from "react";

const ProductsPage: NextPage = () => {
  const router = useRouter();
  const { category } = router.query;
  console.log("category", category);
  //   const dispatch = useAppDispatch();
  //   const { status, list, error } = useAppSelector((store) => store.categories);

  //   useEffect(() => {
  //     if (list.length <= 0) {
  //       dispatch(getCategories());
  //     }
  //   }, []);

  return (
    <Layout>
      <h1>Products</h1>
      <h2>{category}</h2>
      {/* {status === "loading" ? <div>Loading</div> : null}
      {error ? <div>{error}</div> : null}
      {list.length > 0 ? <Categories list={list} /> : null} */}
    </Layout>
  );
};

export default ProductsPage;
