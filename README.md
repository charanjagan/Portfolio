# Charan Jagan — Portfolio

Personal portfolio site. Next.js 14 (App Router), TypeScript, Tailwind CSS. Fully static, deployed on Vercel.

## Develop

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Editing content

All content lives in [`lib/data.ts`](lib/data.ts) as typed objects — `profile`, `skills`, `projects`, `experience`, `education`, `navItems`. Edit that file; the components render whatever is there. No component changes needed to add a project or role.

## Resume

Drop your PDF at `public/resume.pdf`. The hero "Resume" button links to `/resume.pdf`.

## Deploy

Push to GitHub, then import the repo at [vercel.com](https://vercel.com) → Add New Project. Every push to `main` auto-deploys after that.
