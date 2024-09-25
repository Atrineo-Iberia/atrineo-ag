<template>
  <section class="py-16 bg-lime-300">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center">{{ $t('news') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <NewsCard v-for="news in latestNews" :key="news.id" :news="news" />
      </div>
      <div class="text-center mt-8">
        <NuxtLink to="/news" class="text-blue-600 hover:underline">
          {{ $t('all_news') }}
        </NuxtLink>
      </div>
    </div>
  </section>
</template>

<script setup>
const newsStore = useNewsStore()
const latestNews = computed(() => newsStore.getLatestNews(2))
</script>