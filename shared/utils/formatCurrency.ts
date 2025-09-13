import type { Decimal } from "../models/cart";

export const formatCurrency = (value: number): Decimal => {
  return {
    formatted: `$ ${value.toLocaleString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`,
    value: +value.toFixed(2),
  };
};
