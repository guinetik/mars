import { createI18n } from 'vue-i18n'
import en from './en.json'
import ptBR from './pt-BR.json'

const savedLocale = typeof localStorage !== 'undefined'
  ? localStorage.getItem('mars-locale')
  : null

export const i18n = createI18n({
  legacy: false,
  locale: savedLocale || 'en',
  fallbackLocale: 'en',
  messages: { en, 'pt-BR': ptBR }
})
