# Drop your content here

This folder is a staging area. Put your raw material here, then tell Claude
"the content is in assets-dropbox" and it will resize the images, move them
into `public/products/`, and fill in the catalogue and brand text.

You do **not** need to format anything perfectly. Rough is fine.

## 1. Photos

- Drop in the product photos as `.jpg` or `.png`.
- Name them so it's obvious which piece they belong to, e.g.
  `kundan-set-front.jpg`, `kundan-set-side.jpg`, `jhumka-1.jpg`.
- A square crop (same width and height) looks best, but Claude can crop them.
- One "hero" photo for the top of the page is great too — name it `hero.jpg`.

## 2. Product text

Create a file called `products.txt` (or `.md`, or `.docx` — anything readable)
with one block per piece. Example:

```
Piece: Kundan Bridal Set
Category: Necklace
Material: Gold-plated brass, uncut glass stones, freshwater pearls
Price: ¥28,000   (or leave blank for "price on request")
Description (EN): A layered necklace and earrings in the Kundan tradition...
Description (JA): ラジャスタンのクンダン技法による...
Photos: kundan-set-front.jpg, kundan-set-side.jpg
```

If you only write the English (or only the Japanese), say so and Claude will
draft the other language for you to check.

## 3. Brand story

Create `about.txt` with a few sentences about you and Kiraya — how it started,
who makes the pieces, what makes them special. English or Japanese or both.

## 4. Contact details

In a file called `contact.txt`, put your real:

- email address
- Instagram URL
- LINE link (optional)

---

Once your files are in, this whole folder can be deleted — it is not part of
the published website.
