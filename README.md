# cooking-for-peanuts — static reference copy of cookingforpeanuts.com

A complete static snapshot of https://cookingforpeanuts.com (WordPress + Foodie Pro 5 / Feast + WP Recipe Maker),
taken on 23–24 September 2026 as a layout/design reference for the `nutri-website` project.
No WordPress, no PHP: plain HTML, CSS, JS, fonts and images (every srcset size). All links are root-relative,
CDN files live under `_cdn/<host>/`, so the folder can be served from any static host's root.

Live copy: https://fanatic.space/cooking-for-peanuts/

Removed on purpose: third-party analytics and ad scripts of the original owner
(Google Tag Manager/Analytics, AdThrive, Microsoft Clarity, Slickstream, Cloudflare bot-check).
Everything else, including Kit newsletter forms, is left exactly as served.

Serve locally:

    python3 -m http.server 8081

Made with the crawler in https://github.com/Rustam2704 (`nutri-website/tools/mirror.py`,
`fill_missing.py`, `strip.py`, verified with `verify.py` against the origin in headless Firefox).
All content, recipes, photos and trademarks belong to Cooking for Peanuts / Nisha Melvani; this copy is a private study reference.
