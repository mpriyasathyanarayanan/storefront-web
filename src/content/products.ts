/* ------------------------------------------------------------------
   Product catalogue.

   HOW TO ADD A PIECE
   1. Put its photo(s) in  public/products/  (e.g. kundan-set-01.jpg).
      Square images (1:1), ~1200x1200px, look best.
   2. Add an entry to the `products` array below.
   3. `images` is a list of file names from public/products/.
      Leave it as [] to show a styled placeholder until the photo is ready.
   4. Keep `category` spelled exactly as one of the CATEGORIES values.

   Prices: use a string so you can write "¥28,000" or leave "" for
   "Price on request".
   ------------------------------------------------------------------ */

export type Bilingual = { en: string; ja: string }

export type Product = {
  id: string
  images: string[]
  price: string
  name: Bilingual
  category: Bilingual
  material: Bilingual
  description: Bilingual
}

/** Filter buttons on the Collections section, in display order. */
export const CATEGORIES: Bilingual[] = [
  { en: 'Necklaces', ja: 'ネックレス' },
  { en: 'Earrings', ja: 'イヤリング' },
  { en: 'Bangles', ja: 'バングル' },
  { en: 'Rings', ja: 'リング' },
]

export const products: Product[] = [
  {
    id: 'kundan-set',
    images: [],
    price: '',
    name: { en: 'Kundan Bridal Set', ja: 'クンダン ブライダルセット' },
    category: { en: 'Necklaces', ja: 'ネックレス' },
    material: {
      en: 'Gold-plated brass, uncut glass stones, freshwater pearls',
      ja: 'ゴールドプレート真鍮、カットなしガラスストーン、淡水パール',
    },
    description: {
      en: 'A layered necklace and earrings in the Kundan tradition of Rajasthan, where stones are set in refined gold foil entirely by hand.',
      ja: 'ラジャスタンのクンダン技法による、ネックレスとイヤリングのセット。石を金箔で一つずつ手作業でセットしています。',
    },
  },
  {
    id: 'jhumka-classic',
    images: [],
    price: '',
    name: { en: 'Temple Jhumka Earrings', ja: 'テンプル ジュムカ イヤリング' },
    category: { en: 'Earrings', ja: 'イヤリング' },
    material: {
      en: 'Gold-plated silver, red and green enamel',
      ja: 'ゴールドプレートシルバー、赤・緑のエナメル',
    },
    description: {
      en: 'Bell-shaped jhumka earrings inspired by South Indian temple jewellery, light enough for daily wear.',
      ja: '南インドの寺院装飾に着想を得たベル型のジュムカ。毎日つけられる軽さです。',
    },
  },
  {
    id: 'polki-choker',
    images: [],
    price: '',
    name: { en: 'Polki Choker', ja: 'ポルキ チョーカー' },
    category: { en: 'Necklaces', ja: 'ネックレス' },
    material: {
      en: 'Gold-plated brass, polki-style stones',
      ja: 'ゴールドプレート真鍮、ポルキ調ストーン',
    },
    description: {
      en: 'A close-fitting choker with flat, uncut-style stones that catch the light softly rather than sparkle.',
      ja: '首元に沿うチョーカー。フラットなカットなし調の石が、きらめきよりもやわらかな光を返します。',
    },
  },
  {
    id: 'meenakari-bangles',
    images: [],
    price: '',
    name: { en: 'Meenakari Bangle Pair', ja: 'ミーナカリ バングル（ペア）' },
    category: { en: 'Bangles', ja: 'バングル' },
    material: {
      en: 'Lac core, gold-plated metal, hand-painted enamel',
      ja: 'ラック芯、ゴールドプレート金属、手描きエナメル',
    },
    description: {
      en: 'A pair of bangles finished with Meenakari enamel work — colour fired onto metal by hand, motif by motif.',
      ja: 'ミーナカリのエナメル細工で仕上げたバングルのペア。文様を一つずつ手作業で焼き付けています。',
    },
  },
  {
    id: 'navratna-ring',
    images: [],
    price: '',
    name: { en: 'Navratna Ring', ja: 'ナヴラトナ リング' },
    category: { en: 'Rings', ja: 'リング' },
    material: {
      en: 'Gold-plated silver, nine coloured stones',
      ja: 'ゴールドプレートシルバー、9色のストーン',
    },
    description: {
      en: 'The nine-stone Navratna arrangement, a motif worn across India for centuries, set in a single band.',
      ja: 'インドで何世紀も親しまれてきた9つの石の配置「ナヴラトナ」を、一つの指輪に。',
    },
  },
  {
    id: 'chandbali',
    images: [],
    price: '',
    name: { en: 'Chandbali Earrings', ja: 'チャンドバリ イヤリング' },
    category: { en: 'Earrings', ja: 'イヤリング' },
    material: {
      en: 'Gold-plated brass, pearl drops',
      ja: 'ゴールドプレート真鍮、パールドロップ',
    },
    description: {
      en: 'Crescent-moon earrings — chand means moon — with a fringe of small pearl drops.',
      ja: '三日月をかたどったイヤリング（チャンド＝月）。小さなパールドロップのフリンジが揺れます。',
    },
  },
]
