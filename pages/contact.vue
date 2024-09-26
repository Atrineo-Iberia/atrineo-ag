<template>
	<div class="container mx-auto px-4 py-16">
		<!-- Get in Touch Section -->
		<section class="mb-16">
			<h2 class="text-3xl font-bold mb-8">{{ $t('contact.getInTouch') }}</h2>
			<div class="grid md:grid-cols-2 gap-8">
				<div>
					<h3 class="text-xl font-semibold mb-4">Atrineo AG</h3>
					<p>info@atrineo.com</p>
					<p class="mb-4">+49  721 9209 790</p>
					<p>Kaiserstraße 118, 76133 Karlsruhe</p>
					<p>Germany</p>
				</div>
				<div>
					<h3 class="text-xl font-semibold mb-4">Atrineo Iberia</h3>
					<p>info@atrineo.com</p>
					<p class="mb-4">+34 928 37 60 60</p>
					<p>Calle Practicante Ignacio Rodríguez,</p>
					<p>Edificio Polivalente II</p>
					<p>35017, Las Palmas de Gran Canaria</p>
					<p>Spain</p>
				</div>
			</div>
		</section>

		<!-- Write to Us Section -->
		<section>
			<h2 class="text-3xl font-bold mb-8">{{ $t('contact.writeToUs.title') }}</h2>
			<form @submit.prevent="submitForm" class="max-w-2xl mx-auto">
				<div class="grid md:grid-cols-2 gap-6">
					<div>
						<label for="firstName" class="block mb-2">{{ $t('contact.writeToUs.firstName') }}</label>
						<input type="text" id="firstName" v-model="form.firstName" required class="w-full p-2 border rounded">
					</div>
					<div>
						<label for="lastName" class="block mb-2">{{ $t('contact.writeToUs.lastName') }}</label>
						<input type="text" id="lastName" v-model="form.lastName" required class="w-full p-2 border rounded">
					</div>
				</div>
				<div class="mt-4">
					<label for="email" class="block mb-2">{{ $t('contact.writeToUs.email') }}</label>
					<input type="email" id="email" v-model="form.email" required class="w-full p-2 border rounded">
				</div>
				<div class="mt-4">
					<label for="company" class="block mb-2">{{ $t('contact.writeToUs.company') }}</label>
					<input type="text" id="company" v-model="form.company" required class="w-full p-2 border rounded">
				</div>
				<div class="mt-4">
					<label for="message" class="block mb-2">{{ $t('contact.writeToUs.message') }}</label>
					<textarea id="message" v-model="form.message" required class="w-full p-2 border rounded" rows="4"></textarea>
				</div>
				<div class="mt-4">
					<!-- Aquí iría el componente de reCAPTCHA -->
					<div class="g-recaptcha" data-sitekey="YOUR_RECAPTCHA_SITE_KEY"></div>
				</div>
				<button type="submit" class="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
					{{ $t('contact.writeToUs.sendButton') }}
				</button>
			</form>
		</section>
	</div>
</template>

<script setup>
const form = ref({
	firstName: '',
	lastName: '',
	email: '',
	company: '',
	message: ''
})

const submitForm = () => {
	// Aquí iría la lógica para enviar el formulario
	console.log('Form submitted:', form.value)
}
</script>