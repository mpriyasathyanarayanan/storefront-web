import { site } from '../content/site'
import { useLang } from '../i18n'

export function Footer() {
  const { t } = useLang()
  const year = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <span className="brand">{site.brand}</span>
        <span>
          © {year} {site.brand}. {t('footer_rights')}
        </span>
      </div>
    </footer>
  )
}
