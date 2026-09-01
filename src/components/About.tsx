import { site } from '../content/site'
import { useLang } from '../i18n'

export function About() {
  const { t, pick } = useLang()

  return (
    <section className="section about" id="about">
      <div className="container about__grid">
        <div>
          <p className="eyebrow">{t('nav_about')}</p>
          <h2 className="section-title">{site.brand}</h2>
          <div className="about__body">
            {pick(site.about.body).map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
        <div className="about__media">
          <span>
            {site.brand}
            <br />
            portrait
          </span>
        </div>
      </div>
    </section>
  )
}
