<template>
	<div class="bg-gray-100">
		<HeroSection
		:title="$t('hero.about')"
			:image="'/images/pexels-b.jpg'"
			:parallax="true"
		/>

			<!-- Our Journey Section -->
		<section class="mb-16 py-8 md:py-16 px-4 md:px-32">
			<h2 class="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{{ $t('about.history.title') }}</h2>
			<p class="text-base md:text-lg mb-4" v-html="$t('about.history.description')"></p>
		</section>

		<!-- Founders Section -->
		<section class="mb-16 bg-primary text-gray-100 py-8 md:py-16 px-4 md:px-32">
			<h2 class="text-2xl md:text-3xl font-bold mb-4 md:mb-6 text-accent">{{ $t('about.founders.title') }}</h2>
			<div class="grid md:grid-cols-2 gap-4 md:gap-8">
				<div v-for="founder in founders" :key="founder.key" class="shadow-lg overflow-hidden bg-secondary">
					<img :src="founder.image" :alt="$t(`about.founders.${founder.key}.name`)" class="w-full h-48 md:h-64 object-cover">
					<div class="p-4 md:p-6">
						<h3 class="text-xl md:text-2xl font-semibold mb-2">{{ $t(`about.founders.${founder.key}.name`) }}</h3>
						<p class="text-sm md:text-base text-gray-300" v-html="$t(`about.founders.${founder.key}.description`)"></p>
					</div>
				</div>
			</div>
		</section>

		<!-- Locations Section -->
		<section class="mb-16 py-8 md:py-16 px-4 md:px-32">
			<h2 class="text-2xl md:text-3xl font-bold mb-4 md:mb-6">{{ $t('locations.title') }}</h2>
			<div class="grid md:grid-cols-2 gap-4 md:gap-8">
				<div v-for="location in locations" :key="location.key" class="bg-white shadow-lg overflow-hidden">
					<img :src="location.image" :alt="$t(`locations.${location.key}.title`)" class="w-full h-48 md:h-64 object-cover">
					<div class="p-4 md:p-6">
						<h3 class="text-xl md:text-2xl font-semibold mb-2">{{ $t(`locations.${location.key}.title`) }}</h3>
						<p class="text-sm md:text-base text-gray-700" v-html="$t(`locations.${location.key}.description`)"></p>
					</div>
				</div>
			</div>
		</section>
	</div>
</template>

<script setup>
const founders = [
	{
		key: 'rudiger',
		image: '/images/founders.jpg'
	},
	{
		key: 'nestor',
		image: '/images/founders.jpg'
	}
]

const locations = [
	{
		key: 'karlsruhe',
		image: '/images/pexels-karlsruhe.jpg'
	},
	{
		key: 'gc',
		image: '/images/pexels-university.jpg'
	}
]
</script>
