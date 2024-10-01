<template>
  <section class="py-16 bg-gray-100">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center">{{ $t('industries') }}</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div v-for="industry in industries" :key="industry.title" class="relative overflow-hidden group h-64 shadow-md">
          <img :src="industry.image" :alt="$t(industry.title)" class="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110">
          <div class="absolute inset-0 flex flex-col justify-between p-4 shadow-md">
            <h3 class="text-xl font-bold text-white bg-black bg-opacity-50 p-2 self-end rounded">
              {{ $t(industry.title) }}
            </h3>
            <p class="text-white bg-black bg-opacity-50 p-2 rounded transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
              {{ $t(industry.description) }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const industries = [
  {
    title: 'energy.title',
    image: '/images/pexels-1.jpg',
    description: 'energy.description'
  },
  {
    title: 'life_sciences.title',
    image: '/images/pexels-3.jpg',
    description: 'life_sciences.description'
  },
  {
    title: 'chemistry.title',
    image: '/images/pexels-4.jpg',
    description: 'chemistry.description'
  },
  {
    title: 'health.title',
    image: '/images/pexels-5.jpg',
    description: 'health.description'
  },
  {
    title: 'material_sciences.title',
    image: '/images/pexels-6.jpg',
    description: 'material_sciences.description'
  },
  {
    title: 'informatics.title',
    image: '/images/pexels-7.jpg',
    description: 'informatics.description'
  }
]
</script>