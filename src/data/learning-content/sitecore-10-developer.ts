import type { TopicLearningContent } from '../../types';

export const sitecore10DeveloperContent: TopicLearningContent[] = [
    // ========================================================================
    // COMPETENCY: Sitecore Structure & Platform
    // ========================================================================
    {
        topicId: 'topic-sc10-architecture',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'sitecore-structure',
        topicSlug: 'architecture',
        overview:
            'Sitecore Experience Platform (XP) uses a distributed architecture with separate server roles to optimize performance, scalability, and security. Understanding the Content Management (CM), Content Delivery (CD), and Processing server roles is essential for developing robust Sitecore solutions.',
        keyConceptsTitle: 'Core Architecture Concepts',
        keyConcepts: [
            'Content Management (CM) server handles authoring, publishing, and administrative tasks',
            'Content Delivery (CD) servers serve published content to end users',
            'Processing servers handle analytics data processing and aggregation',
            'xConnect provides a service layer for collecting and accessing contact and interaction data',
            'xDB (Experience Database) stores contact and interaction data for personalization',
        ],
        sections: [
            {
                id: 'section-cm-cd',
                title: 'Content Management vs Content Delivery',
                content:
                    'The CM server is where content authors create, edit, and manage content using tools like the Content Editor and Experience Editor. It connects to the Master database for content authoring. CD servers are optimized for delivering content to website visitors, connecting to the Web database which contains only published content. This separation ensures that authoring activities do not impact site performance.',
            },
            {
                id: 'section-databases',
                title: 'Database Architecture',
                content:
                    'Sitecore uses three primary databases: Master (content authoring), Web (published content), and Core (Sitecore application settings). The Master database stores all content versions and workflow states. Publishing copies approved content from Master to Web. CD servers only need access to Web and Core databases.',
            },
            {
                id: 'section-xconnect',
                title: 'xConnect and Experience Database',
                content:
                    'xConnect is a service layer that provides APIs for reading and writing contact and interaction data to xDB. It enables personalization, analytics, and marketing automation features. xDB uses a combination of SQL Server and MongoDB (or SQL-only in XP 10) to store experience data.',
            },
        ],
        examTips: [
            'Know the differences between CM and CD server roles and their database connections',
            'Understand which Sitecore tools are available only on CM servers',
            'Remember that CD servers do not have access to the Master database',
            'xConnect is required for any functionality involving contact data',
            'XM refers to Web Content Management (WCM) core; XP adds marketing features via xConnect/xDB',
            'External clients must use xConnect to read/write xDB data - CM cannot access xDB directly',
        ],
        resources: [
            {
                id: 'res-arch-overview',
                title: 'Sitecore Architecture Overview',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/platform-administration-and-architecture/sitecore-architecture.html',
                description: 'Official documentation on Sitecore XP architecture',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
            {
                id: 'res-deployment',
                title: 'Deployment Topologies',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/platform-administration-and-architecture/deployment-topologies.html',
                description: 'Guide to different deployment configurations',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-databases',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'sitecore-structure',
        topicSlug: 'databases',
        overview:
            'Sitecore relies on several databases to store content, application settings, and experience data. Understanding the purpose and interaction of each database is crucial for development, publishing, and troubleshooting.',
        keyConceptsTitle: 'Database Fundamentals',
        keyConcepts: [
            'Master database stores all content items including all versions and unpublished content',
            'Web database contains only published content served to visitors',
            'Core database stores Sitecore application data like users, roles, and system settings',
            'Publishing transfers content from Master to Web database',
            'Experience database (xDB) stores contact and interaction analytics data',
        ],
        sections: [
            {
                id: 'section-master-db',
                title: 'Master Database',
                content:
                    'The Master database is the primary content repository where all content authoring occurs. It stores every version of every item, including those in draft or workflow states. Content authors interact exclusively with the Master database through the CM server. All items, templates, layouts, and renderings are first created here.',
            },
            {
                id: 'section-web-db',
                title: 'Web Database',
                content:
                    'The Web database contains only published content and is optimized for content delivery. CD servers connect to this database to serve content to visitors. Only approved and published items exist in the Web database. You can have multiple Web databases for different publishing targets.',
            },
            {
                id: 'section-core-db',
                title: 'Core Database',
                content:
                    'The Core database stores Sitecore application settings, including desktop shortcuts, user preferences, and system configurations. Both CM and CD servers use the Core database. It also contains items that define Sitecore\'s own UI elements.',
            },
            {
                id: 'section-publishing',
                title: 'Publishing Process',
                content:
                    'Publishing copies items from Master to Web database. Sitecore supports several publish modes: Full Publish (republishes all items), Smart Publish (publishes only changed items), and Incremental Publish (uses the publishing queue). Related items can be automatically published with the main item.',
            },
        ],
        examTips: [
            'Master database is for authoring; Web database is for delivery',
            'Know the three main publish modes: Republish (all items), Smart Publish (changed items), Incremental (queue)',
            'Core database is shared between CM and CD servers - contains UI settings and editor configurations',
            'Publishing queue enables incremental publishing - fastest method for frequent small changes',
            'Items created directly in Web database will be overwritten by Master during publish',
            'Master database is typically larger than Web because it contains all versions including drafts',
        ],
        resources: [
            {
                id: 'res-databases',
                title: 'Sitecore Databases',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/platform-administration-and-architecture/the-sitecore-databases.html',
                description: 'Official documentation on Sitecore databases',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
            {
                id: 'res-publishing',
                title: 'Publishing Overview',
                url: 'https://doc.sitecore.com/xp/en/users/latest/sitecore-experience-platform/publishing-overview.html',
                description: 'Guide to publishing in Sitecore',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-config',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'sitecore-structure',
        topicSlug: 'configuration',
        overview:
            'Sitecore uses a layered configuration system that allows developers to extend and override settings without modifying core files. Understanding config patching and the configuration loading order is essential for customizing Sitecore behavior.',
        keyConceptsTitle: 'Configuration System Concepts',
        keyConcepts: [
            'Configuration files are merged at runtime based on patch rules',
            'Layers.config defines the order in which configuration folders are processed',
            'Patch files should be placed in App_Config/Include subfolders',
            'Use patch:attribute to modify existing configuration elements',
            'Role-based configuration allows different settings per server role',
        ],
        sections: [
            {
                id: 'section-config-layers',
                title: 'Configuration Layers',
                content:
                    'Sitecore 10 uses a layered configuration system defined in Layers.config. Configuration files are processed in a specific order: Foundation, Feature, then Project layers. Files within each layer are processed alphabetically by folder and filename. This enables modular configuration organization following Helix principles.',
            },
            {
                id: 'section-patching',
                title: 'Configuration Patching',
                content:
                    'Config patching allows you to modify Sitecore settings without editing core files. Use patch:attribute to change values, patch:delete to remove elements, and patch:instead to replace elements. Patches are applied in order based on Layers.config, with later patches taking precedence.',
            },
            {
                id: 'section-role-config',
                title: 'Role-Based Configuration',
                content:
                    'Sitecore supports role-based configuration to apply different settings based on server role (ContentManagement, ContentDelivery, Processing, etc.). Use require and rule attributes to conditionally include configuration based on the server role defined in web.config.',
            },
        ],
        examTips: [
            'Never modify files in App_Config/Sitecore - always use patches',
            'Patches are applied based on Layers.config order, then alphabetically within folders',
            'Use ShowConfig.aspx to view the merged configuration at runtime',
            'Role configuration uses the role:require attribute',
            'PatchOrder in layers.config controls the sequence: specified items first, then unspecified alphabetically',
            'Use patch:before, patch:after, patch:delete, patch:instead, patch:attribute to modify configuration',
        ],
        resources: [
            {
                id: 'res-config-patching',
                title: 'Configuration Patch Files',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/platform-administration-and-architecture/configuration-patch-files.html',
                description: 'Guide to Sitecore configuration patching',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
            {
                id: 'res-config-layers',
                title: 'Configuration Layers',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/platform-administration-and-architecture/configuration-layers.html',
                description: 'Understanding Sitecore configuration layers',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-multisite',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'sitecore-structure',
        topicSlug: 'multisite',
        overview:
            'Sitecore supports hosting multiple websites within a single instance, sharing templates, layouts, and other assets. Understanding site definitions, hostname bindings, and site resolution is key to implementing multisite architectures.',
        keyConceptsTitle: 'Multisite Architecture Concepts',
        keyConcepts: [
            'Site definitions are configured in Sitecore.config or patch files',
            'Each site has a unique name, hostname, and start item path',
            'Site context determines which site is active for a request',
            'Sites can share templates, layouts, and media while having unique content',
            'Virtual folders allow multiple sites to share a single IIS site binding',
        ],
        sections: [
            {
                id: 'section-site-def',
                title: 'Site Definitions',
                content:
                    'Sites are defined in configuration with attributes including name, hostName, startItem, rootPath, and database. The hostName attribute supports wildcards and can include port numbers. The startItem and rootPath define where in the content tree the site\'s content lives.',
            },
            {
                id: 'section-site-resolution',
                title: 'Site Resolution',
                content:
                    'When a request arrives, Sitecore resolves which site to use based on hostname, port, and virtual folder. Sites are evaluated in order as defined in configuration. The first matching site becomes the context site. Use Sitecore.Context.Site to access the current site in code.',
            },
            {
                id: 'section-content-sharing',
                title: 'Content Sharing Strategies',
                content:
                    'Multisite implementations can share templates, renderings, and media library items across sites. Content can be organized with a shared content area accessible to all sites, or each site can have completely isolated content. Data sources can reference shared content or site-specific content based on requirements.',
            },
        ],
        examTips: [
            'Know the key site definition attributes and their purposes',
            'Understand how site resolution order affects which site matches',
            'The website site is the default/fallback site',
            'Site context affects link generation and content resolution',
            'For multisite: create folder for each site, ensure each has its own Home item, store shared content outside site folders',
            'Use a global components folder for shared components in multisite implementations',
        ],
        resources: [
            {
                id: 'res-multisite',
                title: 'Configure Multiple Sites',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/platform-administration-and-architecture/configure-multiple-sites.html',
                description: 'Guide to multisite configuration',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Security & User Management
    // ========================================================================
    {
        topicId: 'topic-sc10-access-rights',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'security',
        topicSlug: 'access-rights',
        overview:
            'Sitecore provides granular security through access rights that control what users can do with items. Understanding inheritance, explicit permissions, and the various access right types is essential for implementing secure content management solutions.',
        keyConceptsTitle: 'Access Rights Fundamentals',
        keyConcepts: [
            'Access rights include Read, Write, Create, Delete, Rename, and Administer',
            'Rights can be granted or denied at the item level',
            'Inheritance flows from parent items to children by default',
            'Explicit Deny takes precedence over inherited Allow',
            'Field-level security restricts access to specific fields within an item',
        ],
        sections: [
            {
                id: 'section-right-types',
                title: 'Types of Access Rights',
                content:
                    'Sitecore provides several access rights: Read (view item), Write (edit item), Create (create child items), Delete (remove item), Rename (change item name), and Administer (change security). Additional rights include Language Read/Write for multilingual content and Workflow commands for workflow state changes.',
            },
            {
                id: 'section-inheritance',
                title: 'Security Inheritance',
                content:
                    'By default, security settings inherit from parent items down through the content tree. Breaking inheritance allows you to set unique permissions for a subtree. The __Security Inheritance field controls this behavior. Child items can have additional restrictions but cannot grant more access than their parent.',
            },
            {
                id: 'section-field-security',
                title: 'Field-Level Security',
                content:
                    'Field Read and Field Write access rights allow restricting access to specific fields within items. This is useful when certain users should edit some fields but not others. Field security is set on the template field\'s standard values or individual items.',
            },
        ],
        examTips: [
            'Deny always takes precedence over Allow at the same level',
            'Administer right is required to modify item security',
            'Breaking inheritance creates an explicit security starting point',
            'Know the difference between item-level and field-level security',
            'Security assigned at item level overrides template standard values settings',
            'Best practice: assign rights on as few items as possible, let inheritance flow',
        ],
        resources: [
            {
                id: 'res-security-rights',
                title: 'Security Access Rights',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/platform-administration-and-architecture/access-rights.html',
                description: 'Official documentation on access rights',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-roles',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'security',
        topicSlug: 'roles-users',
        overview:
            'Sitecore uses role-based access control where permissions are assigned to roles, and users are assigned to roles. This approach simplifies security management and follows security best practices.',
        keyConceptsTitle: 'Role Management Concepts',
        keyConcepts: [
            'Assign permissions to roles, not individual users',
            'Users can be members of multiple roles',
            'Roles can be members of other roles (role nesting)',
            'Built-in roles provide common permission sets',
            'Role membership is cumulative - all rights from all roles apply',
        ],
        sections: [
            {
                id: 'section-role-best-practice',
                title: 'Role-Based Security Best Practices',
                content:
                    'Always assign access rights to roles rather than individual users. This makes security easier to manage and audit. Create roles that represent job functions (Content Editor, Publisher, Admin) and assign appropriate permissions to each role. Users are then assigned to the roles that match their responsibilities.',
            },
            {
                id: 'section-built-in-roles',
                title: 'Built-In Roles',
                content:
                    'Sitecore includes several built-in roles: Sitecore Client Users (basic client access), Sitecore Client Authoring (content editing), Sitecore Client Publishing (publish rights), and Sitecore Client Developing (developer tools). The Administrator role has unrestricted access to everything.',
            },
            {
                id: 'section-role-nesting',
                title: 'Role Nesting and Membership',
                content:
                    'Roles can be members of other roles, creating a hierarchy. A user inherits rights from their directly assigned roles and all parent roles in the hierarchy. This allows creating base roles with common permissions that more specific roles extend.',
            },
        ],
        examTips: [
            'Best practice: assign rights to roles, add users to roles',
            'Users inherit rights from all their assigned roles',
            'Role membership is cumulative - denies from any role apply',
            'Know the purposes of built-in Sitecore roles',
        ],
        resources: [
            {
                id: 'res-roles',
                title: 'Roles and Users',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/platform-administration-and-architecture/roles-and-users.html',
                description: 'Guide to user and role management',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-domains',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'security',
        topicSlug: 'security-domains',
        overview:
            'Security domains in Sitecore allow logical grouping of users and roles. Understanding domains is important for managing security in multisite environments and integrating with external authentication systems.',
        keyConceptsTitle: 'Security Domain Concepts',
        keyConcepts: [
            'Sitecore domain contains administrative users and roles',
            'Extranet domain is for external website users',
            'Default domain is used when no domain is specified',
            'Virtual users exist only for the current session',
            'Custom domains can be created for specific purposes',
        ],
        sections: [
            {
                id: 'section-builtin-domains',
                title: 'Built-In Domains',
                content:
                    'Sitecore includes three default domains: "sitecore" for CMS administrative users, "extranet" for external website users, and "default" as a fallback. Users in the sitecore domain (e.g., sitecore\\Admin) have access to the Sitecore client. Extranet users typically only access the published website.',
            },
            {
                id: 'section-virtual-users',
                title: 'Virtual Users',
                content:
                    'Virtual users are created dynamically and exist only for the current session. They are useful for integrations with external authentication systems where you don\'t want to create permanent Sitecore users. Virtual users can be assigned roles and receive the same permissions as regular users.',
            },
            {
                id: 'section-custom-domains',
                title: 'Custom Domains',
                content:
                    'You can create custom security domains for specific purposes, such as separating users for different sites in a multisite setup. Domains are configured in the domains configuration section and can have their own user and role management.',
            },
        ],
        examTips: [
            'Know the purpose of each built-in domain: sitecore (internal CMS users), extranet (website visitors), default (virtual fallback)',
            'Virtual users do not persist between sessions - useful for external auth integration',
            'Domain name must be specified when referencing users (domain\\username)',
            'Extranet is the default domain for anonymous users with read-only rights',
            'To unlock a user: Launchpad → User Manager → Select User → Unlock',
        ],
        resources: [
            {
                id: 'res-domains',
                title: 'Security Domains',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/platform-administration-and-architecture/security-domains.html',
                description: 'Understanding security domains',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Item Management
    // ========================================================================
    {
        topicId: 'topic-sc10-templates',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'item-management',
        topicSlug: 'templates',
        overview:
            'Data templates define the structure and fields for content items in Sitecore. Understanding template creation, inheritance, and field types is fundamental to building well-structured Sitecore solutions.',
        keyConceptsTitle: 'Template Fundamentals',
        keyConcepts: [
            'Templates define the schema for content items',
            'Templates can inherit from multiple base templates',
            'Template sections organize fields into logical groups',
            'Field types determine what kind of data can be stored',
            'Standard values define defaults for items created from the template',
        ],
        sections: [
            {
                id: 'section-template-structure',
                title: 'Template Structure',
                content:
                    'A template consists of template sections that contain fields. Sections are logical groupings that appear as collapsible panels in the Content Editor. Each field has a name, type, and optional source. Templates are stored under /sitecore/templates in the content tree.',
            },
            {
                id: 'section-inheritance',
                title: 'Template Inheritance',
                content:
                    'Templates can inherit fields from one or more base templates. This supports composition and reuse of common field sets. The Standard Template is the root template that all templates ultimately inherit from. Interface templates (templates with only fields) are commonly used as base templates.',
            },
            {
                id: 'section-field-types',
                title: 'Common Field Types',
                content:
                    'Sitecore provides numerous field types: Single-Line Text, Rich Text, Image, General Link, Droplink, Multilist, Treelist, and more. Each type has specific editing UI and data storage format. The Source field property configures data sources for selection fields.',
            },
        ],
        examTips: [
            'All templates inherit from Standard Template by default',
            'Template inheritance is configured in the __Base Templates field - supports multiple inheritance',
            'Know common field types and when to use each',
            'Template sections organize fields but don\'t affect data storage',
            'Versioned fields (default) have separate values per language and numbered version',
            'Shared fields have same value across all languages and versions; Unversioned fields share across versions within each language',
            'Cannot use base template if two templates have same field name with different datasources',
        ],
        resources: [
            {
                id: 'res-templates',
                title: 'Data Templates',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/sitecore-experience-manager/data-templates.html',
                description: 'Guide to data templates in Sitecore',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
            {
                id: 'res-field-types',
                title: 'Field Types',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/sitecore-experience-manager/field-types.html',
                description: 'Reference for all Sitecore field types',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-standard-values',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'item-management',
        topicSlug: 'standard-values',
        overview:
            'Standard values provide default field values, insert options, presentation details, and workflow settings for items created from a template. They are essential for creating a productive authoring experience.',
        keyConceptsTitle: 'Standard Values Concepts',
        keyConcepts: [
            'Standard values define defaults for new items of a template type',
            'Field defaults are inherited until explicitly changed on an item',
            'Insert options control which templates appear in the insert menu',
            'Presentation details (layouts/renderings) are defined on standard values',
            'Workflow assignment starts new items in a specific workflow state',
        ],
        sections: [
            {
                id: 'section-field-defaults',
                title: 'Default Field Values',
                content:
                    'When you set a field value on standard values, all items created from that template inherit that value. The item shows the default until the field is explicitly edited. Token replacements like $name and $date can be used for dynamic defaults.',
            },
            {
                id: 'section-insert-options',
                title: 'Insert Options',
                content:
                    'Insert options define which templates are available when creating child items. Set on standard values, they control the templates shown in the Insert menu for items of that type. This guides authors to create appropriate content structures.',
            },
            {
                id: 'section-presentation',
                title: 'Presentation on Standard Values',
                content:
                    'Layout and rendering assignments are typically set on standard values so all items of that template type share the same default presentation. This includes layout assignment, placeholder content, and rendering parameter values.',
            },
        ],
        examTips: [
            'Built-in tokens: $name, $id, $parentid, $parentname, $date (yyyyMMdd), $time (HHmmss), $now',
            'Items inherit standard value defaults until the field is explicitly modified',
            'Insert options are inherited from ancestors if not set - restrict what child items can be created',
            'Resetting a field restores the standard values default',
            'Set presentation details on standard values BEFORE creating content items',
            'Standard values can work as fallback values for fields without explicit values',
        ],
        resources: [
            {
                id: 'res-standard-values',
                title: 'Standard Values',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/sitecore-experience-manager/standard-values.html',
                description: 'Understanding standard values',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-workflows',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'item-management',
        topicSlug: 'workflows',
        overview:
            'Workflows in Sitecore control the content lifecycle, enabling approval processes before content is published. Understanding workflow states, actions, and commands is important for implementing content governance.',
        keyConceptsTitle: 'Workflow Concepts',
        keyConcepts: [
            'Workflows consist of states and commands that move items between states',
            'Actions execute automatically when items enter a state or when commands run',
            'The Final state represents content ready for publishing',
            'Workflow is assigned via standard values or directly on items',
            'Security can restrict who can execute specific workflow commands',
        ],
        sections: [
            {
                id: 'section-workflow-structure',
                title: 'Workflow Structure',
                content:
                    'A workflow consists of states connected by commands. Common states include Draft, Awaiting Approval, Approved, and Final. Commands move items from one state to another. The initial state is specified on the workflow definition item.',
            },
            {
                id: 'section-workflow-actions',
                title: 'Workflow Actions',
                content:
                    'Actions are triggered when items enter a state or when commands execute. Built-in actions include Auto Publish, Email notification, and Validation. Custom actions can be created by implementing the workflow action pipeline.',
            },
            {
                id: 'section-workflow-security',
                title: 'Workflow Security',
                content:
                    'Workflow command access is controlled through security settings on command items. Only users with execute access to a command can perform that action. This enables role-based approval processes where only certain roles can approve or reject content.',
            },
        ],
        examTips: [
            'Items must be in Final state to be published (unless suppress workflow is used)',
            'Auto Publish action can publish items when they reach a state',
            'Workflow commands are items under the state they belong to - Commands move items between states',
            'Know how to configure email notifications on workflow states',
            'Workflow state can be changed from: Workbox, Experience Editor, and Content Editor',
            'Workbox displays items in workflow, their states, editing history, and available commands',
            'Minimum workflow requires: Initial state and Final state',
        ],
        resources: [
            {
                id: 'res-workflows',
                title: 'Workflows',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/sitecore-experience-manager/workflows.html',
                description: 'Guide to Sitecore workflows',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-versioning',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'item-management',
        topicSlug: 'versioning',
        overview:
            'Sitecore maintains version history for items and supports multiple language versions. Understanding how versioning and languages work together is essential for multilingual and content-controlled websites.',
        keyConceptsTitle: 'Versioning Concepts',
        keyConcepts: [
            'Each item can have multiple numbered versions',
            'Language versions are separate version tracks per language',
            'Version comparison allows seeing changes between versions',
            'Publishing can target specific versions',
            'Language fallback provides content when a language version doesn\'t exist',
        ],
        sections: [
            {
                id: 'section-numbered-versions',
                title: 'Numbered Versions',
                content:
                    'Each edit creates a new numbered version of an item (in that language). Older versions are preserved and can be restored. Only one version per language is publishable at a time. Version archiving can remove old versions to manage database size.',
            },
            {
                id: 'section-languages',
                title: 'Language Versions',
                content:
                    'Items can have content in multiple languages, each with its own version history. Languages must be registered in Sitecore before use. Some fields (like Shared and Unversioned) share values across languages or versions.',
            },
            {
                id: 'section-fallback',
                title: 'Language Fallback',
                content:
                    'Language fallback displays content from a fallback language when the requested language version doesn\'t exist. This can be configured at the site, item, or field level. It helps manage partially translated sites without showing empty content.',
            },
        ],
        examTips: [
            'Shared fields have the same value across all languages and versions',
            'Unversioned fields share across versions but are separate per language',
            'Versioned fields are unique to each language version',
            'Know how to configure and use language fallback',
        ],
        resources: [
            {
                id: 'res-versions',
                title: 'Item Versions',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/sitecore-experience-manager/versions.html',
                description: 'Understanding item versions',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
            {
                id: 'res-languages',
                title: 'Language Fallback',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/sitecore-experience-manager/language-fallback.html',
                description: 'Configuring language fallback',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Layout & Placeholders
    // ========================================================================
    {
        topicId: 'topic-sc10-layouts',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'layout',
        topicSlug: 'layouts',
        overview:
            'Layouts define the overall structure of a page in Sitecore MVC. Understanding how layouts work with placeholders and renderings is fundamental to building page compositions.',
        keyConceptsTitle: 'Layout Fundamentals',
        keyConcepts: [
            'Layouts are MVC views that define page structure',
            'Each item can have one layout assigned per device',
            'Layouts contain placeholders where renderings are placed',
            'Layout assignment is typically on standard values',
            'Shared layout vs final layout controls inheritance behavior',
        ],
        sections: [
            {
                id: 'section-layout-creation',
                title: 'Creating Layouts',
                content:
                    'Layouts are Razor views (.cshtml files) registered as layout items in Sitecore. They define the HTML structure including head, body, and placeholder locations. Layouts reference CSS, JavaScript, and include @Html.Sitecore().Placeholder() calls.',
            },
            {
                id: 'section-layout-assignment',
                title: 'Layout Assignment',
                content:
                    'Layouts are assigned to items in the Layout section of presentation details. Assignment on standard values applies to all items of that template. Different layouts can be assigned for different devices (desktop, mobile, print).',
            },
            {
                id: 'section-shared-final',
                title: 'Shared vs Final Layout',
                content:
                    'Shared layout is inherited by all versions of an item. Final layout is version-specific and stores changes as deltas from shared layout. This allows per-version presentation changes while maintaining a common base.',
            },
        ],
        examTips: [
            'Layouts must be registered as items under /sitecore/layout/Layouts',
            'Know the difference between shared and final layout - Shared is used by all versions, Final is version-specific',
            'Final layout stores delta changes from shared layout - use for temporary campaigns',
            'Use @Html.Sitecore().Placeholder() to define placeholder locations',
            'Layouts contain placeholders for renderings - they define the page shell with head/body tags',
            'Use final layouts for: different layouts per language, time-limited page modifications, campaign layouts',
        ],
        resources: [
            {
                id: 'res-layouts',
                title: 'Layouts and Devices',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/sitecore-experience-manager/layouts-and-devices.html',
                description: 'Guide to layouts in Sitecore MVC',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-placeholders',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'layout',
        topicSlug: 'placeholders',
        overview:
            'Placeholders define locations in layouts and renderings where other renderings can be inserted. Dynamic placeholders enable nested component structures essential for flexible page building.',
        keyConceptsTitle: 'Placeholder Concepts',
        keyConcepts: [
            'Placeholders are named locations for renderings',
            'Placeholder settings control which renderings are allowed',
            'Dynamic placeholders support nested components with unique keys',
            'Placeholder keys must be unique on a page for Experience Editor',
            'Placeholders can have default content defined in settings',
        ],
        sections: [
            {
                id: 'section-static-placeholders',
                title: 'Static Placeholders',
                content:
                    'Static placeholders have a fixed key defined in the layout or rendering view. They work well for top-level page areas like header, content, and footer. Placeholder settings items define which renderings can be added to each placeholder.',
            },
            {
                id: 'section-dynamic',
                title: 'Dynamic Placeholders',
                content:
                    'Dynamic placeholders generate unique keys for nested components, allowing the same component to be added multiple times with independent placeholder content. Use @Html.Sitecore().DynamicPlaceholder() in Sitecore MVC.',
            },
            {
                id: 'section-settings',
                title: 'Placeholder Settings',
                content:
                    'Placeholder settings items under /sitecore/layout/Placeholder Settings define allowed renderings for each placeholder. The placeholder key field matches the key used in code. Allowed Controls specifies which renderings can be added.',
            },
        ],
        examTips: [
            'Dynamic placeholder keys include format: placeholder-key_{GUID}_0, _1, _2',
            'Placeholder settings are required for Experience Editor functionality - without them authors cannot add/remove renderings',
            'Know the syntax: static @Html.Sitecore().Placeholder("key") vs dynamic @Html.Sitecore().DynamicPlaceholder("key")',
            'If rendering not in placeholder selection: check Allowed Controls in placeholder settings',
            'If placeholder not available in Experience Editor: check presentation details',
            'Placeholders must be unique within a page - same key causes duplicated content',
        ],
        resources: [
            {
                id: 'res-placeholders',
                title: 'Placeholders',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/sitecore-experience-manager/placeholders.html',
                description: 'Guide to placeholders',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
            {
                id: 'res-dynamic-ph',
                title: 'Dynamic Placeholders',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/sitecore-experience-manager/dynamic-placeholders.html',
                description: 'Implementing dynamic placeholders',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-presentation',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'layout',
        topicSlug: 'presentation-details',
        overview:
            'Presentation details define how an item is rendered, including layout assignment and rendering placement. Understanding shared vs final layouts and presentation inheritance is key to managing page presentation.',
        keyConceptsTitle: 'Presentation Concepts',
        keyConcepts: [
            'Presentation details include layout and rendering assignments',
            'Shared layout is inherited across all versions',
            'Final layout stores version-specific presentation changes',
            'Presentation can be reset to inherit from standard values',
            'Delta format stores differences between shared and final',
        ],
        sections: [
            {
                id: 'section-presentation-details',
                title: 'Understanding Presentation Details',
                content:
                    'Presentation details are accessed through the Presentation tab in Content Editor or via the Layout Details dialog. They show the current layout, renderings in placeholders, and rendering parameters for each device.',
            },
            {
                id: 'section-delta',
                title: 'Layout Deltas',
                content:
                    'Sitecore stores presentation as XML in the __Renderings and __Final Renderings fields. Final layout is stored as a delta (difference) from shared layout, making it efficient to track version-specific changes without duplicating all presentation data.',
            },
            {
                id: 'section-reset',
                title: 'Resetting Presentation',
                content:
                    'Presentation can be reset to remove customizations and inherit from standard values again. Reset to standard values removes all presentation. Reset to shared layout removes final layout deltas. This is useful when standard values are updated.',
            },
        ],
        examTips: [
            'Know how to access and modify presentation details',
            'Understand when to use shared vs final layout',
            'Resetting layout removes customizations from that level',
            'Delta format stores only differences, not full copies',
        ],
        resources: [
            {
                id: 'res-presentation',
                title: 'Presentation Details',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/sitecore-experience-manager/presentation-details.html',
                description: 'Working with presentation details',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Components, Controls & Renderings
    // ========================================================================
    {
        topicId: 'topic-sc10-view-rendering',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'components',
        topicSlug: 'view-renderings',
        overview:
            'View renderings are the simplest type of Sitecore MVC rendering, consisting of a Razor view that directly accesses item data. They are ideal for simple components without complex business logic.',
        keyConceptsTitle: 'View Rendering Concepts',
        keyConcepts: [
            'View renderings map directly to a .cshtml Razor view',
            'The model is automatically set to RenderingModel',
            'Access current item via Model.Item',
            'Use Sitecore field helpers for editable output',
            'Best for simple components without controller logic',
        ],
        sections: [
            {
                id: 'section-view-creation',
                title: 'Creating View Renderings',
                content:
                    'Create a .cshtml view file under Views folder. Register it as a View Rendering item under /sitecore/layout/Renderings, specifying the path to the view. The model defaults to Sitecore.Mvc.Presentation.RenderingModel.',
            },
            {
                id: 'section-field-helpers',
                title: 'Sitecore Field Helpers',
                content:
                    'Use @Html.Sitecore().Field("FieldName") to render field values with Experience Editor support. This outputs editable markup in Experience Editor mode. For images, use @Html.Sitecore().Field("Image", new { mw = 100 }) for media parameters.',
            },
            {
                id: 'section-when-to-use',
                title: 'When to Use View Renderings',
                content:
                    'View renderings are appropriate for simple components that primarily display field values without complex logic. For components requiring data transformation, database queries, or dependency injection, use controller renderings instead.',
            },
        ],
        examTips: [
            'View renderings use RenderingModel by default - simplest rendering type for display-only content',
            'Field helpers provide Experience Editor editing support via @Html.Sitecore().Field("FieldName")',
            'Model.Item returns the data source item or context item',
            'Editable fields in Experience Editor: Single-Line Text, Multi-Line Text, Date, Number, Image, Rich Text, General Link',
            'Non-inline editable fields: Checkbox, Multilist, Droplink, Treelist - require Edit Frame or Experience Editor Button',
            'Html.Sitecore().Field() cannot render complex fields like Checkbox or Treelist',
        ],
        resources: [
            {
                id: 'res-view-rendering',
                title: 'View Renderings',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/sitecore-experience-manager/view-renderings.html',
                description: 'Creating view renderings',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-controller-rendering',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'components',
        topicSlug: 'controller-renderings',
        overview:
            'Controller renderings use ASP.NET MVC controllers to handle requests, enabling business logic, view models, and dependency injection. They are the preferred choice for complex components.',
        keyConceptsTitle: 'Controller Rendering Concepts',
        keyConcepts: [
            'Controller renderings invoke an MVC controller action',
            'Controllers enable view models and business logic',
            'Supports dependency injection through standard patterns',
            'The action must return a ViewResult or PartialViewResult',
            'Access rendering context via RenderingContext.Current',
        ],
        sections: [
            {
                id: 'section-controller-creation',
                title: 'Creating Controller Renderings',
                content:
                    'Create an MVC controller with an action method. Register a Controller Rendering item specifying the controller and action names. The action should return View() with your custom view model populated with data.',
            },
            {
                id: 'section-view-models',
                title: 'View Models',
                content:
                    'Create strongly-typed view models that contain the data your view needs. The controller action populates the view model from Sitecore items, services, or other sources. Views then use the typed model for a clean separation of concerns.',
            },
            {
                id: 'section-context-access',
                title: 'Accessing Rendering Context',
                content:
                    'Use RenderingContext.Current to access the current rendering, data source item, and rendering parameters. RenderingContext.Current.Rendering.Item returns the data source item. Parameters are in RenderingContext.Current.Rendering.Parameters.',
            },
        ],
        examTips: [
            'Controller actions must return PartialViewResult for renderings',
            'Use RenderingContext.Current.Rendering.DataSource to get data source path',
            'Controller names should end with "Controller"',
            'Know how to access rendering parameters in controller actions via RenderingContext.Current.Rendering.Parameters',
            'Current request in MVC: Sitecore.Context.HttpContext.Request',
            'For complex fields not showing in Experience Editor: wrap with BeginField and EndField',
        ],
        resources: [
            {
                id: 'res-controller-rendering',
                title: 'Controller Renderings',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/sitecore-experience-manager/controller-renderings.html',
                description: 'Creating controller renderings',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-rendering-params',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'components',
        topicSlug: 'rendering-parameters',
        overview:
            'Rendering parameters allow authors to configure component behavior and appearance without editing content. They are defined by parameter templates and accessed in code.',
        keyConceptsTitle: 'Rendering Parameter Concepts',
        keyConcepts: [
            'Parameters are defined by a Parameters Template',
            'Authors set parameters when adding renderings to placeholders',
            'Parameters are separate from the data source content',
            'Access parameters via rendering.Parameters in code',
            'Support various field types for different parameter needs',
        ],
        sections: [
            {
                id: 'section-param-templates',
                title: 'Parameter Templates',
                content:
                    'Create a template under Templates/Rendering Parameters with fields for each parameter. Assign this template to the rendering\'s Parameters Template field. Standard Rendering Parameters is typically a base template for common parameters.',
            },
            {
                id: 'section-accessing-params',
                title: 'Accessing Parameters in Code',
                content:
                    'In controller renderings, use RenderingContext.Current.Rendering.Parameters["ParamName"]. In view renderings, use Model.Rendering.Parameters["ParamName"]. Parameters are always string values that may need parsing.',
            },
            {
                id: 'section-param-types',
                title: 'Common Parameter Types',
                content:
                    'Use Checkbox for boolean options, Droplist for single selection, and Multilist for multiple selections. The source query defines available options for selection parameters. Integer and other types require string parsing.',
            },
        ],
        examTips: [
            'Parameters are stored as URL-encoded string on the rendering',
            'Standard Rendering Parameters provides caching options',
            'Know how to create and assign parameter templates',
            'Parameters are different from data source fields',
        ],
        resources: [
            {
                id: 'res-params',
                title: 'Rendering Parameters',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/sitecore-experience-manager/rendering-parameters.html',
                description: 'Working with rendering parameters',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-caching',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'components',
        topicSlug: 'caching',
        overview:
            'Rendering caching improves performance by storing rendered HTML output. Understanding cache settings and when to apply them is essential for building performant Sitecore solutions.',
        keyConceptsTitle: 'Rendering Cache Concepts',
        keyConcepts: [
            'Cacheable enables HTML output caching for a rendering',
            'Vary By options control cache key variations',
            'Common variations: Data, Query String, User, Parameters',
            'HTML cache is separate from item/data cache',
            'Cache clearing happens on publish by default',
        ],
        sections: [
            {
                id: 'section-cache-settings',
                title: 'Cache Settings',
                content:
                    'Enable caching on the rendering definition item or via rendering parameters. Cacheable must be checked for caching to apply. VaryBy settings determine when a new cache entry is created vs reusing existing cached output.',
            },
            {
                id: 'section-vary-options',
                title: 'VaryBy Options',
                content:
                    'VaryByData: separate cache per data source item. VaryByParam: separate cache per rendering parameters. VaryByQueryString: separate cache per URL query string. VaryByUser: separate cache per logged-in user.',
            },
            {
                id: 'section-cache-strategy',
                title: 'Caching Strategy',
                content:
                    'Cache static content aggressively. Use VaryByData for content-driven components. Avoid caching personalized or user-specific content unless using VaryByUser. Test cache settings to balance performance and freshness.',
            },
        ],
        examTips: [
            'HTML cache stores rendered output, not item data',
            'VaryByData requires data source to be set on rendering',
            'Know the impact of each VaryBy option on cache size',
            'Cache clearing can be configured per site',
        ],
        resources: [
            {
                id: 'res-caching',
                title: 'Rendering Caching',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/sitecore-experience-manager/caching-renderings.html',
                description: 'Guide to rendering caching',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-datasources',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'components',
        topicSlug: 'datasources',
        overview:
            'Data sources decouple component content from page items, enabling content reuse and flexible page composition. Understanding data source configuration and resolution is important for building maintainable solutions.',
        keyConceptsTitle: 'Data Source Concepts',
        keyConcepts: [
            'Data source points a rendering to its content item',
            'Enables content reuse across multiple pages',
            'Data source can be absolute path, relative path, or query',
            'Rendering falls back to context item if no data source',
            'Data source location restricts where authors can select from',
        ],
        sections: [
            {
                id: 'section-datasource-config',
                title: 'Configuring Data Sources',
                content:
                    'Set the Datasource Location on the rendering to define where authors can select content. Datasource Template restricts selection to items of specific templates. Authors then pick or create data source items when adding the rendering.',
            },
            {
                id: 'section-resolution',
                title: 'Data Source Resolution',
                content:
                    'Data sources can be absolute paths (/sitecore/content/...), relative paths (../Shared/...), or queries (query:.//*[@template="ID"]). The resolved item becomes the rendering\'s context item for field access.',
            },
            {
                id: 'section-page-vs-datasource',
                title: 'Page Content vs Data Sources',
                content:
                    'Page-level content stores data directly on page items. Data source content stores data in separate items referenced by renderings. Data sources enable content reuse and separation of page structure from content.',
            },
        ],
        examTips: [
            'No data source means rendering uses context item',
            'Know the difference between Datasource Location (where to select) and Datasource Template (what type to select)',
            'Relative data source paths are relative to context item',
            'Datasource fallback: Item rendering → Template standard values → Rendering definition → blank',
            'Use Compatible Renderings to change one rendering to another while preserving the datasource',
            'Datasource Template restricts selection to specific template types for content authors',
        ],
        resources: [
            {
                id: 'res-datasources',
                title: 'Component Data Sources',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/sitecore-experience-manager/data-sources.html',
                description: 'Guide to component data sources',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Sitecore Content Serialization
    // ========================================================================
    {
        topicId: 'topic-sc10-scs-basics',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'content-serialization',
        topicSlug: 'scs-basics',
        overview:
            'Sitecore Content Serialization (SCS) enables storing Sitecore items as files for version control and deployment. Understanding the configuration file structure and serialization rules is essential for modern Sitecore development.',
        keyConceptsTitle: 'SCS Fundamentals',
        keyConcepts: [
            'sitecore.json is the root configuration file',
            'Modules define what items to serialize',
            'Include rules specify which items to serialize',
            'Items are stored as YAML files on disk',
            'SCS replaces Unicorn and TDS for content serialization',
        ],
        sections: [
            {
                id: 'section-sitecore-json',
                title: 'sitecore.json Configuration',
                content:
                    'The sitecore.json file at the solution root defines serialization settings. It specifies modules (which contain item rules), plugins, and environment configurations. Multiple module files can be referenced for modular organization.',
            },
            {
                id: 'section-modules',
                title: 'Module Definitions',
                content:
                    'Modules are .module.json files that define item includes. Each include specifies a path and optional rules for what items to serialize. Includes can be database-specific (master, core) and support wildcards.',
            },
            {
                id: 'section-file-format',
                title: 'Serialized Item Format',
                content:
                    'Items are serialized as YAML files in a folder structure matching the item path. Each file contains item ID, template, fields, and language versions. The format is human-readable and diff-friendly for version control.',
            },
        ],
        examTips: [
            'sitecore.json is the entry point for SCS configuration - specifies plugins and module locations',
            'Know the structure of module files and include rules',
            'Items serialize to YAML format under configured paths',
            'SCS requires Sitecore CLI for most operations',
            'If module path not found in sitecore.json, it gets ignored (not serialized)',
            'Default scope is ItemAndDescendants - include item and all its descendants',
        ],
        resources: [
            {
                id: 'res-scs',
                title: 'Sitecore Content Serialization',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/developer-tools/sitecore-content-serialization.html',
                description: 'Guide to Sitecore Content Serialization',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-cli',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'content-serialization',
        topicSlug: 'sitecore-cli',
        overview:
            'The Sitecore CLI is a command-line tool for developers that enables serialization operations, publishing, and other administrative tasks. Understanding CLI commands and authentication is important for development workflows.',
        keyConceptsTitle: 'Sitecore CLI Concepts',
        keyConcepts: [
            'CLI is installed as a dotnet tool',
            'Plugins extend CLI functionality',
            'Authentication uses Sitecore Identity Server',
            'Ser push/pull sync items between disk and database',
            'CLI can be used in CI/CD pipelines',
        ],
        sections: [
            {
                id: 'section-installation',
                title: 'Installing Sitecore CLI',
                content:
                    'Install CLI using: dotnet tool install Sitecore.CLI. Initialize a project with: dotnet sitecore init. Plugins are managed via dotnet sitecore plugin commands. The serialization plugin is required for ser commands.',
            },
            {
                id: 'section-authentication',
                title: 'CLI Authentication',
                content:
                    'Authenticate with: dotnet sitecore login. This opens a browser for Sitecore Identity authentication. Credentials are cached for subsequent commands. Non-interactive login is available for CI/CD scenarios.',
            },
            {
                id: 'section-commands',
                title: 'Common CLI Commands',
                content:
                    'dotnet sitecore ser pull: downloads items from Sitecore to disk. dotnet sitecore ser push: uploads serialized items to Sitecore. dotnet sitecore publish: triggers a publish operation. Use --help on any command for options.',
            },
        ],
        examTips: [
            'Know the common CLI commands for serialization',
            'CLI requires authentication before most operations',
            'Plugins extend CLI functionality (serialization, publishing)',
            'ser pull downloads from Sitecore, ser push uploads to Sitecore',
        ],
        resources: [
            {
                id: 'res-cli',
                title: 'Sitecore CLI',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/developer-tools/sitecore-command-line-interface.html',
                description: 'Sitecore CLI documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-module-matching',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'content-serialization',
        topicSlug: 'module-matching',
        overview:
            'Module path matching rules control which items are included in serialization. Understanding predicates, wildcards, and scope limiting is essential for efficient serialization configurations.',
        keyConceptsTitle: 'Path Matching Concepts',
        keyConcepts: [
            'Path rules define which items to serialize',
            'Scope: SingleItem, ItemAndChildren, ItemAndDescendants, Descendants',
            'Wildcards (*) match path segments',
            'Rules are evaluated in order with first match winning',
            'Exclude rules prevent specific items from serialization',
        ],
        sections: [
            {
                id: 'section-path-rules',
                title: 'Defining Path Rules',
                content:
                    'Include rules in modules specify paths and scope. Example: {"path": "/sitecore/templates/MyProject", "scope": "ItemAndDescendants"} serializes the templates folder and all descendants. Multiple includes can be defined per module.',
            },
            {
                id: 'section-scope',
                title: 'Understanding Scope',
                content:
                    'SingleItem: only the specified item. ItemAndChildren: item and direct children. ItemAndDescendants: item and all descendants. DescendantsOnly: all descendants but not the item itself. Choose scope carefully to avoid serializing too much or too little.',
            },
            {
                id: 'section-wildcards',
                title: 'Wildcards and Rules',
                content:
                    'Use * as a wildcard in paths to match variable segments. Rules can include or exclude based on patterns. AllowedPushOperations controls what changes can be pushed (create, update, delete).',
            },
        ],
        examTips: [
            'Know the different scope options: SingleItem, ItemAndChildren, ItemAndDescendants (default), Ignored',
            'Wildcards help create flexible path patterns',
            'First matching rule wins - order matters',
            'Use scope: "Ignored" to exclude items from serialization',
            'allowedPushOperations: CreateOnly, CreateAndUpdate, CreateUpdateAndDelete (default)',
            'Required include properties: name and path; optional: scope, database, allowedPushOperations, rules',
        ],
        resources: [
            {
                id: 'res-modules',
                title: 'SCS Modules',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/developer-tools/sitecore-content-serialization-configuration-reference.html',
                description: 'SCS configuration reference',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },

    // ========================================================================
    // COMPETENCY: Containers
    // ========================================================================
    {
        topicId: 'topic-sc10-docker',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'containers',
        topicSlug: 'docker-basics',
        overview:
            'Docker containers provide a consistent, reproducible environment for Sitecore development. Understanding container basics and Sitecore-specific container patterns is important for modern development workflows.',
        keyConceptsTitle: 'Docker for Sitecore Concepts',
        keyConcepts: [
            'Containers provide isolated, consistent development environments',
            'Docker Compose orchestrates multiple Sitecore containers',
            'Sitecore provides official container images',
            'Dockerfiles customize base images with project code',
            'Volume mounts enable file synchronization for development',
        ],
        sections: [
            {
                id: 'section-container-basics',
                title: 'Container Fundamentals',
                content:
                    'Docker containers package applications with their dependencies for consistent execution. Sitecore runs as multiple containers: CM, CD, SQL, Solr, Identity, etc. Docker Compose defines and manages this multi-container setup.',
            },
            {
                id: 'section-compose',
                title: 'Docker Compose for Sitecore',
                content:
                    'docker-compose.yml defines Sitecore services and their configuration. Environment variables configure connection strings and license data. The init script initializes prerequisites before starting Sitecore containers.',
            },
            {
                id: 'section-images',
                title: 'Sitecore Container Images',
                content:
                    'Sitecore publishes official images to their container registry. Images exist for each role: CM, CD, Identity, xConnect, etc. Project Dockerfiles extend base images with custom code and configuration.',
            },
        ],
        examTips: [
            'Know the common Sitecore container topology components: CM, CD, SQL, Solr, Identity',
            'Docker Compose up starts all defined services; requires docker-compose.yaml and .env files',
            'Volume mounts sync local files into containers',
            'Environment variables configure container settings',
            'Prerequisites: Windows 10 Pro/Enterprise 1809+, Hyper-V, Docker Desktop, 32GB RAM recommended',
            'Sitecore 10+ provides container images for both development and production environments',
        ],
        resources: [
            {
                id: 'res-containers',
                title: 'Sitecore Containers',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/developer-tools/containers-in-sitecore-development.html',
                description: 'Guide to container-based development',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-container-debug',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'containers',
        topicSlug: 'container-debugging',
        overview:
            'Debugging Sitecore applications running in containers requires connecting your IDE to the containerized process. Understanding remote debugging setup enables effective troubleshooting of containerized Sitecore.',
        keyConceptsTitle: 'Container Debugging Concepts',
        keyConcepts: [
            'Remote debugging connects IDE to container process',
            'Visual Studio attaches to w3wp.exe in containers',
            'Debug port must be exposed from the container',
            'Volume mounts enable local file changes to reflect in container',
            'Container logs provide diagnostic information',
        ],
        sections: [
            {
                id: 'section-remote-debug',
                title: 'Remote Debugging Setup',
                content:
                    'Enable remote debugging by exposing debug ports in docker-compose. Visual Studio can attach to the remote debugger service running in the container. Ensure PDB files are deployed for symbols to work correctly.',
            },
            {
                id: 'section-file-sync',
                title: 'File Synchronization',
                content:
                    'Volume mounts map local folders into containers, enabling file changes without rebuilding. Map your project output (bin, Views) to the container\'s web folder. Changes are immediately visible after IIS recycles.',
            },
            {
                id: 'section-logs',
                title: 'Container Logs',
                content:
                    'Use docker logs to view container output. Sitecore logs are available in the container\'s log folder. docker-compose logs shows logs for all services. Log levels can be configured via environment variables.',
            },
        ],
        examTips: [
            'Know how to attach Visual Studio to a container for debugging - attach to w3wp.exe process',
            'Volume mounts are key for development workflow',
            'docker logs retrieves container output',
            'Debug symbols (PDB) are required for stepping through code',
            'If license compression fails (SITECORE_LICENSE too large): use HOST_LICENSE_FOLDER and mount license as Docker volume',
            'MVC files outside webroot: use Visual Studio Publish (not Sitecore Rocks)',
        ],
        resources: [
            {
                id: 'res-debug',
                title: 'Debug Containers',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/developer-tools/debug-an-instance-running-in-a-container.html',
                description: 'Debugging Sitecore in containers',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-sc10-container-lifecycle',
        certificationSlug: 'sitecore-10-developer',
        competencySlug: 'containers',
        topicSlug: 'container-lifecycle',
        overview:
            'Managing the container lifecycle includes starting, stopping, and monitoring Sitecore containers. Understanding Docker commands and health checks ensures reliable container operation.',
        keyConceptsTitle: 'Container Lifecycle Concepts',
        keyConcepts: [
            'docker-compose up starts all services',
            'docker-compose down stops and removes containers',
            'Health checks verify container readiness',
            'Init containers run setup tasks before main services',
            'Container restart policies handle failures',
        ],
        sections: [
            {
                id: 'section-commands',
                title: 'Lifecycle Commands',
                content:
                    'docker-compose up -d starts containers in detached mode. docker-compose down stops containers. docker-compose restart restarts services. Add --build to rebuild images before starting.',
            },
            {
                id: 'section-health',
                title: 'Health Checks',
                content:
                    'Sitecore containers include health checks that verify service readiness. docker-compose ps shows container health status. Dependent services wait for health checks before starting to ensure proper startup order.',
            },
            {
                id: 'section-data',
                title: 'Data Persistence',
                content:
                    'Named volumes persist data across container restarts. Database and Solr data are typically stored in volumes. docker-compose down -v removes volumes and all data. Use volume backups for data preservation.',
            },
        ],
        examTips: [
            'Know common docker-compose commands',
            'Health checks ensure services start in correct order',
            'Volumes persist data; removing them loses database content',
            'docker-compose up --build rebuilds before starting',
        ],
        resources: [
            {
                id: 'res-lifecycle',
                title: 'Container Environment',
                url: 'https://doc.sitecore.com/xp/en/developers/latest/developer-tools/run-your-first-sitecore-instance.html',
                description: 'Managing container environment',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
];
