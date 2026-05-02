import type { CartItem } from "../../contexts/CartContext/CartContext.types";
import type { MenuData } from "../../data/menuData/menuData.types";
import type { Order, OrderItem } from "./Order.types";

function cartToOrder(cart: CartItem[], menuData: MenuData[]): Order {
  const orderItems: OrderItem[] = cart.map((cartItem) => {
    const menuItem: MenuData = menuData.find(
      (item) => item.id === cartItem.id,
    )!;
    return {
      ...cartItem,
      name: menuItem.name,
      getSubtotal: function () {
        return menuItem.price * cartItem.quantity;
      },
    };
  });

  return {
    items: orderItems,
  };
}

function orderToHTML(order: Order): string {
  const total: number = order.items.reduce(
    (prev, curr) => prev + curr.getSubtotal(),
    0,
  );

  return `
    <ul class="order__items reset-list" >
              ${order.items
                .map(
                  ({ id, name, quantity, getSubtotal }) => `
                <li class="order__line">
                <h3 class="order__line-title">${name}${quantity >= 1 ? ` (${quantity})` : ""}</h3>
                <button class="order__line-remove-button" data-remove="${id}">remove</button>
                <p class="order__line-price">$${getSubtotal()}</p>
              </li>
              `,
                )
                .join("")}
            </ul>
            <div class="order__line order__total" aria-live="polite">
              <h3 class="order__line-title">Total price:</h3>
              <p class="order__line-price">$${total}</p>
            </div>
            `;
}

export { cartToOrder, orderToHTML };
