# Product images

Put product photos in the folder that matches the piece's category:

```
public/products/
  necklaces/   e.g. kundan-set-01.jpg, kundan-set-02.jpg
  earrings/    e.g. jhumka-01.jpg
  rings/       e.g. navratna-01.jpg
```

Square images (1:1), ~1200×1200px, look best.

Then in `src/content/products.ts` set the `images` list to the path
**relative to `public/products/`** — i.e. include the category folder:

```ts
images: ['necklaces/kundan-set-01.jpg', 'necklaces/kundan-set-02.jpg'],
```

The first image in the list is the card cover. Leave `images: []` to show a
styled placeholder until the photo is ready.

A plain file name with no folder (`kundan-set-01.jpg`) still works and is
looked up directly in `public/products/`.
