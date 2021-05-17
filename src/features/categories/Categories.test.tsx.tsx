import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";

const categoryData: string[] = [
  "electronics",
  "jewelery",
  "men clothing",
  "women clothing",
];

jest.mock("./productAPI", () => ({
  fetchCategories: () =>
    new Promise<string[]>((resolve) =>
      setTimeout(() => resolve(categoryData), 500)
    ),
}));

import { makeStore } from "../../app/store";
import Categories from "./Categories";

describe("<Categories />", () => {
  it("renders the component", () => {
    const store = makeStore();

    render(
      <Provider store={store}>
        <Categories list={categoryData} />
      </Provider>
    );

    expect(screen.getByText("electronics")).toBeInTheDocument();
    expect(screen.getByText("jewelery")).toBeInTheDocument();
    expect(screen.getByText("men clothing")).toBeInTheDocument();
    expect(screen.getByText("women clothing")).toBeInTheDocument();
  });
});
