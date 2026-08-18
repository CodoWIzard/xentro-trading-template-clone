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

- Current git history is established. Latest checked commit on 2026-08-18: `780cf79` (`Simplify MYT offer cards`).
- Keep iterating on the existing MYT direction unless Jayden explicitly switches projects.
- Good next steps: replace remaining template-era assets/copy where needed, normalize missing legal pages or remove footer legal links, keep mobile polish tight, then deploy to the existing Vercel URL.

## Current Direction Snapshot

- Brand: Mind Your Trades (MYT).
- Positioning: futures trading learning, TradingView tools/intent engines, and 1:1 coaching for traders building a repeatable process.
- Messaging rules: no signals, no copy trading, no shortcuts, no unrealistic performance claims.
- Core process: Context, Condition, Setup, Execution, Review.
- Visual style: dark finance/editorial interface, MYT cyan-blue accents, compact premium panels, Inter + Fira Code, restrained motion.
- Primary conversion target: `https://whop.com/joined/mind-your-trades/`.
