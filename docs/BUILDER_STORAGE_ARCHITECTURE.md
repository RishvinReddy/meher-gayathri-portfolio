# Identity Separation & Builder Profile Storage Architecture

## 1. Context & Architectural Rationale

This project is the official academic and research portfolio of **Meher Gayatri Devi Tiwari**, Assistant Professor at Woxsen University and Ph.D. Research Scholar at Vellore Institute of Technology (VIT).

To maintain strict academic integrity and privacy:
* **Meher Gayatri Devi Tiwari's identity** is the sole public entity represented in visible UI components, page metadata, Open Graph previews, Twitter/X cards, JSON-LD structured schemas, `sitemap.xml`, and `robots.txt`.
* **Rishvin Reddy's builder profile** is an isolated developer/architect reference. His personal links and identity must **never** be injected into public HTML, meta tags, JSON-LD, search engine indices, or client-side JavaScript bundles.

---

## 2. Builder Profile Storage & Isolation Mechanism

### Current File Location
The builder reference profile is stored in:
```
config/builder.reference.ts
```

### Reference Data Points
* **Name**: Rishvin Reddy
* **Role**: Builder & Full-Stack System Architect
* **Portfolio**: `https://rishvinreddy.vercel.app`
* **Rishvin Labs**: `https://rishvin-labs.vercel.app`
* **GitHub**: `https://github.com/RishvinReddy`
* **LinkedIn**: `https://www.linkedin.com/in/rishvinreddy/`

### Zero-Leakage Bundling Guarantee
1. **Unreferenced Module in Dependency Graph**: `config/builder.reference.ts` is never imported by `app/layout.tsx`, any route in `app/**/page.tsx`, any client component in `components/**`, or `config/seo.ts`.
2. **Next.js Tree-Shaking**: Next.js and Webpack construct bundles strictly from reachable imports originating at route entrypoints. Because `config/builder.reference.ts` has zero importers in the application tree, it is **100% tree-shaken and excluded from**:
   * Client-side bundles (`.next/static/chunks/*.js`)
   * Server-rendered HTML files (`.next/server/app/**/*.html`)
   * RSC payloads (`.next/server/app/**/*.rsc`)
   * Generated XML/TXT assets (`sitemap.xml`, `robots.txt`)

---

## 3. Storage Strategy & Privacy Tier Options

Depending on the deployment model and visibility of the GitHub repository (`https://github.com/RishvinReddy/meher-gayathri-portfolio`), the builder profile can be managed under three privacy tiers:

| Tier | Storage Location | Visible in Public HTML/Metadata? | Visible in Git Repository? | Recommended Use Case |
| :--- | :--- | :--- | :--- | :--- |
| **Tier 1: Architectural Isolation (Current)** | `config/builder.reference.ts` | **No** (Tree-shaken out of all HTML/JS) | **Yes** (Visible to repo contributors) | Standard developer workflows where the repo is private or contributors need the reference. |
| **Tier 2: Local Untracked Configuration** | `config/builder.local.ts` (added to `.gitignore`) | **No** (Tree-shaken out of all HTML/JS) | **No** (Excluded from Git commits) | If the GitHub repository is public and builder links must not appear in Git history. |
| **Tier 3: Environment Configuration** | `.env.local` (`BUILDER_PORTFOLIO_URL=...`) | **No** (Never prefixed with `NEXT_PUBLIC_`) | **No** (Ignored by Git) | When builder links are needed for external CI/CD or private notification webhooks. |

---

## 4. Verification Checkpoints

The separation has been verified through:
1. `grep -rnI "rishvin" app/ components/ content/ public/` $\rightarrow$ **0 matches**.
2. Inspection of `.next/server/app/**/*.html` $\rightarrow$ **0 references to builder links or identity**.
3. Inspection of `sitemap.xml` and `robots.txt` $\rightarrow$ **Strictly Meher Gayatri Devi Tiwari canonical academic routes**.
4. Inspection of Schema.org JSON-LD scripts in `<head>` $\rightarrow$ **Contains only Meher Gayatri Devi Tiwari**.

