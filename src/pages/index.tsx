import type { NextPage } from "next";
import Layout from "../components/Layout/Layout";

import Categories from "../features/categories/Categories";
import { useAppSelector, useAppDispatch } from "../app/hooks";
import { getCategories } from "../features/categories/categoriesSlice";
import { useEffect } from "react";

////      NOTE      //////
// Next-Redux-wrapper doesn't support upto 9.3
// So won't be possible to use getStaticProps or getServerSideProp yet
// For this example I've used Good ol useEffect
///////

const IndexPage: NextPage = () => {
  const dispatch = useAppDispatch();
  const { status, list, error } = useAppSelector((store) => store.categories);

  useEffect(() => {
    if (list.length <= 0) {
      dispatch(getCategories());
    }
  }, []);

  return (
    <Layout isHome>
      <h1>Categories</h1>
      {status === "loading" ? <div>Loading</div> : null}
      {error ? <div>{error}</div> : null}
      {list.length > 0 ? <Categories list={list} /> : null}
    </Layout>
  );
};

////      NOTE      //////
// Next-Redux-wrapper doesn't support upto 9.3
// So won't be possible to use getStaticProps or getServerSideProp yet
// For this example I've used Good ol useEffect
///////

export default IndexPage;
