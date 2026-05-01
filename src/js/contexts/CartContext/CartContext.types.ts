type CartItem = {
  id: number;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
};

type CartContextType = {
  addItem: (id: number) => void;
  cartChanged: Array<(cart: CartItem[]) => void>;
};

export type { CartState, CartItem, CartContextType };
