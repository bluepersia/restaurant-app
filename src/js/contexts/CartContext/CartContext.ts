import type { CartContextType, CartItem, CartState } from "./CartContext.types";
import { addToCart, removeFromCart } from "./CartContext.utils.js";

export default function CartContext(): CartContextType {
  let state: CartState = {
    cart: JSON.parse(localStorage.getItem("cart") || "[]") as CartItem[],
    isFrozen: false,
  };
  const cartChanged: Array<(cart: CartItem[]) => void> = [];

  function addItem(id: number): void {
    const newState: CartState = addToCart(state, id);

    if (newState === state) return;

    state = newState;

    cartChanged.forEach((el) => el(state.cart));

    save();
  }

  function removeItem(id: number): void {
    const newState: CartState = removeFromCart(state, id);

    if (newState === state) return;

    state = newState;

    cartChanged.forEach((el) => el(state.cart));

    save();
  }

  function freeze(): void {
    state.isFrozen = true;
  }

  function save(): void {
    localStorage.setItem("cart", JSON.stringify(state.cart));
  }

  function getCart(): CartItem[] {
    return state.cart;
  }

  function empty(): void {
    state.cart = [];

    save();
  }

  return {
    addItem,
    removeItem,
    cartChanged,
    freeze,
    getCart,
    empty,
  };
}
