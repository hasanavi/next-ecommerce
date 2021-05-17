import type { GetStaticProps, NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "../../components/Layout/Layout";
import Products from "../../features/products/Products";
import { getProducts } from "../../features/products/productsSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const ProductsPage: NextPage = () => {
  const router = useRouter();
  const { category } = router.query;
  const dispatch = useAppDispatch();
  const { status, list, error } = useAppSelector((store) => store.products);

  useEffect(() => {
    if (category && list.length <= 0) {
      dispatch(getProducts(category as string));
    }
  }, [category]);

  return (
    <Layout>
      <h1>Products</h1>
      <h2>Category - {category}</h2>
      {status === "loading" ? <div>Loading</div> : null}
      {error ? <div>{error}</div> : null}
      {list.length > 0 ? <Products list={list} /> : null}
    </Layout>
  );
};

export default ProductsPage;
