type OrderItem = {
  id: number;
  name: string;
  quantity: number;
  getSubtotal: () => number;
};

type Order = {
  items: OrderItem[];
};

export type { OrderItem, Order };
