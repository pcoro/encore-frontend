import type { Decimal } from "../models/cart";

export const formatPercent = (total: number, discount: number): Decimal => {
  const percent = (discount / total) * 100;

  return {
    formatted: `% ${percent.toLocaleString("es-AR", {
      minimumFractionDigits: 2,
      maximumFractionDigits: 2,
    })}`,
    value: percent,
  };
};
