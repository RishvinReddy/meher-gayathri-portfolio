# Meher Gayatri Devi Tiwari — Academic Portfolio

Academic and research portfolio for Meher Gayatri Devi Tiwari, Assistant Professor in the School of Technology at Woxsen University and Ph.D. Research Scholar in Information Security at Vellore Institute of Technology (VIT).

---

## Overview

This repository contains the official academic portfolio for Meher Gayatri Devi Tiwari. The website presents her scholarly background, university teaching, research agenda, published work, verified technical projects, academic honors, and formal contact channels.

The user interface follows a strictly light-themed "Warm Editorial Academic" design system, using a warm ivory canvas, restrained sand surfaces, dark charcoal typography, and muted sage accents. The only dark surface on the website is the deep obsidian charcoal global footer, providing a distinct terminal foundation across all routes.

All biographical details, academic appointments, technical projects, degrees, and contact coordinates in this portfolio are sourced directly from primary curriculum vitae records.

---

## Portfolio Sections

The application consists of eight primary routes:

| Route | Title | Content and Purpose |
|---|---|---|
| `/` | Home | Faculty introduction, primary academic chairs, core research domains, featured project highlights, appointment timeline, and verification disclosure |
| `/about` | About | Ten-section formal academic biography, degrees and education, academic journey timeline, technical competencies matrix, and institutional recognition |
| `/research` | Research | Five consolidated research specializations, technical methodologies, doctoral investigation focus, and open problem formulations |
| `/publications` | Publications | Scholarly publications repository with real-time category filtering, search, bibliographic citations, and digital object identifier (DOI) ingestion protocol |
| `/teaching` | Teaching | Higher-education teaching philosophy, five core instructional competency domains, course delivery history, and three-pillar student mentorship framework |
| `/projects` | Projects | Five verified technical systems (2018–2021) with real-time text search, category filters, and featured voting system architectural spotlight |
| `/achievements` | Achievements | Ten verified honors and milestones across collegiate awards, institutional revenue contributions, leadership roles, and CSR initiatives |
| `/contact` | Contact | Verified institutional directory, direct contact channels with one-click copy actions, pre-composed academic inquiry triggers, and correspondence guidelines |

---

## Implemented Features

- **Warm Editorial Academic Theme**: Exclusively light-themed content pages utilizing warm ivory (`#F8F6F0`), sand surfaces (`#FAF8F3`), charcoal text (`#292D2A`), and muted sage accents (`#849987` / `#5B7260`).
- **Floating Pill Navigation Bar**: Sticky, rounded-full navigation pill featuring an embedded micro-portrait, serif wordmark, capsule route tabs, active indicators, and a responsive mobile drawer.
- **Deep Obsidian Footer**: High-contrast, dark obsidian (`#0F1110`) global footer featuring glassmorphic inquiry cards, active faculty status indicator, campus address, smooth back-to-top scrolling, and interactive clipboard copy actions.
- **Client-Side Discovery and Filtering**: Real-time text search and multi-category filtering on the Publications, Projects, and Achievements pages with immediate zero-latency client state management.
- **Expansive 1440px Laptop Canvas**: Responsive layout scaling from mobile viewports to an expansive 1440px max-width container (`max-w-[1440px] px-4 sm:px-6 lg:px-8 xl:px-12`) preventing narrow layout constraints on desktop monitors.
- **Accessible Contact Protocol**: Replaces unbacked web forms with verified direct `mailto:` triggers pre-filling academic subject lines, direct telephone links, and accessible clipboard copy buttons with live visual feedback.
- **Source Verification and Fact Integrity**: Complete fidelity to documented curriculum vitae records without fabricated metrics, simulated awards, or unverified affiliations.
- **Metadata and SEO**: Dynamic XML sitemap (`/sitemap.xml`), crawler control (`/robots.txt`), OpenGraph social cards (`/opengraph-image.png`), and custom favicons.

---

## Technology Stack

The project is built using the following core technologies and libraries:

