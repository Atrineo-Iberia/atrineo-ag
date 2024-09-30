<template>
  <div class="bg-white shadow-md overflow-hidden">
    <img :src="news.image" :alt="$t(news.titleKey)" class="w-full h-48 object-cover">
    <div class="p-6">
      <h3 class="text-xl font-semibold mb-2">{{ $t(news.titleKey) }}</h3>
      <p class="text-gray-600 mb-2 text-sm">{{ formatDate(news.date) }} | {{ $t(news.authorKey) }}</p>
      <p class="text-gray-600 mb-4">{{ $t(news.excerptKey) }}</p>
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

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>