# Ocheeflow Landing Page

Static landing page for the Ocheeflow brand. Live at [ocheeflow.com](https://ocheeflow.com).

## Stack

- Vanilla HTML, CSS, JavaScript — no frameworks or build step
- Hosted on GitHub Pages
- Custom domain managed via GoDaddy DNS
- Newsletter signups proxied to Beehiiv via a Google Cloud Function

## Structure

```
ocheeflow-landing/
├── index.html           # All markup and inline styles
├── styles.css
├── white-icon.png       # Brand logo (white)
├── texture_background.png
└── CNAME                # GitHub Pages custom domain config
```

## Sections

| Section | Description |
|---|---|
| Hero | Ocheeflow philosophy — the brand intro |
| Principles | Six expandable cards (click to expand) |
| Words We Live By | Jamaican phrases and brand mottos |
| Who This Is For | Target audience copy |
| Free Guide | Payhip download link (update in `LINKS` config) |
| Newsletter | Email signup form wired to Beehiiv |

## Updating Links

All brand URLs are defined once in the `LINKS` object in `index.html`:

```js
const LINKS = {
  instagram: 'https://www.instagram.com/ocheeflow/',
  tiktok:    'https://www.tiktok.com/@ocheeflow',
  // payhip: 'https://payhip.com/...'
};
```

## Deployment

Hosted on GitHub Pages from the `main` branch. Pushing to `main` deploys automatically.
