<script lang="ts" setup>
import type { Product } from "#shared/models/product";
import type { CartProduct, CartStore } from "#shared/models/cart";

const props = defineProps<Product>();
const selected = toRef(props.selected);

const cart = inject<CartStore>("cart");

const onClick = () => {
  if (!selected.value.color || !selected.value.size) return;

  const image =
    props.images.find((image) => image.colorId === selected.value.color?.id) ??
    props.images[0];

  const product: CartProduct = {
    id: props.id,
    title: props.title,
    price: props.price,
    imageUrl: image.url,
  };

  const color = { ...selected.value.color };
  const size = { ...selected.value.size };

  cart?.addToCart(product, color, size, selected.value.quantity);
};
</script>

<template>
  <ClientOnly>
    <div class="flex flex-col px-6 pb-6 min-w-76 max-w-full">
      <div class="relative">
        <ProductTag tag="Novedades" />

        <ProductImageSlider
          :id="props.id"
          v-model="selected.color"
          :category="props.category.slug"
          :images="props.images"
          :slug="props.slug"
          :title="props.title"
        />
      </div>

      <div class="flex items-center justify-between mb-2 space-x-2">
        <h1 class="font-semibold text-base">{{ props.title }}</h1>
        <strong class="text-sm font-medium">
          {{ props.price.formatted }}
        </strong>
      </div>

      <div class="max-w-36">
        <ProductColors
          v-model="selected.color"
          :colors="props.colors"
          :items="4"
          :multiple="false"
        />
      </div>

      <div class="grid grid-cols-2 items-center justify-between gap-2">
        <div class="max-w-27">
          <ProductSizes
            v-model="selected.size"
            :items="3"
            :multiple="false"
            :sizes="props.sizes"
          />
        </div>

        <div class="flex justify-end w-full">
          <ProductQuantity v-model="selected.quantity" />
        </div>
      </div>

      <button
        :class="`
          flex items-center justify-center bg-gray-200 py-1 px-2
          cursor-pointer w-full font-semibold text-black/90 text-sm
          tracking-wide hover:bg-gray-300 transition-colors mt-1 h-8
        `"
        @click="onClick"
      >
        <Icon
          class="mr-1 -ml-1"
          name="material-symbols-light:add-shopping-cart-rounded"
        />
        <span>Agregar al Carrito</span>
      </button>
    </div>

    <template #fallback>
      <ProductSkeleton />
    </template>
  </ClientOnly>
</template>
