<template>
  <div class="px-4 md:px-8 flex flex-col md:flex-row justify-between items-center">
    <NuxtLink to="/">
      <img src="/images/logo.png" alt="Logo" width="200" height="100%" class="ml-0 md:ml-6" />
    </NuxtLink>
    <NavMenu />
    <div class="flex items-center space-x-4 mt-4 md:mt-0">
      <LanguageSwitcher />
    </div>
  </div>
</template>

<script setup>

</script>