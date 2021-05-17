export interface Product {
  id: string;
  title: string;
  price: string;
  image: string;
}

export const fetchProducts = async (
  category: string
): Promise<Product[] | string> => {
  try {
    const response = await fetch(
      `https://fakestoreapi.com/products/category/${category}`
    );
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return e.message;
  }
};
