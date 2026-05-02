type CartItem = {
  id: number;
  quantity: number;
};

type CartState = {
  cart: CartItem[];
  isFrozen: boolean;
};

type CartContextType = {
  addItem: (id: number) => void;
  removeItem: (id: number) => void;
  cartChanged: Array<(cart: CartItem[]) => void>;
  freeze: () => void;
  getCart: () => CartItem[];
  empty: () => void;
};

export type { CartState, CartItem, CartContextType };
