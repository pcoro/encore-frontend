<script lang="ts" setup>
const model = defineModel<number>({ required: true });
const interval = ref<NodeJS.Timeout>();

const decrement = () => model.value--;

const onMouseDown = () => {
  interval.value = setInterval(decrement, 100);
};

const onMouseUp = () => clearInterval(interval.value);

const onMouseLeave = () => clearInterval(interval.value);
</script>

<template>
  <button
    :class="`
      flex justify-center items-center
      bg-gray-200 hover:bg-gray-300 transition-colors
      w-8 h-8 cursor-pointer
    `"
    @click="decrement"
    @mousedown="onMouseDown"
    @mouseleave="onMouseLeave"
    @mouseup="onMouseUp"
  >
    <Icon name="material-symbols-light:remove-rounded" size="23px" />
  </button>
</template>
