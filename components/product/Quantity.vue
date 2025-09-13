<script lang="ts" setup>
const quantity = defineModel<number>({
  required: true,
  default: 1,
});

watch(quantity, () => {
  if (quantity.value <= 0 || quantity.value > 999) {
    quantity.value = 1;
  }
});
</script>

<template>
  <ClientOnly>
    <div class="flex mb-2">
      <ProductQuantityRemoveBtn v-model="quantity" />

      <input
        v-model="quantity"
        class="px-2 w-11 outline-none text-center text-sm"
        inputmode="numeric"
        max="999"
        min="1"
        type="number"
      />

      <ProductQuantityAddBtn v-model="quantity" />
    </div>
  </ClientOnly>
</template>
