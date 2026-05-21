# Athaum — portfolio

A Next.js 15 (App Router, TypeScript, React 19) port of the Athaum illustrated-folio design.

## Run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Build

```bash
npm run build
npm start
```

## Structure

```
src/
├── app/
│   ├── layout.tsx        # fonts + root chrome (cursor, intro, rails, topbar)
│   ├── page.tsx          # composes all sections
│   └── globals.css       # full design system (CSS variables + section styles)
├── components/           # one file per section, all server-rendered except ClientEffects
└── data/works.ts         # the 13 numbered plates rendered in the grid

public/images/            # 20 curated illustrations
```

All imperative DOM behavior (custom cursor, scroll reveals, hero parallax, drag-to-scroll on the index strip) lives in a single client component, `components/ClientEffects.tsx`, mounted once in the root layout.
