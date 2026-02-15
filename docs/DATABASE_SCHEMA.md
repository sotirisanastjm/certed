# CertCore Database Schema Documentation

## Overview

This document describes the database schema for CertCore, a web application for studying Sitecore certifications. The schema is designed using Prisma ORM and supports PostgreSQL.

## Entity Relationship Diagram (Conceptual)

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
│                                      └──1:N──> Quiz ──N:M──> Question       │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────────────────────┐
│                              USER DOMAIN                                     │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                             │
│  User ──1:N──> UserCertProgress (tracks certification study progress)       │
│       ──1:N──> UserModuleProgress (tracks module completion)                │
│       ──1:N──> UserLessonProgress (tracks lesson completion)                │
│       ──1:N──> QuizAttempt ──1:N──> AttemptAnswer                          │
│       ──1:N──> Bookmark                                                     │
│       ──1:N──> UserNote                                                     │
│       ──1:N──> UserBadge                                                    │
│                                                                             │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Domain Models

### 1. Certification Domain

#### CertificationCategory
Groups certifications by Sitecore product area.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Primary key (CUID) |
| slug | String | URL-friendly unique identifier |
| name | String | Display name (e.g., "Platform DXP", "XM Cloud") |
| icon | String? | Emoji or icon identifier |
| description | String? | Category description |
| sortOrder | Int | Display order |

**Sitecore Certification Categories:**
- **Platform DXP** - Sitecore Experience Platform & Manager
- **Content Cloud** - Content Hub DAM & Operations
- **Commerce Cloud** - OrderCloud B2B/B2C Commerce
- **Experience Cloud** - CDP, Personalize & Customer Engagement
- **XM Cloud** - Modern Headless CMS & SitecoreAI

#### Certification
Individual certification exams.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Primary key |
| slug | String | URL-friendly identifier |
| name | String | Full certification name |
| shortName | String? | Abbreviated name |
| description | String? | Certification description |
| examFormat | String? | Format description |
| passingScore | String? | Required score (e.g., "80%") |
| examType | String? | Open/Closed book |
| examDuration | Int? | Duration in minutes |
| questionCount | Int? | Number of questions |
| supportAccess | Boolean | Grants Sitecore Support access |
| isActive | Boolean | Currently offered |
| categoryId | String | FK to CertificationCategory |

**Current Sitecore Certifications:**

1. **Sitecore 10 .NET Developer** - Platform DXP
2. **Sitecore 10 System Administrator** - Platform DXP
3. **Content Hub Administrator** - Content Cloud
4. **Content Hub Developer** - Content Cloud
5. **OrderCloud** - Commerce Cloud
6. **Sitecore CDP** - Experience Cloud
7. **Sitecore Personalize** - Experience Cloud
8. **CDP & Personalize Combined** - Experience Cloud
9. **XM Cloud Developer** - XM Cloud
10. **SitecoreAI CMS Developer** - XM Cloud

#### Competency
Exam competency areas with weight percentages.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Primary key |
| slug | String | Unique identifier within certification |
| name | String | Competency name |
| description | String? | Detailed description |
| weightPercent | Float? | Percentage of exam (e.g., 18%) |
| questionCount | Int? | Expected questions |
| certificationId | String | FK to Certification |

**Example Competencies (Sitecore 10 .NET Developer):**
- Sitecore structure & platform (12%)
- Security & user management (16%)
- Item management (20%)
- Layout & placeholders (10%)
- Components, controls, & renderings (26%)
- Sitecore Content Serialization (10%)
- Containers (6%)

#### Topic
Specific topics within competencies.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Primary key |
| slug | String | Unique within competency |
| name | String | Topic name |
| description | String? | Topic details |
| competencyId | String | FK to Competency |

### 2. Learning Content Domain

#### LearningModule
Structured learning modules for each certification.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Primary key |
| slug | String | Unique within certification |
| title | String | Module title |
| description | String? | Module overview |
| estimatedTime | Int? | Minutes to complete |
| certificationId | String | FK to Certification |

#### Lesson
Individual lessons within modules.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Primary key |
| slug | String | Unique within module |
| title | String | Lesson title |
| content | Text | Full lesson content |
| contentType | Enum | TEXT, VIDEO, INTERACTIVE, CODE_EXAMPLE |
| estimatedTime | Int? | Minutes to complete |
| moduleId | String | FK to LearningModule |

#### StudyMaterial
External and internal study resources.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Primary key |
| title | String | Material title |
| description | String? | Brief description |
| content | Text? | Stored content |
| materialType | Enum | ARTICLE, DOCUMENTATION, VIDEO, etc. |
| sourceUrl | String? | External URL |
| sourceName | String? | Source name |
| difficulty | Enum | BEGINNER to EXPERT |
| isOfficial | Boolean | From Sitecore official sources |
| certificationId | String? | FK to Certification |
| competencyId | String? | FK to Competency |
| topicId | String? | FK to Topic |

#### DocumentationLink
Quick links to official documentation.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Primary key |
| title | String | Link title |
| url | String | Documentation URL |
| description | String? | What it covers |
| category | String? | Grouping category |
| isOfficial | Boolean | Official Sitecore docs |
| certificationId | String | FK to Certification |

### 3. Quiz and Assessment Domain

