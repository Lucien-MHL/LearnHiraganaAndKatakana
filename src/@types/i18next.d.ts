import lang from '@/i18n/locales/zh.json'
import { defaultNS } from '@/i18n'

const resources = { lang } as const

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: typeof resources
  }
}
