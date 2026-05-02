import type { CartContextType, CartItem, CartState } from "./CartContext.types";
import { addToCart, removeFromCart } from "./CartContext.utils.js";

export default function CartContext(): CartContextType {
  let state: CartState = {
    cart: [],
  };
  const cartChanged: Array<(cart: CartItem[]) => void> = [];

  function addItem(id: number): void {
    state = addToCart(state, id);

    cartChanged.forEach((el) => el(state.cart));
  }

  function removeItem(id: number): void {
    state = removeFromCart(state, id);

    cartChanged.forEach((el) => el(state.cart));
  }

  return {
    addItem,
    removeItem,
    cartChanged,
  };
}
