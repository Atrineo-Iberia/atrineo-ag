import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', {
  state: () => ({
    news: [
      {
        id: 1,
        title: 'Atrineo AG join forces with the Technical University of Kosice to kick-off IaaS 4DR',
        slug: 'atrineo-ag-join-forces-with-technical-university-kosice',
        excerpt: 'Atrineo AG is thrilled to announce its participation in the EU Interreg project IaaS4DR Interreg DTP, at the Technical University of...',
        image: '/images/pexels-2.jpg'
      },
      {
        id: 2,
        title: 'Atrineo AG develops innovation projects and trains young scientists at Forschungszentrum Jülich',
        slug: 'atrineo-ag-develops-innovation-projects-at-forschungszentrum-julich',
        excerpt: 'Atrineo AG has developed the JUICE - Jülich Innovation and Entrepreneurship Certificate programme together with the Innovation Management...',
        image: '/images/pexels-1.jpg'
      },
      // Añade más noticias aquí si es necesario
    ]
  }),
  getters: {
    getLatestNews: (state) => (limit) => {
      return state.news.slice(0, limit)
    }
  }
})