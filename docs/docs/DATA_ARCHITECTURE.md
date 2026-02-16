# Certed Data Architecture

## Overview

Certed uses a static data architecture optimized for server-side rendering (SSR) with Next.js. All certification data is defined as TypeScript objects, eliminating the need for a database. This approach is ideal for hosting on Vercel or Netlify.

## Architecture Benefits

- **No database required** - All data is bundled with the application
- **Fast page loads** - Data is available at build/render time
- **Type safety** - Full TypeScript support with strict typing
- **Easy deployment** - No database configuration needed
- **Cost effective** - No database hosting costs

## Data Structure

```
src/
├── types/
│   └── index.ts          # TypeScript type definitions
└── data/
    ├── index.ts          # Main data store & helper functions
    ├── categories.ts     # Certification categories
    ├── certifications.ts # All certifications with nested data
    ├── knowledge-badges.ts # Knowledge badges
    └── content-sources.ts  # External resources
```

## Entity Relationship Diagram

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                           CERTIFICATION DOMAIN                               │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  CertificationCategory ──1:N──> Certification ──1:N──> Competency           │
│                                      │                      │               │
│                                      │                      └──1:N──> Topic │
│                                      │                                      │
│                                      ├──1:N──> LearningModule ──1:N──> Lesson│
│                                      │                                      │
│                                      ├──1:N──> StudyMaterial                │
│                                      │                                      │
│                                      ├──1:N──> DocumentationLink            │
│                                      │                                      │
│                                      └──1:N──> Quiz ──1:N──> Question       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Type Definitions

### Enums

```typescript
type LessonContentType = 'TEXT' | 'VIDEO' | 'INTERACTIVE' | 'CODE_EXAMPLE';

type StudyMaterialType =
    | 'ARTICLE' | 'DOCUMENTATION' | 'VIDEO' | 'TUTORIAL'
    | 'COURSE' | 'BLOG_POST' | 'GUIDE' | 'CHEAT_SHEET'
    | 'PRACTICE_EXAM' | 'BOOK';

type DifficultyLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';

type QuizType = 'PRACTICE' | 'MOCK_EXAM' | 'COMPETENCY_CHECK' | 'QUICK_REVIEW';

type QuestionType =
    | 'SINGLE_CHOICE' | 'MULTIPLE_CHOICE' | 'TRUE_FALSE'
    | 'FILL_BLANK' | 'CODE_COMPLETION';
```

### Domain Models

#### CertificationCategory
Groups certifications by Sitecore product area.

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier |
| slug | string | URL-friendly identifier |
| name | string | Display name |
| icon | string? | Emoji or icon |
| description | string? | Category description |
| sortOrder | number | Display order |

#### Certification
Individual certification exams with all nested content.

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier |
| slug | string | URL-friendly identifier |
| name | string | Full certification name |
| shortName | string? | Abbreviated name |
| description | string? | Certification description |
| examFormat | string? | Format description |
| passingScore | string? | Required score |
| examType | string? | Open/Closed book |
| examDuration | number? | Duration in minutes |
| questionCount | number? | Number of questions |
| supportAccess | boolean | Grants Sitecore Support access |
| isActive | boolean | Currently offered |
| sortOrder | number | Display order |
| categoryId | string | Reference to category |
| competencies | Competency[] | Nested competencies |
| learningModules | LearningModule[] | Nested modules |
| studyMaterials | StudyMaterial[] | Nested materials |
| quizzes | Quiz[] | Nested quizzes |
| documentationLinks | DocumentationLink[] | Nested links |

#### Competency
Exam competency areas with weight percentages.

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier |
| slug | string | Unique within certification |
| name | string | Competency name |
| description | string? | Detailed description |
| weightPercent | number? | Percentage of exam |
| questionCount | number? | Expected questions |
| sortOrder | number | Display order |
| certificationId | string | Reference to certification |
| topics | Topic[] | Nested topics |

#### Quiz
Practice quizzes and mock exams.

| Field | Type | Description |
|-------|------|-------------|
| id | string | Unique identifier |
| slug | string | Unique within certification |
| title | string | Quiz title |
| description | string? | Quiz description |
| quizType | QuizType | Type of quiz |
| difficulty | DifficultyLevel | Difficulty level |
| timeLimit | number? | Minutes allowed |
| passingScore | number | Percentage to pass |
| isActive | boolean | Currently available |
| certificationId | string | Reference to certification |
| questions | Question[] | Nested questions with answers |

## Data Access

### Helper Functions

```typescript
import {
    getCategoryBySlug,
    getCertificationBySlug,
    getCertificationsByCategory,
    getActiveCertifications,
    getBadgeBySlug,
    getActiveBadges,
} from '@/data';

// Get a specific certification by slug
const cert = getCertificationBySlug('xm-cloud-developer');

// Get all certifications in a category
const platformCerts = getCertificationsByCategory('cat-platform-dxp');

// Get all active certifications
const activeCerts = getActiveCertifications();
```

### Next.js Page Example

```typescript
// app/certifications/[slug]/page.tsx
import { getCertificationBySlug, certifications } from '@/data';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
    return certifications.map((cert) => ({
        slug: cert.slug,
    }));
}

export default function CertificationPage({
    params,
}: {
    params: { slug: string };
}) {
    const certification = getCertificationBySlug(params.slug);

    if (!certification) {
        notFound();
    }

    return (
        <div>
            <h1>{certification.name}</h1>
            <p>{certification.description}</p>
            {/* Render competencies, quizzes, etc. */}
        </div>
    );
}
```

## Sitecore Certification Categories

- **Platform DXP** - Sitecore Experience Platform & Manager
- **XM Cloud** - Modern Headless CMS & SitecoreAI
- **Content Cloud** - Content Hub DAM & Operations
- **Experience Cloud** - CDP, Personalize & Customer Engagement
- **Commerce Cloud** - OrderCloud B2B/B2C Commerce

## Current Certifications

1. **Sitecore 10 .NET Developer** - Platform DXP
2. **Sitecore 10 System Administrator** - Platform DXP
3. **Content Hub Administrator** - Content Cloud
4. **Content Hub Developer** - Content Cloud
5. **OrderCloud** - Commerce Cloud
6. **Sitecore CDP** - Experience Cloud
7. **Sitecore Personalize** - Experience Cloud
8. **XM Cloud Developer** - XM Cloud

## Knowledge Badges

- XM Cloud for Business Users Skills Badge
- XM Cloud Developer Basics Knowledge Badge
- Content Hub DAM Basics Knowledge Badge
- SitecoreAI Basics Knowledge Badge
- Sitecore Search Business User Knowledge Badge
- CDP Basics Knowledge Badge
- Personalize Basics Knowledge Badge

## Adding New Data

### Adding a New Certification

1. Open `src/data/certifications.ts`
2. Add a new certification object following the existing pattern
3. Include all nested data (competencies, topics, quizzes, etc.)

### Adding New Questions to a Quiz

1. Find the certification in `src/data/certifications.ts`
2. Locate the quiz within the `quizzes` array
3. Add questions to the `questions` array with their answers

## Data Sources Reference

### Official Sitecore Resources

| Source | URL |
|--------|-----|
| Sitecore Documentation | doc.sitecore.com |
| Sitecore Learning | learning.sitecore.com |
| Sitecore Developer Portal | developers.sitecore.com |
| Sitecore Community | community.sitecore.com |

### Community Resources

| Source | URL |
|--------|-----|
| Sitecore Stack Exchange | sitecore.stackexchange.com |
| Sitecore Gabe Blog | sitecoregabe.com |