#### Quiz
Practice quizzes and mock exams.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Primary key |
| slug | String | Unique within certification |
| title | String | Quiz title |
| description | String? | Quiz description |
| quizType | Enum | PRACTICE, MOCK_EXAM, etc. |
| difficulty | Enum | BEGINNER to EXPERT |
| timeLimit | Int? | Minutes allowed |
| passingScore | Int | Percentage to pass |
| certificationId | String | FK to Certification |

#### Question
Individual quiz questions.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Primary key |
| questionText | Text | The question |
| explanation | Text? | Answer explanation |
| questionType | Enum | SINGLE_CHOICE, MULTIPLE_CHOICE, etc. |
| difficulty | Enum | Question difficulty |
| competencyId | String? | FK to Competency |
| topicId | String? | FK to Topic |

#### Answer
Possible answers for questions.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Primary key |
| answerText | Text | Answer option |
| isCorrect | Boolean | Correct answer flag |
| sortOrder | Int | Display order |
| questionId | String | FK to Question |

### 4. User and Progress Domain

#### User
Application users.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Primary key |
| email | String | Unique email |
| passwordHash | String? | Hashed password |
| displayName | String? | Display name |
| role | Enum | LEARNER, CONTRIBUTOR, ADMIN |

#### UserCertProgress
Tracks user progress per certification.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Primary key |
| status | Enum | NOT_STARTED, IN_PROGRESS, COMPLETED |
| overallProgress | Float | Percentage complete |
| studyHours | Float | Hours studied |
| userId | String | FK to User |
| certificationId | String | FK to Certification |

#### QuizAttempt
Records quiz attempt results.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Primary key |
| score | Float? | Percentage score |
| passed | Boolean? | Met passing score |
| timeTaken | Int? | Seconds taken |
| userId | String | FK to User |
| quizId | String | FK to Quiz |

### 5. Knowledge Badges Domain

#### KnowledgeBadge
Non-certification badges for skills recognition.

| Field | Type | Description |
|-------|------|-------------|
| id | String | Primary key |
| slug | String | Unique identifier |
| name | String | Badge name |
| category | String | Category (XM Cloud, Content Hub, etc.) |
| badgeType | String | Knowledge or Skills |
| description | String? | Badge description |

**Current Sitecore Knowledge Badges:**
- XM Cloud for Business Users Skills Badge
- XM Cloud Developer Basics Knowledge Badge
- Content Hub DAM Basics Knowledge Badge
- SitecoreAI Basics Knowledge Badge
- Sitecore Search Business User Knowledge Badge
- And more...

## Data Sources for Study Materials

### Official Sitecore Resources

| Source | URL | Content Type |
|--------|-----|--------------|
| Sitecore Documentation | doc.sitecore.com | Technical docs |
| Sitecore Learning | learning.sitecore.com | Courses, guides |
| Sitecore Developer Portal | developers.sitecore.com | Dev resources |
| Sitecore Training | sitecore.com/platform/sitecore-training | Certification info |

### Community Resources

| Source | URL | Content Type |
|--------|-----|--------------|
| Sitecore Community | community.sitecore.com | Forums, articles |
| Sitecore Stack Exchange | sitecore.stackexchange.com | Q&A |
| Sitecore Gabe Blog | sitecoregabe.com | Practice exams, tips |
| Various MVP Blogs | Multiple | Study guides, tips |

### Certification-Specific Documentation

#### XM Cloud Developer
- XM Cloud Architecture docs
- JSS (JavaScript Services) documentation
- GraphQL API reference
- Content Serialization guides
- XM Cloud Pages documentation

#### Sitecore 10 .NET Developer
- Developer's Fundamentals 9.3 & 10.0 courses
- Sitecore MVC documentation
- Content Search API docs
- Security and user management guides

#### Content Hub
- Content Hub REST API reference
- Schema and taxonomy documentation
- Action scripts and triggers guides
- Integration documentation

#### CDP & Personalize
- Sitecore Engage SDK documentation
- Stream API documentation
- Personalize user and developer guides
- Decision model documentation

## Enums Reference

### StudyMaterialType
- ARTICLE
- DOCUMENTATION
- VIDEO
- TUTORIAL
- COURSE
- BLOG_POST
- GUIDE
- CHEAT_SHEET
- PRACTICE_EXAM
- BOOK

### DifficultyLevel
- BEGINNER
- INTERMEDIATE
- ADVANCED
- EXPERT

### QuizType
- PRACTICE
- MOCK_EXAM
- COMPETENCY_CHECK
- QUICK_REVIEW

### QuestionType
- SINGLE_CHOICE
- MULTIPLE_CHOICE
- TRUE_FALSE
- FILL_BLANK
- CODE_COMPLETION

### ProgressStatus
- NOT_STARTED
- IN_PROGRESS
- COMPLETED
- ON_HOLD

### UserRole
- LEARNER
- CONTRIBUTOR
- ADMIN

### LessonContentType
- TEXT
- VIDEO
- INTERACTIVE
- CODE_EXAMPLE

## Setup Instructions

1. Install dependencies:
```bash
npm install prisma @prisma/client
```

2. Initialize Prisma:
```bash
npx prisma init
```

3. Configure DATABASE_URL in `.env`:
```
DATABASE_URL="postgresql://user:password@localhost:5432/certcore"
```

4. Generate Prisma client:
```bash
npx prisma generate
```

5. Run migrations:
```bash
npx prisma migrate dev --name init
```

6. Seed initial data:
```bash
npx prisma db seed
```
