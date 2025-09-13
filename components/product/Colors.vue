<script lang="ts" setup>
import type { Color } from "#shared/models/product";
import { nanoid } from "nanoid";

type Props = {
  colors: Color[];
  multiple: boolean;
  items: number;
};

const props = defineProps<Props>();

const model = defineModel<Color[] | Color | null>({
  required: true,
  default: null,
});

const id = nanoid();

const isColorActive = (id: number) => {
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
        :class="`product-color-slider-${id} flex items-center space-x-2.5`"
        :navigation="{
          nextEl: `#next-${id}`,
          prevEl: `#prev-${id}`,
          disabledClass: '!hidden',
        }"
        :slides-per-view="props.items"
        :space-between="4"
      >
        <swiper-slide
          v-for="(color, index) in props.colors"
          :key="index"
          class="flex justify-center"
        >
          <label :for="`color-${id}-${color.id}`" class="cursor-pointer">
            <span
              :aria-label="color.name"
              :style="{ backgroundImage: `url(${color.imageUrl})` }"
              class="flex w-8 h-6 justify-center items-center"
            >
              <Icon
                :class="`
                  text-white transition-opacity
                  ${isColorActive(color.id) ? 'opacity-100' : 'opacity-0'}
                `"
                name="material-symbols-light:check"
              />
            </span>
            <input
              :id="`color-${id}-${color.id}`"
              v-model="model"
              :type="props.multiple ? 'checkbox' : 'radio'"
              :value="color"
              class="hidden"
            />
          </label>
        </swiper-slide>
      </swiper-container>
    </div>
  </ClientOnly>
</template>
