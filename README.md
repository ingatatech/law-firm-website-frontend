# Law Firm Website — Frontend

React + Vite + Tailwind CSS + React Router. Uses **mock data** (see `src/data/mockData.js`) shaped exactly like your Prisma schema, so connecting it to your real Node.js API later is a small change, not a rewrite.

## How to run this on your machine

```bash
cd law-firm-frontend
npm install
npm run dev
```

Open the URL shown in your terminal (usually `http://localhost:5173`).

**Important:** I could not run `npm install` or test this project myself — my working environment has no internet access. I checked every file carefully by hand (imports, file names, route paths, Tailwind class names), but you must run it yourself to confirm it actually works. If you hit an error, copy the exact terminal message and send it to me — don't guess.

## Pages included

| Route | Page |
|---|---|
| `/` | Home |
| `/about` | About |
| `/practice-areas` | Practice Areas list |
| `/practice-areas/:slug` | One practice area's detail |
| `/attorneys` | Our Team list |
| `/attorneys/:id` | One attorney's profile |
| `/insights` | Articles list |
| `/insights/:slug` | One article |
| `/faqs` | FAQs (accordion) |
| `/contact` | Contact form |
| `/consultation` | Consultation request form |

Admin/CMS pages are **not included** — that was moved to a later phase, as we agreed earlier.

## Connecting to your real backend later

Every place with mock data has a comment showing exactly what to replace. Example, in `ConsultationForm.jsx`:

```js
// TODO: replace with real API call once backend is ready:
// await fetch('/api/consultation-requests', {
//   method: 'POST',
//   headers: { 'Content-Type': 'application/json' },
//   body: JSON.stringify(form)
// })
```

The general pattern for every page: replace the `import { practiceAreas } from '../data/mockData'` line with a `useEffect` + `fetch('/api/practice-areas')` call, storing the result in `useState`. I can walk you through this conversion for one page first, so you learn the pattern before repeating it.

## Design decisions (so you can explain this in your defense)

- **Colors:** deep ink-navy, warm parchment background, oxblood accent, muted brass — chosen to feel like a law firm (trust, tradition), not a generic SaaS template.
- **Typography:** Lora (serif) for headlines, Inter (sans-serif) for body text.
- **No card shadows** — hairline borders instead, for a more "print/document" feel appropriate to a law firm.
- Forms validate on the frontend (required fields, email format) — remember your backend must validate again too, since a visitor could bypass the React form.
