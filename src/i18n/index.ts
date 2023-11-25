import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import zh from './locales/zh.json'
import en from './locales/en.json'

export const defaultNS = 'lang'

await i18n.use(initReactI18next).init({
  fallbackLng: 'zh-TW',
  defaultNS,
  resources: {
    'zh-TW': { lang: zh },
    'en-US': { lang: en },
  },
  interpolation: {
    escapeValue: false, // react already safes from xss
  },
})

export default i18n
