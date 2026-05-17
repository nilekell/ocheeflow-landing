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
├── index.html                  # All markup
├── styles.css
├── main.js                     # Links config, modal logic, newsletter form
├── The Ocheeflow Guide.pdf     # Self-hosted guide (served at /The%20Ocheeflow%20Guide.pdf)
├── white-icon.png              # Brand logo (white)
├── hero-bg.jpeg                # Hero section background
├── lifestyle-1.png             # Lifestyle break section image
├── founders.jpg                # Founders section photo
├── icon-instagram.png          # Footer social icon
├── icon-tiktok.png             # Footer social icon
├── texture_background.png
└── CNAME                       # GitHub Pages custom domain config
```

## Sections

| Section | Description |
|---|---|
| Hero | Ocheeflow philosophy — the brand intro |
| Rhythms | Six expandable cards (click to expand) |
| Who This Is For | Target audience copy |
| Free Guide | Email-gated PDF download — collects email via modal then links to the guide |
| Founders | Short founder bio |
| Newsletter | Email signup form wired to Beehiiv |

## Updating Links

All brand URLs and API endpoints are defined in `main.js`:

```js
const SUBSCRIBE_URL = 'https://europe-west2-ocheeflow.cloudfunctions.net/subscribe';
const GUIDE_URL = 'https://ocheeflow.com/The%20Ocheeflow%20Guide.pdf';

const LINKS = {
  instagram: 'https://www.instagram.com/ocheeflow/',
  tiktok:    'https://www.tiktok.com/@ocheeflow',
};
```

To swap the guide PDF, replace `The Ocheeflow Guide.pdf` in the repo root and update `GUIDE_URL` if the filename changes.

## Deployment

Hosted on GitHub Pages from the `main` branch. Pushing to `main` deploys automatically.
