<script lang="ts" setup>
const props = defineProps<{ title: string }>();

const opened = ref(false);

const close = () => {
  if (opened.value) {
    opened.value = false;
  }
};

const open = () => (opened.value = true);

useHead({
  htmlAttrs: {
    class: { "overflow-y-hidden": () => opened.value },
  },
});
</script>

<template>
  <div @click="open">
    <slot name="button" />
  </div>
  <div
    :class="`
      fixed top-0 left-0 right-0 bottom-0 z-40 bg-black/25 opacity-0
      cursor-pointer transition-opacity invisible
      ${opened && 'visible opacity-100'}
    `"
    @click="close"
  ></div>

  <aside
    :class="`
      fixed bg-white top-0 right-0 bottom-0 z-50 w-90
      translate-x-90 transition-transform
      overflow-y-scroll
      ${opened && '!translate-x-0'}
    `"
  >
    <div class="flex items-center justify-between p-2 w-full font-medium">
      <h1 class="text-lg">{{ props.title }}</h1>
      <Icon
        class="cursor-pointer"
        name="material-symbols-light:close"
        size="20px"
        @click="close"
      />
    </div>

    <slot name="content" />
  </aside>
</template>
