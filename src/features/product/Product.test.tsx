import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Provider } from "react-redux";
import type { Product as ProductType } from "./productAPI";

const productData = {
  id: "1",
  title: "Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops",
  price: "109.95",
  description:
    "Your perfect pack for everyday use and walks in the forest. Stash your laptop (up to 15 inches) in the padded sleeve, your everyday",
  category: "men's clothing",
  image: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
};

jest.mock("./productAPI", () => ({
  fetchCount: (id: string) =>
    new Promise<ProductType>((resolve) =>
      setTimeout(() => resolve(productData), 500)
    ),
}));

import { makeStore } from "../../app/store";
import Product from "./Product";

describe("<Product />", () => {
  it("renders the component", () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Product product={productData} />
      </Provider>
    );

    expect(
      screen.getByText("Fjallraven - Foldsack No. 1 Backpack, Fits 15 Laptops")
    ).toBeInTheDocument();
  });

  it("dispatch Add to cart event", () => {
    const store = makeStore();
    store.dispatch = jest.fn();

    render(
      <Provider store={store}>
        <Product product={productData} />
      </Provider>
    );

    user.click(screen.getByTestId("add-to-cart-btn"));

    expect(store.dispatch).toHaveBeenCalledWith({
      payload: undefined,
      type: "cart/addToCart",
    });
  });
});
