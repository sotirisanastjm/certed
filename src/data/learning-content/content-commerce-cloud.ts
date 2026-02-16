import type { TopicLearningContent } from '../../types';

export const contentHubAdminContent: TopicLearningContent[] = [
    // ========================================================================
    // Content Hub Administrator Topics
    // ========================================================================
    {
        topicId: 'topic-ch-admin-overview',
        certificationSlug: 'content-hub-administrator',
        competencySlug: 'architecture',
        topicSlug: 'platform-overview',
        overview:
            'Sitecore Content Hub is a unified content management platform that includes DAM, CMP, MRM, and PCM capabilities. Understanding the platform architecture is essential for administration.',
        keyConceptsTitle: 'Platform Fundamentals',
        keyConcepts: [
            'DAM: Digital Asset Management for media files',
            'CMP: Content Marketing Platform for content creation',
            'MRM: Marketing Resource Management for projects',
            'PCM: Product Content Management for product data',
            'Cloud-native SaaS architecture',
        ],
        sections: [
            {
                id: 'section-modules',
                title: 'Platform Modules',
                content:
                    'DAM manages digital assets with metadata, workflows, and distribution. CMP supports collaborative content creation and planning. MRM handles marketing project and resource management. PCM organizes product information for commerce.',
            },
            {
                id: 'section-architecture',
                title: 'Architecture',
                content:
                    'Content Hub runs as a cloud-native SaaS on Azure. Multi-tenant architecture with data isolation. REST APIs enable integration. Extensible via scripts, triggers, and external components.',
            },
        ],
        examTips: [
            'Know the purpose of each module: DAM (assets), CMP (content creation), MRM (projects), PCM (products)',
            'Content Hub is SaaS-only, no on-premises option - cloud-native on Azure',
            'Understand the entity-based data model - everything is an entity',
            'APIs are RESTful with JSON payloads - OAuth 2.0 authentication',
            'Content Hub Developer exam: 60 questions (36 admin + 24 developer competencies)',
            'Passing score: 80% correct answers required',
        ],
        resources: [
            {
                id: 'res-ch-overview',
                title: 'Content Hub Documentation',
                url: 'https://doc.sitecore.com/ch',
                description: 'Official Content Hub documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-ch-admin-schemas',
        certificationSlug: 'content-hub-administrator',
        competencySlug: 'schema-management',
        topicSlug: 'schema-design',
        overview:
            'Schemas define the structure of entities in Content Hub. Understanding entity definitions, member groups, and field types is essential for data modeling.',
        keyConceptsTitle: 'Schema Concepts',
        keyConcepts: [
            'Entity definitions define data structure',
            'Member groups organize fields logically',
            'Property types define field data types',
            'Relations connect entities',
            'Schema inheritance enables reuse',
        ],
        sections: [
            {
                id: 'section-definitions',
                title: 'Entity Definitions',
                content:
                    'Entity definitions are like templates for content items. They define what fields (members) an entity has. Standard definitions exist for assets, content, and system entities. Custom definitions can be created.',
            },
            {
                id: 'section-members',
                title: 'Members and Groups',
                content:
                    'Members are fields within entity definitions. Member groups organize related members visually. Property types include text, number, date, option list, and relations. Required and read-only settings control behavior.',
            },
        ],
        examTips: [
            'Entity definitions are like templates',
            'Know common property types and their uses',
            'Member groups are organizational, not functional',
            'Relations are special property types linking entities',
        ],
        resources: [
            {
                id: 'res-schemas',
                title: 'Schema Management',
                url: 'https://doc.sitecore.com/ch/en/users/content-hub/schema.html',
                description: 'Schema management documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-ch-admin-taxonomy',
        certificationSlug: 'content-hub-administrator',
        competencySlug: 'schema-management',
        topicSlug: 'taxonomy',
        overview:
            'Taxonomies in Content Hub enable hierarchical classification and tagging of assets. Understanding taxonomy configuration supports effective content organization.',
        keyConceptsTitle: 'Taxonomy Concepts',
        keyConcepts: [
            'Taxonomies are hierarchical classification trees',
            'Taxonomy values are selectable tags',
            'Assets link to taxonomy values via relations',
            'Multiple taxonomies can categorize assets',
            'Taxonomy facets enable search filtering',
        ],
        sections: [
            {
                id: 'section-structure',
                title: 'Taxonomy Structure',
                content:
                    'Taxonomies are trees of classification values. Parent-child relationships create hierarchy. Values can be multi-level deep. Assets reference taxonomy values via relations.',
            },
            {
                id: 'section-usage',
                title: 'Using Taxonomies',
                content:
                    'Apply taxonomy values to assets via metadata forms. Taxonomies power search facets for filtering. Reporting can group by taxonomy values. Import/export taxonomies for bulk management.',
            },
        ],
        examTips: [
            'Taxonomies are separate from entity schemas',
            'One asset can have multiple taxonomy values',
            'Know how to create and manage taxonomies',
            'Taxonomies enable search faceting',
        ],
        resources: [
            {
                id: 'res-taxonomy',
                title: 'Taxonomies',
                url: 'https://doc.sitecore.com/ch/en/users/content-hub/taxonomies.html',
                description: 'Taxonomy documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-ch-admin-permissions',
        certificationSlug: 'content-hub-administrator',
        competencySlug: 'security',
        topicSlug: 'permissions',
        overview:
            'Permission policies in Content Hub control access to entities and operations. Understanding policy configuration ensures proper security.',
        keyConceptsTitle: 'Permission Concepts',
        keyConcepts: [
            'Policies define access rules',
            'Rules specify entity types and operations',
            'Conditions filter which entities are affected',
            'User groups receive policy assignments',
            'Policies combine additively',
        ],
        sections: [
            {
                id: 'section-policies',
                title: 'Permission Policies',
                content:
                    'Policies contain rules for entity access. Each rule specifies allowed operations (read, create, update, delete). Conditions limit rules to specific entities. Assign policies to user groups.',
            },
            {
                id: 'section-assignment',
                title: 'Policy Assignment',
                content:
                    'Create user groups for different roles. Assign policies to groups. Users inherit permissions from their groups. Multiple policies combine additively.',
            },
        ],
        examTips: [
            'Policies contain rules with conditions',
            'Assign policies to groups, not users directly',
            'Know the available operations (CRUD)',
            'Conditions filter which entities rules apply to',
        ],
        resources: [
            {
                id: 'res-permissions',
                title: 'Permissions',
                url: 'https://doc.sitecore.com/ch/en/users/content-hub/permissions.html',
                description: 'Permission management documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-ch-admin-workflows',
        certificationSlug: 'content-hub-administrator',
        competencySlug: 'workflows-triggers',
        topicSlug: 'workflow-config',
        overview:
            'Workflows in Content Hub manage content approval processes. Understanding workflow configuration enables effective content governance.',
        keyConceptsTitle: 'Workflow Concepts',
        keyConcepts: [
            'Workflows define approval states and transitions',
            'States represent content lifecycle stages',
            'Commands move entities between states',
            'Security controls who can execute commands',
            'Workflows can trigger actions',
        ],
        sections: [
            {
                id: 'section-configuration',
                title: 'Workflow Configuration',
                content:
                    'Create workflows in the Manage section. Define states (Draft, Review, Approved, etc.). Create commands to transition between states. Assign workflows to entity definitions.',
            },
            {
                id: 'section-execution',
                title: 'Workflow Execution',
                content:
                    'Users execute commands on entities. Security controls command availability. Triggers can automate transitions. Notifications inform stakeholders of state changes.',
            },
        ],
        examTips: [
            'Know common workflow states and purposes',
            'Commands transition between states',
            'Security restricts who can execute commands',
            'Triggers can automate workflow actions',
        ],
        resources: [
            {
                id: 'res-workflows',
                title: 'Workflows',
                url: 'https://doc.sitecore.com/ch/en/users/content-hub/workflows.html',
                description: 'Workflow documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
];

export const contentHubDeveloperContent: TopicLearningContent[] = [
    // ========================================================================
    // Content Hub Developer Topics
    // ========================================================================
    {
        topicId: 'topic-ch-dev-script-basics',
        certificationSlug: 'content-hub-developer',
        competencySlug: 'metadata-scripts',
        topicSlug: 'script-fundamentals',
        overview:
            'Scripts in Content Hub enable custom business logic using C#. Understanding script context and API access is essential for customization.',
        keyConceptsTitle: 'Script Fundamentals',
        keyConcepts: [
            'Scripts are written in C#',
            'MClient provides API access',
            'Context provides current entity and user',
            'Scripts run in sandbox environment',
            'Async operations improve performance',
        ],
        sections: [
            {
                id: 'section-basics',
                title: 'Script Basics',
                content:
                    'Scripts use C# syntax with access to MClient. The Context object provides the current entity, user, and execution context. Scripts run in a sandboxed environment with limited external access.',
            },
            {
                id: 'section-mclient',
                title: 'Using MClient',
                content:
                    'MClient is the API client for Content Hub operations. Use MClient.Entities to query and modify entities. LoadEntityAsync and SaveAsync handle entity operations. Query API enables complex searches.',
            },
        ],
        examTips: [
            'Know how to access Context (current entity/user) and MClient (API client)',
            'Scripts are C# with limited library access - run in sandboxed environment',
            'Async/await for performance-critical operations using LoadEntityAsync/SaveAsync',
            'Test scripts thoroughly before deployment - use Content Hub Sandbox',
            'Developer competencies: Metadata processing scripts, External page components, Web-enabled action scripts',
            'Use MClient.Entities to query and modify entities in scripts',
        ],
        resources: [
            {
                id: 'res-scripts',
                title: 'Scripts',
                url: 'https://doc.sitecore.com/ch/en/developers/cloud-dev/scripting.html',
                description: 'Scripting documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-ch-dev-api-basics',
        certificationSlug: 'content-hub-developer',
        competencySlug: 'rest-api',
        topicSlug: 'api-fundamentals',
        overview:
            'The Content Hub REST API enables external integrations. Understanding API authentication, endpoints, and operations is essential for integration development.',
        keyConceptsTitle: 'REST API Concepts',
        keyConcepts: [
            'RESTful API with JSON payloads',
            'OAuth authentication required',
            'CRUD operations on entities',
            'Query API for searching',
            'Rate limiting applies',
        ],
        sections: [
            {
                id: 'section-auth',
                title: 'Authentication',
                content:
                    'API uses OAuth 2.0 authentication. Obtain access token with client credentials. Include token in Authorization header. Tokens expire and must be refreshed.',
            },
            {
                id: 'section-operations',
                title: 'API Operations',
                content:
                    'GET: Retrieve entities by ID or query. POST: Create new entities. PUT: Update entire entity. DELETE: Remove entities. Query endpoint for complex searches.',
            },
        ],
        examTips: [
            'Know the authentication flow',
            'Understand HTTP methods for CRUD',
            'Query API uses specific syntax',
            'Rate limits affect high-volume operations',
        ],
        resources: [
            {
                id: 'res-api',
                title: 'REST API',
                url: 'https://doc.sitecore.com/ch/en/developers/cloud-dev/rest-api.html',
                description: 'REST API documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-ch-dev-trigger-config',
        certificationSlug: 'content-hub-developer',
        competencySlug: 'triggers-webhooks',
        topicSlug: 'trigger-configuration',
        overview:
            'Triggers automate actions based on entity events. Understanding trigger configuration enables powerful automation workflows.',
        keyConceptsTitle: 'Trigger Concepts',
        keyConcepts: [
            'Triggers fire on entity events',
            'Conditions filter when triggers execute',
            'Actions define what happens',
            'In-process vs background execution',
            'Order controls execution sequence',
        ],
        sections: [
            {
                id: 'section-events',
                title: 'Trigger Events',
                content:
                    'Entity creation, modification, deletion events. State change events for workflows. Relation changes when links are modified. Choose appropriate event for your use case.',
            },
            {
                id: 'section-actions',
                title: 'Trigger Actions',
                content:
                    'Run scripts for custom logic. Send webhooks to external systems. Execute workflow commands. In-process runs immediately; background queues for later.',
            },
        ],
        examTips: [
            'Know the available trigger events',
            'Understand in-process vs background execution',
            'Conditions filter when triggers fire',
            'Triggers can chain via entity modifications',
        ],
        resources: [
            {
                id: 'res-triggers',
                title: 'Triggers',
                url: 'https://doc.sitecore.com/ch/en/developers/cloud-dev/triggers.html',
                description: 'Trigger documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
];

export const orderCloudContent: TopicLearningContent[] = [
    // ========================================================================
    // OrderCloud Certification Topics
    // ========================================================================
    {
        topicId: 'topic-oc-api-first',
        certificationSlug: 'ordercloud',
        competencySlug: 'architecture',
        topicSlug: 'api-first',
        overview:
            'OrderCloud is an API-first, headless commerce platform. Understanding the RESTful architecture and design principles is fundamental to effective development.',
        keyConceptsTitle: 'API-First Concepts',
        keyConcepts: [
            'Headless: no built-in frontend',
            'RESTful API with JSON',
            'Resource-based URL structure',
            'SDK available for JavaScript and .NET',
            'Open API specification published',
        ],
        sections: [
            {
                id: 'section-architecture',
                title: 'API Architecture',
                content:
                    'OrderCloud provides commerce capabilities via REST API. No frontend is included - build your own with any technology. Resources follow consistent URL patterns. JSON is the data format.',
            },
            {
                id: 'section-benefits',
                title: 'Benefits',
                content:
                    'Technology agnostic - use any frontend framework. Scalable cloud infrastructure. Consistent API patterns across all features. Extensive customization via middleware.',
            },
        ],
        examTips: [
            'OrderCloud has no built-in UI - headless, API-first commerce platform',
            'Know the REST conventions: resource-based URLs, JSON payloads',
            'SDK available for JavaScript and .NET - simplifies API usage',
            'Open API specification enables code generation for any language',
            'Technology agnostic - use any frontend framework you prefer',
            'OrderCloud exam: 30 questions, 60 minutes, 80% passing score, $350 USD',
        ],
        resources: [
            {
                id: 'res-oc-arch',
                title: 'Architecture',
                url: 'https://ordercloud.io/learn/ordercloud-basics/architecture',
                description: 'OrderCloud architecture documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-oc-organizations',
        certificationSlug: 'ordercloud',
        competencySlug: 'user-management',
        topicSlug: 'organizations',
        overview:
            'OrderCloud uses organization types to model commerce relationships. Understanding Buyers, Sellers, and Suppliers is essential for proper setup.',
        keyConceptsTitle: 'Organization Concepts',
        keyConcepts: [
            'Marketplace Owner controls the marketplace',
            'Sellers provide products and process orders',
            'Buyers purchase products',
            'Suppliers fulfill orders in multi-vendor scenarios',
            'Organization structure affects permissions',
        ],
        sections: [
            {
                id: 'section-types',
                title: 'Organization Types',
                content:
                    'Marketplace Owner: Controls catalog, pricing, and configuration. Seller: Alternative to Marketplace Owner for selling. Buyer: Customer organizations that purchase. Supplier: Fulfillment partners in multi-vendor.',
            },
            {
                id: 'section-hierarchy',
                title: 'Organization Hierarchy',
                content:
                    'Buyers can have address books and payment methods. Users belong to organizations. User groups segment users within organizations. Security profiles control API access.',
            },
        ],
        examTips: [
            'Know the role of each organization type and their hierarchy',
            'Marketplace Owner has full control - controls catalog, pricing, configuration',
            'Buyers represent customer organizations that purchase products',
            'Suppliers enable multi-vendor fulfillment scenarios',
            'Security profiles control API access and permissions per user/group',
            'Users belong to organizations; User groups segment users within organizations',
        ],
        resources: [
            {
                id: 'res-orgs',
                title: 'Organizations',
                url: 'https://ordercloud.io/learn/ordercloud-basics/building-blocks',
                description: 'Organization documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-oc-products',
        certificationSlug: 'ordercloud',
        competencySlug: 'product-management',
        topicSlug: 'products',
        overview:
            'Products in OrderCloud represent items for sale. Understanding product configuration, variants, and assignments enables effective catalog management.',
        keyConceptsTitle: 'Product Concepts',
        keyConcepts: [
            'Products are the basic sellable unit',
            'Variants represent options (size, color)',
            'Specs define variant dimensions',
            'Inventory tracks stock levels',
            'Products are assigned to catalogs',
        ],
        sections: [
            {
                id: 'section-basics',
                title: 'Product Basics',
                content:
                    'Products have ID, name, description, and pricing. Default price schedule sets base pricing. Inventory can be tracked per product or variant. Extended properties (xp) store custom data.',
            },
            {
                id: 'section-variants',
                title: 'Variants and Specs',
                content:
                    'Specs define variant options (Size: S, M, L). Variants are generated from spec combinations. Each variant can have unique pricing and inventory. Specs can affect pricing via price markups.',
            },
        ],
        examTips: [
            'Know how specs generate variants - spec combinations create variant matrix',
            'Variants can have independent pricing, inventory, and SKUs',
            'Extended properties (xp) enable custom fields on any resource',
            'Products must be assigned to catalogs for visibility to buyers',
            'Specs can affect pricing via price markups',
            'Inventory tracking can be per product or per variant',
        ],
        resources: [
            {
                id: 'res-products',
                title: 'Products',
                url: 'https://ordercloud.io/api-reference/product-catalogs/products',
                description: 'Product API documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-oc-price-schedules',
        certificationSlug: 'ordercloud',
        competencySlug: 'pricing-promotions',
        topicSlug: 'price-schedules',
        overview:
            'Price schedules define product pricing in OrderCloud. Understanding price schedule configuration enables flexible pricing strategies.',
        keyConceptsTitle: 'Pricing Concepts',
        keyConcepts: [
            'Price schedules define product prices',
            'Quantity breaks for volume discounts',
            'Sale prices for promotions',
            'Price schedule assignments control visibility',
            'Buyer-specific pricing via assignments',
        ],
        sections: [
            {
                id: 'section-configuration',
                title: 'Price Schedule Configuration',
                content:
                    'Set base price and optional quantity breaks. Sale prices override base for time periods. Min/max quantity constraints control ordering. Price schedules are reusable across products.',
            },
            {
                id: 'section-assignments',
                title: 'Price Assignments',
                content:
                    'Assign price schedules to products. Different buyers can have different price schedules. Most specific assignment wins (user group > buyer > default). Enables complex B2B pricing scenarios.',
            },
        ],
        examTips: [
            'Know how price schedule assignment precedence works',
            'Quantity breaks enable tiered pricing',
            'Sale prices have date ranges',
            'Buyer-specific pricing via targeted assignments',
        ],
        resources: [
            {
                id: 'res-pricing',
                title: 'Price Schedules',
                url: 'https://ordercloud.io/api-reference/product-catalogs/price-schedules',
                description: 'Price schedule documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-oc-order-flow',
        certificationSlug: 'ordercloud',
        competencySlug: 'order-management',
        topicSlug: 'order-flow',
        overview:
            'Orders in OrderCloud progress through defined states from cart to completion. Understanding order flow and status management is essential.',
        keyConceptsTitle: 'Order Flow Concepts',
        keyConcepts: [
            'Unsubmitted: Cart/draft state',
            'Open: Submitted, awaiting fulfillment',
            'Completed: Fully shipped',
            'Canceled: Order terminated',
            'Approval workflows for B2B',
        ],
        sections: [
            {
                id: 'section-states',
                title: 'Order States',
                content:
                    'Unsubmitted orders are carts. Submitting moves to Open status. Shipping creates shipments against order. Complete when fully shipped. Cancel to terminate orders.',
            },
            {
                id: 'section-approvals',
                title: 'Order Approvals',
                content:
                    'B2B orders may require approval. Approval rules define thresholds and approvers. Orders await approval before processing. Approved orders continue normal flow.',
            },
        ],
        examTips: [
            'Know the order state transitions: Unsubmitted → Open → Completed (or Canceled)',
            'Unsubmitted = cart/draft state, Open = submitted awaiting fulfillment',
            'Approval rules enable B2B workflows - orders await approval before processing',
            'Orders complete when fully shipped - all line items fulfilled',
            'B2B orders may require approval based on thresholds and approvers',
            'Cancel terminates orders; cannot be undone',
        ],
        resources: [
            {
                id: 'res-orders',
                title: 'Orders',
                url: 'https://ordercloud.io/api-reference/orders-and-fulfillment/orders',
                description: 'Order API documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-oc-webhooks',
        certificationSlug: 'ordercloud',
        competencySlug: 'integration',
        topicSlug: 'webhooks',
        overview:
            'Webhooks in OrderCloud enable external system integration. Understanding webhook types and configuration supports extensibility.',
        keyConceptsTitle: 'Webhook Concepts',
        keyConcepts: [
            'Webhooks call external endpoints',
            'Pre-webhook: Before operation completes',
            'Post-webhook: After operation completes',
            'Validation webhooks modify requests',
            'Secure endpoints with shared secrets',
        ],
        sections: [
            {
                id: 'section-types',
                title: 'Webhook Types',
                content:
                    'Pre-webhooks execute before API operation. Can modify request or reject. Post-webhooks execute after successful operation. Notify external systems of changes.',
            },
            {
                id: 'section-implementation',
                title: 'Implementation',
                content:
                    'Configure webhook URL and events. Implement endpoint to handle payload. Validate signature for security. Respond appropriately for pre-webhooks.',
            },
        ],
        examTips: [
            'Know difference: Pre-webhooks execute before operation, Post-webhooks after',
            'Pre-webhooks can validate, modify requests, or reject - response affects operation',
            'Secure webhooks with hash validation using shared secrets',
            'Catalyst framework simplifies webhook handling in .NET',
            'Post-webhooks notify external systems of changes - no response needed',
            'Configure webhook URL and events to trigger on specific API operations',
        ],
        resources: [
            {
                id: 'res-webhooks',
                title: 'Webhooks',
                url: 'https://ordercloud.io/learn/ordercloud-basics/webhooks',
                description: 'Webhook documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
];
