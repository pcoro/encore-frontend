<script lang="ts" setup>
import type { Size } from "#shared/models/product";
import { nanoid } from "nanoid";

type Props = {
  sizes: Size[];
  multiple: boolean;
  items: number;
};

const props = defineProps<Props>();

const model = defineModel<Size[] | Size | null>({
  required: true,
  default: null,
});

const id = nanoid();

const isSizeActive = (id: number) => {
  if (model.value instanceof Array) {
    return model.value.findIndex((item) => item.id === id) !== -1;
  }

  return model.value?.id === id;
};
</script>

<template>
  <ClientOnly>
    <div class="mb-2 select-none relative">
      <Icon
        :id="`next-${id}`"
        :class="`
          flex items-center justify-center text-black absolute
          top-[calc(50%-12px)] -right-6 z-20 cursor-pointer
        `"
        name="material-symbols-light:chevron-right-rounded"
      />
      <swiper-container
        :class="`product-size-slider-${id} flex items-center space-x-2.5`"
        :navigation="{
          nextEl: `#next-${id}`,
          prevEl: `#prev-${id}`,
          disabledClass: '!hidden',
        }"
        :slides-per-view="props.items"
        :space-between="4"
      >
        <swiper-slide
          v-for="(size, index) in props.sizes"
          :key="index"
          class="flex justify-center"
        >
          <label
            :class="`
              flex justify-center items-center w-8 h-6 cursor-pointer transition-all
              font-semibold hover:bg-gray-300 text-xs
              ${isSizeActive(size.id) ? 'bg-gray-300 drop-shadow' : 'bg-gray-200'}
            `"
            :for="`size-${id}-${size.id}`"
          >
            {{ size.name }}
            <input
              :id="`size-${id}-${size.id}`"
              v-model="model"
              :type="props.multiple ? 'checkbox' : 'radio'"
              :value="size"
              class="hidden"
            />
          </label>
        </swiper-slide>
      </swiper-container>
    </div>
  </ClientOnly>
</template>