| Layer | Technology | Version | Purpose |
|---|---|---|---|
| Framework | Next.js | 16.4.5 | React application framework with App Router architecture |
| Core Library | React / React DOM | 19.3.1 | User interface component library |
| Language | TypeScript | 5.8.2 | Static type safety and data interface enforcement |
| Styling | Tailwind CSS | 4.3.4 | Utility-first styling framework |
| CSS Processing | PostCSS / Autoprefixer | 8.5.3 / 10.4.20 | CSS parsing and browser prefix generation |
| Iconography | Lucide React | 1.67.0 | SVG icon library, supplemented with custom brand SVGs |
| Typography | Google Fonts | Web Font API | Newsreader (editorial serif display) and Inter (interface sans-serif) |

---

## Project Structure

```text
.
├── README.md                          # Repository documentation
├── package.json                       # Dependencies, scripts, and package metadata
├── package-lock.json                  # Deterministic dependency lockfile
├── tsconfig.json                      # TypeScript compiler configuration
├── next.config.ts                     # Next.js framework configuration
├── postcss.config.mjs                 # PostCSS configuration for Tailwind CSS 4
├── .gitignore                         # Git exclusion rules
├── Meher Gayatri  Resume.pdf          # Primary source-of-truth curriculum vitae
│
├── app/                               # Next.js App Router root
│   ├── layout.tsx                     # Root HTML layout with top bar, navbar, and footer
│   ├── globals.css                    # Tailwind imports, font definitions, and color tokens
│   ├── page.tsx                       # Homepage (/)
│   ├── about/
│   │   └── page.tsx                   # Formal academic biography (/about)
│   ├── research/
│   │   └── page.tsx                   # Research specializations and methodologies (/research)
│   ├── publications/
│   │   └── page.tsx                   # Searchable publications repository (/publications)
│   ├── teaching/
│   │   └── page.tsx                   # Pedagogical framework and courses (/teaching)
│   ├── projects/
│   │   └── page.tsx                   # Verified technical systems showcase (/projects)
│   ├── achievements/
│   │   └── page.tsx                   # Academic honors and milestones (/achievements)
│   ├── contact/
│   │   └── page.tsx                   # Campus office and inquiry routing (/contact)
│   ├── sitemap.ts                     # Dynamic XML sitemap generator
│   ├── robots.ts                      # Dynamic robots.txt generator
│   ├── icon.png                       # Application browser icon
│   ├── favicon.ico                    # Legacy favicon asset
│   ├── apple-icon.png                 # Apple Touch icon asset
│   └── opengraph-image.png            # OpenGraph social card image generator
│
├── components/                        # Reusable modular components
│   ├── layout/
│   │   ├── Navbar.tsx                 # Floating pill navigation header
│   │   └── Footer.tsx                 # Deep obsidian site-wide footer
│   ├── sections/
│   │   ├── HeroSection.tsx            # Homepage editorial hero with 4:5 portrait
│   │   ├── ResearchSummary.tsx        # Homepage research preview
│   │   ├── FeaturedProjects.tsx       # Homepage verified project spotlights
│   │   ├── ExperienceTimeline.tsx     # Homepage academic career timeline
│   │   ├── PublicationsShowcase.tsx   # Homepage publications preview
│   │   ├── TeachingOverview.tsx       # Homepage instructional overview
│   │   ├── AchievementsSection.tsx    # Homepage honors highlights
│   │   ├── VerificationDisclosure.tsx # Homepage CV audit verification banner
│   │   └── ContactSection.tsx         # Homepage contact preview
│   └── ui/
│       ├── Icons.tsx                  # Custom SVG icons (LinkedIn, institutional)
│       ├── PageHeader.tsx             # Standardized editorial page banner
│       └── SectionHeading.tsx         # Sub-section title component
│
├── content/                           # Structured TypeScript data models
│   ├── profile.ts                     # Core biography, chairs, degrees, and contacts
│   ├── research.ts                    # Research domains, agendas, and technical methods
│   ├── publications.ts                # Peer-reviewed publication records and metadata
│   ├── teaching.ts                    # Instructional domains, courses, and mentorship
│   ├── projects.ts                    # Verified technical systems architectures
│   └── achievements.ts                # Documented collegiate awards and milestones
│
└── public/                            # Static media and image assets
    ├── favicon.ico                    # Favicon file
    └── images/
        ├── profile.jpg                # Authentic professional portrait of Meher Gayatri
        └── og-image.jpg               # OpenGraph fallback banner
```

