<div align="center">

<img src="assets/logo.svg" alt="Certed" width="120">

# Certed

**The modern study platform for Sitecore certifications**

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black?logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?logo=typescript)](https://www.typescriptlang.org/)
[![Prisma](https://img.shields.io/badge/Prisma-6.0-2D3748?logo=prisma)](https://www.prisma.io/)

[Features](#features) · [Certifications](#supported-certifications) · [Quick Start](#quick-start) · [Documentation](#documentation)

</div>

---

## Overview

Certed consolidates Sitecore certification study materials into a single, streamlined platform. Select your target certification, study curated content organized by exam competencies, and validate your knowledge with interactive quizzes.

**Key benefits:**
- Curated content from official documentation and learning resources
- Competency-aligned study paths matching actual exam structure
- Practice quizzes with detailed explanations
- Progress tracking across multiple certifications

---

## Features

### Study Materials
Distilled content from Sitecore documentation, learning paths, and community resources. Organized by certification competency areas with percentage weights matching the actual exam.

### Quiz Engine
Practice questions and full mock exams with instant feedback. Each question includes detailed explanations to reinforce understanding.

### Progress Tracking
Monitor your study progress across certifications. Identify weak competency areas and focus your preparation where it matters most.

### Certification Browser
Browse all Sitecore certifications with exam details including format, duration, passing scores, and prerequisites.

---

## Supported Certifications

| Category | Certifications |
|:---------|:---------------|
| **Platform DXP** | Sitecore 10 .NET Developer · Sitecore 10 System Administrator |
| **XM Cloud** | XM Cloud Developer · SitecoreAI CMS Developer |
| **Content Cloud** | Content Hub Administrator · Content Hub Developer |
| **Experience Cloud** | Sitecore CDP · Sitecore Personalize · CDP & Personalize Combined |
| **Commerce Cloud** | OrderCloud |

Also includes preparation materials for **Knowledge & Skills Badges**.

---

## Quick Start

### Prerequisites

- Node.js 18+
- PostgreSQL 14+

### Installation

```bash
# Clone repository
git clone https://github.com/yourusername/certed.git
cd certed

# Install dependencies
npm install

# Configure environment
cp .env.example .env
# Edit .env with your database connection string

# Initialize database
npx prisma migrate dev
npx prisma db seed

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to access the application.

---

## Tech Stack

| Component | Technology |
|:----------|:-----------|
| Framework | Next.js 15 (App Router) |
| Language | TypeScript |
| Styling | Tailwind CSS |
| Database | PostgreSQL |
| ORM | Prisma |
| Authentication | NextAuth.js |
| API | tRPC |

---

## Project Structure

```
certed/
├── src/
│   ├── app/           # Next.js pages and layouts
│   ├── components/    # React components
│   ├── lib/           # Utilities and helpers
│   └── server/        # API routes and tRPC routers
├── prisma/
│   ├── schema.prisma  # Database schema
│   └── seed.ts        # Seed data
├── assets/            # Brand assets
└── docs/              # Documentation
```

---

## Documentation

| Document | Description |
|:---------|:------------|
| [Database Schema](docs/DATABASE_SCHEMA.md) | Complete data model reference |
| [Certifications Reference](docs/SITECORE_CERTIFICATIONS.md) | All Sitecore certification details |

---

## Roadmap

- [x] Database schema design
- [x] Certification data model
- [ ] Authentication system
- [ ] Certification browser UI
- [ ] Study material viewer
- [ ] Quiz engine
- [ ] Progress dashboard
- [ ] Dark mode
- [ ] Mobile optimization

---

## Contributing

Contributions are welcome. Please open an issue to discuss proposed changes before submitting a pull request.

---

## License

MIT License. See [LICENSE](LICENSE) for details.

---

<div align="center">

**[Get started →](http://localhost:3000)**

</div>
