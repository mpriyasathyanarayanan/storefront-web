/** Resolve a file in public/products/ to a URL that works both in
 *  local dev and under the GitHub Pages base path. */
export function productImage(fileName: string): string {
  return `${import.meta.env.BASE_URL}products/${fileName}`
}
