import { defineStore } from 'pinia'

export const useMainStore = defineStore('main', {
  state: () => ({
    services: [
      {
        id: 1, 
        title: 'Innovation Management', 
        features: [
          { title: 'Development and Implementation', description: 'Crafting and executing innovation strategies to meet changing industry demands.' },
          { title: 'Cooperation and Networking', description: 'Facilitating multi-actor cooperation to bring research into practical application.' },
          { title: 'Market Analysis', description: 'Conducting thorough market analyses to position new technologies optimally.' },
          { title: 'Success and Impact Analysis', description: 'Measuring the success and impact of transfer activities.' }
        ]
      },
      {
        id: 2,
        title: 'Knowledge Transfer',
        features: [
          { title: 'Development and Implementation', description: 'Crafting and executing innovation strategies to meet changing industry demands.' },
          { title: 'Cooperation and Networking', description: 'Facilitating multi-actor cooperation to bring research into practical application.' },
          { title: 'Market Analysis', description: 'Conducting thorough market analyses to position new technologies optimally.' },
          { title: 'Success and Impact Analysis', description: 'Measuring the success and impact of transfer activities.' }
        ]
      },
      {
        id: 3,
        title: 'Technology Transfer',
        features: [
          { title: 'Development and Implementation', description: 'Crafting and executing innovation strategies to meet changing industry demands.' },
          { title: 'Cooperation and Networking', description: 'Facilitating multi-actor cooperation to bring research into practical application.' },
          { title: 'Market Analysis', description: 'Conducting thorough market analyses to position new technologies optimally.' },
          { title: 'Success and Impact Analysis', description: 'Measuring the success and impact of transfer activities.' }
        ]
      }
    ],
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
