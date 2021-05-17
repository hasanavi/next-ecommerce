import type { FC } from "react";
import { useAppSelector } from "../../app/hooks";

const Cart: FC = () => {
  const { items } = useAppSelector((store) => store.cart);
  return <div>Cart item(s) - {items} </div>;
};

export default Cart;
