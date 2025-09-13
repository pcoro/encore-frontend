<script lang="ts" setup>
import type { CatalogFilter } from "#shared/models/catalog";
import { nanoid } from "nanoid";

type Props = {
  title: string;
  multiple: boolean;
  items: CatalogFilter[];
};

const props = defineProps<Props>();

const model = defineModel<CatalogFilter[] | CatalogFilter | null>({
  required: true,
  default: null,
});

const id = nanoid();

const isItemActive = (id: number) => {
  if (model.value instanceof Array) {
    return model.value.findIndex((item) => item.id === id) !== -1;
  }

  return model.value?.id === id;
};
</script>

<template>
  <ClientOnly>
    <div class="space-y-2">
      <h1 class="flex items-center space-x-1">
        <Icon name="material-symbols-light:sort-by-alpha-outline-rounded" />
        <span class="text-sm font-medium">{{ props.title }}</span>
      </h1>

      <div class="space-y-1">
        <label
          v-for="(item, index) in items"
          :key="index"
          :for="`item-${id}-${item.id}`"
          class="flex items-center space-x-1 cursor-pointer w-max"
        >
          <span class="flex relative">
            <Icon name="material-symbols-light:square-outline-rounded" />
            <Icon
              :class="`
                absolute opacity-0 transition-opacity
                ${isItemActive(item.id) ? 'opacity-100' : ''}
              `"
              name="material-symbols-light:check-small"
            />
          </span>

          <input
            :id="`item-${id}-${item.id}`"
            v-model="model"
            :type="props.multiple ? 'checkbox' : 'radio'"
            :value="item"
            class="hidden"
          />
          <span class="flex items-baseline space-x-1">
            <span class="text-sm">{{ item.name }}</span>
            <span v-if="item.quantity" class="text-xs opacity-35"> ({{ item.quantity }}) </span>
          </span>
        </label>
      </div>
    </div>
  </ClientOnly>
</template>
