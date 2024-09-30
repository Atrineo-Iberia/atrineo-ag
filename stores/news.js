import { defineStore } from 'pinia'

export const useNewsStore = defineStore('news', {
  state: () => ({
    news: [
      {
        id: 1,
        titleKey: 'news.article1.title',
        slug: 'atrineo-ag-join-forces-with-technical-university-kosice',
        excerptKey: 'news.article1.excerpt',
        contentKey: 'news.article1.content',
        image: '/images/pexels-2.jpg',
        date: '2023-05-15',
        authorKey: 'news.article1.author'
      },
      {
        id: 2,
        titleKey: 'news.article2.title',
        slug: 'atrineo-ag-develops-innovation-projects-at-forschungszentrum-julich',
        excerptKey: 'news.article2.excerpt',
        contentKey: 'news.article2.content',
        image: '/images/pexels-1.jpg',
        date: '2023-04-22',
        authorKey: 'news.article2.author'
      },
      {
        id: 3,
        titleKey: 'news.article3.title',
        slug: 'atrineo-ag-launches-ai-powered-platform-for-sustainable-urban-planning',
        excerptKey: 'news.article3.excerpt',
        contentKey: 'news.article3.content',
        image: '/images/pexels-3.jpg',
        date: '2023-06-10',
        authorKey: 'news.article3.author'
      }
    ]
  }),
  getters: {
    getLatestNews: (state) => (limit) => {
      return state.news.slice(0, limit)
    },
    getNewsBySlug: (state) => (slug) => {
      return state.news.find(article => article.slug === slug)
    }
  }
})