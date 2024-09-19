import menuEN from './locales/en/menu.json'
import menuDE from './locales/de/menu.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      ...menuEN
    },
    de: {
      ...menuDE
    }
  }
}))