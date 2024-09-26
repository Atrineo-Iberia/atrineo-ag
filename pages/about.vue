<template>
	<div>
		<HeroSection
		:title="$t('hero.about')"
			:image="'/images/pexels-b.jpg'"
			:parallax="true"
		/>
		<div class="container mx-auto py-16">
			<!-- Our Journey Section -->
		<section class="mb-16">
			<h2 class="text-3xl font-bold mb-6">{{ $t('about.history.title') }}</h2>
			<p class="text-lg mb-4" v-html="$t('about.history.description')"></p>
		</section>

		<!-- Founders Section -->
		<section class="mb-16">
			<h2 class="text-3xl font-bold mb-6">{{ $t('about.founders.title') }}</h2>
			<div class="grid md:grid-cols-2 gap-8">
				<div v-for="founder in founders" :key="founder.key" class="bg-white shadow-lg rounded-lg overflow-hidden">
					<img :src="founder.image" :alt="$t(`about.founders.${founder.key}.name`)" class="w-full h-64 object-cover">
					<div class="p-6">
						<h3 class="text-2xl font-semibold mb-2">{{ $t(`about.founders.${founder.key}.name`) }}</h3>
						<p class="text-gray-700" v-html="$t(`about.founders.${founder.key}.description`)"></p>
					</div>
				</div>
			</div>
		</section>

		<!-- Locations Section -->
		<section class="mb-16">
			<h2 class="text-3xl font-bold mb-6">{{ $t('locations.title') }}</h2>
			<div class="grid md:grid-cols-2 gap-8">
				<div v-for="location in locations" :key="location.key" class="bg-white shadow-lg rounded-lg overflow-hidden">
					<img :src="location.image" :alt="$t(`locations.${location.key}.title`)" class="w-full h-64 object-cover">
					<div class="p-6">
						<h3 class="text-2xl font-semibold mb-2">{{ $t(`locations.${location.key}.title`) }}</h3>
						<p class="text-gray-700" v-html="$t(`locations.${location.key}.description`)"></p>
					</div>
				</div>
			</div>
			</section>
		</div>
	</div>
</template>

<script setup>
const founders = [
	{
		key: 'rudiger',
		image: '/images/Rudiger_edited.jpg'
	},
	{
		key: 'nestor',
		image: '/images/Nestor_edited.jpg'
	}
]

const locations = [
	{
		key: 'karlsruhe',
		image: '/images/Karlsruhe.jpeg'
	},
	{
		key: 'gc',
		image: '/images/ulpgc.jpeg'
	}
]
</script>
