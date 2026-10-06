# IMF Classic Collection

A responsive menswear catalog for the Boadua shop, opposite Presby Senior High School. The product grid supports category filters, search, and saved items. Shoppers can add items to an enquiry list and send the list to the shop on WhatsApp. Product prices are intentionally not shown.

## Run locally

```sh
npm install
npm run dev
```

## Build for deployment

```sh
npm run build
```

Deploy the project on Vercel or Netlify with the build command `npm run build` and output directory `dist`. Both platforms detect Vite automatically. Product photography currently loads from Unsplash; replace the image URLs in `src/App.jsx` with the shop's own photos before launch. The WhatsApp number is set in `src/App.jsx`.
