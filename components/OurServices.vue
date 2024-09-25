<template>
  <section class="py-16 bg-blue-900 text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center">{{ $t('our_services') }}</h2>
      <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div class="flex flex-col items-center">
          <h3 class="text-2xl font-semibold mb-4">{{ $t('services.innovation_management') }}</h3>
          <!-- <img src="/images/innovation-management.jpg" alt="Innovation Management" class="w-full h-auto mb-4" /> -->
        </div>
        <div>
          <h3 class="text-2xl font-semibold mb-4">{{ $t('services.knowledge_transfer') }}</h3>
          <ul class="space-y-4">
            <li>
              <strong>{{ $t('services.innovation_management_details.development_implementation') }}:</strong> {{ $t('services.innovation_management_details.development_implementation_desc') }}
            </li>
            <li>
              <strong>{{ $t('services.innovation_management_details.cooperation_networking') }}:</strong> {{ $t('services.innovation_management_details.cooperation_networking_desc') }}
            </li>
            <li>
              <strong>{{ $t('services.innovation_management_details.market_analysis') }}:</strong> {{ $t('services.innovation_management_details.market_analysis_desc') }}
            </li>
            <li>
              <strong>{{ $t('services.innovation_management_details.success_impact_analysis') }}:</strong> {{ $t('services.innovation_management_details.success_impact_analysis_desc') }}
            </li>
            <li>
              <strong>{{ $t('services.knowledge_transfer_details.training_workshops') }}:</strong> {{ $t('services.knowledge_transfer_details.training_workshops_desc') }}
            </li>
            <li>
              <strong>{{ $t('services.knowledge_transfer_details.strategic_planning') }}:</strong> {{ $t('services.knowledge_transfer_details.strategic_planning_desc') }}
            </li>
            <li>
              <strong>{{ $t('services.knowledge_transfer_details.knowledge_management_systems') }}:</strong> {{ $t('services.knowledge_transfer_details.knowledge_management_systems_desc') }}
            </li>
            <li>
              <strong>{{ $t('services.knowledge_transfer_details.identification_evaluation_transfer_potentials') }}:</strong> {{ $t('services.knowledge_transfer_details.identification_evaluation_transfer_potentials_desc') }}
            </li>
            <li>
              <strong>{{ $t('services.technology_transfer_details.innovation_scouting') }}:</strong> {{ $t('services.technology_transfer_details.innovation_scouting_desc') }}
            </li>
            <li>
              <strong>{{ $t('services.technology_transfer_details.technology_assessment') }}:</strong> {{ $t('services.technology_transfer_details.technology_assessment_desc') }}
            </li>
            <li>
              <strong>{{ $t('services.technology_transfer_details.licensing_ip_management') }}:</strong> {{ $t('services.technology_transfer_details.licensing_ip_management_desc') }}
            </li>
            <li>
              <strong>{{ $t('services.technology_transfer_details.research_related_spin_offs') }}:</strong> {{ $t('services.technology_transfer_details.research_related_spin_offs_desc') }}
            </li>
          </ul>
        </div>
      </div>
      <div class="text-center mt-8">
        <a href="/services" class="text-white underline">{{ $t('complete_services') }}</a>
      </div>
    </div>
  </section>
</template>
