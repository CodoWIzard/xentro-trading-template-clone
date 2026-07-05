# MYT Trading Website

Next.js rebuild of the trading/futures website concept for Mind Your Trades, evolved from the Xentro/Webflow template direction into a custom MYT-branded site.

## Current State

- Active project for the `#web-design` website thread.
- Built as a Next.js app router site with TypeScript, Tailwind CSS, Framer Motion, and lucide-react.
- Main routes live in `app/[[...path]]/page.tsx`.
- Current routes include home, learning detail pages, community, and pricing.
- Original static Webflow reference pages are still preserved under `content/webflow-pages/`.
- Vercel alias: `https://xentro-trading-template-clone.vercel.app`.

## Commands

- `pnpm install`
- `pnpm dev`
- `pnpm typecheck`
- `pnpm lint`
- `pnpm build`
- `pnpm check`
- `pnpm deploy:preview`
- `pnpm deploy:prod`

## Resume Notes

- The repo currently has no commits yet and the project tree is untracked. Stabilize git history before broad iteration or deployment.
- Keep iterating on the existing MYT direction unless Jayden explicitly switches projects.
- Good next steps: componentize repeated page sections, replace remaining template-era copy/assets where needed, normalize routes and metadata, then deploy to the existing Vercel URL.
