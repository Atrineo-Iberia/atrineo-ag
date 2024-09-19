<template>
  <header class="bg-white shadow-md">
    <div class="container mx-auto px-4 py-4 flex justify-between items-center">
      <NuxtLink to="/" class="text-2xl font-bold text-gray-800">Atrineo AG</NuxtLink>
      <nav>
        <ul class="flex space-x-6">
          <li>
            <NuxtLink to="/home" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
              {{ $t('home') }}
            </NuxtLink>
          </li>
        </ul>
      </nav>
      <div class="flex items-center space-x-4">
        <LanguageSwitcher />
        <button class="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-150 ease-in-out">
          {{ t('contact') }}
        </button>
      </div>
    </div>
  </header>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
</script>