<template>
  <div class="container mx-auto px-4 py-8">
    <h1 class="text-3xl font-bold mb-6">{{ $t('impressum.title') }}</h1>
    <div class="space-y-4">
      <p v-html="$t('impressum.company_info')"></p>
      <p v-html="$t('impressum.board_members')"></p>
      <p v-html="$t('impressum.registration_info')"></p>
      <p v-html="$t('impressum.vat_info')"></p>
      <p v-html="$t('impressum.responsible_content')"></p>
      <h2 class="text-2xl font-semibold mt-8 mb-4">{{ $t('impressum.legal_notice_title') }}</h2>
      <p v-html="$t('impressum.legal_notice_1')"></p>
      <p v-html="$t('impressum.legal_notice_2')"></p>
      <p v-html="$t('impressum.legal_notice_3')"></p>
      <p v-html="$t('impressum.legal_notice_4')"></p>
    </div>
  </div>
</template>


