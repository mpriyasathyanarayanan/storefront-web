/* ------------------------------------------------------------------
   UI strings — the fixed labels of the interface (buttons, nav, etc.)
   Product text and the brand story live in ./products.ts and ./site.ts.

   To edit wording: change the value on the right. Keep the key on the
   left identical between the `en` and `ja` blocks.
   ------------------------------------------------------------------ */

const en = {
  nav_collections: 'Collections',
  nav_about: 'About',
  nav_contact: 'Contact',
  nav_menu: 'Menu',

  hero_cta_primary: 'View collections',
  hero_cta_secondary: 'Our story',

  collections_all: 'All',

  product_material: 'Material',
  product_details: 'Details',
  product_category: 'Category',
  product_enquire: 'Enquire about this piece',
  product_price_ask: 'Price on request',
  product_close: 'Close',

  contact_email: 'Email',
  contact_instagram: 'Instagram',
  contact_line: 'LINE',
  contact_disclaimer:
    'This site is a showcase only — there is no online checkout. Please get in touch to enquire or order.',

  footer_rights: 'All rights reserved.',
} as const

export type UiKey = keyof typeof en

const ja: Record<UiKey, string> = {
  nav_collections: 'コレクション',
  nav_about: '私たちについて',
  nav_contact: 'お問い合わせ',
  nav_menu: 'メニュー',

  hero_cta_primary: 'コレクションを見る',
  hero_cta_secondary: '私たちの物語',

  collections_all: 'すべて',

  product_material: '素材',
  product_details: '詳細',
  product_category: 'カテゴリー',
  product_enquire: 'この作品について問い合わせる',
  product_price_ask: '価格はお問い合わせください',
  product_close: '閉じる',

  contact_email: 'メール',
  contact_instagram: 'インスタグラム',
  contact_line: 'LINE',
  contact_disclaimer:
    '当サイトはショーケースです。オンライン決済はございません。ご注文・お問い合わせはご連絡ください。',

  footer_rights: 'All rights reserved.',
}

export const ui = { en, ja }
