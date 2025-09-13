import type { useCartStore } from "#shared/stores/useCartStore";

export type CartStore = ReturnType<typeof useCartStore>;

export type CartDiscount = {
  amount: Decimal;
  percent: Decimal;
};

export type CartItem = {
  id: string;
  product: CartProduct;
  color: CartColor;
  size: CartSize;
  quantity: number;
  subtotal: Decimal;
};

export type CartProduct = {
  id: number;
  title: string;
  imageUrl: string;
  price: Decimal;
};

export type Decimal = {
  value: number;
  formatted: string;
};

export type CartColor = {
  id: number;
  name: string;
  imageUrl: string;
};

export type CartSize = {
  id: number;
  name: string;
};
