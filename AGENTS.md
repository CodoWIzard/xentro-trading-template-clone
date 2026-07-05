# AGENTS.md - Website Project Rules

This repo is a client website built from the Master Claw Next starter.

## Defaults

- Use Next.js app router, TypeScript, Tailwind CSS, and focused component structure.
- Keep each client site visually distinct. Do not ship generic template work.
- Prioritize responsive layout, SEO structure, performance, and clear conversion paths.
- Use Framer Motion only when motion improves the experience.
- Use lucide-react for common icons.

## Checks

Run before sharing or deploying:

```bash
pnpm check
```

For smaller iterations, at least run the relevant subset:

```bash
pnpm typecheck
pnpm lint
pnpm build
```

## Deployment

- Preview deploys are for review.
- Production deploys require Jayden to explicitly command or approve them.
- Prefer GitHub-connected Vercel deployments for client sites.
- Direct Vercel CLI scripts are available for special cases.

## Raspberry Pi Limits

This project may be developed on a Raspberry Pi 5. Keep tooling lean, avoid many concurrent dev servers, and move heavy verification to Vercel/GitHub when needed.

