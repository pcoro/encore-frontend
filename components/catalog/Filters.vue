<script lang="ts" setup>
import type { CatalogFilters } from "#shared/models/catalog";

const props = defineProps<CatalogFilters>();

const selected = toRef(props.selected);
</script>

<template>
  <div class="flex flex-col space-y-4 p-2">
    <CatalogFiltersList
      v-model="selected.sortBy"
      :items="props.sortBy"
      :multiple="false"
      title="Ordenar Por"
    />

    <div class="space-y-2">
      <h1 class="flex items-center space-x-1">
        <Icon name="material-symbols-light:format-paint-outline-rounded" />
        <span class="text-sm font-medium">Colores</span>
      </h1>

      <div class="w-54 pl-1">
        <ProductColors
          v-model="selected.colors"
          :colors="props.colors"
          :items="6"
          :multiple="true"
        />
      </div>
    </div>

    <div class="space-y-2">
      <h1 class="flex items-center space-x-1">
        <Icon name="material-symbols-light:format-size-rounded" />
        <span class="text-sm font-medium">Talles</span>
      </h1>

      <div class="w-54 pl-1">
        <ProductSizes
          v-model="selected.sizes"
          :items="6"
          :multiple="true"
          :sizes="sizes"
        />
      </div>
    </div>

    <CatalogFiltersList
      v-model="selected.categories"
      :items="categories"
      :multiple="true"
      title="Categorías"
    />

    <CatalogFiltersPrice />
  </div>
</template>
