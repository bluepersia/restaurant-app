import menuData from "../../data/menuData/menuData.js";
import { menuToHTML } from "./Menu.utils.js";
export default function Menu(root, cartContext) {
    const listEl = root.querySelector("[data-list]");
    listEl.innerHTML = menuToHTML(menuData);
    listEl.addEventListener("click", handleClick);
    function handleClick(e) {
        const target = e.target;
        if (target.dataset.add) {
            cartContext.addItem(Number(target.dataset.add));
        }
    }
}
