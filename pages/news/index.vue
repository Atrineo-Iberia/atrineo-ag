<template>
  <div class="container mx-auto px-4 py-16">
    <h1 class="text-4xl font-bold mb-12 text-center">{{ $t('news') }}</h1>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      <NewsCard v-for="article in news" :key="article.id" :news="article" />
    </div>
  </div>
</template>

<script setup>
const newsStore = useNewsStore()
const news = computed(() => newsStore.news)
</script>