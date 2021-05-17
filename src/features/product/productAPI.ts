export interface Product {
  id: string;
  title: string;
  price: string;
  description: string;
  category: string;
  image: string;
}

export const fetchProduct = async (id: string): Promise<Product | string> => {
  try {
    const response = await fetch(`https://fakestoreapi.com/products/${id}`);
    const result = await response.json();
    return result;
  } catch (e) {
    console.error(e);
    return e.message;
  }
};
