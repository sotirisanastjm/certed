import type { TopicLearningContent } from '../../types';

export const xmCloudDeveloperContent: TopicLearningContent[] = [
    // ========================================================================
    // COMPETENCY: XM Cloud Architecture & Developer Workflow
    // ========================================================================
    {
        topicId: 'topic-xmc-arch-overview',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'architecture',
        topicSlug: 'architecture-overview',
        overview:
            'XM Cloud is Sitecore\'s modern, headless SaaS CMS that separates content management from content delivery. Understanding the composable architecture including CM, Experience Edge, Pages, and rendering hosts is essential for XM Cloud development.',
        keyConceptsTitle: 'Architecture Fundamentals',
        keyConcepts: [
            'XM Cloud is a fully managed, headless SaaS CMS',
            'Content is delivered via Experience Edge CDN',
            'Rendering hosts (Next.js apps) consume content via GraphQL',
            'Pages provides visual editing capabilities',
            'Composable architecture enables best-of-breed integrations',
        ],
        sections: [
            {
                id: 'section-saas-model',
                title: 'SaaS and Headless Architecture',
                content:
                    'XM Cloud runs as a fully managed service - Sitecore handles infrastructure, updates, and scaling. The headless architecture separates content management (XM Cloud) from presentation (your rendering host). Content is delivered via APIs, not server-side rendering in Sitecore.',
            },
            {
                id: 'section-components',
                title: 'Key Components',
                content:
                    'XM Cloud CM: Content authoring and management. Experience Edge: Global CDN for content delivery via GraphQL. Pages: Visual editing experience for marketers. Rendering Host: Your Next.js application that renders content. All components communicate via APIs.',
            },
            {
                id: 'section-composable',
                title: 'Composable DXP',
                content:
                    'XM Cloud is part of Sitecore\'s composable DXP strategy. It integrates with other Sitecore products (CDP, Personalize, Content Hub) and third-party services via APIs. This enables selecting best-of-breed solutions for each capability.',
            },
        ],
        examTips: [
            'XM Cloud does not include xDB or marketing automation - use CDP/Personalize instead',
            'Content delivery is always via Experience Edge GraphQL - no CD server like traditional XP',
            'Know the difference between XM Cloud (SaaS) and XM/XP (PaaS/on-prem)',
            'Rendering hosts must be deployed separately from XM Cloud',
            'XM Cloud architecture: Content Management, Experience Edge CDN, Pages editor, and rendering host',
            'Composable DXP strategy enables best-of-breed integrations with other Sitecore products',
        ],
        resources: [
            {
                id: 'res-xmc-overview',
                title: 'XM Cloud Overview',
                url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/getting-started-with-xm-cloud.html',
                description: 'Introduction to XM Cloud development',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
            {
                id: 'res-xmc-architecture',
                title: 'XM Cloud Architecture',
                url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/xm-cloud-architecture.html',
                description: 'XM Cloud architectural overview',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-xmc-cloud-portal',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'architecture',
        topicSlug: 'cloud-portal',
        overview:
            'The Sitecore Cloud Portal is the central hub for managing XM Cloud organizations, projects, and environments. Understanding portal navigation and management is essential for XM Cloud development.',
        keyConceptsTitle: 'Cloud Portal Concepts',
        keyConcepts: [
            'Organizations contain projects and manage team members',
            'Projects group related environments and deployments',
            'Environments are isolated XM Cloud instances',
            'The portal provides access to Deploy, Pages, and other tools',
            'Team roles control access to portal features',
        ],
        sections: [
            {
                id: 'section-org-structure',
                title: 'Organization Structure',
                content:
                    'Organizations are the top-level container in Cloud Portal. They contain projects, manage team members, and control billing. Projects within an organization group related sites and their environments (dev, staging, production).',
            },
            {
                id: 'section-environments',
                title: 'Environments',
                content:
                    'Each environment is an isolated XM Cloud instance with its own database, content, and configuration. Common setup includes Development, Staging, and Production environments. Environments can be created and deleted via the portal or CLI.',
            },
            {
                id: 'section-portal-tools',
                title: 'Portal Tools and Access',
                content:
                    'Cloud Portal provides access to XM Cloud tools: Deploy app for CI/CD, Pages for visual editing, Content Editor for item management. Single sign-on provides unified access. Team roles (Admin, Developer, Content Author) control permissions.',
            },
        ],
        examTips: [
            'Know the hierarchy: Organization > Project > Environment',
            'Projects connect to source control repositories for deployment',
            'Each environment has its own unique Experience Edge endpoint',
            'Understand team roles and their permissions: Admin, Developer, Content Author',
            'Portal provides access to: Deploy app for CI/CD, Pages for visual editing, Content Editor',
            'Single sign-on provides unified access across all XM Cloud tools',
        ],
        resources: [
            {
                id: 'res-portal',
                title: 'Cloud Portal Overview',
                url: 'https://doc.sitecore.com/portal/en/developers/sitecore-cloud-portal/introduction-to-the-sitecore-cloud-portal.html',
                description: 'Guide to Sitecore Cloud Portal',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-xmc-dev-workflow',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'architecture',
        topicSlug: 'developer-workflow',
        overview:
            'XM Cloud supports both Sitecore-first and code-first development approaches. Understanding the developer workflow, local development setup, and deployment patterns is key to productive XM Cloud development.',
        keyConceptsTitle: 'Developer Workflow Concepts',
        keyConcepts: [
            'Local development uses containers or direct XM Cloud connection',
            'Code-first: develop components then create Sitecore items',
            'Sitecore-first: create items in Sitecore then implement components',
            'SCS serializes Sitecore items to source control',
            'Deployments are triggered from source control changes',
        ],
        sections: [
            {
                id: 'section-local-dev',
                title: 'Local Development Options',
                content:
                    'Develop locally with containers running XM Cloud locally, or connect directly to a cloud environment. Container-based development provides full-stack local environment. Cloud-connected development uses remote XM Cloud for content.',
            },
            {
                id: 'section-approaches',
                title: 'Development Approaches',
                content:
                    'Code-first: Build components in Next.js, then create matching templates and renderings in Sitecore. Sitecore-first: Create templates and content structure in Sitecore, then implement React components to render them. Most teams use a hybrid approach.',
            },
            {
                id: 'section-deploy-flow',
                title: 'Deployment Workflow',
                content:
                    'Push code changes to connected repository. XM Cloud Deploy app detects changes and triggers build. Items from serialization are pushed to XM Cloud. Rendering host is built and deployed. Content publishes to Experience Edge.',
            },
        ],
        examTips: [
            'Know the pros/cons of local containers vs cloud-connected development',
            'Component names must exactly match between Next.js and Sitecore renderings - case-sensitive',
            'Deployments push serialized items from source control to XM Cloud',
            'Understand the end-to-end deployment pipeline: push code → Deploy app detects → build → push items → render host deployment',
            'Code-first: build components in Next.js, then create Sitecore items; Sitecore-first: create items first, then implement components',
            'Most teams use a hybrid development approach combining both methods',
        ],
        resources: [
            {
                id: 'res-dev-workflow',
                title: 'Developer Workflow',
                url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/developer-workflow-for-xm-cloud.html',
                description: 'XM Cloud developer workflow guide',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Deployment of XM Cloud Projects
    // ========================================================================
    {
        topicId: 'topic-xmc-deploy-app',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'deployment',
        topicSlug: 'deploy-app',
        overview:
            'The XM Cloud Deploy app manages project deployments from source control to XM Cloud environments. Understanding deployment configuration and monitoring is essential for managing XM Cloud solutions.',
        keyConceptsTitle: 'Deploy App Concepts',
        keyConcepts: [
            'Deploy app connects to GitHub, Azure DevOps, or GitLab',
            'Deployments are triggered by commits or manually',
            'Build specifications define the deployment process',
            'Deployment logs show build and deployment status',
            'Environment variables configure runtime settings',
        ],
        sections: [
            {
                id: 'section-source-control',
                title: 'Source Control Connection',
                content:
                    'Connect your project to a source control repository (GitHub, Azure DevOps, GitLab). Configure which branch triggers deployments to which environment. Auto-deploy can be enabled to deploy on every push.',
            },
            {
                id: 'section-build-spec',
                title: 'Build Specification',
                content:
                    'The xmcloud.build.json file defines the build process. It specifies which rendering hosts to build, build commands, and output paths. Custom build steps can be added for preprocessing or testing.',
            },
            {
                id: 'section-monitoring',
                title: 'Deployment Monitoring',
                content:
                    'Deploy app shows deployment history and status. View detailed logs for each build and deployment step. Failed deployments show error messages for troubleshooting. Rollback by deploying a previous version.',
            },
        ],
        examTips: [
            'Know the structure of xmcloud.build.json',
            'Deployments include both CM changes and rendering host',
            'Auto-deploy can be configured per branch',
            'Environment variables are set in Deploy app, not code',
        ],
        resources: [
            {
                id: 'res-deploy',
                title: 'XM Cloud Deploy',
                url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/deploy-app.html',
                description: 'XM Cloud Deploy app documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-xmc-environments',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'deployment',
        topicSlug: 'environments',
        overview:
            'XM Cloud environments are isolated instances for different stages of development and delivery. Understanding environment management, configuration, and promotion is key to multi-environment strategies.',
        keyConceptsTitle: 'Environment Management Concepts',
        keyConcepts: [
            'Environments are isolated XM Cloud instances',
            'Each environment has unique connection strings and endpoints',
            'Environment variables configure per-environment settings',
            'Content can be migrated between environments via packages',
            'Production environments have higher performance tiers',
        ],
        sections: [
            {
                id: 'section-env-types',
                title: 'Environment Types',
                content:
                    'Development environments for active development. Staging environments for testing before production. Production environments for live content delivery. Each type may have different resource allocations and SLAs.',
            },
            {
                id: 'section-configuration',
                title: 'Environment Configuration',
                content:
                    'Environment variables configure settings like API keys, feature flags, and service endpoints. Variables are set in Deploy app and available to both CM and rendering host. Secrets should use secure variable storage.',
            },
            {
                id: 'section-content-promotion',
                title: 'Content Promotion',
                content:
                    'Move content between environments using content packages or item transfer. SCS serialization syncs development items. Content migration scripts can automate promotion workflows. Be careful with environment-specific item IDs.',
            },
        ],
        examTips: [
            'Each environment has its own Experience Edge endpoint',
            'Environment variables are not committed to source control',
            'Know how to promote content between environments safely',
            'Production environments should be separate from dev/staging',
        ],
        resources: [
            {
                id: 'res-environments',
                title: 'Environment Management',
                url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/environment-and-deployment-management.html',
                description: 'Managing XM Cloud environments',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-xmc-cicd',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'deployment',
        topicSlug: 'ci-cd',
        overview:
            'CI/CD integration enables automated testing, validation, and deployment of XM Cloud solutions. Understanding how to integrate with GitHub Actions and other CI tools enhances development workflows.',
        keyConceptsTitle: 'CI/CD Concepts',
        keyConcepts: [
            'Integrate CI pipelines with source control',
            'Run tests before deployments proceed',
            'Use CLI commands for scripted operations',
            'Validate serialization before pushing',
            'Automate environment provisioning',
        ],
        sections: [
            {
                id: 'section-github-actions',
                title: 'GitHub Actions Integration',
                content:
                    'Create workflows that run on pull requests or pushes. Run linting, type checking, and tests before merge. Trigger XM Cloud deployments via CLI or API. Use secrets for authentication credentials.',
            },
            {
                id: 'section-testing',
                title: 'Automated Testing',
                content:
                    'Unit tests validate component logic. Integration tests verify API interactions. End-to-end tests check full rendering flow. Run tests in CI before deployment approval.',
            },
            {
                id: 'section-cli-automation',
                title: 'CLI Automation',
                content:
                    'Sitecore CLI can be used in CI pipelines for scripted operations. Authenticate using client credentials for non-interactive scenarios. Commands can validate serialization, trigger deployments, and check status.',
            },
        ],
        examTips: [
            'Know how to use Sitecore CLI in automated pipelines',
            'Client credentials enable non-interactive authentication',
            'Validate serialization in CI to catch errors early',
            'Tests should run before deployment triggers',
        ],
        resources: [
            {
                id: 'res-cicd',
                title: 'CI/CD Integration',
                url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/continuous-integration-and-delivery.html',
                description: 'CI/CD with XM Cloud',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Renderings & Layout
    // ========================================================================
    {
        topicId: 'topic-xmc-jss',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'renderings-layout',
        topicSlug: 'jss-nextjs',
        overview:
            'JSS (JavaScript Rendering SDK) with Next.js is the primary framework for building XM Cloud rendering hosts. Understanding component development, data fetching, and rendering strategies is essential.',
        keyConceptsTitle: 'JSS Next.js Concepts',
        keyConcepts: [
            'Components map to Sitecore renderings by name',
            'Field helpers render Sitecore fields with editing support',
            'SSG, SSR, and ISR rendering strategies available',
            'Component factory resolves component types',
            'Props contain layout data from Sitecore',
        ],
        sections: [
            {
                id: 'section-components',
                title: 'Building JSS Components',
                content:
                    'Create React components in src/components folder. Component names must match Sitecore rendering names. Use JSS field components (Text, RichText, Image) to render fields with Experience Editor support. Props include fields from the data source item.',
            },
            {
                id: 'section-field-types',
                title: 'Field Components',
                content:
                    'Text component renders single-line and multi-line text fields. RichText renders HTML content. Image handles image fields with responsive support. Link renders internal and external links. DateField formats date values.',
            },
            {
                id: 'section-rendering-strategies',
                title: 'Rendering Strategies',
                content:
                    'SSG (Static Site Generation): Pre-renders pages at build time. SSR (Server-Side Rendering): Renders on each request. ISR (Incremental Static Regeneration): Rebuilds static pages on-demand. Choose based on content update frequency and performance needs.',
            },
        ],
        examTips: [
            'Component names must exactly match Sitecore rendering names - component factory resolves by name',
            'Field components (Text, RichText, Image, Link) provide in-context editing in Pages',
            'Know when to use SSG (static, build-time) vs SSR (request-time) vs ISR (incremental rebuild)',
            'Component props include fields, params, and rendering info from layout data',
            'Use JSS field components for Experience Editor/Pages editing support',
            'SSG is best for content that changes infrequently; ISR for content that updates periodically',
        ],
        resources: [
            {
                id: 'res-jss-nextjs',
                title: 'JSS Next.js Development',
                url: 'https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/jss-next-js-development.html',
                description: 'JSS for Next.js documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-xmc-layout-service',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'renderings-layout',
        topicSlug: 'layout-service',
        overview:
            'The Layout Service provides page composition data via GraphQL from Experience Edge. Understanding the response structure and how to consume layout data is essential for rendering Sitecore content.',
        keyConceptsTitle: 'Layout Service Concepts',
        keyConcepts: [
            'Layout Service returns page composition as JSON',
            'Response includes placeholders and their components',
            'Each component has fields, params, and data source',
            'Experience Edge serves layout data via GraphQL',
            'Layout data drives component rendering',
        ],
        sections: [
            {
                id: 'section-response',
                title: 'Layout Service Response',
                content:
                    'The response contains route data (item ID, name, fields) and layout data. Layout data includes placeholders with their renderings. Each rendering has componentName, fields, params, and placeholders for nested content.',
            },
            {
                id: 'section-graphql',
                title: 'GraphQL Queries',
                content:
                    'JSS uses GraphQL to fetch layout data from Experience Edge. The layout query retrieves page composition by path. Sitemap queries retrieve all available routes. Custom queries can fetch additional data.',
            },
            {
                id: 'section-consuming',
                title: 'Consuming Layout Data',
                content:
                    'JSS handles layout data fetching and component resolution automatically. getStaticProps or getServerSideProps fetch layout data. Component factory maps componentName to React components. Placeholder component renders nested content.',
            },
        ],
        examTips: [
            'Know the structure of layout service response',
            'Experience Edge is the production content source',
            'Layout data includes both route fields and component data',
            'Understand how componentName maps to React components',
        ],
        resources: [
            {
                id: 'res-layout-service',
                title: 'Layout Service',
                url: 'https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/sitecore-layout-service.html',
                description: 'Layout Service documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-xmc-headless-variants',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'renderings-layout',
        topicSlug: 'headless-variants',
        overview:
            'Component variants in XM Cloud enable different visual presentations of the same component data. Understanding variant configuration and implementation supports flexible content authoring.',
        keyConceptsTitle: 'Component Variant Concepts',
        keyConcepts: [
            'Variants provide different visual presentations',
            'Authors select variants when adding components',
            'Variants are defined via rendering parameters',
            'CSS classes or React logic implement variant styles',
            'SXA components include predefined variants',
        ],
        sections: [
            {
                id: 'section-variant-config',
                title: 'Configuring Variants',
                content:
                    'Variants are configured as rendering parameters on the component. Create a parameter template with variant options. Authors select the variant when placing or editing the component. The variant value is passed to the React component.',
            },
            {
                id: 'section-implementation',
                title: 'Implementing Variants',
                content:
                    'Read variant from props.params in your component. Apply different CSS classes or render different JSX based on variant. Use conditional rendering or variant-specific sub-components. Keep variant logic clean and maintainable.',
            },
            {
                id: 'section-sxa-variants',
                title: 'SXA Component Variants',
                content:
                    'SXA components include standard variants out of the box. Variants defined in Sitecore appear in the component configuration. Custom variants can be added by extending SXA rendering parameters. Styles are applied via variant-specific CSS classes.',
            },
        ],
        examTips: [
            'Variants are passed via rendering parameters',
            'Access variant value through props.params',
            'SXA includes predefined variants for standard components',
            'Variants affect presentation, not content structure',
        ],
        resources: [
            {
                id: 'res-variants',
                title: 'Component Variants',
                url: 'https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/component-variants.html',
                description: 'Implementing component variants',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Sitecore Content Serialization
    // ========================================================================
    {
        topicId: 'topic-xmc-scs-config',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'content-serialization',
        topicSlug: 'scs-configuration',
        overview:
            'Sitecore Content Serialization (SCS) in XM Cloud stores Sitecore items as files for version control and deployment. Understanding XM Cloud-specific configuration ensures reliable deployments.',
        keyConceptsTitle: 'XM Cloud SCS Concepts',
        keyConcepts: [
            'sitecore.json configures serialization for XM Cloud',
            'Modules define items to include in deployments',
            'Serialized items deploy automatically via XM Cloud Deploy',
            'Predicates control which items are serialized',
            'Items not in serialization must be created manually',
        ],
        sections: [
            {
                id: 'section-xmc-config',
                title: 'XM Cloud Configuration',
                content:
                    'XM Cloud projects include sitecore.json at the solution root. The configuration references module files that define what to serialize. XM Cloud Deploy reads this configuration during deployments to push items.',
            },
            {
                id: 'section-modules',
                title: 'Module Organization',
                content:
                    'Organize modules by feature or layer (Foundation, Feature, Project). Each module file lists includes for templates, renderings, settings, and content. Use descriptive names to indicate module purpose.',
            },
            {
                id: 'section-best-practices',
                title: 'Serialization Best Practices',
                content:
                    'Serialize all developer-created items (templates, renderings, placeholders). Be cautious with content - serialized content overwrites existing on deploy. Use allowedPushOperations to prevent accidental deletions. Exclude user-specific and environment-specific items.',
            },
        ],
        examTips: [
            'Serialized items are pushed on every deployment automatically via XM Cloud Deploy',
            'Content in serialization will overwrite production content - be careful with content items',
            'Know how to configure modules for different item types: templates, renderings, settings, content',
            'Understand the impact of allowedPushOperations: CreateOnly, CreateAndUpdate, CreateUpdateAndDelete',
            'Serialize developer-created items (templates, renderings, placeholders) but be cautious with content',
            'Exclude user-specific and environment-specific items from serialization',
        ],
        resources: [
            {
                id: 'res-xmc-scs',
                title: 'SCS for XM Cloud',
                url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-content-serialization.html',
                description: 'Content Serialization in XM Cloud',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-xmc-cli',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'content-serialization',
        topicSlug: 'xm-cloud-cli',
        overview:
            'The Sitecore CLI with XM Cloud plugin provides commands for project management, serialization, and environment operations. Understanding CLI usage is essential for XM Cloud development workflows.',
        keyConceptsTitle: 'XM Cloud CLI Concepts',
        keyConcepts: [
            'XM Cloud plugin extends Sitecore CLI',
            'Cloud login authenticates to XM Cloud',
            'Project and environment commands manage resources',
            'Serialization commands sync items with XM Cloud',
            'Deploy commands trigger and monitor deployments',
        ],
        sections: [
            {
                id: 'section-installation',
                title: 'CLI Installation',
                content:
                    'Install Sitecore CLI as a dotnet tool. Add the XM Cloud plugin via CLI plugin commands. Initialize project with dotnet sitecore init. Login to XM Cloud with dotnet sitecore cloud login.',
            },
            {
                id: 'section-common-commands',
                title: 'Common Commands',
                content:
                    'dotnet sitecore cloud login: Authenticate to XM Cloud. dotnet sitecore ser pull/push: Sync serialized items. dotnet sitecore cloud project list: List projects. dotnet sitecore cloud environment create: Create environment.',
            },
            {
                id: 'section-automation',
                title: 'CI/CD Automation',
                content:
                    'Use client credentials for non-interactive authentication in CI. CLI commands can be scripted for automated workflows. Deployment status can be checked via CLI. Combine with GitHub Actions or Azure Pipelines.',
            },
        ],
        examTips: [
            'Know the common XM Cloud CLI commands',
            'Cloud login is required before other cloud commands',
            'Client credentials enable non-interactive CI/CD usage',
            'ser pull downloads from XM Cloud, ser push uploads',
        ],
        resources: [
            {
                id: 'res-xmc-cli',
                title: 'XM Cloud CLI',
                url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-cli.html',
                description: 'Sitecore CLI for XM Cloud',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Sitecore APIs & Webhooks
    // ========================================================================
    {
        topicId: 'topic-xmc-graphql',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'apis-webhooks',
        topicSlug: 'graphql',
        overview:
            'GraphQL APIs provide flexible content querying for XM Cloud applications. Understanding the authoring API, management API, and Experience Edge API enables powerful content interactions.',
        keyConceptsTitle: 'GraphQL API Concepts',
        keyConcepts: [
            'Authoring API: Content management operations',
            'Experience Edge API: Content delivery queries',
            'Schema defines available types and queries',
            'Queries retrieve specific data efficiently',
            'IDE (GraphQL Playground) enables query exploration',
        ],
        sections: [
            {
                id: 'section-apis',
                title: 'Available APIs',
                content:
                    'Authoring API provides content management capabilities for integrations. Experience Edge API delivers published content to rendering hosts. Management API handles site and configuration management. Each has its own endpoint and authentication.',
            },
            {
                id: 'section-queries',
                title: 'Writing Queries',
                content:
                    'Use GraphQL to request exactly the data you need. Layout queries retrieve page composition. Item queries fetch specific content. Search queries find content by criteria. Use variables for dynamic query parameters.',
            },
            {
                id: 'section-edge',
                title: 'Experience Edge',
                content:
                    'Experience Edge is the production content delivery layer. It caches content globally for fast delivery. Publishing pushes content to Edge. Edge GraphQL API is optimized for content consumption.',
            },
        ],
        examTips: [
            'Know the difference between Authoring API (content management) and Edge API (content delivery)',
            'Experience Edge is read-only for content delivery - global CDN with caching',
            'Publishing is required to update Edge content - content not live until published',
            'Use the GraphQL IDE (Playground) to explore and test queries',
            'Management API handles site and configuration management with its own endpoint',
            'Each API has its own authentication method and endpoint',
        ],
        resources: [
            {
                id: 'res-graphql',
                title: 'GraphQL APIs',
                url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/graphql-api.html',
                description: 'XM Cloud GraphQL API documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-xmc-edge',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'apis-webhooks',
        topicSlug: 'experience-edge',
        overview:
            'Experience Edge is the content delivery network for XM Cloud that serves content via GraphQL. Understanding Edge configuration, publishing, and caching is essential for production deployments.',
        keyConceptsTitle: 'Experience Edge Concepts',
        keyConcepts: [
            'Edge is a globally distributed CDN for content',
            'Content reaches Edge via publishing',
            'Each environment has its own Edge endpoint',
            'API keys authenticate Edge requests',
            'Caching improves content delivery performance',
        ],
        sections: [
            {
                id: 'section-publishing',
                title: 'Publishing to Edge',
                content:
                    'Content must be published to appear on Experience Edge. Publishing pushes content from CM to Edge. Smart publish only publishes changed content. Edge endpoints update within seconds of publishing.',
            },
            {
                id: 'section-authentication',
                title: 'Edge Authentication',
                content:
                    'Edge API requires an API key for authentication. Keys are created in the Cloud Portal. Different keys can be used for different environments. Include the key in the sc_apikey header or query parameter.',
            },
            {
                id: 'section-caching',
                title: 'Edge Caching',
                content:
                    'Edge caches content at global edge locations. Cache invalidates when content is published. Cache headers control browser caching. Consider cache behavior when planning content updates.',
            },
        ],
        examTips: [
            'Content is not live on Edge until published',
            'Each XM Cloud environment has a unique Edge endpoint',
            'API keys are required for Edge access',
            'Know how publishing affects Edge content availability',
        ],
        resources: [
            {
                id: 'res-edge',
                title: 'Experience Edge',
                url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/sitecore-experience-edge-for-xm.html',
                description: 'Experience Edge documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-xmc-webhooks',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'apis-webhooks',
        topicSlug: 'webhooks',
        overview:
            'Webhooks in XM Cloud notify external systems of content events. Understanding webhook configuration and handling enables integration with external systems and automated workflows.',
        keyConceptsTitle: 'Webhook Concepts',
        keyConcepts: [
            'Webhooks send HTTP requests on content events',
            'Configure webhooks in XM Cloud settings',
            'Events include item:saved, item:published, etc.',
            'Webhook handlers must respond quickly',
            'Authentication secures webhook endpoints',
        ],
        sections: [
            {
                id: 'section-configuration',
                title: 'Configuring Webhooks',
                content:
                    'Create webhooks in XM Cloud configuration. Specify the target URL and events to trigger. Choose specific item paths to filter events. Configure authentication headers for secure endpoints.',
            },
            {
                id: 'section-events',
                title: 'Webhook Events',
                content:
                    'Publish events fire when content is published. Save events trigger on content changes. Delete events indicate removed content. Each event includes item data and context information.',
            },
            {
                id: 'section-handling',
                title: 'Handling Webhooks',
                content:
                    'Create an endpoint to receive webhook POSTs. Validate the webhook source and signature. Process events asynchronously for long operations. Return 200 OK quickly to acknowledge receipt.',
            },
        ],
        examTips: [
            'Webhooks are outbound HTTP calls from XM Cloud',
            'Handlers should respond quickly and process async',
            'Know the common webhook event types',
            'Authentication protects webhook endpoints',
        ],
        resources: [
            {
                id: 'res-webhooks',
                title: 'Webhooks',
                url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/webhooks.html',
                description: 'XM Cloud webhooks documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: XM Cloud Pages
    // ========================================================================
    {
        topicId: 'topic-xmc-pages-editor',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'xm-cloud-pages',
        topicSlug: 'pages-editor',
        overview:
            'Pages is the visual editing experience in XM Cloud that enables marketers to build and edit pages using components. Understanding Pages capabilities and requirements ensures good authoring experiences.',
        keyConceptsTitle: 'Pages Editor Concepts',
        keyConcepts: [
            'Pages provides WYSIWYG visual editing',
            'Components are dragged onto placeholders',
            'Real-time preview shows actual rendering',
            'Inline editing modifies field values directly',
            'Components must support editing mode',
        ],
        sections: [
            {
                id: 'section-editing',
                title: 'Visual Editing',
                content:
                    'Pages renders your Next.js application in editing mode. Authors see the actual site appearance while editing. Components can be added, moved, and configured visually. Inline editing allows changing text directly on the page.',
            },
            {
                id: 'section-editing-host',
                title: 'Editing Host Connection',
                content:
                    'Pages connects to your rendering host for live preview. The editing host URL is configured per environment. Metadata editing mode enables Pages integration. Ensure CORS allows Pages origin.',
            },
            {
                id: 'section-component-support',
                title: 'Component Editing Support',
                content:
                    'Use JSS field components for inline editing support. Components receive editing props in Pages mode. Handle both editing and non-editing rendering appropriately. Test components in Pages before deployment.',
            },
        ],
        examTips: [
            'Pages requires rendering host connection for live preview',
            'JSS field components enable inline editing in Pages WYSIWYG editor',
            'Components must handle both editing and non-editing modes properly',
            'Know how to configure editing host URL per environment',
            'Metadata editing mode enables Pages integration with rendering host',
            'Ensure CORS allows Pages origin for cross-domain editing to work',
        ],
        resources: [
            {
                id: 'res-pages',
                title: 'XM Cloud Pages',
                url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/pages.html',
                description: 'XM Cloud Pages documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-xmc-component-library',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'xm-cloud-pages',
        topicSlug: 'component-library',
        overview:
            'Building components for Pages requires proper configuration and registration. Understanding component scaffolding and configuration ensures components work well in the visual editor.',
        keyConceptsTitle: 'Component Library Concepts',
        keyConcepts: [
            'Components must be registered in component factory',
            'Sitecore rendering items define component metadata',
            'Placeholder settings control component placement',
            'Parameters template enables component configuration',
            'Data source template defines content structure',
        ],
        sections: [
            {
                id: 'section-registration',
                title: 'Component Registration',
                content:
                    'Register React components in the component factory. The registration name must match the Sitecore rendering name. Export components from the components folder index. Factory resolves components by name from layout data.',
            },
            {
                id: 'section-sitecore-config',
                title: 'Sitecore Configuration',
                content:
                    'Create rendering items under /sitecore/layout/Renderings. Set component name to match React component. Configure data source template for component content. Set placeholder settings to control where components can be placed.',
            },
            {
                id: 'section-scaffolding',
                title: 'Component Scaffolding',
                content:
                    'Use JSS scaffolding to generate component files. Scaffolding creates React component, types, and styles. Configure scaffolding templates for team standards. Generated components include basic JSS patterns.',
            },
        ],
        examTips: [
            'Component names must match between React and Sitecore',
            'Placeholder settings restrict where components appear',
            'Data source template defines the component\'s content fields',
            'Parameters template enables component configuration options',
        ],
        resources: [
            {
                id: 'res-components',
                title: 'Building Components',
                url: 'https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/building-components.html',
                description: 'Component development guide',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Security for Developers
    // ========================================================================
    {
        topicId: 'topic-xmc-roles',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'security',
        topicSlug: 'roles-permissions',
        overview:
            'XM Cloud uses role-based security to control access to content and features. Understanding roles, permissions, and security assignment is important for implementing secure solutions.',
        keyConceptsTitle: 'Security Concepts',
        keyConcepts: [
            'Roles define sets of permissions',
            'Users are assigned to roles, not permissions directly',
            'Item security controls content access',
            'Permissions include read, write, create, delete',
            'Security inheritance flows through content tree',
        ],
        sections: [
            {
                id: 'section-roles',
                title: 'Role-Based Security',
                content:
                    'Create roles that represent job functions. Assign permissions to roles, not users. Users receive permissions through role membership. Role membership can be nested for inheritance.',
            },
            {
                id: 'section-item-security',
                title: 'Item-Level Security',
                content:
                    'Set security on individual items or folders. Inheritance flows from parent to children. Breaking inheritance allows custom security. Deny permissions override Allow at same level.',
            },
            {
                id: 'section-best-practices',
                title: 'Security Best Practices',
                content:
                    'Use roles for all permission assignment. Create site-specific roles for multisite. Test security with representative user accounts. Document security model for maintenance.',
            },
        ],
        examTips: [
            'Always assign permissions to roles, not users',
            'Deny takes precedence over Allow',
            'Breaking inheritance creates a new security starting point',
            'Know the standard XM Cloud roles and their purposes',
        ],
        resources: [
            {
                id: 'res-security',
                title: 'XM Cloud Security',
                url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/security.html',
                description: 'XM Cloud security documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-xmc-auth',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'security',
        topicSlug: 'authentication',
        overview:
            'Authentication in XM Cloud uses OAuth and API keys for different scenarios. Understanding authentication methods ensures secure integration and API access.',
        keyConceptsTitle: 'Authentication Concepts',
        keyConcepts: [
            'OAuth authenticates users and applications',
            'API keys authenticate Edge requests',
            'Client credentials enable service-to-service auth',
            'Tokens expire and must be refreshed',
            'Secure storage protects credentials',
        ],
        sections: [
            {
                id: 'section-oauth',
                title: 'OAuth Authentication',
                content:
                    'XM Cloud uses Sitecore Identity for OAuth. Browser-based flows redirect for login. Client credentials enable non-interactive auth. Access tokens authorize API requests.',
            },
            {
                id: 'section-api-keys',
                title: 'API Key Authentication',
                content:
                    'Experience Edge requires API keys. Keys are created in Cloud Portal. Include keys in request headers. Rotate keys periodically for security.',
            },
            {
                id: 'section-rendering-host',
                title: 'Rendering Host Security',
                content:
                    'Rendering hosts authenticate to Experience Edge. Use environment variables for credentials. Protect API keys in production. Configure CORS for allowed origins.',
            },
        ],
        examTips: [
            'Experience Edge uses API keys, not OAuth',
            'Client credentials are for service accounts',
            'Know how to securely store and use credentials',
            'API keys should be rotated periodically',
        ],
        resources: [
            {
                id: 'res-auth',
                title: 'Authentication',
                url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/authentication.html',
                description: 'XM Cloud authentication guide',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Development Workflows & Data Modeling
    // ========================================================================
    {
        topicId: 'topic-xmc-templates',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'data-modeling',
        topicSlug: 'data-templates',
        overview:
            'Data templates in XM Cloud define content structure for pages and components. Understanding template design and its relationship to JSS components is essential for content modeling.',
        keyConceptsTitle: 'Template Concepts',
        keyConcepts: [
            'Templates define content item structure',
            'Fields map to component props in JSS',
            'Template inheritance enables field reuse',
            'Standard values set defaults for new items',
            'Page templates define route content structure',
        ],
        sections: [
            {
                id: 'section-design',
                title: 'Template Design',
                content:
                    'Create templates under /sitecore/templates. Organize fields into logical sections. Use appropriate field types for content. Consider reuse through base templates.',
            },
            {
                id: 'section-jss-mapping',
                title: 'JSS Component Mapping',
                content:
                    'Template fields become component props. Field names appear in props.fields object. Use matching JSS field components for editing. Data source templates define component content.',
            },
            {
                id: 'section-inheritance',
                title: 'Template Inheritance',
                content:
                    'Templates can inherit from multiple bases. Common patterns use interface templates. Standard values set via __Standard Values child. Inherited fields appear in all derived templates.',
            },
        ],
        examTips: [
            'Know common field types and their uses',
            'Standard values affect all items of that template',
            'Template names should be descriptive',
            'Understand how templates map to JSS props',
        ],
        resources: [
            {
                id: 'res-templates',
                title: 'Data Templates',
                url: 'https://doc.sitecore.com/xmc/en/developers/xm-cloud/data-templates.html',
                description: 'XM Cloud data templates guide',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-xmc-multisite',
        certificationSlug: 'xm-cloud-developer',
        competencySlug: 'data-modeling',
        topicSlug: 'multisite',
        overview:
            'XM Cloud supports multiple sites within a single project, with shared or separate content. Understanding multisite architecture enables efficient multi-brand and multi-region implementations.',
        keyConceptsTitle: 'Multisite Concepts',
        keyConcepts: [
            'Multiple sites can share an XM Cloud project',
            'Sites can share templates and renderings',
            'Content can be site-specific or shared',
            'JSS multisite plugin handles routing',
            'Sites are defined in configuration and Sitecore',
        ],
        sections: [
            {
                id: 'section-architecture',
                title: 'Multisite Architecture',
                content:
                    'Each site has its own content root. Sites can share templates, layouts, and renderings. Site configuration defines hostnames and start paths. One rendering host can serve multiple sites.',
            },
            {
                id: 'section-jss-multisite',
                title: 'JSS Multisite Support',
                content:
                    'Enable multisite add-on during project creation. Site resolver determines current site from hostname. Routes are resolved relative to site start item. Sitemap generation handles multiple sites.',
            },
            {
                id: 'section-content-sharing',
                title: 'Content Sharing',
                content:
                    'Create shared content areas for cross-site content. Data sources can reference shared or site-specific content. Media library can be shared or partitioned. Consider content governance for shared items.',
            },
        ],
        examTips: [
            'Know how site resolution works in JSS',
            'Shared content enables reuse across sites',
            'Each site can have unique styling and components',
            'Understand multisite configuration requirements',
        ],
        resources: [
            {
                id: 'res-multisite',
                title: 'Multisite Architecture',
                url: 'https://doc.sitecore.com/xmc/en/developers/jss/latest/jss-xmc/multisite-architecture.html',
                description: 'JSS multisite documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
];
