import type { CartItem, CartState } from "./CartContext.types";

function addToCart(state: CartState, id: number): CartState {
  const newCart: CartItem[] = [...state.cart];
  const itemInCart: CartItem | undefined = state.cart.find(
    (item) => item.id === id,
  );

  if (itemInCart) {
    newCart[state.cart.indexOf(itemInCart)] = {
      id,
      quantity: itemInCart.quantity + 1,
    };
    return { ...state, cart: newCart };
  }

  newCart.push({
    id,
    quantity: 1,
  });

  return { ...state, cart: newCart };
}

export { addToCart };
