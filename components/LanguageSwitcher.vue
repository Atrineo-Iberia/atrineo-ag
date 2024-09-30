<template>
  <ul class="p-2">
    <li v-for="lang in languages" :key="lang.code">
        <button 
          @click="setLocale(lang.code)"
          class="flex items-center px-3 py-2 text-sm font-normal rounded-md hover:bg-gray-100"
          :class="locale === lang.code ? 'bg-gray-100' : ''"
        >
          <img :src="lang.flag" width="20" />
        </button>
    </li>
  </ul>
</template>

<script setup>
const { locale, setLocale } = useI18n()

const languages = [
  { code: 'de', name: 'Deutsch', flag: 'de.png' },
  { code: 'en', name: 'English', flag: 'uk.png' }
]

</script>

<style scoped>
button[data-state="open"] {
  background-color: rgba(125, 125, 125, 0.20); 
}
</style>
