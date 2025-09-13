<script lang="ts" setup>
import type { Color, ProductImage } from "#shared/models/product";
import { Swiper } from "swiper/types";

type Props = {
  id: number;
  title: string;
  category: string;
  slug: string;
  images: ProductImage[];
};

const props = defineProps<Props>();

const model = defineModel<Color | null>({
  required: true,
  default: null,
});

const swiper = ref<Swiper | null>(null);

const afterInit = (event: any) => {
  swiper.value = event.detail[0];
};

watch(model, () => {
  if (!model.value || !swiper.value) return;

  const index = props.images.findIndex(
    (image) => image.colorId === model.value?.id,
  );

  if (index === -1) swiper.value.slideTo(0);

  swiper.value.slideTo(index);
});
</script>

<template>
  <ClientOnly>
    <div class="relative mb-2 select-none">
      <Icon
        :id="`prev-${props.id}`"
        :class="`
          flex items-center justify-center text-black absolute
          top-[calc(50%-12px)] -left-6 z-30 cursor-pointer
        `"
        name="material-symbols-light:chevron-left-rounded"
      />
      <Icon
        :id="`next-${props.id}`"
        :class="`
          flex items-center justify-center text-black absolute
          top-[calc(50%-12px)] -right-6 z-20 cursor-pointer
        `"
        name="material-symbols-light:chevron-right-rounded"
      />
      <swiper-container
        :class="`product-image-slider-${props.id}`"
        :loop="true"
        :navigation="{
          nextEl: `#next-${props.id}`,
          prevEl: `#prev-${props.id}`,
        }"
        :slides-per-view="1"
        :space-between="16"
        @swiperafterinit="afterInit"
      >
        <swiper-slide v-for="(image, index) in props.images" :key="index">
          <NuxtLink
            :to="{
              name: 'category-product',
              params: { category: props.category, product: props.slug },
            }"
          >
            <NuxtPicture
              :imgAttrs="{
                class: `
                  w-full h-auto object-cover transition-shadow duration-300
                  hover:shadow-lg
                `,
              }"
              :src="image.url"
              format="avif,webp"
            />
          </NuxtLink>
        </swiper-slide>
      </swiper-container>
    </div>
  </ClientOnly>
</template>
