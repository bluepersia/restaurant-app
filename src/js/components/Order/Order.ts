import type {
  CartContextType,
  CartItem,
} from "../../contexts/CartContext/CartContext.types";
import menuData from "../../data/menuData/menuData.js";
import type { CheckoutType } from "../Checkout/Checkout.types";
import type { Order } from "./Order.types";
import {
  cartToOrder,
  createSubmissionHTML,
  orderToHTML,
} from "./Order.utils.js";

export default function Order(
  root: HTMLElement,
  checkout: CheckoutType,
  cartContext: CartContextType,
): void {
  const innerEl: HTMLElement = root.querySelector("[data-inner]")!;
  const summaryEl: HTMLElement = root.querySelector("[data-summary]")!;
  const completeBtn: HTMLElement = root.querySelector("[data-complete]")!;

  cartContext.cartChanged.push(renderCart);
  checkout.closed.push(handleCheckoutClosed);
  checkout.submitted.push(handleCheckoutSubmitted);

  summaryEl.addEventListener("click", handleSummaryClick);
  completeBtn.addEventListener("click", handleCompleteClick);

  renderCart(cartContext.getCart());

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

  function handleCompleteClick(e: MouseEvent): void {
    e.stopPropagation();
    completeBtn.ariaExpanded = "true";
    checkout.open();
  }

  function handleCheckoutClosed(): void {
    completeBtn.ariaExpanded = "false";
  }

  function handleCheckoutSubmitted(name: string): void {
    cartContext.empty();
    cartContext.freeze();
    innerEl.innerHTML = createSubmissionHTML(name);
  }
}
