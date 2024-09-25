<template>
  <div>
    <HeroSection />
    <WhoWeAre />  
    <OurServices />
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Industries</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
        </div>
      </div>
    </section>
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Achievements</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
        </div>
      </div>
    </section>
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">Partners</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
        </div>
      </div>
    </section>
    <section class="py-16 bg-gray-50">
      <div class="container mx-auto px-4">
        <h2 class="text-3xl font-bold mb-8 text-center">News</h2>
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProjectCard v-for="project in featuredProjects" :key="project.id" :project="project" />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const mainStore = useMainStore()
const { services, stats, featuredProjects } = storeToRefs(mainStore)
</script>