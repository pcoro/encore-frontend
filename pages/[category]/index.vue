<script lang="ts" setup>
import { formatCurrency } from "#shared/utils/formatCurrency";
import type { Catalog } from "#shared/models/catalog";
import type { Product } from "#shared/models/product";

const product: Product = {
  id: 1,
  title: "Nombre del Producto",
  tag: "Novedades",
  category: {
    id: 1,
    name: "Calzados de Hombre",
    slug: "calzados-de-hombre",
  },
  slug: "b",
  price: formatCurrency(9755.37),
  colors: [
    {
      id: 1,
      name: "Violeta Claro",
      imageUrl: "https://placehold.co/16x16/8e51ff/8e51ff",
    },
    {
      id: 2,
      name: "Violeta Vivo",
      imageUrl: "https://placehold.co/16x16/7f22fe/7f22fe",
    },
    {
      id: 3,
      name: "Violeta",
      imageUrl: "https://placehold.co/16x16/7008e7/7008e7",
    },
    {
      id: 4,
      name: "Violeta Fuerte",
      imageUrl: "https://placehold.co/16x16/5d0ec0/5d0ec0",
    },
    {
      id: 5,
      name: "Violeta Oscuro",
      imageUrl: "https://placehold.co/16x16/4d179a/4d179a",
    },
    {
      id: 6,
      name: "Violeta Muy Oscuro",
      imageUrl: "https://placehold.co/16x16/2f0d68/2f0d68",
    },
  ],
  sizes: [
    { id: 1, name: "XS" },
    { id: 2, name: "S" },
    { id: 3, name: "M" },
    { id: 4, name: "L" },
  ],
  images: [
    {
      id: 1,
      url: "https://placehold.co/300x400/8e51ff/8e51ff",
      mobileUrl: "https://placehold.co/300x400/8e51ff/8e51ff",
      colorId: 1,
    },
    {
      id: 2,
      url: "https://placehold.co/300x400/7f22fe/7f22fe",
      mobileUrl: "https://placehold.co/300x400/7f22fe/7f22fe",
      colorId: 2,
    },
    {
      id: 3,
      url: "https://placehold.co/300x400/7008e7/7008e7",
      mobileUrl: "https://placehold.co/300x400/7008e7/7008e7",
      colorId: 3,
    },
  ],
  selected: {
    color: null,
    size: null,
    quantity: 1,
  },
};

const catalog: Catalog = {
  products: [product, product, product, product],
  category: {
    id: 1,
    name: "Calzados de Hombre",
    slug: "calzados-de-hombre",
  },
  colors: product.colors,
  sizes: product.sizes,
  categories: [
    { id: 1, name: "Botines", quantity: 3 },
    { id: 2, name: "Running", quantity: 6 },
  ],
  sortBy: [
    { id: 1, name: "Precio (de menor a mayor)" },
    { id: 2, name: "Novedades" },
    { id: 3, name: "Los más vendidos" },
    { id: 4, name: "Precio (de mayor a menor) " },
  ],
  selected: {
    sortBy: null,
    categories: [],
    colors: [],
    sizes: [],
  },
};

const grid = ref<boolean | null>(null);

const onClick = () => {
  if (grid.value === null) {
    grid.value = true;
    return;
  }

  grid.value = !grid.value;
};

useHead({
  title: "Catálogo",
});
</script>

<template>
  <div class="flex mb-6 px-6">
    <div class="flex justify-between items-center w-full">
      <CatalogBreadcrumb />

      <div class="flex items-center justify-end">
        <div
          :class="`
          hidden xl:flex items-center justify-center bg-white py-1 px-2
          cursor-pointer font-medium text-black/90 hover:text-violet-600 text-sm
          transition-colors tracking-wide
        `"
          @click="onClick"
        >
          <Icon
            class="mr-0.5 -ml-1.5"
            name="material-symbols-light:arrow-top-left"
          />
          <span v-if="grid">Ocultar Filtros</span>
          <span v-if="!grid">Mostrar Filtros</span>
        </div>

        <div :class="`${grid ? 'flex xl:hidden' : 'flex'} ml-2`">
          <CatalogFiltersSidebar v-bind="catalog" />
        </div>
      </div>
    </div>
  </div>

  <div class="grid grid-cols-[1fr_auto] mb-6">
    <div
      :class="`
        flex flex-col space-y-2 w-76 sticky top-16 h-max
        max-h-[calc(100vh-80px)] overflow-y-auto
        ${grid === true ? 'hidden xl:flex animate-open-filters' : ''}
        ${grid === false ? 'flex animate-hide-filters' : ''}
        ${grid == null ? 'hidden' : ''}
      `"
    >
      <div class="flex justify-between items-center ml-6 mr-2">
        <h1 class="flex items-center text-base font-medium mx-1">
          <Icon
            class="mr-0.5 -ml-1.5"
            name="material-symbols-light:sort-rounded"
          />

          Filtros
        </h1>

        <button
          :class="`
          flex items-center justify-center bg-white py-1 px-2
          cursor-pointer text-black/90 text-sm
          tracking-wide whitespace-nowrap hover:text-violet-600
        `"
        >
          <Icon class="-ml-1" name="material-symbols-light:close-rounded" />
          Limpiar Filtros
        </button>
      </div>

      <CatalogFilters class="pl-6" v-bind="catalog" />
    </div>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
      <Product
        v-for="(product, index) in catalog.products"
        :key="index"
        v-bind="product"
      />
    </div>
  </div>
</template>
