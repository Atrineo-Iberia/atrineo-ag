<template>
  <nav>
    <ul class="font-bold text-lg flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-12">
      <li>
        <NuxtLink to="/" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
          {{ $t('menu.home') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/services" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
          {{ $t('menu.services') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/about" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
          {{ $t('menu.about') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/news" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
          {{ $t('menu.news') }}
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="/contact" class="text-gray-600 hover:text-gray-900 transition duration-150 ease-in-out">
          {{ $t('menu.contact') }}
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>