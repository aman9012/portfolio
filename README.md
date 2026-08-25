# Aman Yadav — Portfolio

Premium personal portfolio website for **Aman Yadav**, presenting work across web development, digital marketing, and creative direction.

**Production domain:** [aman-yadav-info.netlify.app](https://aman-yadav-info.netlify.app)

---

## Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS v4 |
| Animation | Framer Motion (Phase 4+) |
| Icons | Lucide React |
| Validation | Zod |
| Database | Firebase Firestore (Phase 10) |
| Email | Resend (Phase 10) |
| Deployment | Netlify |

---

## Getting Started

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env.local

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

---

## Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Project Structure

```text
app/                    # Next.js App Router pages and API routes
├── layout.tsx          # Root layout with fonts, metadata, shell
├── page.tsx            # Homepage
├── about/              # About page
├── work/               # Work listing + [slug] project detail
├── experience/         # Experience page
├── contact/            # Contact page
├── api/contact/        # Contact form API route
├── sitemap.ts          # Dynamic sitemap
└── robots.ts           # Robots.txt

components/
├── layout/             # SiteShell, Footer
├── navigation/         # Navbar (Phase 2: scroll animations)
├── ui/                 # Container, Section, primitives
├── hero/               # Hero components (Phase 3)
├── sections/           # Homepage sections (Phase 5+)
├── projects/           # Project grid/card (Phase 5)
├── capabilities/       # Capabilities section (Phase 6)
├── experience/         # Experience components
├── about/              # About components (Phase 7)
├── contact/            # Contact form (Phase 9)
└── motion/             # Motion utilities (Phase 4)

data/                   # Static content and configuration
├── site.ts             # Site metadata and config
├── navigation.ts       # Nav items
├── projects.ts         # Project entries
├── experience.ts       # Experience entries
└── skills.ts           # Capabilities, tech stack, process

lib/                    # Utilities and services
├── utils.ts            # cn(), helpers
├── validations.ts      # Zod schemas
├── firebase.ts         # Client Firebase config (Phase 10)
├── firebase-admin.ts   # Server Firestore (Phase 10)
└── resend.ts           # Email service (Phase 10)

types/                  # TypeScript type definitions
public/
├── images/             # Project, profile, OG images
├── videos/
├── icons/
└── fonts/
```

---

## Architecture Principles

- **Pages → Components → Data → Services → Types** — strict separation of concerns
- **Server Components by default** — client components only when interaction requires them
- **No fabricated content** — placeholders are clearly marked until real data is provided
- **Environment secrets** — Firebase Admin and Resend credentials live server-side only
- **Scalable data models** — projects, experience, and skills are data-driven, not hardcoded in components

---

## Development Phases

| Phase | Scope | Status |
|-------|-------|--------|
| 1 | Foundation & design system | ✅ Complete |
| 2 | Global layout & navigation animations | Pending |
| 3 | Cinematic hero | Pending |
| 4 | Motion system | Pending |
| 5 | Selected Work | Pending |
| 6 | Capabilities & technology | Pending |
| 7 | About & portrait | Pending |
| 8 | Process section | Pending |
| 9 | Contact UI | Pending |
| 10 | Firebase + API + Resend | Pending |
| 11 | SEO, accessibility, performance | Pending |
| 12 | Production testing & deployment | Pending |

---

## Environment Variables

Copy `.env.example` to `.env.local` and fill in values when implementing Phase 10.

**Never commit:**
- `.env.local`
- Firebase Admin private keys
- API keys

Configure the same variables in Netlify dashboard for production deployment.

---

## Deployment

This project is configured for Netlify via `netlify.toml`. Connect the GitHub `portfolio` repository to the existing Netlify project to deploy to `aman-yadav-info.netlify.app`.

Install the Netlify Next.js plugin before first deploy:

```bash
npm install -D @netlify/plugin-nextjs
```

---

## Content Guidelines

- Do not add fabricated clients, companies, metrics, or testimonials
- Add real project entries to `data/projects.ts` when available
- Add verified experience to `data/experience.ts`
- Mobile development capability will be added when genuine React Native projects exist

---

## License

Private — All rights reserved.
