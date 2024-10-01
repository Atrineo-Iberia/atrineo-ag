<template>
  <footer class="bg-primary text-white py-8">
    <div class="container mx-auto px-4">
      <div class="flex flex-col md:flex-row justify-center items-center md:items-end md:space-x-64">
        <!-- Company Info -->
        <div class="text-center mb-8 md:mb-0">
          <img src="/images/atrineo_icon-removebg-preview.png" alt="Atrineo AG" class="h-20 mb-4 mx-auto footer-logo" />
          <p>© {{ new Date().getFullYear() }} Atrineo AG.</p>
          <p>{{ $t('footer.all_rights_reserved') }}.</p>
        </div>

        <!-- Quick Links -->
        <div class="font-bold text-center ">
          <ul class="space-y-2">
            <li><NuxtLink to="/about" class="hover:text-gray-300">{{ $t('footer.about') }}</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:text-gray-300">{{ $t('footer.services') }}</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:text-gray-300">{{ $t('footer.contact') }}</NuxtLink></li>
            <li><NuxtLink to="/policy/privacy-policy" class="hover:text-gray-300">{{ $t('footer.privacy_policy') }}</NuxtLink></li>
          </ul>
        </div>
      </div>
    </div>

    <!-- Copyright -->
    <div class="mt-8 text-center text-sm">
      <p class="mt-2">{{ $t('footer.made_with') }} ❤️ {{ $t('footer.in_karlsruhe') }}</p>
    </div>
  </footer>
</template>

<style scoped>
.footer-logo {
  filter: brightness(0) invert(1);
}
</style>