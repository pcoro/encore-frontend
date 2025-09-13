import { defaultAmount } from "../constants/defaultAmount";
import { defaultPercent } from "../constants/defaultPercent";
import type {
  CartColor,
  CartDiscount,
  CartItem,
  CartProduct,
  CartSize,
  Decimal,
} from "../models/cart";
import { calculateSubtotal } from "../utils/calculateSubtotal";
import { formatCurrency } from "../utils/formatCurrency";
import { nanoid } from "nanoid";
import { formatPercent } from "../utils/formatPercent";
import { useLocalStorage } from "@vueuse/core";

export const useCartStore = defineStore("cart", () => {
  const items = useLocalStorage<CartItem[]>("pinia/cart/items", []);

  const subtotal = computed(() =>
    formatCurrency(calculateSubtotal(items.value)),
  );

  const shippingCost = ref<Decimal>(defaultAmount);
  const paymentSurcharge = ref<Decimal>(defaultAmount);

  const discount = ref<CartDiscount>({
    amount: defaultAmount,
    percent: defaultPercent,
  });

  const total = computed(() => {
    const total =
      subtotal.value.value +
      shippingCost.value.value +
      paymentSurcharge.value.value -
      discount.value.amount.value;

    return formatCurrency(total);
  });

  function addToCart(
    product: CartProduct,
    color: CartColor,
    size: CartSize,
    quantity: number,
  ) {
    if (quantity <= 0 || quantity > 999) return;

    const item = items.value.find(
      (i) =>
        i.product.id === product.id &&
        i.color.id === color.id &&
        i.size.id === size.id,
    );

    if (item) {
      const quantityToUpdate = Math.min(item.quantity + quantity, 999);

      item.quantity = quantityToUpdate;
      item.subtotal = formatCurrency(
        item.product.price.value * quantityToUpdate,
      );

      return;
    }

    const quantityToAdd = Math.min(quantity, 999);
    const itemToAdd: CartItem = {
      id: nanoid(),
      product,
      color,
      size,
      quantity: quantityToAdd,
      subtotal: formatCurrency(product.price.value * quantityToAdd),
    };

    items.value.push(itemToAdd);
  }

  function updateItem(
    id: string,
    quantity?: number,
    color?: CartColor,
    size?: CartSize,
  ) {
    if (quantity && (quantity <= 0 || quantity > 999)) return;

    const item = items.value.find((i) => i.id === id);

    if (!item) return;
    const quantityToUpdate = quantity ? Math.min(quantity, 999) : item.quantity;

    item.color = color ?? item.color;
    item.size = size ?? item.size;
    item.quantity = quantityToUpdate;
    item.subtotal = quantity
      ? formatCurrency(item.product.price.value * quantityToUpdate)
      : item.subtotal;
  }

  function deleteItem(id: string) {
    items.value = items.value.filter((i) => i.id !== id);
  }

  function clearCart() {
    items.value = [];
  }

  function setShippingCost(cost: number) {
    shippingCost.value = formatCurrency(cost);
  }

  function setPaymentSurcharge(surcharge: number) {
    paymentSurcharge.value = formatCurrency(surcharge);
  }

  function setDiscount(amount: number) {
    discount.value = {
      amount: formatCurrency(amount),
      percent: formatPercent(total.value.value, amount),
    };
  }

  return {
    items,
    subtotal,
    shippingCost,
    paymentSurcharge,
    discount,
    total,
    addToCart,
    updateItem,
    deleteItem,
    clearCart,
    setShippingCost,
    setPaymentSurcharge,
    setDiscount,
  };
});