---

## Local Development

### Prerequisites

- Node.js version 18.18 or higher (version 20 or 22 LTS recommended)
- npm version 9 or higher

### Installation and Setup

1. Clone or download the repository to your local workspace:
   ```bash
   git clone <repository-url>
   cd "Meher Gayathri"
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the local development server:
   ```bash
   npm run dev
   ```
   The development server starts at `http://localhost:3000`.

   *Note*: The `package.json` dev and build scripts explicitly specify `--webpack` (`next dev --webpack`, `next build --webpack`). This configuration provides stable, deterministic compilation across environments and prevents Turbopack PostCSS evaluation issues.

4. Run static type checking:
   ```bash
   npx tsc --noEmit
   ```

5. Build the production application:
   ```bash
   npm run build
   ```

6. Start the local production server:
   ```bash
   npm run start
   ```

7. Run ESLint code quality checks:
   ```bash
   npm run lint
   ```

---

## Environment Variables

The application is largely self-contained and statically rendered. An optional environment variable can be configured for canonical URL generation:

| Variable | Required | Default Value | Purpose |
|---|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Optional | `https://mehergayatritiwari.academic` | Base domain used for metadata, OpenGraph absolute image URLs, and XML sitemaps |

To set this variable locally, create a `.env.local` file in the project root:

```bash
NEXT_PUBLIC_SITE_URL=https://your-custom-domain.com
```

*Important*: Do not commit `.env.local` or any private credential files to version control. The repository `.gitignore` automatically excludes all `.env*.local` files.

---

## Content Maintenance

All written content, publications, research descriptions, project archives, and career milestones are decoupled from presentation components and maintained inside the `content/` directory:

- `content/profile.ts`: Contains full legal name, current academic chair, institutional affiliations, degrees, contact information, and biographical narrative.
- `content/research.ts`: Contains research specializations, technical methods, doctoral focus, and open challenges.
- `content/publications.ts`: Contains publication records, co-authors, venues, years, DOIs, and abstract summaries.
- `content/teaching.ts`: Contains instructional philosophies, syllabus lists, and mentorship frameworks.
- `content/projects.ts`: Contains verified technical systems, architecture outlines, and technical stacks.
- `content/achievements.ts`: Contains documented awards, cash prizes, and institutional recognitions.

### Content Modification Rules

When updating content files:
1. Verify each record against official documentation or an updated curriculum vitae before adding it.
2. Maintain strict TypeScript interface conformity as defined in each content file.
3. Do not add unverified citations, estimated citation counts, or speculative affiliations.
4. Run `npx tsc --noEmit` and `npm run build` after editing any file in `content/` to ensure type integrity.

---

## Deployment

The application compiles into an optimized static and server-ready Next.js build output (`.next/`).

### Deployment Status

Automated continuous integration (CI) workflows and hosting platform providers are not currently configured within this repository. 

The application is compatible with standard Next.js hosting environments, including Vercel, AWS Amplify, Netlify, Cloudflare Pages (with OpenNext), or containerized Node.js servers (Docker).

To prepare a production deployment:
```bash
npm run build
```
Verify that the build completes with zero errors across all static routes prior to deployment.

---

## License and Usage

No open-source software license is currently specified for this repository. 

All written content, personal statements, curriculum vitae records, research summaries, and personal portrait photographs are the intellectual property of **Meher Gayatri Devi Tiwari**. Unauthorized duplication, distribution, or commercial exploitation is prohibited.

---

## Credits and Academic Contact

- **Author**: Meher Gayatri Devi Tiwari
- **Current Position**: Assistant Professor, School of Technology, Woxsen University, Hyderabad, Telangana, India
- **Doctoral Affiliation**: Ph.D. Research Scholar, Vellore Institute of Technology (VIT), Vellore, Tamil Nadu, India
- **Verified Email**: `mehergayatri17@gmail.com`
- **Verified Phone**: `+91 90031 47555`
- **LinkedIn**: [Meher Gayatri Devi Tiwari](https://www.linkedin.com/in/meher-gayatri-devi-tiwari)
- **Institutional Website**: [Woxsen University](https://woxsen.edu.in)
