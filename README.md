# Portfolio site — Malcolm “GoldToothCoder” Benton

Personal engineering portfolio: full-screen sections (hero, about, projects, skills, resume, contact), MUI, dark theme. All marketing copy, links, and project metadata live in one place: **`src/data/content.ts`**.

## Stack

- [Vite](https://vitejs.dev/) + [React](https://react.dev/) + TypeScript  
- [MUI](https://mui.com/) (layout, theme, components)

## Local development

```bash
npm install
npm run dev
```

Open the URL Vite prints (usually `http://localhost:5173`).

## Production build

```bash
npm run build
```

Output: `dist/`. Preview locally with `npm run preview`.

## Deploy

Point your host (e.g. [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)) at this repo with:

- **Build command:** `npm run build`  
- **Output directory:** `dist`

## Editing content

Update **`src/data/content.ts`** for name, social links, email, project URLs, and section text. The resume PDF is served from `public/resume/`; path is set in `siteConfig.resumePdfPath`.

## Repository

[github.com/tetsurugan/portfolio_site](https://github.com/tetsurugan/portfolio_site)
