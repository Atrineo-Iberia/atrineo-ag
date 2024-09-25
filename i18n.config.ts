import menuEN from './locales/en/menu.json'
import menuDE from './locales/de/menu.json'
import heroEN from './locales/en/hero.json'
import heroDE from './locales/de/hero.json'
import servicesEN from './locales/en/services.json'
import servicesDE from './locales/de/services.json'
import industriesEN from './locales/en/industries.json'
import industriesDE from './locales/de/industries.json'
import achievementsEN from './locales/en/achievements.json'
import achievementsDE from './locales/de/achievements.json'
import newsEN from './locales/en/news.json'
import newsDE from './locales/de/news.json'
import footerEN from './locales/en/footer.json'
import footerDE from './locales/de/footer.json'
import policyEN from './locales/en/policy.json'
import policyDE from './locales/de/policy.json'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      ...menuEN,
      ...heroEN,
      ...servicesEN,
      ...industriesEN,
      ...achievementsEN,
      ...newsEN,
      ...footerEN,
      ...policyEN
    },
    de: {
      ...menuDE,
      ...heroDE,
      ...servicesDE,
      ...industriesDE,
      ...achievementsDE,
      ...newsDE,
      ...footerDE,
      ...policyDE
    }
  }
}))