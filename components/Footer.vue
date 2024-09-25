<template>
  <footer class="bg-white py-12">
    <div class="container mx-auto px-4">
      <div class="flex flex-wrap justify-between">
        <!-- Logo -->
        <div class="w-full md:w-1/4 mb-8 md:mb-0">
          <img src="/images/logo.png" alt="Atrineo" class="h-12 mb-4" />
        </div>

        <!-- Contact -->
        <div class="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 class="font-bold text-lg mb-4">{{ $t('footer.contact') }}</h3>
          <p><a href="mailto:info@atrineo.com" class="hover:underline">info@atrineo.com</a></p>
          <p><a href="tel:+49721920979" class="hover:underline">+49 721 9209 790</a></p>
        </div>

        <!-- Atrineo AG -->
        <div class="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 class="font-bold text-lg mb-4">Atrineo AG</h3>
          <p>Kaiserstraße 118</p>
          <p>76133, Karlsruhe</p>
          <p>Germany</p>
        </div>

        <!-- Navigation -->
        <div class="w-full md:w-1/4 mb-8 md:mb-0">
          <h3 class="font-bold text-lg mb-4">{{ $t('footer.navigation') }}</h3>
          <ul>
            <li><NuxtLink to="/" class="hover:underline">{{ $t('footer.home') }}</NuxtLink></li>
            <li><NuxtLink to="/services" class="hover:underline">{{ $t('footer.services') }}</NuxtLink></li>
            <li><NuxtLink to="/company" class="hover:underline">{{ $t('footer.company') }}</NuxtLink></li>
            <li><NuxtLink to="/news" class="hover:underline">{{ $t('footer.news') }}</NuxtLink></li>
            <li><NuxtLink to="/contact" class="hover:underline">{{ $t('footer.contact') }}</NuxtLink></li>
          </ul>
        </div>

        <!-- Privacy and data -->
        <div class="w-full md:w-1/4">
          <h3 class="font-bold text-lg mb-4">{{ $t('footer.privacy_and_data') }}</h3>
          <ul>
            <li><NuxtLink to="/impressum" class="hover:underline">{{ $t('footer.impressum') }}</NuxtLink></li>
            <li><NuxtLink to="/privacy-policy" class="hover:underline">{{ $t('footer.privacy_policy') }}</NuxtLink></li>
          </ul>
        </div>
      </div>

      <!-- Copyright -->
      <div class="mt-12 text-center text-sm">
        <p>© {{ new Date().getFullYear() }} Atrineo AG. {{ $t('footer.all_rights_reserved') }}. {{ $t('footer.made_with') }} ❤️ {{ $t('footer.in_karlsruhe') }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
// No se necesita lógica adicional por ahora
</script>