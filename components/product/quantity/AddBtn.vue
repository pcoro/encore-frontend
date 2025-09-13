<script lang="ts" setup>
const model = defineModel<number>({ required: true });
const interval = ref<NodeJS.Timeout>();

const increment = () => model.value++;

const onMouseDown = () => {
  interval.value = setInterval(increment, 100);
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
    @click="increment"
    @mousedown="onMouseDown"
    @mouseleave="onMouseLeave"
    @mouseup="onMouseUp"
  >
    <Icon name="material-symbols-light:add-rounded" size="23px" />
  </button>
</template>
