export const fetchCategories = async (): Promise<string[] | string> => {
  try {
    const response = await fetch(
      "https://fakestoreapi.com/products/categories"
    );
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return e.message;
  }
};
