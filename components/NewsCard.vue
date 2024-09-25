<template>
  <div class="bg-white rounded-lg shadow-md overflow-hidden">
    <img :src="news.image" :alt="news.title" class="w-full h-48 object-cover">
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2">{{ news.title }}</h3>
      <p class="text-gray-600 mb-4">{{ news.excerpt }}</p>
      <NuxtLink :to="`/news/${news.slug}`" class="text-blue-600 hover:underline">
        {{ $t('read_more') }}
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
defineProps({
  news: {
    type: Object,
    required: true
  }
})
</script>