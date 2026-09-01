# storefront-web

Showcase website for **Kiraya** — handcrafted Indian jewellery, presented for a
Japanese audience. Bilingual (日本語 / English). No online checkout: the site
displays pieces and points visitors to email / Instagram / LINE to enquire.

Built with React + Vite + TypeScript. Deployed to GitHub Pages.

---

## Branches

| Branch    | Purpose                                                                 |
| --------- | ---------------------------------------------------------------------- |
| `main`    | Production. Every push here auto-builds and publishes the live site. Protected — only updated via pull request. |
| `develop` | Working branch. All changes land here first. Merge to `main` when ready to publish. |

Typical flow: make changes on `develop` → open a pull request from `develop`
into `main` → review → merge → the site redeploys automatically.

---

## Running it locally

```bash
npm install
npm run dev      # http://localhost:5173
```

Other commands:

```bash
npm run build    # production build into dist/
npm run preview  # serve the production build locally
npm run lint
```

---

## Editing content (no coding needed)

All text and product data live in `src/content/`:

| File                     | What it holds                                          |
| ------------------------ | ----------------------------------------------------- |
| `src/content/site.ts`    | Brand name, hero headline, About story, contact details |
| `src/content/products.ts`| The product catalogue                                  |
| `src/content/ui.ts`      | Fixed interface labels (buttons, navigation)           |

Each piece of text appears twice — once under `en`, once under `ja`. Edit the
words between the quotes; keep the structure the same.

### Adding a product

1. Put the photo(s) in `public/products/` (e.g. `kundan-set-01.jpg`).
2. Add an entry to the `products` array in `src/content/products.ts`.
3. List the photo file names in that entry's `images` field.
   Leave `images: []` to show a styled placeholder until a photo is ready.

The quickest path: drop everything into the `assets-dropbox/` folder and ask
Claude to wire it in — see `assets-dropbox/README.md`.

---

## Deployment

`.github/workflows/deploy.yml` builds the site and publishes it to GitHub Pages
on every push to `main`.

One-time setup in the GitHub repo:

1. **Settings → Pages → Build and deployment → Source: GitHub Actions.**
2. **Settings → Branches → Add branch protection rule** for `main`
   (require a pull request before merging).

Live URL: `https://mpriyasathyanarayanan.github.io/storefront-web/`

To use a custom domain (e.g. `kiraya.jp`) later: add it under Settings → Pages,
and change `base` in `vite.config.ts` from `'/storefront-web/'` to `'/'`.
