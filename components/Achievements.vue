<template>
  <section class="py-16 bg-blue-900 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center">{{ $t('achievements_title') }}</h2>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        <div v-for="achievement in achievements" :key="achievement.title" class="text-center">
          <div class="text-5xl font-bold mb-2">+
            <CountUp :endValue="achievement.value" :duration="2500" />
          </div>
          <p class="text-xl">{{ $t(achievement.title) }}</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const achievements = [
  { value: 15, title: 'achievements.transfer_strategies' },
  { value: 1000, title: 'achievements.screening_interviews' },
  { value: 300, title: 'achievements.market_analysis' },
  { value: 100, title: 'achievements.transfer_workshops' }
]
</script>