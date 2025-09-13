import type { CartItem } from "../models/cart";

export const calculateSubtotal = (items: CartItem[]) => {
  return items.reduce((prev, curr) => {
    return prev + curr.subtotal.value;
  }, 0);
};
