<template>
  <section class="py-16 bg-primary text-white">
    <div class="container mx-auto px-4">
      <h2 class="text-4xl font-bold mb-12 text-center text-accent">{{ $t('our_services') }}</h2>
      
      <!-- Tab navigation -->
      <div class="flex justify-center mb-8">
        <div 
          v-for="(service, index) in services" 
          :key="index"
          @click="activeTab = index"
          class="px-4 py-2 mx-2 cursor-pointer"
          :class="activeTab === index ? 'border' : 'text-white'"
        >
          {{ $t(service.title) }}
        </div>
      </div>

      <!-- Content container -->
      <div class="flex flex-col md:flex-row gap-8 max-w-5xl mx-auto">
        <!-- Images container -->
        <div class="w-full md:w-2/5 h-96 relative">
          <img 
            v-for="(service, index) in services" 
            :key="index"
            :src="service.image" 
            :alt="$t(service.title)"
            class="absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300"
            :class="activeTab === index ? 'opacity-100' : 'opacity-0'"
          />
        </div>

        <!-- Tab content -->
        <div v-if="services[activeTab]" class="w-full md:w-3/5">
          <ul class="space-y-4">
            <li v-for="(feature, index) in services[activeTab].features" :key="index">
              <strong>{{ $t(feature.title) }}:</strong> {{ $t(feature.description) }}
            </li>
          </ul>
        </div>
      </div>

      <div class="text-center mt-8">
        <a href="/services" class="text-accent underline">{{ $t('complete_services') }}</a>
      </div>
    </div>
  </section>
</template>

<script setup>
const activeTab = ref(0)

const services = [
  {
    title: 'services.innovation_management',
    image: '/images/pexels-1.jpg',
    features: [
      { title: 'services.innovation_management_details.development_implementation', description: 'services.innovation_management_details.development_implementation_desc' },
      { title: 'services.innovation_management_details.cooperation_networking', description: 'services.innovation_management_details.cooperation_networking_desc' },
      { title: 'services.innovation_management_details.market_analysis', description: 'services.innovation_management_details.market_analysis_desc' },
      { title: 'services.innovation_management_details.success_impact_analysis', description: 'services.innovation_management_details.success_impact_analysis_desc' },
    ]
  },
  {
    title: 'services.knowledge_transfer',
    image: '/images/pexels-2.jpg',
    features: [
      { title: 'services.knowledge_transfer_details.training_workshops', description: 'services.knowledge_transfer_details.training_workshops_desc' },
      { title: 'services.knowledge_transfer_details.strategic_planning', description: 'services.knowledge_transfer_details.strategic_planning_desc' },
      { title: 'services.knowledge_transfer_details.knowledge_management_systems', description: 'services.knowledge_transfer_details.knowledge_management_systems_desc' },
      { title: 'services.knowledge_transfer_details.identification_evaluation_transfer_potentials', description: 'services.knowledge_transfer_details.identification_evaluation_transfer_potentials_desc' },
    ]
  },
  {
    title: 'services.technology_transfer',
    image: '/images/pexels-3.jpg',
    features: [
      { title: 'services.technology_transfer_details.innovation_scouting', description: 'services.technology_transfer_details.innovation_scouting_desc' },
      { title: 'services.technology_transfer_details.technology_assessment', description: 'services.technology_transfer_details.technology_assessment_desc' },
      { title: 'services.technology_transfer_details.licensing_ip_management', description: 'services.technology_transfer_details.licensing_ip_management_desc' },
      { title: 'services.technology_transfer_details.research_related_spin_offs', description: 'services.technology_transfer_details.research_related_spin_offs_desc' },
    ]
  }
]
</script>