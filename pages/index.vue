<template>
  <div>
    <HeroSection 
      :title="$t('hero.home')" 
      :image="'/images/hero-section.webp'" 
      :parallax="true" 
    />
    <WhoWeAre />  
    <OurServices />
    <Industries />
    <Achievements />
    <News />
  </div>
</template>