import ns1 from './zh.json'
import { defaultNS } from '.'

const resources = { ns1 } as const

declare module 'i18next' {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS
    resources: typeof resources
  }
}
