import { useState } from 'react'
import { site } from '../content/site'
import { useLang } from '../i18n'

export function Header() {
  const { t, lang, setLang } = useLang()
  const [open, setOpen] = useState(false)

  const close = () => setOpen(false)

  return (
    <header className="header">
      <div className="container header__inner">
        <a href="#top" className="brand" onClick={close}>
          {site.brand}
        </a>

        <button
          type="button"
          className="nav-toggle"
          aria-expanded={open}
          aria-label={t('nav_menu')}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
        </button>

        <nav className="nav" data-open={open}>
          <a href="#collections" onClick={close}>
            {t('nav_collections')}
          </a>
          <a href="#about" onClick={close}>
            {t('nav_about')}
          </a>
          <a href="#contact" onClick={close}>
            {t('nav_contact')}
          </a>

          <div
            className="lang-toggle"
            role="group"
            aria-label="Language / 言語"
          >
            <button
              type="button"
              aria-pressed={lang === 'ja'}
              onClick={() => setLang('ja')}
            >
              日本語
            </button>
            <button
              type="button"
              aria-pressed={lang === 'en'}
              onClick={() => setLang('en')}
            >
              EN
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}
