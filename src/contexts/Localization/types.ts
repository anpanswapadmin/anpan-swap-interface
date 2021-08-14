import { ReactText } from 'react'
import { Language } from '@anpanswap/uikit'

export type ContextData = {
  [key: string]: ReactText
}

export interface ProviderState {
  isFetching: boolean
  currentLanguage: Language
}

export interface ContextApi extends ProviderState {
  setLanguage: (language: Language) => void
  t: (key: string, data?: ContextData) => string
  T: (key: string, data?: ContextData) => string
}
