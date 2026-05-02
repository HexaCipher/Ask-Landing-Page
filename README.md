# ASK GO Landing Page

Professional, high-conversion landing page for **ask** - a local-first, agentic CLI assistant built in Go.

## Why this project exists

This site is designed to communicate the core value of `ask` in seconds:
- **Cloud intelligence, local control**
- **Long-term memory across sessions**
- **Agentic shell execution from the CLI**
- **Privacy-first architecture**

## Preview

- **Local URL:** `http://localhost:3000`
- **Live URL:** add your production link here
- **Screenshot:** add a preview image at `public/preview.png` and reference it below

```md
![ASK GO Landing Page](public/preview.png)
```

## Tech Stack

- **Framework:** Next.js 14 (App Router) + React 18 + TypeScript
- **Styling:** Tailwind CSS
- **Animations:** Framer Motion
- **Icons:** lucide-react
- **Utilities:** clsx, tailwind-merge

## Quick Start

### Prerequisites

- Node.js 18.17+ (or current LTS)
- npm 9+

### Installation

```bash
npm install
```

### Run locally

```bash
npm run dev
```

Open `http://localhost:3000`.

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start local development server |
| `npm run build` | Create production build |
| `npm run start` | Run production server |
| `npm run lint` | Run ESLint |

## Project Structure

```text
ASK-GO-LANDING-PAGE/
|-- app/
|   |-- layout.tsx
|   |-- page.tsx
|   |-- globals.css
|-- components/
|   |-- Navbar.tsx
|   |-- Hero.tsx
|   |-- Features.tsx
|   |-- HowItWorks.tsx
|   |-- Architecture.tsx
|   |-- CommandsShowcase.tsx
|   |-- InstallCTA.tsx
|   |-- Footer.tsx
|-- public/
|-- docs/
|-- tailwind.config.ts
|-- next.config.mjs
|-- package.json
```

## Customization

- Update section content in `components/*`
- Adjust global page layout in `app/page.tsx`
- Configure typography, spacing, and theming via `app/layout.tsx`, `app/globals.css`, and `tailwind.config.ts`
- Keep messaging aligned to: **local-first, memory, and agentic CLI workflows**

## Deployment

### Vercel (recommended)

1. Push code to your Git provider
2. Import the repository in Vercel
3. Deploy with default Next.js settings

### Manual production run

```bash
npm run build
npm run start
```

## Roadmap

- Add production domain and analytics
- Add polished hero screenshot/gif
- Add social preview image and metadata
- Add Lighthouse/accessibility benchmark snapshot

## Contributing

Contributions are welcome. For larger changes, open an issue first to discuss scope and direction.

## License

This repository is intended for open-source usage. Add your preferred license file (for example, MIT) if you have not already.
