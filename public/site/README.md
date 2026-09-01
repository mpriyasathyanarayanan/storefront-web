# Site images

Non-product imagery goes here — the hero photo, the About section image,
banners, social/OG preview image, etc.

```
public/site/
  hero.jpg
  about.jpg
```

Reference these from a component with the `siteImage()` helper:

```ts
import { siteImage } from '../lib/asset'

<img src={siteImage('hero.jpg')} alt="..." />
```

To turn on the hero photo, drop `hero.jpg` here and set
`HAS_HERO_IMAGE = true` in `src/components/Hero.tsx`.
