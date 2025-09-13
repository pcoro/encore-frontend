<script lang="ts" setup>
import { useCartStore } from "#shared/stores/useCartStore";
import { register } from "swiper/element/bundle";
import type { CartStore } from "#shared/models/cart";

const cart = useCartStore();
provide<CartStore>("cart", cart);

watch(cart.items, () => {
  console.log(cart.items);
});

register();
</script>

<template>
  <div class="sticky top-0 z-40 bg-white shadow-xs">
    <div class="container mx-auto px-6 py-2">
      <div class="flex items-center justify-between space-x-2 h-10">
        <div>
          <Icon name="material-symbols-light:menu-rounded" />
        </div>

        <div
          class="flex items-center justify-between space-x-2 [&>*]:cursor-pointer"
        >
          <Icon name="material-symbols-light:search-rounded" />
          <Icon name="material-symbols-light:account-circle-outline" />
          <Icon name="material-symbols-light:shopping-cart-outline-rounded" />
          <Icon name="material-symbols-light:favorite-outline-rounded" />
        </div>
      </div>
    </div>
  </div>

  <!--
  <div
    :class="`
      fixed z-50 flex justify-center items-center backdrop-blur-sm
      w-full h-[calc(100%-56px)]
    `"
  />
  -->

  <div class="bg-white pt-6">
    <div class="container mx-auto min-h-screen overflow-clip">
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </div>
  </div>
</template>
