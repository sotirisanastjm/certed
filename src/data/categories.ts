import type { CertificationCategory } from '../types';

export const categories: CertificationCategory[] = [
    {
        id: 'cat-platform-dxp',
        slug: 'platform-dxp',
        name: 'Platform DXP',
        icon: '🏗️',
        description: 'Sitecore Experience Platform & Experience Manager certifications',
        sortOrder: 1,
    },
    {
        id: 'cat-xm-cloud',
        slug: 'xm-cloud',
        name: 'XM Cloud',
        icon: '☁️',
        description: 'Modern Headless CMS & SitecoreAI certifications',
        sortOrder: 2,
    },
    {
        id: 'cat-content-cloud',
        slug: 'content-cloud',
        name: 'Content Cloud',
        icon: '📦',
        description: 'Content Hub DAM & Operations certifications',
        sortOrder: 3,
    },
    {
        id: 'cat-experience-cloud',
        slug: 'experience-cloud',
        name: 'Experience Cloud',
        icon: '🎯',
        description: 'CDP, Personalize & Customer Engagement certifications',
        sortOrder: 4,
    },
    {
        id: 'cat-commerce-cloud',
        slug: 'commerce-cloud',
        name: 'Commerce Cloud',
        icon: '🛒',
        description: 'OrderCloud B2B/B2C Commerce certifications',
        sortOrder: 5,
    },
];
