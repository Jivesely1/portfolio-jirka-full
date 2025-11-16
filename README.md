# Portfolio Jirka – frontend + CMS

Tento ZIP obsahuje dva projekty:

- `portfolio-jirka-frontend` – Next.js + Tailwind portfolio
- `portfolio-jirka-cms` – Sanity Studio (CMS) s ilustračním obsahem v `seed.ndjson`

## 1. Frontend (Next.js)

```bash
cd portfolio-jirka-frontend
npm install
npm run dev
```

Otevři: http://localhost:3000

## 2. CMS (Sanity Studio)

```bash
cd portfolio-jirka-cms
npm install
npm run dev
```

Otevři: http://localhost:3333

Pro import ilustračních dat:

```bash
cd portfolio-jirka-cms
npx sanity dataset import seed.ndjson production
```

Nezapomeň nastavit `projectId` a `dataset` v `.env` a ve frontend projektu `.env.local`.
