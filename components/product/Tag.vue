<script lang="ts" setup>
defineProps<{ tag: string }>();
</script>

<template>
  <ClientOnly>
    <div
      :class="`
        absolute top-4 z-30 px-2 py-0.5 bg-white text-sm font-medium shadow-md
      `"
    >
      {{ tag }}
    </div>
  </ClientOnly>
</template>
