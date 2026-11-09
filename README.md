# Elysian Farms & Resort – Landing Page
Plain HTML + CSS + vanilla JS. No build step. Open `index.html`, or deploy the folder to any static host.

## Update prices / payment details
Edit **`js/data.js`** only. `null` shows "₦ Price to be announced". Numbers are auto-formatted as ₦ everywhere. Payment fields (`deposit`, `instalmentFrequency`, `duration`, `finalPaymentDeadline`) show the "Contact our team…" fallback until filled. WhatsApp messages are in the same file.

## Replace images
Same-named files in `assets/images/<section>/` (extracted from the brochure and optimised). Logo: `assets/logo/elysian-logo.png`. Update width/height attributes in `index.html` if the ratio changes. `assets/images/hero/design-wireframe-reference.jpeg` is a reference only.

## Test locally
`python3 -m http.server 8000` then open http://localhost:8000

## Deploy
Upload the folder to Netlify, Vercel (static), GitHub Pages or cPanel. Then add the canonical URL and an absolute `og:image` URL in `index.html`.

## Outstanding placeholders
All land, building, cottage prices; payment plan details; Privacy Policy and Terms pages; social media URLs; separate wireframe-style hero (the brochure entrance photo is used); landmark/amenity photos are brochure imagery (illustrative).
