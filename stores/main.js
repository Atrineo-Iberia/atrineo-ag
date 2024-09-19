import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    services: [],
    stats: [],
    featuredProjects: []
  }),
  actions: {
    setServices(services) {
      this.services = services
    },
    setStats(stats) {
      this.stats = stats
    },
    setFeaturedProjects(projects) {
      this.featuredProjects = projects
    }
  }
})
