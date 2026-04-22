# Ocheeflow Landing Page

Static landing page for the Ocheeflow brand. Live at [ocheeflow.com](https://ocheeflow.com).

## Stack

- Vanilla HTML, CSS, JavaScript — no frameworks or build step
- Hosted on GitHub Pages
- Custom domain via GoDaddy DNS
- Newsletter signups proxied to Beehiiv via a Google Cloud Function

## Structure

```
ocheeflow-landing/
├── index.html           # All markup and inline styles
├── styles.css           # (currently unused — CSS lives in index.html)
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
| Newsletter | Email signup form → Cloud Function → Beehiiv |

## Updating Links

All brand URLs are defined once in the `LINKS` object in `index.html`:

```js
const LINKS = {
  instagram: 'https://www.instagram.com/ocheeflow/',
  tiktok:    'https://www.tiktok.com/@ocheeflow',
  // payhip: 'https://payhip.com/...'
};
```

The newsletter form posts to the Cloud Function defined in `ocheeflow-subscribe`.

## Deployment

Hosted on GitHub Pages from the `main` branch. Pushing to `main` deploys automatically.

DNS is managed in GoDaddy with four A records pointing to GitHub Pages IPs:
```
185.199.108.153
185.199.109.153
185.199.110.153
185.199.111.153
```
