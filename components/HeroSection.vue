<template>
  <div
    class="relative h-[50vh] bg-cover bg-center flex items-center justify-center"
    :style="{
      backgroundImage: `url(${image})`,
      backgroundAttachment: parallax ? 'fixed' : 'scroll'
    }"
  >
    <div class="absolute inset-0 bg-black opacity-50"></div>
    <div class="relative z-10 text-center text-white w-96">
      <h1 class="text-4xl md:text-5xl font-bold mb-4">{{ title }}</h1>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  parallax: {
    type: Boolean,
    default: false
  }
})
</script>