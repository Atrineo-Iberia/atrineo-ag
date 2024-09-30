<template>
  <div class="container mx-auto px-4 py-16">
    <article v-if="article" class="max-w-3xl mx-auto">
      <h1 class="text-4xl font-bold mb-4">{{ $t(article.titleKey) }}</h1>
      <div class="mb-8 text-gray-600">
        <span>{{ formatDate(article.date) }}</span> | 
        <span>{{ $t(article.authorKey) }}</span>
      </div>
      <img :src="article.image" :alt="$t(article.titleKey)" class="w-full h-64 object-cover mb-8 rounded-lg">
      <div v-html="$t(article.contentKey)" class="prose max-w-none"></div>
    </article>
    <div v-else class="text-center">
      <p>Article not found</p>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()
const newsStore = useNewsStore()

const article = computed(() => newsStore.getNewsBySlug(route.params.slug))

const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>