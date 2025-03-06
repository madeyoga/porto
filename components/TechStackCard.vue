<template>
  <div class="hover:bg-slate-800 transition-all ease-in-out p-3 rounded-md border border-gray-400 flex flex-col items-center justify-center">
    <slot></slot>

    <div class="text-sm mt-1">{{ props.title }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
  "title": String,
})
</script>
