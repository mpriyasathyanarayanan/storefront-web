import { site } from '../content/site'
import { useLang } from '../i18n'
import { productImage } from '../lib/asset'

// Drop a file named `hero.jpg` into public/products/ to use a real
// photo here; until then a styled placeholder is shown.
const HERO_IMAGE = 'hero.jpg'
const HAS_HERO_IMAGE = false

export function Hero() {
  const { t, pick } = useLang()
  const title = pick(site.hero.title)

  return (
    <section className="hero" id="top">
      <div className="container hero__inner">
        <div>
          <h1 className="hero__title">
            {title.before} <em>{title.emphasis}</em> {title.after}
          </h1>
          <p className="hero__text">{pick(site.hero.text)}</p>
          <div className="hero__actions">
            <a className="btn" href="#collections">
              {t('hero_cta_primary')}
            </a>
            <a className="btn btn--ghost" href="#about">
              {t('hero_cta_secondary')}
            </a>
          </div>
        </div>

        <div
          className={
            HAS_HERO_IMAGE ? 'hero__media' : 'hero__media hero__media--placeholder'
          }
        >
          {HAS_HERO_IMAGE ? (
            <img src={productImage(HERO_IMAGE)} alt={site.brand} />
          ) : (
            <span>
              {site.brand}
              <br />
              hero image
            </span>
          )}
        </div>
      </div>
    </section>
  )
}
