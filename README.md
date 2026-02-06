# Cloudflare Workers + React Boilerplate

[cloudflarebutton]

A production-ready full-stack boilerplate for building scalable applications on Cloudflare Workers. Features a React frontend with Shadcn UI and a Workers backend powered by Hono and a multi-entity Durable Objects pattern for efficient, scalable storage.

## Features

- **Cloudflare Workers Backend**: Lightning-fast API with Hono routing and CORS support.
- **Multi-Entity Durable Objects**: Global DO storage for entities like Users and ChatBoards, with built-in indexing and CRUD operations.
- **React 18 Frontend**: Vite-powered, with Tanstack Query for data fetching, React Router, and full TypeScript support.
- **Shadcn UI + TailwindCSS**: Modern, customizable UI components with dark mode and animations.
- **Scalable Storage**: Entity-based DOs with CAS transactions, prefix indexes, and pagination.
- **Production-Ready**: Error boundaries, logging, health checks, client error reporting.
- **One-Click Deploy**: Deploy to Cloudflare Workers with assets bundling.
- **Demo Entities**: Users and ChatBoards with real-time messaging simulation using mock seed data.

## Tech Stack

- **Backend**: Cloudflare Workers, Hono, Durable Objects, TypeScript
- **Frontend**: React 18, Vite, TypeScript, Tanstack Query, React Router
- **UI**: Shadcn UI, TailwindCSS, Lucide Icons, Framer Motion
- **Utilities**: Immer, Zod (forms), Sonner (toasts), clsx, tw-merge
- **Dev Tools**: Bun, Wrangler, ESLint, TypeScript 5

## Quick Start

1. **Prerequisites**:
   - [Bun](https://bun.sh/) installed
   - [Wrangler CLI](https://developers.cloudflare.com/workers/wrangler/install-and-update/) logged in (`wrangler login`)

2. **Clone & Install**:
   ```bash
   git clone <your-repo-url>
   cd <project>
   bun install
   ```

3. **Run Locally**:
   ```bash
   bun run dev
   ```
   Open `http://localhost:3000` (or `$PORT`).

## Local Development

- **Development Server**: `bun run dev` (frontend + worker proxy)
- **Type Generation**: `bun run cf-typegen` (generates `worker/env.d.ts`)
- **Lint**: `bun run lint`
- **Preview Build**: `bun run preview`
- **Hot Reload**: Full HMR for frontend; worker routes auto-reload.

**File Structure**:
```
├── src/              # React frontend
├── worker/           # Cloudflare Workers backend
├── shared/           # Shared types + mock data
└── wrangler.jsonc    # Worker config
```

**Customizing**:
- Add API routes in `worker/user-routes.ts` (auto-loaded).
- Extend entities in `worker/entities.ts` using `IndexedEntity`.
- UI components in `src/components/`; shadcn already installed.

## API Endpoints

Base URL: `/api`

| Endpoint | Method | Description |
|----------|--------|-------------|
| `/health` | GET | Health check |
| `/users` | GET/POST | List/create users |
| `/chats` | GET/POST | List/create chats |
| `/chats/:chatId/messages` | GET/POST | List/send messages |
| `/users/:id` | DELETE | Delete user |
| `/chats/:id` | DELETE | Delete chat |

Responses follow `{ success: boolean; data?: T; error?: string }`.

## Deployment

Deploy to Cloudflare Workers Pages in one command:

```bash
bun run deploy
```

Or use the [Cloudflare dashboard](https://dash.cloudflare.com/) for direct upload.

[cloudflarebutton]

**Production Notes**:
- Assets auto-bundle to Workers.
- Durable Objects migrate via `wrangler.jsonc`.
- Custom domain: Update in Wrangler dashboard.

## Contributing

1. Fork the repo.
2. Create a feature branch (`bun run dev`).
3. Commit changes (`bun run lint`).
4. Open a PR.

## License

MIT License. See [LICENSE](LICENSE) for details.