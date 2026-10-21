# Philantree website

The company website for [philantree.com](https://www.philantree.com/). Plain HTML, CSS and a little JavaScript, with no build step. Hosted on GitHub Pages.

## Files

| Path | What it is |
|---|---|
| `index.html` | Home page |
| `about.html` | Our Story |
| `nonprofits.html` | For Nonprofits, with the pilot sign-up form |
| `contact.html` | Contact, with the early-access form |
| `privacy.html` | Privacy policy |
| `404.html` | "Page not found" page (GitHub Pages uses it automatically) |
| `assets/css/styles.css` | All styles. Brand colors are at the top. |
| `assets/js/main.js` | Mobile menu and form submission |
| `assets/img/` | Web-sized logos, favicon, social share image |
| `brand/logo/` | Original full-size logo files |
| `CNAME` | Tells GitHub Pages to serve the site at www.philantree.com |

The header and footer are repeated in each HTML page. If you change one, change it in all of them.

## Preview locally

```bash
python3 -m http.server 4322
```

Then open http://localhost:4322.

## Connect the sign-up forms (Formspree)

The forms currently show a "Sign-ups open soon" message instead of sending.

1. Create a free account at [formspree.io](https://formspree.io) using volunteer@philantree.com.
2. Create a new form. Formspree gives you an endpoint like `https://formspree.io/f/abcdwxyz`.
3. Replace `YOUR_FORM_ID` with your form ID in `index.html`, `nonprofits.html` and `contact.html`.

Submissions will arrive by email and appear in the Formspree dashboard.

## Publish on GitHub Pages

1. Create a new public GitHub repository, for example `philantree-website`, and push this folder to it.
2. In the repository, go to **Settings → Pages**. Set **Source** to "Deploy from a branch", choose `main` and `/ (root)`.
3. Under **Custom domain**, enter `www.philantree.com` and save.
4. Once DNS is working (below), turn on **Enforce HTTPS**.

## Point philantree.com at GitHub (Namecheap)

In Namecheap: **Domain List → philantree.com → Manage → Advanced DNS**.

Remove any old Wix records (A records or CNAMEs pointing to Wix). **Don't remove MX or TXT records used for email.**

Add:

| Type | Host | Value |
|---|---|---|
| A Record | `@` | `185.199.108.153` |
| A Record | `@` | `185.199.109.153` |
| A Record | `@` | `185.199.110.153` |
| A Record | `@` | `185.199.111.153` |
| CNAME Record | `www` | `elijahmattfeld.github.io.` |

DNS changes can take up to a few hours. GitHub will then serve the site at www.philantree.com and redirect philantree.com to it.

It's also worth verifying the domain in your GitHub account (**Settings → Pages → Add a domain**). That stops anyone else from claiming it on GitHub.
