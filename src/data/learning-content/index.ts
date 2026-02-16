import type { TopicLearningContent } from '../../types';

import { sitecore10DeveloperContent } from './sitecore-10-developer';
import { sitecore10AdminContent } from './sitecore-10-administrator';
import { xmCloudDeveloperContent } from './xm-cloud-developer';
import { cdpContent, personalizeContent } from './experience-cloud';
import {
    contentHubAdminContent,
    contentHubDeveloperContent,
    orderCloudContent,
} from './content-commerce-cloud';

export const allLearningContent: TopicLearningContent[] = [
    ...sitecore10DeveloperContent,
    ...sitecore10AdminContent,
    ...xmCloudDeveloperContent,
    ...cdpContent,
    ...personalizeContent,
    ...contentHubAdminContent,
    ...contentHubDeveloperContent,
    ...orderCloudContent,
];

export function getTopicLearningContent(
    certificationSlug: string,
    competencySlug: string,
    topicSlug: string
): TopicLearningContent | undefined {
    return allLearningContent.find(
        (content) =>
            content.certificationSlug === certificationSlug &&
            content.competencySlug === competencySlug &&
            content.topicSlug === topicSlug
    );
}

export function getTopicLearningContentById(
    topicId: string
): TopicLearningContent | undefined {
    return allLearningContent.find((content) => content.topicId === topicId);
}

export function getLearningContentByCertification(
    certificationSlug: string
): TopicLearningContent[] {
    return allLearningContent.filter(
        (content) => content.certificationSlug === certificationSlug
    );
}

export {
    sitecore10DeveloperContent,
    sitecore10AdminContent,
    xmCloudDeveloperContent,
    cdpContent,
    personalizeContent,
    contentHubAdminContent,
    contentHubDeveloperContent,
    orderCloudContent,
};
