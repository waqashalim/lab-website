# AI4Edu Lab

A lightweight, responsive static website for the AI4Edu Lab. It uses plain HTML, CSS, and JavaScript; no framework, database, paid service, or build step is required.

## Edit the site

- **Text and sections:** edit `index.html`.
- **Colors, typography, and layout:** edit `src/style.css`. The main colors are defined at the top as CSS variables.
- **Mobile menu and visual interaction:** edit `src/main.js`.
- **Contact address:** replace both visible instances of `hello@yourdomain.com` in `index.html` with one of your real addresses.
- Replace the starter project descriptions with your actual projects and add team members or publications when ready.

## Preview locally

Open `index.html` in a browser, or run a small local server from this folder:

```sh
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Free hosting with Vercel

1. Create a free GitHub account and put this folder in a new repository.
2. Sign up for Vercel with GitHub and import that repository.
3. Because this is a static site, no build command or output directory is needed.
4. In Vercel, open **Project → Settings → Domains** and add your GoDaddy domain.
5. Vercel will show the DNS records to add in GoDaddy. Typically this is an `A` record for the root domain and a `CNAME` record for `www`; use the exact values Vercel displays.
6. Wait for DNS propagation and Vercel's automatic HTTPS certificate.

Keep your existing email DNS records, especially `MX` records, unchanged when connecting the website. Website hosting and email hosting are separate.

## Free hosting alternative

Netlify and GitHub Pages also support static sites. For the simplest Git-based workflow with straightforward custom-domain setup, Vercel or Netlify are good choices. Cloudflare Pages is another free option, especially if you later move DNS management to Cloudflare.
