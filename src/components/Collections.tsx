import { useMemo, useState } from 'react'
import { CATEGORIES, products, type Product } from '../content/products'
import { useLang } from '../i18n'
import { ProductCard } from './ProductCard'
import { ProductModal } from './ProductModal'

export function Collections() {
  const { t, pick } = useLang()
  const [filter, setFilter] = useState<string | null>(null)
  const [selected, setSelected] = useState<Product | null>(null)

  const visible = useMemo(
    () =>
      filter
        ? products.filter((p) => p.category.en === filter)
        : products,
    [filter],
  )

  return (
    <section className="section" id="collections">
      <div className="container">
        <p className="eyebrow">Kiraya</p>
        <h2 className="section-title">{t('nav_collections')}</h2>

        <div className="filters">
          <button
            type="button"
            aria-pressed={filter === null}
            onClick={() => setFilter(null)}
          >
            {t('collections_all')}
          </button>
          {CATEGORIES.map((cat) => (
            <button
              key={cat.en}
              type="button"
              aria-pressed={filter === cat.en}
              onClick={() => setFilter(cat.en)}
            >
              {pick(cat)}
            </button>
          ))}
        </div>

        <div className="grid">
          {visible.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={setSelected}
            />
          ))}
        </div>
      </div>

      {selected && (
        <ProductModal
          key={selected.id}
          product={selected}
          onClose={() => setSelected(null)}
        />
      )}
    </section>
  )
}
