// Types for Certed - Sitecore Certification Study Hub
// Static data types for SSR with Next.js

// ============================================================================
// ENUMS
// ============================================================================

export type LessonContentType = 'TEXT' | 'VIDEO' | 'INTERACTIVE' | 'CODE_EXAMPLE';

export type StudyMaterialType =
    | 'ARTICLE'
    | 'DOCUMENTATION'
    | 'VIDEO'
    | 'TUTORIAL'
    | 'COURSE'
    | 'BLOG_POST'
    | 'GUIDE'
    | 'CHEAT_SHEET'
    | 'PRACTICE_EXAM'
    | 'BOOK';

export type DifficultyLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED' | 'EXPERT';

export type QuizType = 'PRACTICE' | 'MOCK_EXAM' | 'COMPETENCY_CHECK' | 'QUICK_REVIEW';

export type QuestionType =
    | 'SINGLE_CHOICE'
    | 'MULTIPLE_CHOICE'
    | 'TRUE_FALSE'
    | 'FILL_BLANK'
    | 'CODE_COMPLETION';

// ============================================================================
// CERTIFICATION DOMAIN
// ============================================================================

export interface CertificationCategory {
    id: string;
    slug: string;
    name: string;
    icon?: string;
    description?: string;
    sortOrder: number;
}

export interface Certification {
    id: string;
    slug: string;
    name: string;
    shortName?: string;
    description?: string;
    examFormat?: string;
    passingScore?: string;
    examType?: string;
    examDuration?: number;
    questionCount?: number;
    supportAccess: boolean;
    isActive: boolean;
    sortOrder: number;
    categoryId: string;
    competencies: Competency[];
    learningModules: LearningModule[];
    studyMaterials: StudyMaterial[];
    quizzes: Quiz[];
    documentationLinks: DocumentationLink[];
}

export interface Competency {
    id: string;
    slug: string;
    name: string;
    description?: string;
    weightPercent?: number;
    questionCount?: number;
    sortOrder: number;
    certificationId: string;
    topics: Topic[];
}

export interface Topic {
    id: string;
    slug: string;
    name: string;
    description?: string;
    sortOrder: number;
    competencyId: string;
}

// ============================================================================
// TOPIC LEARNING CONTENT DOMAIN
// ============================================================================

export type LearningResourceType =
    | 'OFFICIAL_DOC'
    | 'TUTORIAL'
    | 'VIDEO'
    | 'API_REFERENCE'
    | 'BEST_PRACTICE'
    | 'WALKTHROUGH';

export interface LearningResource {
    id: string;
    title: string;
    url: string;
    description?: string;
    resourceType: LearningResourceType;
    isOfficial: boolean;
}

export interface LearningSection {
    id: string;
    title: string;
    content: string;
}

export interface TopicLearningContent {
    topicId: string;
    certificationSlug: string;
    competencySlug: string;
    topicSlug: string;
    overview: string;
    keyConceptsTitle: string;
    keyConcepts: string[];
    sections: LearningSection[];
    examTips: string[];
    resources: LearningResource[];
}

// ============================================================================
// LEARNING CONTENT DOMAIN
// ============================================================================

export interface LearningModule {
    id: string;
    slug: string;
    title: string;
    description?: string;
    estimatedTime?: number;
    sortOrder: number;
    certificationId: string;
    lessons: Lesson[];
}

export interface Lesson {
    id: string;
    slug: string;
    title: string;
    content: string;
    contentType: LessonContentType;
    estimatedTime?: number;
    sortOrder: number;
    moduleId: string;
}

export interface StudyMaterial {
    id: string;
    title: string;
    description?: string;
    content?: string;
    materialType: StudyMaterialType;
    sourceUrl?: string;
    sourceName?: string;
    difficulty: DifficultyLevel;
    estimatedTime?: number;
    isOfficial: boolean;
    isActive: boolean;
    certificationId?: string;
    competencyId?: string;
    topicId?: string;
    tags: string[];
}

export interface DocumentationLink {
    id: string;
    title: string;
    url: string;
    description?: string;
    category?: string;
    isOfficial: boolean;
    sortOrder: number;
    certificationId: string;
}

// ============================================================================
// QUIZ AND ASSESSMENT DOMAIN
// ============================================================================

export interface Quiz {
    id: string;
    slug: string;
    title: string;
    description?: string;
    quizType: QuizType;
    difficulty: DifficultyLevel;
    timeLimit?: number;
    passingScore: number;
    isActive: boolean;
    certificationId: string;
    questions: Question[];
}

export interface Question {
    id: string;
    questionText: string;
    explanation?: string;
    questionType: QuestionType;
    difficulty: DifficultyLevel;
    isActive: boolean;
    competencyId?: string;
    topicId?: string;
    answers: Answer[];
}

export interface Answer {
    id: string;
    answerText: string;
    isCorrect: boolean;
    sortOrder: number;
    questionId: string;
}

// ============================================================================
// KNOWLEDGE BADGES DOMAIN
// ============================================================================

export interface KnowledgeBadge {
    id: string;
    slug: string;
    name: string;
    category: string;
    badgeType: string;
    description?: string;
    imageUrl?: string;
    isActive: boolean;
    sortOrder: number;
}

// ============================================================================
// CONTENT SOURCES DOMAIN
// ============================================================================

export interface ContentSource {
    id: string;
    name: string;
    baseUrl: string;
    description?: string;
    isOfficial: boolean;
    isActive: boolean;
}

export interface ExternalResource {
    id: string;
    title: string;
    url: string;
    description?: string;
    category?: string;
    tags: string[];
    isVerified: boolean;
    sourceId: string;
}

// ============================================================================
// DATA STORE TYPE (for static data)
// ============================================================================

export interface CertedData {
    categories: CertificationCategory[];
    certifications: Certification[];
    knowledgeBadges: KnowledgeBadge[];
    contentSources: ContentSource[];
    externalResources: ExternalResource[];
}
