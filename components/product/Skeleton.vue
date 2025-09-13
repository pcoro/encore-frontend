<template>
  <div class="flex flex-col px-6 pb-6 min-w-76 max-w-full">
    <div class="relative">
      <div
        :class="`
          h-134 sm:h-90 md:h-112 lg:h-97 xl:h-126 2xl:h-112 relative mb-2
          bg-gray-200
        `"
      />
    </div>

    <div class="flex items-center justify-between mb-2 space-x-2">
      <div class="bg-gray-200 w-24 h-6"></div>
      <div class="bg-gray-200 w-16 h-6"></div>
    </div>

    <div class="max-w-36 mb-2 select-none">
      <div class="flex items-center space-x-1.5">
        <span class="flex justify-center items-center w-8 h-6 bg-gray-200" />
        <span class="flex justify-center items-center w-8 h-6 bg-gray-200" />
        <span class="flex justify-center items-center w-8 h-6 bg-gray-200" />
        <span class="flex justify-center items-center w-8 h-6 bg-gray-200" />
      </div>
    </div>

    <div class="grid grid-cols-2 items-center justify-between gap-2">
      <div class="max-w-27 mb-2 select-none">
        <div class="flex items-center space-x-1.5">
          <span class="flex justify-center items-center w-8 h-6 bg-gray-200" />
          <span class="flex justify-center items-center w-8 h-6 bg-gray-200" />
          <span class="flex justify-center items-center w-8 h-6 bg-gray-200" />
        </div>
      </div>

      <div class="flex justify-end w-full">
        <div class="bg-gray-200 w-27 h-8 mb-2"></div>
      </div>
    </div>

    <div class="bg-gray-200 w-full h-8 mb-2 mt-1"></div>
  </div>
</template>
