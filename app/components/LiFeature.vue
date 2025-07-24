<template>
  <li data-orientation="horizontal" class="relative flex items-start gap-2.5">
    <div class="inline-flex items-center justify-center p-0.5">
      <UIcon :name="props.icon" class="size-5"></UIcon>
    </div>
    <div class="">
      <div class="text-[15px] text-pretty dark:text-muted">
        {{ props.description }}
      </div>
    </div>
  </li>
</template>

<script setup>
const props = defineProps([
  'icon',
  'description'
])
</script>
