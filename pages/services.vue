<template>
	<div>
		<HeroSection
			:title="$t('hero.services')"
			:image="'/images/pexels-2.jpg'"
			:parallax="true"
		/>
		
    <div class="w-full">
      <!-- Knowledge Transfer -->
      <section class="max-w-5xl mx-auto mb-16 bg-lime-200 py-16 px-32">
        <h2 class="text-3xl font-bold mb-6">{{ $t('knowledge_transfer.title') }}</h2>
        <div class="mb-6">
          <div class="md:hidden space-y-2">
            <div 
              v-for="(tab, index) in section1Tabs" 
              :key="index"
              @click="activeTab1 = index"
              class="px-4 py-2 font-semibold cursor-pointer border rounded"
              :class="{'bg-blue-500 text-white': activeTab1 === index}"
            >
              {{ $t(tab.title) }}
            </div>
          </div>
          <div class="hidden md:flex justify-evenly">
            <div 
              v-for="(tab, index) in section1Tabs" 
              :key="index"
              @click="activeTab1 = index"
              class="px-4 py-2 font-semibold cursor-pointer"
              :class="{'border-b-2 border-blue-500': activeTab1 === index}"
            >
              {{ $t(tab.title) }}
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 mb-4 md:mb-0 md:pr-4 flex justify-center items-center">
            <div class="w-full h-72 overflow-hidden rounded-lg shadow-lg">
              <img 
                :src="section1Tabs[activeTab1].image" 
                :alt="$t(section1Tabs[activeTab1].title)" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="md:w-1/2 md:pl-4 leading-relaxed">
            <p v-html="$t(section1Tabs[activeTab1].description)" class="text-lg leading-relaxed"></p>
          </div>
        </div>
      </section>

      <!-- Innovation Management -->
      <section class="max-w-5xl mx-auto mb-16 bg-blue-200 py-16 px-32">
        <h2 class="text-3xl font-bold mb-6">{{ $t('innovation_management.title') }}</h2>
        <div class="mb-6">
          <div class="md:hidden">
            <select v-model="activeTab2" class="w-full p-2 border rounded">
              <option v-for="(tab, index) in section2Tabs" :key="index" :value="index">
                {{ $t(tab.title) }}
              </option>
            </select>
          </div>
          <div class="hidden md:flex justify-evenly">
            <div 
              v-for="(tab, index) in section2Tabs" 
              :key="index"
              @click="activeTab2 = index"
              class="px-4 py-2 font-semibold cursor-pointer"
              :class="{'border-b-2 border-blue-500': activeTab2 === index}"
            >
              {{ $t(tab.title) }}
            </div>
          </div>
        </div>
        
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 mb-4 md:mb-0 md:pr-4 flex justify-center items-center">
            <div class="w-full h-72 overflow-hidden rounded-lg shadow-lg">
              <img 
                :src="section2Tabs[activeTab2].image" 
                :alt="$t(section2Tabs[activeTab2].title)" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="md:w-1/2 md:pl-4 leading-relaxed">
            <p v-html="$t(section2Tabs[activeTab2].description)" class="text-lg leading-relaxed"></p>
          </div>
        </div>
      </section>
      
      <!-- Technology Transfer -->
      <section class="max-w-5xl mx-auto mb-16 bg-blue-800 py-16 px-32 text-white">
        <h2 class="text-3xl font-bold mb-6">{{ $t('technology_transfer.title') }}</h2>
        <div class="mb-6">
          <div class="overflow-x-auto">
            <div class="flex whitespace-nowrap mb-6">
              <div 
              v-for="(tab, index) in section3Tabs" 
              :key="index"
              @click="activeTab3 = index"
              class="px-4 py-2 font-semibold cursor-pointer"
              :class="{'border-b-2 border-blue-500': activeTab3 === index}"
            >
              {{ $t(tab.title) }}
              </div>
            </div>
          </div>
        </div>
        
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 mb-4 md:mb-0 md:pr-4 flex justify-center items-center">
            <div class="w-full h-72 overflow-hidden rounded-lg shadow-lg">
              <img 
                :src="section3Tabs[activeTab3].image" 
                :alt="$t(section3Tabs[activeTab3].title)" 
                class="w-full h-full object-cover"
              />
            </div>
          </div>
          <div class="md:w-1/2 md:pl-4 leading-relaxed">
            <p v-html="$t(section3Tabs[activeTab3].description)" class="text-lg leading-relaxed"></p>
          </div>
        </div>
      </section>

    </div>
	</div>
</template>

<script setup>
const activeTab1 = ref(0)
const activeTab2 = ref(0)
const activeTab3 = ref(0)

const section1Tabs = [
  { 
    title: 'knowledge_transfer.tabs.development.title',
    image: '/images/pexels-a.jpg',
    description: 'knowledge_transfer.tabs.development.content'
  },
  { 
    title: 'knowledge_transfer.tabs.cooperation.title',
    image: '/images/pexels-b.jpg',
    description: 'knowledge_transfer.tabs.cooperation.content'
  },
  { 
    title: 'knowledge_transfer.tabs.market_analysis.title',
    image: '/images/pexels-c.jpg',
    description: 'knowledge_transfer.tabs.market_analysis.content'
  },
  { 
    title: 'knowledge_transfer.tabs.success_impact.title',
    image: '/images/pexels-d.jpg',
    description: 'knowledge_transfer.tabs.success_impact.content'
  },
]

const section2Tabs = [
  { 
    title: 'innovation_management.tabs.training.title',
    image: '/images/pexels-e.jpg',
    description: 'innovation_management.tabs.training.content'
  },
  { 
    title: 'innovation_management.tabs.planning.title',
    image: '/images/pexels-f.jpg',
    description: 'innovation_management.tabs.planning.content'
  },
  { 
    title: 'innovation_management.tabs.identification.title',
    image: '/images/pexels-g.jpg',
    description: 'innovation_management.tabs.identification.content'
  },
]

const section3Tabs = [
  { 
    title: 'technology_transfer.tabs.innovation.title',
    image: '/images/pexels-h.jpg',
    description: 'technology_transfer.tabs.innovation.content'
  },
  { 
    title: 'technology_transfer.tabs.assessment.title',
    image: '/images/pexels-i.jpg',
    description: 'technology_transfer.tabs.assessment.content'
  },
  { 
    title: 'technology_transfer.tabs.licensing.title',
    image: '/images/pexels-j.jpg',
    description: 'technology_transfer.tabs.licensing.content'
  },
  { 
    title: 'technology_transfer.tabs.spinoffs.title',
    image: '/images/pexels-k.jpg',
    description: 'technology_transfer.tabs.spinoffs.content'
  },
]


</script>


