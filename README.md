# VIS ITALIA

Sito istituzionale di VIS ITALIA — sicurezza scaffalature e magazzini industriali.

## Stack

- Vite + React 18
- Tailwind CSS + shadcn/ui
- react-router-dom (BrowserRouter)
- @tanstack/react-query (usata per futuri fetch lato client)

## Sviluppo locale

```bash
npm install
npm run dev
```

## Build produzione

```bash
npm run build
```

Output in `dist/`. Servire come sito statico (nginx).

## Contenuti dinamici

I contenuti di blog e casi studio sono stub in [src/lib/content.js](src/lib/content.js).
Quando sara disponibile un CMS o API, sostituire gli array esportati.

## Form contatti

Attualmente il form in `/contatti` apre il client email con `mailto:` verso
`info@vis-italia.it`. Per una submit server-side, sostituire `handleSubmit` in
[src/pages/Contatti.jsx](src/pages/Contatti.jsx) con una POST a un endpoint dedicato.
