/* ------------------------------------------------------------------
   Brand-level content: the name, the hero copy, the About story,
   and contact details. Edit the text between the quotes.
   Replace the contact values with your real handles / address.
   ------------------------------------------------------------------ */

export const site = {
  brand: 'Kiraya',

  hero: {
    // `emphasis` is rendered in italic garnet inside the headline.
    title: {
      en: { before: 'Indian craft,', emphasis: 'worn in Japan', after: '' },
      ja: { before: 'インドの手仕事を、', emphasis: '日本の日々へ', after: '' },
    },
    text: {
      en: 'Kiraya brings handcrafted jewellery from India to Japan — pieces made by hand, chosen one at a time, and finished for everyday wear.',
      ja: 'Kiraya（キラヤ）は、インドの職人が一つひとつ手づくりしたジュエリーを日本にお届けします。日常に寄り添う、選び抜いた作品を。',
    },
  },

  about: {
    // Each entry is one paragraph.
    body: {
      en: [
        'Kiraya began with a small collection carried in a suitcase from India to Japan — gold-toned pieces, temple work, and stones set the way they have been for generations.',
        'Every piece is made by hand by artisans we know by name. We keep the collection small on purpose, so that each item is chosen, checked, and cared for.',
        'We are based in Japan and ship within the country. If you would like to see a piece in person or ask about a custom order, please write to us.',
      ],
      ja: [
        'Kiraya は、インドから日本へスーツケースひとつで運んだ小さなコレクションから始まりました。金色の輝き、寺院の細工、何世代も受け継がれてきた石のセッティング。',
        'すべての作品は、名前を知る職人たちの手仕事によるものです。あえて数を絞り、一点ずつ選び、確かめ、丁寧にお届けしています。',
        '日本を拠点に、国内へ発送しています。実物をご覧になりたい方、オーダーのご相談は、お気軽にご連絡ください。',
      ],
    },
  },

  contact: {
    // Replace these with your real details.
    email: 'hello@example.com',
    instagram: 'https://instagram.com/your_handle',
    line: '', // e.g. 'https://line.me/ti/p/xxxxxxx' — leave '' to hide the LINE button
    location: {
      en: 'Ships within Japan',
      ja: '日本国内発送',
    },
  },
}
