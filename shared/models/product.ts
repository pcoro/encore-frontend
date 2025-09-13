import type { Decimal } from "#shared/models/cart";

export type Product = {
  id: number;
  title: string;
  tag: string;
  category: Category;
  price: Decimal;
  images: ProductImage[];
  slug: string;
  colors: Color[];
  sizes: Size[];
  selected: ProductSelectedOptions;
};

export type Category = {
  id: number;
  name: string;
  slug: string;
};

export type Color = {
  id: number;
  name: string;
  imageUrl: string;
};

export type Size = {
  id: number;
  name: string;
};

export type ProductSelectedOptions = {
  color: Color | null;
  size: Size | null;
  quantity: number;
};

export type ProductImage = {
  id: number;
  url: string;
  mobileUrl: string;
  colorId: number | null;
};
