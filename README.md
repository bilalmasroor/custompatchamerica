# Custom Patch America

Minimal Next.js project using App Router, TypeScript, Tailwind CSS, and ESLint.

## Structure

- src/app/ - Root layout and future routes.
- src/components/ - Future reusable components.
- src/assets/ - Project assets.
- src/styles/ - Global Tailwind CSS stylesheet, imported by the root layout.

The @/* import alias points to src/*.
No pages or reusable components are included. The root URL returns 404 until a page is added.

## Commands

- npm run dev - Start the development server.
- npm run build - Create a production build.
- npm start - Serve the production build.
- npm run lint - Run ESLint.
- npm run typecheck - Check TypeScript types.
