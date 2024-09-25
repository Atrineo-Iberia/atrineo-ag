import menuEN from './locales/en/menu.json'
import menuDE from './locales/de/menu.json'
import servicesEN from './locales/en/services.json'
import servicesDE from './locales/de/services.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      ...menuEN,
      ...servicesEN
    },
    de: {
      ...menuDE,
      ...servicesDE
    }
  }
}))