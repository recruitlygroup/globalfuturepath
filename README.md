# Global Futurepath Academy website
Static site (HTML/CSS/JS) for GitHub Pages. Domain: globalfuturepathtraining.com

## Publish (no VS Code needed)
1. github.com > New repository (e.g. `globalfuturepath-site`), public.
2. Unzip this folder on your computer. In the repo click Add file > Upload files, drag in everything inside the folder (include `.nojekyll`, `CNAME`), then Commit.
3. Settings > Pages > Source: Deploy from a branch > `main` / root > Save. Under Custom domain enter globalfuturepathtraining.com and tick Enforce HTTPS.
4. At your domain registrar's DNS add four A records for `@`: 185.199.108.153, 185.199.109.153, 185.199.110.153, 185.199.111.153, and a CNAME `www` -> `<your-github-username>.github.io`.

## Make forms work
Get a free access key at web3forms.com (use info@globalfuturepathtraining.com), paste it into `ACCESS_KEY` in `js/main.js`. Edit files directly on GitHub (pencil icon).
