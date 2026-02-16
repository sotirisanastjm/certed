import type {
    CertedData,
    CertificationCategory,
    Certification,
    KnowledgeBadge,
    ContentSource,
    ExternalResource,
} from '../types';

import { categories } from './categories';
import { certifications } from './certifications';
import { knowledgeBadges } from './knowledge-badges';
import { contentSources, externalResources } from './content-sources';

// ============================================================================
// MAIN DATA STORE
// ============================================================================

export const certedData: CertedData = {
    categories,
    certifications,
    knowledgeBadges,
    contentSources,
    externalResources,
};

// ============================================================================
// DATA ACCESS HELPERS
// ============================================================================

export function getCategoryBySlug(slug: string): CertificationCategory | undefined {
    return certedData.categories.find((c) => c.slug === slug);
}

export function getCertificationBySlug(slug: string): Certification | undefined {
    return certedData.certifications.find((c) => c.slug === slug);
}

export function getCertificationsByCategory(categoryId: string): Certification[] {
    return certedData.certifications.filter((c) => c.categoryId === categoryId);
}

export function getActiveCertifications(): Certification[] {
    return certedData.certifications.filter((c) => c.isActive);
}

export function getBadgeBySlug(slug: string): KnowledgeBadge | undefined {
    return certedData.knowledgeBadges.find((b) => b.slug === slug);
}

export function getActiveBadges(): KnowledgeBadge[] {
    return certedData.knowledgeBadges.filter((b) => b.isActive);
}

export function getContentSourceById(id: string): ContentSource | undefined {
    return certedData.contentSources.find((s) => s.id === id);
}

export function getResourcesBySourceId(sourceId: string): ExternalResource[] {
    return certedData.externalResources.filter((r) => r.sourceId === sourceId);
}

// Re-export individual data modules
export { categories } from './categories';
export { certifications } from './certifications';
export { knowledgeBadges } from './knowledge-badges';
export { contentSources, externalResources } from './content-sources';

// Re-export learning content
export {
    allLearningContent,
    getTopicLearningContent,
    getTopicLearningContentById,
    getLearningContentByCertification,
} from './learning-content';

// Re-export quizzes
export {
    quizzes,
    getQuizByCertificationId,
    getQuizBySlug,
    getActiveQuizzes,
} from './quizzes';
