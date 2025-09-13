import type { Category, Color, Product, Size } from "#shared/models/product";

export type Catalog = {
  products: Product[];
  colors: Color[];
  sizes: Size[];
  category: Category;
} & CatalogFilters;

export type CatalogFilters = {
  categories: CatalogFilter[];
  colors: Color[];
  sizes: Size[];
  sortBy: CatalogFilter[];
  selected: CatalogSelectedFilters;
};

export type CatalogFilter = {
  id: number;
  name: string;
  quantity?: number | null;
};

export type CatalogSelectedFilters = {
  categories: CatalogFilter[];
  colors: Color[];
  sizes: Size[];
  sortBy: CatalogFilter | null;
};
