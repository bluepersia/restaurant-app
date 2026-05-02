type CheckoutType = {
  open: () => void;
  closed: Array<() => void>;
  submitted: Array<(name: string) => void>;
};

export { CheckoutType };
