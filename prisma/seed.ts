import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
    // Seed Certification Categories
    const platformDxp = await prisma.certificationCategory.create({
        data: {
            slug: 'platform-dxp',
            name: 'Platform DXP',
            icon: '🏗️',
            description: 'Sitecore Experience Platform & Manager',
            sortOrder: 1,
        },
    });

    const contentCloud = await prisma.certificationCategory.create({
        data: {
            slug: 'content-cloud',
            name: 'Content Cloud',
            icon: '☁️',
            description: 'Content Hub DAM & Operations',
            sortOrder: 2,
        },
    });

    const commerceCloud = await prisma.certificationCategory.create({
        data: {
            slug: 'commerce-cloud',
            name: 'Commerce Cloud',
            icon: '🛒',
            description: 'OrderCloud B2B/B2C Commerce',
            sortOrder: 3,
        },
    });

    const experienceCloud = await prisma.certificationCategory.create({
        data: {
            slug: 'experience-cloud',
            name: 'Experience Cloud',
            icon: '✨',
            description: 'CDP, Personalize & Customer Engagement',
            sortOrder: 4,
        },
    });

    const xmCloud = await prisma.certificationCategory.create({
        data: {
            slug: 'xm-cloud',
            name: 'XM Cloud',
            icon: '🚀',
            description: 'Modern Headless CMS & SitecoreAI',
            sortOrder: 5,
        },
    });

    // Seed Certifications

    // Platform DXP Certifications
    const sitecore10Dev = await prisma.certification.create({
        data: {
            slug: 'sitecore-10-dotnet-developer',
            name: 'Sitecore 10 .NET Developer Certification',
            shortName: 'Sitecore 10 .NET Developer',
            description: 'For developers with fundamental Sitecore knowledge in .NET development',
            examFormat: 'Multiple-choice, proctored through Kryterion Webassessor',
            passingScore: '80%',
            examType: 'Closed Book',
            examDuration: 120,
            questionCount: 60,
            supportAccess: true,
            categoryId: platformDxp.id,
            sortOrder: 1,
        },
    });

    const sitecore10Admin = await prisma.certification.create({
        data: {
            slug: 'sitecore-10-system-admin',
            name: 'Sitecore 10 System Administrator Certification',
            shortName: 'Sitecore 10 System Admin',
            description: 'For administrators managing Sitecore environments',
            examFormat: 'Multiple-choice, proctored through Kryterion Webassessor',
            passingScore: '80%',
            examType: 'Closed Book',
            examDuration: 90,
            questionCount: 50,
            supportAccess: true,
            categoryId: platformDxp.id,
            sortOrder: 2,
        },
    });

    // Content Cloud Certifications
    const contentHubAdmin = await prisma.certification.create({
        data: {
            slug: 'content-hub-admin',
            name: 'Sitecore Content Hub Administrator Certification',
            shortName: 'Content Hub Admin',
            description: 'For administrators managing Content Hub environments',
            examFormat: 'Multiple-choice, proctored exam',
            passingScore: '80%',
            examType: 'Closed Book',
            examDuration: 90,
            questionCount: 60,
            supportAccess: true,
            categoryId: contentCloud.id,
            sortOrder: 1,
        },
    });

    const contentHubDev = await prisma.certification.create({
        data: {
            slug: 'content-hub-developer',
            name: 'Sitecore Content Hub Developer Certification',
            shortName: 'Content Hub Developer',
            description: 'For developers building Content Hub solutions',
            examFormat: 'Multiple-choice, proctored exam',
            passingScore: '80%',
            examType: 'Closed Book',
            examDuration: 90,
            questionCount: 60,
            supportAccess: true,
            categoryId: contentCloud.id,
            sortOrder: 2,
        },
    });

    // Commerce Cloud Certifications
    const orderCloud = await prisma.certification.create({
        data: {
            slug: 'ordercloud',
            name: 'Sitecore OrderCloud Certification',
            shortName: 'OrderCloud',
            description: 'For developers and architects building e-commerce solutions with OrderCloud',
            examFormat: 'Multiple-choice, proctored exam',
            passingScore: '80%',
            examType: 'Closed Book',
            examDuration: 90,
            questionCount: 50,
            supportAccess: false,
            categoryId: commerceCloud.id,
            sortOrder: 1,
        },
    });

    // Experience Cloud Certifications
    const cdp = await prisma.certification.create({
        data: {
            slug: 'cdp',
            name: 'Sitecore CDP Certification',
            shortName: 'Sitecore CDP',
            description: 'For professionals working with Customer Data Platform',
            examFormat: 'Multiple-choice, proctored exam',
            passingScore: '80%',
            examType: 'Closed Book',
            examDuration: 60,
            questionCount: 30,
            supportAccess: false,
            categoryId: experienceCloud.id,
            sortOrder: 1,
        },
    });

    const personalize = await prisma.certification.create({
        data: {
            slug: 'personalize',
            name: 'Sitecore Personalize Certification',
            shortName: 'Sitecore Personalize',
            description: 'For professionals implementing personalization strategies',
            examFormat: 'Multiple-choice, proctored exam',
            passingScore: '80%',
            examType: 'Closed Book',
            examDuration: 60,
            questionCount: 30,
            supportAccess: false,
            categoryId: experienceCloud.id,
            sortOrder: 2,
        },
    });

    // XM Cloud Certifications
    const xmCloudDev = await prisma.certification.create({
        data: {
            slug: 'xm-cloud-developer',
            name: 'Sitecore XM Cloud Developer Certification',
            shortName: 'XM Cloud Developer',
            description: 'For developers building headless solutions with XM Cloud',
            examFormat: '50 multiple-choice questions, 100 minutes',
            passingScore: '80%',
            examType: 'Closed Book',
            examDuration: 100,
            questionCount: 50,
            supportAccess: false,
            categoryId: xmCloud.id,
            sortOrder: 1,
        },
    });

    const sitecoreAiDev = await prisma.certification.create({
        data: {
            slug: 'sitecoreai-developer',
            name: 'SitecoreAI CMS for Developers Certification',
            shortName: 'SitecoreAI Developer',
            description: 'For developers working with SitecoreAI platform',
            examFormat: 'Multiple-choice, proctored exam',
            passingScore: '80%',
            examType: 'Closed Book',
            examDuration: 90,
            questionCount: 50,
            supportAccess: false,
            categoryId: xmCloud.id,
            sortOrder: 2,
        },
    });

    // Seed Competencies for Sitecore 10 .NET Developer
    const competencies10Dev = [
        { slug: 'sitecore-structure-platform', name: 'Sitecore Structure & Platform', weightPercent: 12, sortOrder: 1 },
        { slug: 'security-user-management', name: 'Security & User Management', weightPercent: 16, sortOrder: 2 },
        { slug: 'item-management', name: 'Item Management', weightPercent: 20, sortOrder: 3 },
        { slug: 'layout-placeholders', name: 'Layout & Placeholders', weightPercent: 10, sortOrder: 4 },
        { slug: 'components-controls-renderings', name: 'Components, Controls, & Renderings', weightPercent: 26, sortOrder: 5 },
        { slug: 'content-serialization', name: 'Sitecore Content Serialization', weightPercent: 10, sortOrder: 6 },
        { slug: 'containers', name: 'Containers', weightPercent: 6, sortOrder: 7 },
    ];

    for (const comp of competencies10Dev) {
        await prisma.competency.create({
            data: {
                ...comp,
                certificationId: sitecore10Dev.id,
            },
        });
    }

    // Seed Competencies for XM Cloud Developer
    const competenciesXmCloud = [
        { slug: 'xm-cloud-architecture', name: 'XM Cloud Architecture and Developer Workflow', weightPercent: 12, sortOrder: 1 },
        { slug: 'deployment', name: 'Deployment of XM Cloud Projects', weightPercent: 16, sortOrder: 2 },
        { slug: 'renderings-layout', name: 'Renderings and Layout', weightPercent: 14, sortOrder: 3 },
        { slug: 'content-serialization', name: 'Sitecore Content Serialization', weightPercent: 14, sortOrder: 4 },
        { slug: 'apis-webhooks', name: 'Sitecore APIs & Webhooks', weightPercent: 10, sortOrder: 5 },
        { slug: 'xm-cloud-pages', name: 'XM Cloud Pages', weightPercent: 10, sortOrder: 6 },
        { slug: 'security', name: 'Security for Developers', weightPercent: 10, sortOrder: 7 },
        { slug: 'development-workflows', name: 'Development Workflows', weightPercent: 14, sortOrder: 8 },
    ];

    for (const comp of competenciesXmCloud) {
        await prisma.competency.create({
            data: {
                ...comp,
                certificationId: xmCloudDev.id,
            },
        });
    }

    // Seed Competencies for CDP
    const competenciesCdp = [
        { slug: 'cdp-architecture', name: 'CDP Architecture and Data Model', weightPercent: 15, sortOrder: 1 },
        { slug: 'behavioral-data', name: 'Real-time Behavioral Data Ingestion', weightPercent: 20, sortOrder: 2 },
        { slug: 'customer-profiles', name: 'Customer Profile Management', weightPercent: 15, sortOrder: 3 },
        { slug: 'audience-segmentation', name: 'Audience Segmentation', weightPercent: 15, sortOrder: 4 },
        { slug: 'data-privacy', name: 'Data Privacy and Compliance', weightPercent: 10, sortOrder: 5 },
        { slug: 'integration', name: 'Integration with Other Systems', weightPercent: 15, sortOrder: 6 },
        { slug: 'batch-processing', name: 'Batch Data Processing', weightPercent: 10, sortOrder: 7 },
    ];

    for (const comp of competenciesCdp) {
        await prisma.competency.create({
            data: {
                ...comp,
                certificationId: cdp.id,
            },
        });
    }

    // Seed Competencies for Personalize
    const competenciesPersonalize = [
        { slug: 'behavioral-data-ingestion', name: 'Real-time Behavioral Data Ingestion', weightPercent: 11, sortOrder: 1 },
        { slug: 'experiences', name: 'Experiences', weightPercent: 43, sortOrder: 2 },
        { slug: 'experiments', name: 'Experiments', weightPercent: 23, sortOrder: 3 },
        { slug: 'decisioning', name: 'Decisioning', weightPercent: 23, sortOrder: 4 },
    ];

    for (const comp of competenciesPersonalize) {
        await prisma.competency.create({
            data: {
                ...comp,
                certificationId: personalize.id,
            },
        });
    }

    // Seed Content Sources
    const officialSources = [
        {
            name: 'Sitecore Documentation',
            baseUrl: 'https://doc.sitecore.com',
            description: 'Official Sitecore technical documentation',
            isOfficial: true,
        },
        {
            name: 'Sitecore Learning',
            baseUrl: 'https://learning.sitecore.com',
            description: 'Official Sitecore training and certification courses',
            isOfficial: true,
        },
        {
            name: 'Sitecore Developer Portal',
            baseUrl: 'https://developers.sitecore.com',
            description: 'Developer resources, guides, and getting started materials',
            isOfficial: true,
        },
        {
            name: 'Sitecore Community',
            baseUrl: 'https://community.sitecore.com',
            description: 'Community forums and knowledge base',
            isOfficial: true,
        },
        {
            name: 'Sitecore Stack Exchange',
            baseUrl: 'https://sitecore.stackexchange.com',
            description: 'Community Q&A for Sitecore developers',
            isOfficial: false,
        },
    ];

    for (const source of officialSources) {
        await prisma.contentSource.create({ data: source });
    }

    // Seed Knowledge Badges
    const badges = [
        { slug: 'xm-cloud-business-users', name: 'XM Cloud for Business Users Skills Badge', category: 'XM Cloud', badgeType: 'Skills' },
        { slug: 'xm-cloud-dev-basics', name: 'XM Cloud Developer Basics Knowledge Badge', category: 'XM Cloud', badgeType: 'Knowledge' },
        { slug: 'xm-cloud-dev-deployment', name: 'XM Cloud Developer Deployment Basics Knowledge Badge', category: 'XM Cloud', badgeType: 'Knowledge' },
        { slug: 'xm-cloud-dev-operations', name: 'XM Cloud Developer Operations Fundamentals Knowledge Badge', category: 'XM Cloud', badgeType: 'Knowledge' },
        { slug: 'content-hub-dam-basics', name: 'Content Hub DAM Basics for Business Users Knowledge Badge', category: 'Content Hub', badgeType: 'Knowledge' },
        { slug: 'content-hub-business-skills', name: 'Content Hub Business User Skills Badge', category: 'Content Hub', badgeType: 'Skills' },
        { slug: 'content-hub-dev-dam', name: 'Content Hub Developer DAM Basics Knowledge Badge', category: 'Content Hub', badgeType: 'Knowledge' },
        { slug: 'sitecoreai-basics', name: 'SitecoreAI Basics Knowledge Badge', category: 'SitecoreAI', badgeType: 'Knowledge' },
        { slug: 'sitecoreai-marketers-basics', name: 'SitecoreAI CMS for Marketers Basics Knowledge Badge', category: 'SitecoreAI', badgeType: 'Knowledge' },
        { slug: 'sitecoreai-marketers-skills', name: 'SitecoreAI CMS for Marketers Skills Badge', category: 'SitecoreAI', badgeType: 'Skills' },
        { slug: 'search-business-user', name: 'Sitecore Search Business User Knowledge Badge', category: 'Search', badgeType: 'Knowledge' },
        { slug: 'studio-marketers', name: 'Sitecore Studio for Marketers Knowledge Badge', category: 'Studio', badgeType: 'Knowledge' },
        { slug: 'studio-developers', name: 'Sitecore Studio for Developers Knowledge Badge', category: 'Studio', badgeType: 'Knowledge' },
    ];

    for (let i = 0; i < badges.length; i++) {
        await prisma.knowledgeBadge.create({
            data: {
                ...badges[i],
                sortOrder: i + 1,
            },
        });
    }

    // Seed Documentation Links for XM Cloud Developer
    const xmCloudDocs = [
        { title: 'XM Cloud Documentation', url: 'https://doc.sitecore.com/xmc', category: 'Getting Started' },
        { title: 'JSS Documentation', url: 'https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/index-en.html', category: 'Development' },
        { title: 'XM Cloud Deploy App', url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/the-xm-cloud-deploy-app.html', category: 'Deployment' },
        { title: 'GraphQL API', url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/graphql-api.html', category: 'APIs' },
        { title: 'Content Serialization', url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-content-serialization.html', category: 'Serialization' },
        { title: 'XM Cloud Pages', url: 'https://doc.sitecore.com/xmc/en/users/xm-cloud/pages.html', category: 'Pages' },
    ];

    for (let i = 0; i < xmCloudDocs.length; i++) {
        await prisma.documentationLink.create({
            data: {
                ...xmCloudDocs[i],
                certificationId: xmCloudDev.id,
                isOfficial: true,
                sortOrder: i + 1,
            },
        });
    }

    // Seed Documentation Links for CDP
    const cdpDocs = [
        { title: 'Sitecore CDP Documentation', url: 'https://doc.sitecore.com/cdp', category: 'Getting Started' },
        { title: 'Stream API Reference', url: 'https://doc.sitecore.com/cdp/en/developers/api/index-en.html', category: 'APIs' },
        { title: 'Sitecore Engage SDK', url: 'https://doc.sitecore.com/cdp/en/developers/engage/index-en.html', category: 'Development' },
        { title: 'Batch API', url: 'https://doc.sitecore.com/cdp/en/developers/api/batch-api/index-en.html', category: 'APIs' },
        { title: 'Data Privacy', url: 'https://doc.sitecore.com/cdp/en/users/sitecore-cdp/data-privacy-in-sitecore-cdp.html', category: 'Compliance' },
    ];

    for (let i = 0; i < cdpDocs.length; i++) {
        await prisma.documentationLink.create({
            data: {
                ...cdpDocs[i],
                certificationId: cdp.id,
                isOfficial: true,
                sortOrder: i + 1,
            },
        });
    }

    // Seed Documentation Links for Personalize
    const personalizeDocs = [
        { title: 'Sitecore Personalize Documentation', url: 'https://doc.sitecore.com/personalize', category: 'Getting Started' },
        { title: 'Web Experiences', url: 'https://doc.sitecore.com/personalize/en/users/sitecore-personalize/web-experiences.html', category: 'Experiences' },
        { title: 'Full Stack Experiences', url: 'https://doc.sitecore.com/personalize/en/users/sitecore-personalize/full-stack-experiences.html', category: 'Experiences' },
        { title: 'Experiments', url: 'https://doc.sitecore.com/personalize/en/users/sitecore-personalize/experiments.html', category: 'Testing' },
        { title: 'Decision Models', url: 'https://doc.sitecore.com/personalize/en/users/sitecore-personalize/decision-models.html', category: 'Decisioning' },
    ];

    for (let i = 0; i < personalizeDocs.length; i++) {
        await prisma.documentationLink.create({
            data: {
                ...personalizeDocs[i],
                certificationId: personalize.id,
                isOfficial: true,
                sortOrder: i + 1,
            },
        });
    }
}

main()
    .catch((e) => {
        throw e;
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
