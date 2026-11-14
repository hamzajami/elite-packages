# Elite Packages: website

Marketing and quote-request site for Elite Packages (flexible packaging, Lahore).
Built with React, Vite and Tailwind CSS. It is a static site: no backend and no API keys.

## Run locally
```
npm install
npm run dev
```

## Build
```
npm run build     # creates the dist/ folder
npm run preview   # serve the built site locally
```

## Change content
- Company details, products, gallery text: `src/data/companyData.ts`
- Gallery photos: add `slot-01.jpg`, `slot-02.jpg` ... to `public/images/gallery/`

## Deploy
Push to GitHub, import the repo in Vercel (framework: Vite, build `npm run build`, output `dist`).
Every push to `main` redeploys automatically.
