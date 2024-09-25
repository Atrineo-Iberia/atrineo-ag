<template>
	<div>
		<HeroSection
			:title="$t('hero.services')"
			:image="'/images/pexels-2.jpg'"
			:parallax="true"
		/>
		
    <div class="container mx-auto px-4 py-16">
      <section class="mb-16">
        <h2 class="text-3xl font-bold mb-6">{{ $t('knowledge_transfer.title') }}</h2>
        
        <div class="mb-6">
          <div class="flex border-b">
            <button 
              v-for="tab in tabs" 
              :key="tab.id"
              @click="activeTab = tab.id"
              :class="['px-4 py-2 font-semibold', activeTab === tab.id ? 'border-b-2 border-blue-500' : '']"
            >
              {{ $t(`knowledge_transfer.tabs.${tab.id}.title`) }}
            </button>
          </div>
        </div>
        
        <div v-for="tab in tabs" :key="tab.id" v-show="activeTab === tab.id" class="flex flex-col md:flex-row items-center">
          <div class="md:w-1/2 mb-4 md:mb-0 md:pr-4">
            <img :src="tab.image" :alt="$t(`knowledge_transfer.tabs.${tab.id}.title`)" class="w-full h-auto rounded-lg shadow-lg">
          </div>
          <div class="md:w-1/2 md:pl-4">
            <p v-html="$t(`knowledge_transfer.tabs.${tab.id}.content`)"></p>
          </div>
        </div>
      </section>
      
      <!-- Otras secciones... -->
    </div>
	</div>
</template>

<script setup>

const tabs = [
  { id: 'development', image: '/images/development.jpg' },
  { id: 'cooperation', image: '/images/cooperation.jpg' },
  { id: 'market_analysis', image: '/images/market-analysis.jpg' },
  { id: 'success_impact', image: '/images/success-impact.jpg' },
]

const activeTab = ref('development')
</script>


