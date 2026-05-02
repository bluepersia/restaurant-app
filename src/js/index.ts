import Menu from "./components/Menu/Menu.js";
import Order from "./components/Order/Order.js";
import CartContext from "./contexts/CartContext/CartContext.js";
import type { CartContextType } from "./contexts/CartContext/CartContext.types.js";

const cartContext: CartContextType = CartContext();
Menu(document.getElementById("menu")!, cartContext);
Order(document.getElementById("order")!, cartContext);
