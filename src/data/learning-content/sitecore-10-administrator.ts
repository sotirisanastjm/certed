import type { TopicLearningContent } from '../../types';

export const sitecore10AdminContent: TopicLearningContent[] = [
    // ========================================================================
    // COMPETENCY: Control Panel Navigation
    // ========================================================================
    {
        topicId: 'topic-admin-cp-overview',
        certificationSlug: 'sitecore-10-administrator',
        competencySlug: 'control-panel',
        topicSlug: 'control-panel-overview',
        overview:
            'The Sitecore Control Panel provides administrative tools for managing the Sitecore instance. Understanding its sections and capabilities is essential for system administrators.',
        keyConceptsTitle: 'Control Panel Fundamentals',
        keyConcepts: [
            'Control Panel is accessed from Sitecore Desktop or Launchpad',
            'Organized into sections: Indexing, Security, Localization, Analytics, etc.',
            'Provides tools for common administrative tasks',
            'Some tools are only available on CM servers',
            'Access is controlled by security roles',
        ],
        sections: [
            {
                id: 'section-accessing',
                title: 'Accessing Control Panel',
                content:
                    'Access Control Panel from Sitecore Desktop via the Start button, or from Launchpad. Requires appropriate administrative permissions. The interface organizes tools into logical categories for easy navigation.',
            },
            {
                id: 'section-sections',
                title: 'Control Panel Sections',
                content:
                    'Indexing Manager: Rebuild and manage search indexes. Security: User and role management tools. Localization: Language and translation tools. Database: Database maintenance utilities. Administration: System configuration and maintenance.',
            },
        ],
        examTips: [
            'Know how to access Control Panel from different entry points: Desktop or Launchpad',
            'Understand which tools are available in each section: Indexing, Security, Localization, Analytics',
            'Some functions are only available on Content Management servers, not CD',
            'Administrative access is required for most Control Panel tools',
            'Control Panel sections: Indexing Manager, Security tools, Database utilities, Administration',
        ],
        resources: [
            {
                id: 'res-control-panel',
                title: 'Control Panel Overview',
                url: 'https://doc.sitecore.com/xp/en/users/latest/sitecore-experience-platform/the-control-panel.html',
                description: 'Official Control Panel documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-admin-indexing',
        certificationSlug: 'sitecore-10-administrator',
        competencySlug: 'control-panel',
        topicSlug: 'indexing-management',
        overview:
            'Search indexes power Sitecore search functionality and must be maintained properly. Understanding index management through the Control Panel is essential for administrators.',
        keyConceptsTitle: 'Indexing Management Concepts',
        keyConcepts: [
            'Indexes store searchable content data',
            'Rebuild indexes when content or configuration changes',
            'Different indexes serve different purposes',
            'Index Manager shows index status and health',
            'Solr or Azure Search typically powers indexes',
        ],
        sections: [
            {
                id: 'section-index-manager',
                title: 'Indexing Manager',
                content:
                    'Indexing Manager shows all configured indexes with their status. Select indexes to rebuild individually or all at once. Monitor rebuild progress and completion status. Check for errors or warnings.',
            },
            {
                id: 'section-when-rebuild',
                title: 'When to Rebuild Indexes',
                content:
                    'Rebuild after template changes, after Solr schema changes, when search results are inconsistent, after major content migrations, or when troubleshooting search issues.',
            },
        ],
        examTips: [
            'Know when index rebuilding is necessary: template changes, Solr schema changes, search inconsistencies, content migrations',
            'Understand the difference between sitecore indexes: Master, Web, Core indexes',
            'Index rebuilding can impact performance during execution - schedule during low traffic',
            'Monitor index health regularly via Indexing Manager',
            'Default indexes: sitecore_master_index, sitecore_web_index, sitecore_core_index',
        ],
        resources: [
            {
                id: 'res-indexing',
                title: 'Indexing Manager',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/platform-administration-and-architecture/using-the-indexing-manager.html',
                description: 'Indexing Manager documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Workflow & Publishing
    // ========================================================================
    {
        topicId: 'topic-admin-workflow-mgmt',
        certificationSlug: 'sitecore-10-administrator',
        competencySlug: 'workflow-publishing',
        topicSlug: 'workflow-management',
        overview:
            'Workflows control content approval processes before publishing. Understanding workflow configuration and management enables effective content governance.',
        keyConceptsTitle: 'Workflow Management Concepts',
        keyConcepts: [
            'Workflows define content approval processes',
            'States represent stages in the approval process',
            'Commands move content between states',
            'Actions execute when states change',
            'Email notifications keep stakeholders informed',
        ],
        sections: [
            {
                id: 'section-config',
                title: 'Configuring Workflows',
                content:
                    'Workflows are defined under /sitecore/system/Workflows. Create states for each approval stage. Add commands to transition between states. Configure actions for automation like auto-publish or email notifications.',
            },
            {
                id: 'section-monitoring',
                title: 'Monitoring Workflows',
                content:
                    'Use Workbox to view items in workflow. Monitor items awaiting approval. Identify bottlenecks in approval process. Help content authors navigate workflow states.',
            },
        ],
        examTips: [
            'Workbox is the primary tool for workflow monitoring',
            'Know how to configure workflow states and commands',
            'Understand workflow assignment via standard values',
            'Email notifications are configured as workflow actions',
        ],
        resources: [
            {
                id: 'res-workflows',
                title: 'Workflows',
                url: 'https://doc.sitecore.com/xp/en/users/latest/sitecore-experience-platform/workflows.html',
                description: 'Workflow documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-admin-publishing',
        certificationSlug: 'sitecore-10-administrator',
        competencySlug: 'workflow-publishing',
        topicSlug: 'publishing-strategies',
        overview:
            'Publishing transfers content from the Master database to the Web database for delivery. Understanding different publishing strategies ensures content is delivered efficiently.',
        keyConceptsTitle: 'Publishing Strategy Concepts',
        keyConcepts: [
            'Full Publish: Republishes all content',
            'Smart Publish: Only publishes changed items',
            'Incremental Publish: Uses publishing queue',
            'Related items can be included in publish',
            'Publishing restrictions control availability',
        ],
        sections: [
            {
                id: 'section-modes',
                title: 'Publishing Modes',
                content:
                    'Full Publish republishes everything - use sparingly. Smart Publish compares databases and publishes differences. Incremental Publish processes items in the publishing queue for fastest performance.',
            },
            {
                id: 'section-scheduling',
                title: 'Publishing Restrictions',
                content:
                    'Publishing restrictions control when items are visible. Publishable From/To dates limit visibility windows. Items can be marked as Never Publish. Restrictions are inherited by child items.',
            },
        ],
        examTips: [
            'Know the differences between publish modes',
            'Incremental publish is fastest for frequent small changes',
            'Full publish should be used carefully on large sites',
            'Publishing restrictions affect content visibility',
        ],
        resources: [
            {
                id: 'res-publishing',
                title: 'Publishing',
                url: 'https://doc.sitecore.com/xp/en/users/latest/sitecore-experience-platform/publishing.html',
                description: 'Publishing documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-admin-pub-targets',
        certificationSlug: 'sitecore-10-administrator',
        competencySlug: 'workflow-publishing',
        topicSlug: 'publishing-targets',
        overview:
            'Publishing targets define where content is published. Understanding target configuration enables multi-environment content delivery.',
        keyConceptsTitle: 'Publishing Target Concepts',
        keyConcepts: [
            'Publishing targets point to Web databases',
            'Multiple targets enable staged publishing',
            'Each target can have different content',
            'Targets are configured under Publishing Targets',
            'Select targets when publishing content',
        ],
        sections: [
            {
                id: 'section-config',
                title: 'Configuring Publishing Targets',
                content:
                    'Publishing targets are defined under /sitecore/system/Publishing targets. Each target specifies a target database (typically Web). Connection string defines the database location. Multiple targets enable publishing to different environments.',
            },
            {
                id: 'section-usage',
                title: 'Using Publishing Targets',
                content:
                    'Select target databases when publishing. Publish to staging before production. Verify content on staging before production publish. Manage multiple site environments with separate targets.',
            },
        ],
        examTips: [
            'Know how to configure publishing targets',
            'Multiple targets enable staged content delivery',
            'Each target requires proper database connection',
            'Select appropriate targets during publish operations',
        ],
        resources: [
            {
                id: 'res-pub-targets',
                title: 'Publishing Targets',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/platform-administration-and-architecture/publishing-targets.html',
                description: 'Publishing targets documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: User & Role Management
    // ========================================================================
    {
        topicId: 'topic-admin-user-mgmt',
        certificationSlug: 'sitecore-10-administrator',
        competencySlug: 'user-management',
        topicSlug: 'user-administration',
        overview:
            'User administration includes creating, managing, and troubleshooting user accounts. Understanding user management tools helps maintain secure and productive access.',
        keyConceptsTitle: 'User Administration Concepts',
        keyConcepts: [
            'User Manager provides user administration',
            'Users have profiles with properties',
            'Locked accounts can be unlocked',
            'Password policies enforce security',
            'Users belong to security domains',
        ],
        sections: [
            {
                id: 'section-user-manager',
                title: 'User Manager',
                content:
                    'User Manager is accessed from Control Panel or Launchpad. Create new users with appropriate domain. Set user properties like email and name. Manage role memberships. Unlock locked accounts.',
            },
            {
                id: 'section-troubleshooting',
                title: 'User Troubleshooting',
                content:
                    'Common issues: locked accounts from failed logins, missing role memberships, incorrect domain. Unlock accounts via User Manager. Verify role memberships for access issues. Check domain for login problems.',
            },
        ],
        examTips: [
            'Know how to create users in different domains',
            'Understand how to unlock locked accounts',
            'Users get permissions through role membership',
            'Domain is part of the username (domain\\user)',
        ],
        resources: [
            {
                id: 'res-users',
                title: 'User Administration',
                url: 'https://doc.sitecore.com/xp/en/users/latest/sitecore-experience-platform/managing-users.html',
                description: 'User management documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-admin-role-mgmt',
        certificationSlug: 'sitecore-10-administrator',
        competencySlug: 'user-management',
        topicSlug: 'role-management',
        overview:
            'Role-based security assigns permissions to roles rather than individual users. Understanding role management enables efficient security administration.',
        keyConceptsTitle: 'Role Management Concepts',
        keyConcepts: [
            'Roles group permissions for assignment',
            'Users are assigned to roles',
            'Roles can contain other roles',
            'Built-in roles provide common access patterns',
            'Custom roles match organizational needs',
        ],
        sections: [
            {
                id: 'section-role-manager',
                title: 'Role Manager',
                content:
                    'Role Manager allows creating and managing roles. Create roles that match job functions. Assign roles to users via User Manager. Configure role memberships for inheritance.',
            },
            {
                id: 'section-built-in',
                title: 'Built-In Roles',
                content:
                    'Sitecore provides standard roles: Client Users for basic access, Client Authoring for content editing, Client Publishing for publish rights, Client Developing for developer tools. Customize built-in roles or create new ones.',
            },
        ],
        examTips: [
            'Know the purpose of built-in Sitecore roles',
            'Assign permissions to roles, not users',
            'Role memberships are cumulative',
            'Create custom roles for specific needs',
        ],
        resources: [
            {
                id: 'res-roles',
                title: 'Role Management',
                url: 'https://doc.sitecore.com/xp/en/users/latest/sitecore-experience-platform/managing-roles.html',
                description: 'Role management documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-admin-author-support',
        certificationSlug: 'sitecore-10-administrator',
        competencySlug: 'user-management',
        topicSlug: 'content-author-support',
        overview:
            'Supporting content authors includes troubleshooting access issues, providing training, and ensuring productive editing experiences.',
        keyConceptsTitle: 'Author Support Concepts',
        keyConcepts: [
            'Authors use Content Editor and Experience Editor',
            'Access issues often relate to security settings',
            'Training improves author productivity',
            'Experience Editor issues may need troubleshooting',
            'Workflow questions are common support requests',
        ],
        sections: [
            {
                id: 'section-common-issues',
                title: 'Common Author Issues',
                content:
                    'Access denied: Check role memberships and item security. Cannot edit: Verify write permissions and workflow state. Experience Editor not loading: Check JavaScript errors and rendering issues. Items missing: Check language versions and publishing status.',
            },
            {
                id: 'section-training',
                title: 'Author Training',
                content:
                    'Train authors on Content Editor basics, Experience Editor usage, workflow processes, and media library management. Provide documentation and quick reference guides. Establish support channels for questions.',
            },
        ],
        examTips: [
            'Common issues involve security and workflow',
            'Experience Editor problems often have JavaScript causes',
            'Training reduces support requests',
            'Document common procedures for authors',
        ],
        resources: [
            {
                id: 'res-author-support',
                title: 'Content Authoring',
                url: 'https://doc.sitecore.com/xp/en/users/latest/sitecore-experience-platform/editing-content.html',
                description: 'Content authoring documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Architecture & Containers
    // ========================================================================
    {
        topicId: 'topic-admin-arch',
        certificationSlug: 'sitecore-10-administrator',
        competencySlug: 'architecture-containers',
        topicSlug: 'sitecore-architecture',
        overview:
            'Understanding Sitecore architecture helps administrators manage and troubleshoot the platform. Know the server roles and how they interact.',
        keyConceptsTitle: 'Architecture Fundamentals',
        keyConcepts: [
            'CM servers handle content management',
            'CD servers deliver content to visitors',
            'xConnect manages experience data',
            'Scaling can be vertical or horizontal',
            'Load balancing distributes traffic',
        ],
        sections: [
            {
                id: 'section-topology',
                title: 'Server Topology',
                content:
                    'Content Management (CM) for authoring, publishing, admin tasks. Content Delivery (CD) for serving visitor requests. Processing for analytics aggregation. xConnect for experience data collection and retrieval.',
            },
            {
                id: 'section-scaling',
                title: 'Scaling Considerations',
                content:
                    'Vertical scaling: increase server resources. Horizontal scaling: add more servers. CD servers scale horizontally for traffic. CM typically single server or active-passive. Load balancers distribute requests.',
            },
        ],
        examTips: [
            'Know the responsibilities: CM (authoring/admin), CD (visitor requests), Processing (analytics), xConnect (experience data)',
            'Understand CM vs CD database access: CM reads/writes Master, CD reads Web only',
            'CD servers scale horizontally for performance and traffic handling',
            'xConnect is required for personalization and analytics features',
            'Vertical scaling increases server resources; Horizontal scaling adds more servers',
            'Load balancers distribute traffic across multiple CD servers',
        ],
        resources: [
            {
                id: 'res-architecture',
                title: 'Architecture',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/platform-administration-and-architecture/sitecore-architecture.html',
                description: 'Architecture documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-admin-containers',
        certificationSlug: 'sitecore-10-administrator',
        competencySlug: 'architecture-containers',
        topicSlug: 'container-deployment',
        overview:
            'Container-based deployments use Docker and Kubernetes for Sitecore hosting. Understanding container concepts helps with modern deployment options.',
        keyConceptsTitle: 'Container Deployment Concepts',
        keyConcepts: [
            'Containers package applications consistently',
            'Docker is the container runtime',
            'Kubernetes orchestrates container clusters',
            'Sitecore provides official container images',
            'Containers enable scalable deployments',
        ],
        sections: [
            {
                id: 'section-basics',
                title: 'Container Basics',
                content:
                    'Containers provide consistent environments. Docker Compose manages multi-container applications. Images are built from Sitecore base images. Containers are ephemeral - data persists in volumes.',
            },
            {
                id: 'section-kubernetes',
                title: 'Kubernetes Basics',
                content:
                    'Kubernetes orchestrates container clusters. Deployments manage container replicas. Services expose containers to network. Sitecore provides Kubernetes specifications for deployment.',
            },
        ],
        examTips: [
            'Understand basic container concepts',
            'Know the difference between Docker and Kubernetes',
            'Sitecore provides official container images',
            'Data persists in volumes, not containers',
        ],
        resources: [
            {
                id: 'res-containers',
                title: 'Container Deployments',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/developer-tools/containers-in-sitecore-development.html',
                description: 'Container deployment documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Installation & Upgrades
    // ========================================================================
    {
        topicId: 'topic-admin-install',
        certificationSlug: 'sitecore-10-administrator',
        competencySlug: 'installation',
        topicSlug: 'installation-process',
        overview:
            'Installing Sitecore requires proper preparation and execution. Understanding the installation process and prerequisites ensures successful deployments.',
        keyConceptsTitle: 'Installation Concepts',
        keyConcepts: [
            'SIF (Sitecore Installation Framework) automates installation',
            'Prerequisites include .NET, SQL Server, Solr',
            'License file is required for installation',
            'Configuration files customize the install',
            'Post-installation steps complete setup',
        ],
        sections: [
            {
                id: 'section-prerequisites',
                title: 'Prerequisites',
                content:
                    'Windows Server with IIS, .NET Framework, SQL Server for databases, Solr for search. Verify all prerequisites before running installer. Use Sitecore Prerequisites Checker tool.',
            },
            {
                id: 'section-sif',
                title: 'Sitecore Installation Framework',
                content:
                    'SIF is a PowerShell module for installation automation. Configuration files define installation parameters. Run installation with appropriate parameters. Monitor output for errors.',
            },
        ],
        examTips: [
            'Know the required prerequisites: Windows Server with IIS, .NET Framework, SQL Server, Solr for search',
            'SIF (Sitecore Installation Framework) automates the installation process via PowerShell',
            'License file must be valid and current - required for installation',
            'Understand the SIF configuration parameters for different topologies',
            'Use Sitecore Prerequisites Checker tool before installation',
            'Configuration files define installation parameters for different server roles',
        ],
        resources: [
            {
                id: 'res-installation',
                title: 'Installation Guide',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/platform-administration-and-architecture/install-sitecore-xp.html',
                description: 'Installation documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-admin-updates',
        certificationSlug: 'sitecore-10-administrator',
        competencySlug: 'installation',
        topicSlug: 'updates-upgrades',
        overview:
            'Keeping Sitecore updated requires careful planning and execution. Understanding update and upgrade processes maintains system health and security.',
        keyConceptsTitle: 'Update Concepts',
        keyConcepts: [
            'Updates add fixes and minor improvements',
            'Upgrades move to new major versions',
            'Compatibility matrix shows supported combinations',
            'Test updates in non-production first',
            'Rollback plan is essential',
        ],
        sections: [
            {
                id: 'section-updates',
                title: 'Applying Updates',
                content:
                    'Download update packages from Sitecore. Review release notes for changes. Test in development/staging first. Apply to production during maintenance window. Verify functionality after update.',
            },
            {
                id: 'section-upgrades',
                title: 'Version Upgrades',
                content:
                    'Major upgrades require careful planning. Use upgrade documentation for your path. Upgrade development environment first. Test all functionality thoroughly. Plan production upgrade carefully.',
            },
        ],
        examTips: [
            'Always test updates before production',
            'Check compatibility matrix for module versions',
            'Have a rollback plan for updates',
            'Review release notes for breaking changes',
        ],
        resources: [
            {
                id: 'res-upgrades',
                title: 'Upgrades',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/platform-administration-and-architecture/upgrading.html',
                description: 'Upgrade documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Performance & Monitoring
    // ========================================================================
    {
        topicId: 'topic-admin-monitoring',
        certificationSlug: 'sitecore-10-administrator',
        competencySlug: 'performance',
        topicSlug: 'health-monitoring',
        overview:
            'Monitoring system health helps identify and resolve issues proactively. Understanding monitoring tools and techniques ensures reliable operation.',
        keyConceptsTitle: 'Monitoring Concepts',
        keyConcepts: [
            'Log files contain diagnostic information',
            'Health checks verify service status',
            'Metrics track performance over time',
            'Alerts notify of problems',
            'Dashboards visualize system health',
        ],
        sections: [
            {
                id: 'section-logs',
                title: 'Log Monitoring',
                content:
                    'Sitecore logs are in the Data/logs folder. Log files rotate daily. Filter by log level (INFO, WARN, ERROR). Search logs for specific errors. Configure log4net for log management.',
            },
            {
                id: 'section-health',
                title: 'Health Checks',
                content:
                    'Sitecore includes health check endpoints. Monitor database connectivity. Check search index status. Verify xConnect availability. Configure external monitoring tools.',
            },
        ],
        examTips: [
            'Know where log files are located',
            'Understand log levels and their meanings',
            'Health checks are essential for production',
            'Monitor both CM and CD servers',
        ],
        resources: [
            {
                id: 'res-monitoring',
                title: 'Monitoring',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/platform-administration-and-architecture/logging.html',
                description: 'Logging and monitoring documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-admin-optimization',
        certificationSlug: 'sitecore-10-administrator',
        competencySlug: 'performance',
        topicSlug: 'performance-optimization',
        overview:
            'Performance optimization improves user experience and reduces infrastructure costs. Understanding optimization techniques helps maintain fast, responsive sites.',
        keyConceptsTitle: 'Optimization Concepts',
        keyConcepts: [
            'Caching reduces database load',
            'CDN offloads static content delivery',
            'Database optimization improves queries',
            'Index optimization speeds search',
            'Code optimization reduces processing time',
        ],
        sections: [
            {
                id: 'section-caching',
                title: 'Caching Configuration',
                content:
                    'Configure HTML cache for renderings. Data cache stores item data. Prefetch cache loads common items. Cache sizes affect memory usage. Clear caches after content changes.',
            },
            {
                id: 'section-database',
                title: 'Database Optimization',
                content:
                    'Regular database maintenance improves performance. Index fragmentation affects query speed. Statistics updates help query optimizer. Consider archive strategies for old content.',
            },
        ],
        examTips: [
            'Understand different cache types and purposes',
            'CDN reduces load on Sitecore servers',
            'Database maintenance is essential for performance',
            'Monitor cache hit rates for effectiveness',
        ],
        resources: [
            {
                id: 'res-performance',
                title: 'Performance Tuning',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/platform-administration-and-architecture/caching.html',
                description: 'Caching and performance documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Sitecore Support Services
    // ========================================================================
    {
        topicId: 'topic-admin-support-portal',
        certificationSlug: 'sitecore-10-administrator',
        competencySlug: 'support-services',
        topicSlug: 'support-portal',
        overview:
            'Sitecore Support Portal provides access to support resources and ticket management. Understanding how to use support effectively resolves issues faster.',
        keyConceptsTitle: 'Support Portal Concepts',
        keyConcepts: [
            'Support Portal is at support.sitecore.com',
            'Support tickets track issues with Sitecore',
            'SLA levels define response times',
            'Severity levels prioritize issues',
            'Documentation and KB articles are available',
        ],
        sections: [
            {
                id: 'section-tickets',
                title: 'Creating Support Tickets',
                content:
                    'Log in to Support Portal with your credentials. Create new ticket with detailed description. Include logs, screenshots, and reproduction steps. Set appropriate severity level. Monitor ticket for updates.',
            },
            {
                id: 'section-sla',
                title: 'SLA and Severity',
                content:
                    'Severity 1: Production down, no workaround. Severity 2: Major impact, degraded. Severity 3: Limited impact. Severity 4: Questions and enhancements. SLA response times vary by severity and support level.',
            },
        ],
        examTips: [
            'Know how to create effective support tickets',
            'Understand severity levels and their criteria',
            'Include sufficient detail for faster resolution',
            'Check KB articles before creating tickets',
        ],
        resources: [
            {
                id: 'res-support',
                title: 'Support Portal',
                url: 'https://support.sitecore.com',
                description: 'Sitecore Support Portal',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-admin-kb',
        certificationSlug: 'sitecore-10-administrator',
        competencySlug: 'support-services',
        topicSlug: 'knowledge-base',
        overview:
            'The Sitecore Knowledge Base contains articles for troubleshooting and configuration. Using KB effectively helps resolve issues without support tickets.',
        keyConceptsTitle: 'Knowledge Base Concepts',
        keyConcepts: [
            'KB articles cover common issues and solutions',
            'Search KB before creating support tickets',
            'Articles include hotfixes and patches',
            'Configuration guides help with setup',
            'Best practices articles improve implementations',
        ],
        sections: [
            {
                id: 'section-searching',
                title: 'Searching the Knowledge Base',
                content:
                    'Use specific error messages or symptoms. Filter by product and version. Check article dates for relevance. Review related articles for additional context.',
            },
            {
                id: 'section-types',
                title: 'Article Types',
                content:
                    'Troubleshooting: Diagnose and resolve issues. How-to: Step-by-step procedures. Known Issues: Documented problems and workarounds. Hotfixes: Patches for specific issues.',
            },
        ],
        examTips: [
            'Search KB before creating support tickets - may find immediate solution',
            'Filter by product version for relevant results',
            'Hotfixes address specific known issues - patches for targeted problems',
            'Bookmark useful articles for quick reference',
            'Sitecore Support Package helps Sitecore team replicate issues without accessing your environment',
            'Article types: Troubleshooting, How-to, Known Issues, Hotfixes',
        ],
        resources: [
            {
                id: 'res-kb',
                title: 'Knowledge Base',
                url: 'https://support.sitecore.com/kb',
                description: 'Sitecore Knowledge Base',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
];
