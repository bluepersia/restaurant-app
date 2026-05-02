import Checkout from "./components/Checkout/Checkout.js";
import type { CheckoutType } from "./components/Checkout/Checkout.types.js";
import Menu from "./components/Menu/Menu.js";
import Order from "./components/Order/Order.js";
import CartContext from "./contexts/CartContext/CartContext.js";
import type { CartContextType } from "./contexts/CartContext/CartContext.types.js";

const cartContext: CartContextType = CartContext();
Menu(document.getElementById("menu")!, cartContext);
const checkout: CheckoutType = Checkout(
  document.getElementById("checkout") as HTMLDialogElement,
);
Order(document.getElementById("order")!, checkout, cartContext);
