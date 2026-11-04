# Meher Gayatri Devi Tiwari — Academic & Cybersecurity Portfolio

Official personal academic portfolio for **Meher Gayatri Devi Tiwari**, Assistant Professor at Woxsen University, Information Security Researcher, Cybersecurity Governance specialist, and Ph.D. Scholar at Vellore Institute of Technology (VIT).

## Visual Design System: Warm Editorial Academic

The design language reflects modern university research environments and prestigious scholarly publications:

- **Canvas (Ivory)**: `#F8F6F0`
- **Primary Text (Charcoal)**: `#292D2A`
- **Accent (Sage Green)**: `#849987`
- **Secondary Surfaces (Warm Sand)**: `#E8E1D5`
- **Typography**: Editorial serif (*Newsreader* / *Charter*) for display titles; crisp sans-serif (*Inter*) for body text and interfaces.

---

## Information Architecture

| Route | Content & Academic Purpose |
|---|---|
| `/` | Professional introduction, current chairs, research pillars, featured projects, timeline, and contact |
| `/about` | Complete biography, formal degrees, career appointments, and technical skills matrix |
| `/research` | Four core research themes, doctoral agenda in visual cryptography, and open problems |
| `/publications` | Peer-reviewed repository framework with category filters, BibTeX export, and integrity notice |
| `/teaching` | Pedagogical philosophy, undergraduate & postgraduate course syllabi, and capstone mentorship |
| `/projects` | Detailed architectures of all 5 verified projects from the curriculum vitae |
| `/achievements` | 25+ collegiate awards, Omics International revenue milestone, leadership roles, and CSR initiatives |
| `/contact` | Verified direct email, campus office coordinates, LinkedIn, and inquiry protocols |

---

## Verified Source Information & Integrity

All career facts, technical proficiencies, project outcomes, and dates are verified against the author's primary curriculum vitae:

- **Current Appointment**: Assistant Professor, School of Technology, Woxsen University (July 2024 – Present).
- **Doctoral Affiliation**: Ph.D. in Information Security (Pursuing), Vellore Institute of Technology (VIT).
- **Fellowship / Junior Role**: Assistant Professor Junior (Fellowship), VIT (Sept 2020 – 2024 / Research Scholar status ongoing).
- **Degrees**: M.Tech in Information Security (VIT), B.Tech in Information Technology (SRM Institute of Science and Technology).
- **Verified Research Projects**:
  1. *Secure Online Voting Using Blockchain and Visual Cryptography (2021)*
  2. *Secure Online Voting Using Visual Cryptography (2020)*
  3. *Identity-Based Access Control Framework for Distributed Cloud Services in IoT (2018)*
  4. *Malicious PDF File Detection (2019)*
  5. *Traffic Density Detection Using Mobile Alert System (2018)*

---

## Local Development & Validation

```bash
# 1. Install dependencies
npm install

# 2. Run local development server
npm run dev

# 3. Type check
npx tsc --noEmit

# 4. Production build
npm run build
```

---

## Deployment to Vercel

This portfolio is static-first, requiring no database, credentials, or runtime server dependencies.

1. Commit changes to Git repository:
   ```bash
   git init
   git add .
   git commit -m "feat: initial release of Meher Gayatri Devi Tiwari academic portfolio"
   ```
2. Push to GitHub, GitLab, or Bitbucket.
3. Import project into [Vercel](https://vercel.com):
   - **Framework Preset**: Next.js
   - **Build Command**: `npm run build`
   - **Output Directory**: Default (`.next`)
4. Connect custom domain (e.g. `mehergayatritiwari.com` or institutional subdomain).
