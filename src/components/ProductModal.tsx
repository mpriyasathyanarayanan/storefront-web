import { useEffect, useState } from 'react'
import type { Product } from '../content/products'
import { site } from '../content/site'
import { useLang } from '../i18n'
import { productImage } from '../lib/asset'

export function ProductModal({
  product,
  onClose,
}: {
  product: Product
  onClose: () => void
}) {
  const { t, pick } = useLang()
  // `product` is stable for the life of this component — Collections
  // remounts the modal (via key) when a different piece is opened.
  const [active, setActive] = useState(0)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    document.addEventListener('keydown', onKey)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.body.style.overflow = ''
    }
  }, [onClose])

  const name = pick(product.name)
  const images = product.images
  const enquireHref = `mailto:${site.contact.email}?subject=${encodeURIComponent(
    `${site.brand} — ${name}`,
  )}`

  return (
    <div
      className="modal-backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={name}
    >
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <button
          type="button"
          className="modal__close"
          onClick={onClose}
          aria-label={t('product_close')}
        >
          ×
        </button>

        <div>
          <div className="modal__media">
            {images[active] ? (
              <img src={productImage(images[active])} alt={name} />
            ) : (
              <span className="ph">{name}</span>
            )}
          </div>
          {images.length > 1 && (
            <div className="thumbs">
              {images.map((img, i) => (
                <button
                  key={img}
                  type="button"
                  aria-pressed={i === active}
                  onClick={() => setActive(i)}
                >
                  <img src={productImage(img)} alt={`${name} ${i + 1}`} />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="modal__body">
          <div className="card__cat">{pick(product.category)}</div>
          <h3>{name}</h3>

          <dl className="modal__meta">
            <dt>{t('product_details')}</dt>
            <dd>{pick(product.description)}</dd>
            <dt>{t('product_material')}</dt>
            <dd>{pick(product.material)}</dd>
          </dl>

          <div className="modal__price">
            {product.price || t('product_price_ask')}
          </div>

          <div className="modal__cta">
            <a className="btn" href={enquireHref}>
              {t('product_enquire')}
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
