# Imperial Cut

Premium barbershop booking site — mobile & studio privé à Ostende, Belgique.

**Live** → [imperial-cut.vercel.app](https://imperial-cut.vercel.app)

---

## The Imperial Look Book

Plutôt qu'une galerie générique, le site est bâti autour d'un **Look Book** éditorial : 24 photos réelles de coupes signature (fades, 360 waves, beard sculpt, linework, kids), filtrables par catégorie, ouvertes en lightbox plein écran.

**Killer feature — Book Your Look**
Clique sur une photo → tu atterris directement dans le flow de réservation avec ce look présélectionné comme **référence d'inspiration**. Elle apparaît dans le récap envoyé au barbier, qui sait exactement quelle coupe reproduire.

## Signature Cuts

Chaque service a un nom et une identité visuelle dédiés :

| Signature            | Service       | From  |
| -------------------- | ------------- | ----- |
| The Ostend Fade      | Fade premium  | 35 €  |
| The 360 Wave         | Waves 360     | 40 €  |
| The Sculpt           | Beard sculpt  | 25 €  |
| The Full Imperial    | Coupe + barbe | 55 €  |
| The Classic          | Coupe homme   | 30 €  |
| Little Imperial      | Enfant        | 20 €  |
| The Family           | Père + fils   | 45 €  |

## Stack

- **Next.js 16** (App Router, Turbopack) · **React 19** · **TypeScript 5**
- **Tailwind CSS 4** avec thème gold (`#C8A961`) sur fond noir
- **i18n FR / EN / NL** via contexte custom
- **Fonts** : Playfair Display (display) + Outfit (sans)
- **Deploy** : Vercel (auto-deploy sur `master`)

## Architecture

```
src/
├── app/
│   ├── booking/         # Flow 4 étapes (service → lieu → date → confirm)
│   └── page.tsx         # Landing : Hero / Signatures / Look Book / About / CTA
├── components/
│   ├── landing/         # Sections landing
│   ├── booking/         # Steps + LookPicker
│   ├── FloatingCTA.tsx  # Sticky "Réserver" après scroll
│   └── Header / Footer
└── lib/
    ├── data.ts          # Services + lookBook (24 looks → suggestedServiceId)
    ├── i18n.ts          # Dictionnaire FR/EN/NL
    └── i18n-context.tsx
```

**Deep-link** : `/booking?service=<id>&look=<id>` pré-remplit le flow (`BookingFlow` lit `useSearchParams` via `useState(() => …)` — compatible Next 16 + Suspense).

## Dev local

```bash
npm install
npm run dev -- -p 3002
```

Open [http://localhost:3002](http://localhost:3002).

## Scripts

- `npm run dev` — dev server avec Turbopack
- `npm run build` — build production (set `NEXT_TELEMETRY_DISABLED=1` sur Windows)
- `npm run lint` — ESLint direct (`next lint` a été retiré en Next 16)

## Assets

Les photos sources vivent dans `/coiffure/` (gitignored). Seules celles utilisées sont copiées dans `public/gallery/` et référencées depuis `lib/data.ts`.

## Licence

Tous droits réservés — Imperial Cut, Ostende.
