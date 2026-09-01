import type { Product } from '../content/products'
import { useLang } from '../i18n'
import { productImage } from '../lib/asset'

export function ProductCard({
  product,
  onOpen,
}: {
  product: Product
  onOpen: (p: Product) => void
}) {
  const { t, pick } = useLang()
  const name = pick(product.name)
  const cover = product.images[0]

  return (
    <button type="button" className="card" onClick={() => onOpen(product)}>
      <div className="card__media">
        {cover ? (
          <img src={productImage(cover)} alt={name} loading="lazy" />
        ) : (
          <span className="ph">{name}</span>
        )}
      </div>
      <div className="card__cat">{pick(product.category)}</div>
      <div className="card__name">{name}</div>
      <div className="card__price">
        {product.price || t('product_price_ask')}
      </div>
    </button>
  )
}
