import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import { ui, type UiKey } from './content/ui'

export type Lang = 'ja' | 'en'

const STORAGE_KEY = 'kiraya-lang'

type LangContextValue = {
  lang: Lang
  setLang: (l: Lang) => void
  /** translate a UI string key */
  t: (key: UiKey) => string
  /** pick the right field from a { en, ja } pair on content data */
  pick: <T>(pair: { en: T; ja: T }) => T
}

const LangContext = createContext<LangContextValue | null>(null)

function readInitialLang(): Lang {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored === 'ja' || stored === 'en') return stored
  } catch {
    /* localStorage may be unavailable */
  }
  // Default to Japanese for the Japan-based audience; fall back to
  // English only if the browser clearly prefers it.
  if (typeof navigator !== 'undefined' && navigator.language.startsWith('en')) {
    return 'en'
  }
  return 'ja'
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(readInitialLang)

  useEffect(() => {
    document.documentElement.lang = lang
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      /* ignore */
    }
  }, [lang])

  const setLang = useCallback((l: Lang) => setLangState(l), [])

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      setLang,
      t: (key) => ui[lang][key] ?? ui.en[key] ?? key,
      pick: (pair) => pair[lang],
    }),
    [lang, setLang],
  )

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>
}

// eslint-disable-next-line react-refresh/only-export-components
export function useLang(): LangContextValue {
  const ctx = useContext(LangContext)
  if (!ctx) throw new Error('useLang must be used within <LangProvider>')
  return ctx
}
