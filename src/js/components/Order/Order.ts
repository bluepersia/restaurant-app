import type {
  CartContextType,
  CartItem,
} from "../../contexts/CartContext/CartContext.types";
import menuData from "../../data/menuData/menuData.js";
import type { Order } from "./Order.types";
import { cartToOrder, orderToHTML } from "./Order.utils.js";

export default function Order(
  root: HTMLElement,
  cartContext: CartContextType,
): void {
  const summaryEl: HTMLElement = root.querySelector("[data-summary]")!;

  cartContext.cartChanged.push(renderCart);

  summaryEl.addEventListener("click", handleSummaryClick);

  function renderCart(cart: CartItem[]): void {
    if (cart.length <= 0) {
      root.style.display = "none";
      return;
    }

    root.style.display = "block";

    const order: Order = cartToOrder(cart, menuData);
    const orderHTML: string = orderToHTML(order);
    summaryEl.innerHTML = orderHTML;
  }

  function handleSummaryClick(e: MouseEvent): void {
    const target: HTMLElement = e.target as HTMLElement;

    if (target.dataset.remove) {
      cartContext.removeItem(Number(target.dataset.remove));
    }
  }
}
