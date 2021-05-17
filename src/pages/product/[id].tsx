import type { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect } from "react";

import Layout from "../../components/Layout/Layout";
import Product from "../../features/product/Product";
import { getProduct } from "../../features/product/productSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";

const ProductPage: NextPage = () => {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useAppDispatch();
  const { status, product, error } = useAppSelector((store) => store.product);

  console.log("id", id);
  useEffect(() => {
    if (id) {
      dispatch(getProduct(id as string));
    }
  }, [id]);

  return (
    <Layout>
      <h1>Product</h1>
      {status === "loading" ? <div>Loading</div> : null}
      {error ? <div>{error}</div> : null}
      {status === "success" ? <Product product={product} /> : null}
    </Layout>
  );
};

export default ProductPage;
