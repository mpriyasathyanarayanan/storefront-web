import { useState } from 'react'
import { site } from '../content/site'
import { useLang } from '../i18n'

export function Contact() {
  const { t, pick } = useLang()
  const { email, instagram, line } = site.contact
  const [showEmail, setShowEmail] = useState(false)

  return (
    <section className="section" id="contact">
      <div className="container contact__inner">
        <p className="eyebrow">{t('nav_contact')}</p>
        <h2 className="section-title">{t('nav_contact')}</h2>
        <p className="section-intro" style={{ margin: '18px auto 0' }}>
          {pick(site.contact.location)}
        </p>

        <div className="contact__links">
          {email && (
            <button
              type="button"
              className="btn"
              aria-expanded={showEmail}
              onClick={() => setShowEmail((v) => !v)}
            >
              {t('contact_email')}
            </button>
          )}
          {instagram && (
            <a
              className="btn btn--ghost"
              href={instagram}
              target="_blank"
              rel="noreferrer"
            >
              {t('contact_instagram')}
            </a>
          )}
          {line && (
            <a
              className="btn btn--ghost"
              href={line}
              target="_blank"
              rel="noreferrer"
            >
              {t('contact_line')}
            </a>
          )}
        </div>

        {email && showEmail && (
          <p className="contact__email">
            <a className="contact__email-value" href={`mailto:${email}`}>
              {email}
            </a>
          </p>
        )}

        <p className="contact__note">{t('contact_disclaimer')}</p>
      </div>
    </section>
  )
}
