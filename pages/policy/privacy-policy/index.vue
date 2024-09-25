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
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy_policy.collecting_and_using') }}</h2>
      <h3 class="text-xl font-semibold mb-2">{{ $t('privacy_policy.types_of_data_collected') }}</h3>
      <p v-html="$t('privacy_policy.personal_data')"></p>
      <p v-html="$t('privacy_policy.usage_data')"></p>
      
      <h3 class="text-xl font-semibold mb-2">{{ $t('privacy_policy.tracking_technologies_and_cookies') }}</h3>
      <p v-html="$t('privacy_policy.tracking_technologies_and_cookies_text')"></p>
      <ul class="list-disc pl-5 space-y-2">
        <li v-html="$t('privacy_policy.cookies_or_browser_cookies')"></li>
        <li v-html="$t('privacy_policy.web_beacons')"></li>
      </ul>
      <p v-html="$t('privacy_policy.cookies_types')"></p>
      <ul class="list-disc pl-5 space-y-2">
        <li v-html="$t('privacy_policy.necessary_cookies')"></li>
        <li v-html="$t('privacy_policy.cookies_policy')"></li>
        <li v-html="$t('privacy_policy.functionality_cookies')"></li>
      </ul>
      <p v-html="$t('privacy_policy.collected_cookies')"></p>
      <ul class="list-disc pl-5 space-y-2">
        <li v-html="$t('privacy_policy.xsrf_token')"></li>
        <li v-html="$t('privacy_policy.hs')"></li>
        <li v-html="$t('privacy_policy.svSession')"></li>
        <li v-html="$t('privacy_policy.ssr_caching')"></li>
        <li v-html="$t('privacy_policy.ts')"></li>
        <li v-html="$t('privacy_policy.bSession')"></li>
        <li v-html="$t('privacy_policy.fedops_logger_sessionld')"></li>
        <li v-html="$t('privacy_policy.wixAB3')"></li>
        <li v-html="$t('privacy_policy.server_session_bind')"></li>
        <li v-html="$t('privacy_policy.client_session_bind')"></li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy_policy.use_of_your_personal_data') }}</h2>
      <p v-html="$t('privacy_policy.use_of_your_personal_data_text')"></p>
      <ul class="list-disc pl-5 space-y-2">
        <li v-html="$t('privacy_policy.to_provide_and_maintain')"></li>
        <li v-html="$t('privacy_policy.to_manage_your_account')"></li>
        <li v-html="$t('privacy_policy.for_performance_of_contract')"></li>
        <li v-html="$t('privacy_policy.to_contact_you')"></li>
        <li v-html="$t('privacy_policy.to_provide_you_with_news')"></li>
        <li v-html="$t('privacy_policy.to_manage_your_requests')"></li>
        <li v-html="$t('privacy_policy.for_business_transfers')"></li>
        <li v-html="$t('privacy_policy.for_other_purposes')"></li>
      </ul>
      <p v-html="$t('privacy_policy.sharing_your_personal_information')"></p>
      <ul class="list-disc pl-5 space-y-2">
        <li v-html="$t('privacy_policy.with_service_providers')"></li>
        <li v-html="$t('privacy_policy.for_business_transfers_but_not_personal_data')"></li>
        <li v-html="$t('privacy_policy.with_affiliates')"></li>
        <li v-html="$t('privacy_policy.with_business_partners')"></li>
        <li v-html="$t('privacy_policy.with_other_users')"></li>
        <li v-html="$t('privacy_policy.with_your_consent')"></li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy_policy.retention_of_your_personal_data') }}</h2>
      <p v-html="$t('privacy_policy.retention_of_your_personal_data_text')"></p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy_policy.transfer_of_your_personal_data') }}</h2>
      <p v-html="$t('privacy_policy.transfer_of_your_personal_data_text')"></p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy_policy.delete_your_personal_data') }}</h2>
      <p v-html="$t('privacy_policy.delete_your_personal_data_text')"></p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy_policy.disclosure_of_your_personal_data') }}</h2>
      <h3 class="text-xl font-semibold mb-2">{{ $t('privacy_policy.business_transactions') }}</h3>
      <p v-html="$t('privacy_policy.business_transactions_text')"></p>
      <h3 class="text-xl font-semibold mb-2">{{ $t('privacy_policy.law_enforcement') }}</h3>
      <p v-html="$t('privacy_policy.law_enforcement_text')"></p>
      <h3 class="text-xl font-semibold mb-2">{{ $t('privacy_policy.other_legal_requirements') }}</h3>
      <p v-html="$t('privacy_policy.other_legal_requirements_text')"></p>
      <ul class="list-disc pl-5 space-y-2">
        <li v-html="$t('privacy_policy.comply_with_legal_obligation')"></li>
        <li v-html="$t('privacy_policy.protect_and_defend')"></li>
        <li v-html="$t('privacy_policy.prevent_or_investigate')"></li>
        <li v-html="$t('privacy_policy.protect_personal_safety')"></li>
        <li v-html="$t('privacy_policy.protect_against_legal_liability')"></li>
      </ul>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy_policy.security_of_your_personal_data') }}</h2>
      <p v-html="$t('privacy_policy.security_of_your_personal_data_text')"></p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy_policy.childrens_privacy') }}</h2>
      <p v-html="$t('privacy_policy.childrens_privacy_text')"></p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy_policy.links_to_other_websites') }}</h2>
      <p v-html="$t('privacy_policy.links_to_other_websites_text')"></p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy_policy.changes_to_this_privacy_policy') }}</h2>
      <p v-html="$t('privacy_policy.changes_to_this_privacy_policy_text')"></p>
      
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('privacy_policy.contact_us') }}</h2>
      <p v-html="$t('privacy_policy.contact_info')"></p>
    </div>
  </div>
</template>

<script setup>
const lastUpdated = new Date('2024-08-01').toLocaleDateString()
</script>