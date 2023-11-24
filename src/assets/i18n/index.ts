import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import ns1 from './zh.json'

export const defaultNS = 'ns1'

await i18n.use(initReactI18next).init({
  fallbackLng: 'zh',
  defaultNS,
  resources: {
    zh: { ns1 },
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})

export default i18n
