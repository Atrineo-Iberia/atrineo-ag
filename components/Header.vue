<template>
  <div class="px-4 md:px-8 flex flex-row justify-between items-center relative">
    <NuxtLink to="/" class="flex-shrink-0">
      <img src="/images/logo.png" alt="Logo" width="150" height="auto" class="ml-0 md:ml-6" />
    </NuxtLink>
    
    <!-- Versión móvil y tablet -->
    <div class="flex items-center space-x-4 md:hidden">
      <LanguageSwitcher />
      <NavMenu />
    </div>
    
    <!-- Versión desktop -->
    <div class="hidden md:flex md:items-center md:space-x-4">
      <NavMenu />
      <LanguageSwitcher />
    </div>
  </div>
</template>

<style scoped>
@media (max-width: 768px) {
  .flex-row {
    flex-wrap: nowrap;
  }
}
</style>