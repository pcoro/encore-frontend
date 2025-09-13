<script lang="ts" setup>
import { Sidebar } from "#components";
import type { CatalogFilters } from "#shared/models/catalog";

const props = defineProps<CatalogFilters>();
</script>

<template>
  <Sidebar title="Filtros">
    <template #button>
      <ClientOnly>
        <button
          :class="`
            flex justify-center items-center bg-gray-200 cursor-pointer py-1 px-2
            hover:bg-gray-300 transition-colors text-black/90
            text-sm tracking-wide min-w-32
          `"
        >
          <Icon
            class="mr-0.5 -ml-1.5"
            name="material-symbols-light:filter-alt-outline"
          />
          <b class="font-medium text-uppercase">Abrir Filtros</b>
        </button>

        <template #fallback>
          <div class="bg-gray-200 w-32 h-8"></div>
        </template>
      </ClientOnly>
    </template>

    <template #content>
      <div class="flex flex-col min-h-[calc(100%-44px)]">
        <CatalogFilters class="grow" v-bind="props" />

        <div class="flex justify-between space-x-1 p-2">
          <button
            :class="`
              flex items-center justify-center bg-white py-1 px-2
              cursor-pointer w-1/2 font-medium text-black/90 text-sm
              hover:bg-gray-200 transition-colors tracking-wide whitespace-nowrap
            `"
          >
            <Icon
              class="mr-1 -ml-1"
              name="material-symbols-light:filter-alt-off-outline-rounded"
            />
            Limpiar filtros
          </button>

          <button
            :class="`
              flex items-center justify-center bg-gray-200 py-1 px-2
              cursor-pointer w-1/2 font-medium text-black/90 text-sm
              hover:bg-gray-300 transition-colors tracking-wide whitespace-nowrap
            `"
          >
            <Icon
              class="mr-1 -ml-1"
              name="material-symbols-light:filter-arrow-right-rounded"
            />
            Aplicar filtros
          </button>
        </div>
      </div>
    </template>
  </Sidebar>
</template>
