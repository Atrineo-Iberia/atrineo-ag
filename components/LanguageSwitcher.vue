<template>
  <NuxtLink 
    :to="switchLocalePath(currentLocale)"
    class="flex items-center bg-transparent px-3 py-2 rounded-md"
  >
    <NuxtImg :src="getFlagSrc(currentLocale)" width="20" class="mr-2" />
    {{ currentLocale.toUpperCase() }}
  </NuxtLink>
  <ul class="p-2">
    <li v-for="lang in languages" :key="lang.code">
        <button 
          @click="setLocale(lang.code)"
          class="flex items-center w-32 px-3 py-2 text-sm font-normal rounded-md hover:bg-gray-100"
          :class="locale === lang.code ? 'bg-gray-100' : ''"
        >
          <NuxtImg :src="lang.flag" width="20" class="mr-2" />
          {{ lang.name }}
        </button>
    </li>
  </ul>
</template>

<script setup>
const { locale, setLocale } = useI18n()
const switchLocalePath = useSwitchLocalePath()
const currentLocale = ref(locale.value)

const languages = [
  { code: 'de', name: 'Deutsch', flag: 'de.png' },
  { code: 'en', name: 'English', flag: 'uk.png' }
]

const getFlagSrc = (code) => {
  return languages.find(lang => lang.code === code)?.flag || 'espana.png'
}

watchEffect(() => {
  currentLocale.value = locale.value
})
</script>

<style scoped>
button[data-state="open"] {
  background-color: rgba(125, 125, 125, 0.20); 
}
</style>
