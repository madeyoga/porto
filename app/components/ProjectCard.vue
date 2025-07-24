<script setup>
const props = defineProps([
  'title',
  'description',
  'link',
  'image',
  'techstack',
  'features'
])
</script>

<template>
  <div class="flex justify-between">
    <div class="rounded-lg w-[640px] border border-light-gray border-gray-700 p-5 flex flex-col gap-5">
      <img 
        :src="props.image" 
        :alt="`${props.title} project showcase`" 
        :title="`${props.title} project showcase`"
      />

      <h3 class="font-semibold dark:dark:text-white text-xl tracking-wide">{{ props.title }}</h3>

      <p class="dark:text-muted text-pretty text-[15px]">
        {{ props.description }}
      </p>

      <div class="grid grid-cols-6 gap-4" v-if="props.techstack">
        <UBadge
          v-for="tech in props.techstack"
          :key="`${props.title} - techstack - ${tech.title} - ${tech.icon}`"
          :avatar="{
            icon: tech.icon
          }"
          size="md"
          color="neutral"
          variant="outline"
        >
          {{ tech.title }}
        </UBadge>
      </div>

      <div class="mt-4" v-if="props.features">
        <ul class="grid md:grid-cols-2 gap-2">
          <LiFeature
            v-for="feature in props.features"
            :key="`${props.title} - feature - ${feature.title}`"
            :icon="feature.icon"
            :description="feature.title"
          ></LiFeature>
        </ul>
      </div>
    </div>

    <div>
      <UButton
        v-if="props.link"
        icon="i-lucide-external-link" 
        size="md" 
        color="neutral" 
        variant="outline" 
        :to="link" 
        target="_blank" 
        rel="noreferrer noopener"
      ></UButton>
    </div>
  </div>
</template>
