/** Resolve a file under public/ to a URL that works both in local dev
 *  and under the GitHub Pages base path. */
function asset(path: string): string {
  return `${import.meta.env.BASE_URL}${path.replace(/^\/+/, '')}`
}

/** Resolve a product photo living in public/products/.
 *  Pass a plain file name for the flat folder (`kundan-set-01.jpg`) or a
 *  category-prefixed path for the subfolders (`necklaces/kundan-set-01.jpg`). */
export function productImage(fileName: string): string {
  return asset(`products/${fileName}`)
}

/** Resolve a non-product site image living in public/site/
 *  (hero photo, About section, banners, og image, ...). */
export function siteImage(fileName: string): string {
  return asset(`site/${fileName}`)
}
