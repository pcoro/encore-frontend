<script lang="ts" setup>
import { nanoid } from "nanoid";

const id = nanoid();
</script>

<template>
  <ClientOnly>
    <div class="flex flex-col space-y-2">
      <h1 class="flex items-center space-x-1">
        <Icon name="material-symbols-light:attach-money-rounded" />
        <span class="text-sm font-medium">Precio</span>
      </h1>

      <div class="flex items-center space-x-2">
        <label
          :class="`
          flex flex-grow-1 max-w-36 md:max-w-full items-center
          bg-gray-100 p-1
        `"
          :for="`min-price-${id}`"
        >
          <Icon
            class="text-gray-600"
            name="material-symbols-light:attach-money-rounded"
          />
          <input
            :id="`min-price-${id}`"
            class="outline-none ml-2 w-full text-[13px]"
            inputmode="numeric"
            placeholder="Mínimo"
            type="number"
          />
        </label>

        <Icon name="material-symbols-light:remove-rounded" size="23px" />

        <label
          :class="`
          flex flex-grow-1 max-w-36 md:max-w-full items-center
          bg-gray-100 p-1
        `"
          :for="`max-price-${id}`"
        >
          <Icon
            class="text-gray-600"
            name="material-symbols-light:attach-money-rounded"
          />
          <input
            :id="`max-price-${id}`"
            class="outline-none ml-2 w-full text-[13px]"
            inputmode="numeric"
            placeholder="Máximo"
            type="number"
          />
        </label>
      </div>
    </div>
  </ClientOnly>
</template>
