<script setup lang="ts">
const config = useRuntimeConfig();
</script>

<template>
  <div class="w-full">
    <div class="container py-10 mx-auto">
      <div class="w-full mb-10">
        <div
          class="w-full mb-8 text-4xl text-center text-white font-proxima-nova"
        >
          Find Video Games info here
        </div>

        <div class="flex items-center justify-center w-full">
          <input
            type="text"
            name=""
            class="px-10 py-4 mr-4 bg-white border-0 rounded-full w-50vw"
            placeholder="Search video games"
          />
          <button
            class="flex items-center justify-center w-12 h-12 text-white bg-blue-500 rounded-full"
          >
            <Icon name="material-symbols:search" size="2rem" />
          </button>
        </div>
      </div>

      <div class="w-full">
        <div class="w-full text-white text-2xl mb-4">Games</div>

        <div class="grid w-full grid-cols-8 gap-2">
          <div class="w-full bg-white rounded py-10">Test</div>
          <div class="w-full bg-white rounded py-10">Test</div>
          <div class="w-full bg-white rounded py-10">Test</div>
          <div class="w-full bg-white rounded py-10">Test</div>
          <div class="w-full bg-white rounded py-10">Test</div>
          <div class="w-full bg-white rounded py-10">Test</div>
          <div class="w-full bg-white rounded py-10">Test</div>
          <div class="w-full bg-white rounded py-10">Test</div>
        </div>
      </div>
    </div>
  </div>
</template>
