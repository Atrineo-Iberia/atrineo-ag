<template>
  <nav class="relative">
    <div class="md:hidden">
      <button @click="toggleMenu" class="text-gray-600 hover:text-gray-900 focus:outline-none">
        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>
    <ul :class="['font-bold text-lg md:flex md:space-x-12', isMenuOpen ? 'block' : 'hidden']">
      <li v-for="(item, index) in menuItems" :key="index" class="py-2 md:py-0">
        <NuxtLink :to="item.path" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
          {{ $t(item.translationKey) }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>

<script setup>
const isMenuOpen = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const menuItems = [
  { path: '/', translationKey: 'menu.home' },
  { path: '/services', translationKey: 'menu.services' },
  { path: '/about', translationKey: 'menu.about' },
  { path: '/news', translationKey: 'menu.news' },
  { path: '/contact', translationKey: 'menu.contact' }
]
</script>