<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">{{ $t('privacy_policy.title') }}</h1>
    <p class="mb-4">{{ $t('privacy_policy.last_updated', { date: lastUpdated }) }}</p>
    <div class="space-y-6">
      <p v-html="$t('privacy_policy.introduction')"></p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy_policy.interpretation_and_definitions') }}</h2>
      <h3 class="text-xl font-semibold mb-2">{{ $t('privacy_policy.interpretation') }}</h3>
      <p v-html="$t('privacy_policy.interpretation_text')"></p>
      
      <h3 class="text-xl font-semibold mb-2">{{ $t('privacy_policy.definitions') }}</h3>
      <p v-html="$t('privacy_policy.definitions_intro')"></p>
      <ul class="list-disc pl-5 space-y-2">
        <li><strong>{{ $t('privacy_policy.definitions_list.account.term') }}:</strong> {{ $t('privacy_policy.definitions_list.account.definition') }}</li>
        <li><strong>{{ $t('privacy_policy.definitions_list.affiliate.term') }}:</strong> {{ $t('privacy_policy.definitions_list.affiliate.definition') }}</li>
        <li><strong>{{ $t('privacy_policy.definitions_list.company.term') }}:</strong> {{ $t('privacy_policy.definitions_list.company.definition') }}</li>
        <li><strong>{{ $t('privacy_policy.definitions_list.cookies.term') }}:</strong> {{ $t('privacy_policy.definitions_list.cookies.definition') }}</li>
        <li><strong>{{ $t('privacy_policy.definitions_list.country.term') }}:</strong> {{ $t('privacy_policy.definitions_list.country.definition') }}</li>
        <li><strong>{{ $t('privacy_policy.definitions_list.device.term') }}:</strong> {{ $t('privacy_policy.definitions_list.device.definition') }}</li>
        <li><strong>{{ $t('privacy_policy.definitions_list.personal_data.term') }}:</strong> {{ $t('privacy_policy.definitions_list.personal_data.definition') }}</li>
        <li><strong>{{ $t('privacy_policy.definitions_list.service.term') }}:</strong> {{ $t('privacy_policy.definitions_list.service.definition') }}</li>
        <li><strong>{{ $t('privacy_policy.definitions_list.service_provider.term') }}:</strong> {{ $t('privacy_policy.definitions_list.service_provider.definition') }}</li>
        <li><strong>{{ $t('privacy_policy.definitions_list.usage_data.term') }}:</strong> {{ $t('privacy_policy.definitions_list.usage_data.definition') }}</li>
        <li><strong>{{ $t('privacy_policy.definitions_list.website.term') }}:</strong> {{ $t('privacy_policy.definitions_list.website.definition') }}</li>
        <li><strong>{{ $t('privacy_policy.definitions_list.you.term') }}:</strong> {{ $t('privacy_policy.definitions_list.you.definition') }}</li>
      </ul>
      
      <!-- Add more sections here following the same pattern -->
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy_policy.contact_us') }}</h2>
      <p v-html="$t('privacy_policy.contact_info')"></p>
    </div>
  </div>
</template>

<script setup>
const lastUpdated = new Date('2024-08-01').toLocaleDateString()
</script>