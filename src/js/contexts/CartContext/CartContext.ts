import type { CartContextType, CartItem, CartState } from "./CartContext.types";
import { addToCart } from "./CartContext.utils.js";

export default function CartContext(): CartContextType {
  let state: CartState = {
    cart: [],
  };
  const cartChanged: Array<(cart: CartItem[]) => void> = [];

  function addItem(id: number): void {
    state = addToCart(state, id);

    console.log(state.cart);
    cartChanged.forEach((el) => el(state.cart));
  }

  return {
    addItem,
    cartChanged,
  };
}
