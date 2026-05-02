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

function removeFromCart(state: CartState, id: number): CartState {
  const itemInCart: CartItem | undefined = state.cart.find(
    (item) => item.id === id,
  );

  if (!itemInCart) {
    return state;
  }

  const newItemInCart: CartItem = {
    ...itemInCart,
    quantity: itemInCart.quantity - 1,
  };

  if (newItemInCart.quantity <= 0) {
    return {
      ...state,
      cart: state.cart.filter((cartItem) => cartItem.id !== id),
    };
  }

  const newCart: CartItem[] = [...state.cart];

  newCart[state.cart.indexOf(itemInCart)] = newItemInCart;

  return {
    ...state,
    cart: newCart,
  };
}

export { addToCart, removeFromCart };
