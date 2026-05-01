import type { CartContextType } from "../../contexts/CartContext/CartContext.types.js";
import menuData from "../../data/menuData/menuData.js";
import { menuToHTML } from "./Menu.utils.js";

export default function Menu(
  root: HTMLElement,
  cartContext: CartContextType,
): void {
  const listEl: HTMLElement = root.querySelector("[data-list]")!;

  listEl.innerHTML = menuToHTML(menuData);

  listEl.addEventListener("click", handleClick);

  function handleClick(e: MouseEvent): void {
    const target = e.target as HTMLElement;

    if (target.dataset.add) {
      cartContext.addItem(Number(target.dataset.add));
    }
  }
}
