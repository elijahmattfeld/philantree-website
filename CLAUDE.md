# Philantree website

Company website for Philantree (philantree.com). This repository is public; keep private business details in `CLAUDE.local.md`, which is gitignored.

## What this is

- A static marketing site: plain HTML, one stylesheet (`assets/css/styles.css`), one script (`assets/js/main.js`). No build step, no framework, no Node. Hosted on GitHub Pages from `main` / root, custom domain in `CNAME`.
- The Philantree mobile app does **not** exist yet. Only concept designs exist (Figma). The site explains the company and collects early-interest sign-ups; later it will link to app downloads.
- Domain is registered at Namecheap. See `README.md` for DNS and Formspree setup.

## Conventions

- Header and footer are duplicated in every page. Change them in all pages together; set `aria-current="page"` on the current nav link.
- Colors come from the logo and live as CSS variables at the top of `styles.css`. Fonts: Montserrat (headings), Source Sans 3 (body), via Google Fonts.
- Forms post to Formspree (`action="https://formspree.io/f/…"`). While the action contains `YOUR_FORM_ID`, `main.js` shows a fallback message instead of sending.
- Preview: `python3 -m http.server 4322` from the repo root.

## Content rules

- Public contact is **only** volunteer@philantree.com. Never add the founder's personal or school email.
- Don't describe app features as working. Label app visuals as concepts.
- Don't claim partners, "verified" organizations, endorsements, user counts or impact numbers that haven't happened.
- Cite outside statistics with a source link.
- Don't mention Peace Corps or imply any affiliation with it unless the founder explicitly asks.
- Update `privacy.html` (and its date) whenever the site starts collecting new data or adds a third-party service.
