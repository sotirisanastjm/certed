import type { TopicLearningContent } from '../../types';

export const cdpContent: TopicLearningContent[] = [
    // ========================================================================
    // CDP Certification Topics
    // ========================================================================
    {
        topicId: 'topic-cdp-arch-overview',
        certificationSlug: 'sitecore-cdp',
        competencySlug: 'architecture',
        topicSlug: 'architecture-overview',
        overview:
            'Sitecore CDP (Customer Data Platform) is a real-time customer data platform that collects, unifies, and activates customer data. Understanding the architecture and its relationship with Personalize is fundamental.',
        keyConceptsTitle: 'CDP Architecture Fundamentals',
        keyConcepts: [
            'CDP collects behavioral and transactional data in real-time',
            'Unified customer profiles merge data across touchpoints',
            'CDP provides data to Personalize for decisioning',
            'Real-time data processing enables immediate personalization',
            'Cloud-native architecture scales automatically',
        ],
        sections: [
            {
                id: 'section-platform',
                title: 'Platform Overview',
                content:
                    'Sitecore CDP is a cloud-native customer data platform that captures, stores, and activates customer data. It integrates with Sitecore Personalize for experimentation and personalization, sharing a common data foundation.',
            },
            {
                id: 'section-data-flow',
                title: 'Data Flow',
                content:
                    'Data enters CDP via Stream API (real-time) or batch imports. CDP processes and unifies data into customer profiles. Profiles are available for segmentation and activation. Data flows to Personalize for real-time decisions.',
            },
        ],
        examTips: [
            'CDP and Personalize share the same data foundation - unified customer profiles',
            'Real-time data is captured via Stream API; batch data supplements for historical/offline data',
            'Know the relationship between CDP (data) and Personalize (decisioning/personalization)',
            'CDP is cloud-native SaaS with automatic scaling',
            'Exam has 30 questions across 5 competencies with 80% passing score in 60 minutes',
        ],
        resources: [
            {
                id: 'res-cdp-overview',
                title: 'CDP Documentation',
                url: 'https://doc.sitecore.com/cdp',
                description: 'Official Sitecore CDP documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-cdp-data-model',
        certificationSlug: 'sitecore-cdp',
        competencySlug: 'architecture',
        topicSlug: 'data-model',
        overview:
            'The CDP data model defines how customer data is structured and related. Understanding guests, customers, sessions, events, and orders is essential for effective data collection and activation.',
        keyConceptsTitle: 'Data Model Concepts',
        keyConcepts: [
            'Guests represent anonymous visitors',
            'Customers are identified (authenticated) users',
            'Sessions group related events from a visit',
            'Events capture individual interactions',
            'Orders record transaction data',
        ],
        sections: [
            {
                id: 'section-entities',
                title: 'Core Entities',
                content:
                    'Guest: Anonymous profile with a browser ID. Customer: Identified profile with identity attributes. Session: Container for events during a visit. Event: Individual interaction (view, click, purchase). Order: Transaction with line items and totals.',
            },
            {
                id: 'section-relationships',
                title: 'Entity Relationships',
                content:
                    'Sessions belong to guests or customers. Events belong to sessions. Orders can be linked to events and customers. Identity resolution merges guests into customers when identified.',
            },
        ],
        examTips: [
            'Know the difference: Guest = anonymous (browser ID), Customer = identified (authenticated)',
            'Sessions group events from a single visit - contain related behavioral data',
            'Events are the atomic unit of behavioral data (VIEW, IDENTITY, SEARCH, ADD, etc.)',
            'Identity resolution merges guest profiles into customer when IDENTITY event is received',
            'Orders can be linked to events and customers for transaction tracking',
        ],
        resources: [
            {
                id: 'res-data-model',
                title: 'CDP Data Model',
                url: 'https://doc.sitecore.com/cdp/en/developers/api/data-model.html',
                description: 'CDP data model documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-cdp-stream-api',
        certificationSlug: 'sitecore-cdp',
        competencySlug: 'stream-api',
        topicSlug: 'stream-api',
        overview:
            'The Stream API enables real-time data collection from websites and applications. Understanding API versions, event types, and implementation is key to effective data capture.',
        keyConceptsTitle: 'Stream API Concepts',
        keyConcepts: [
            'Stream API collects behavioral data in real-time',
            'Events include VIEW, IDENTITY, SEARCH, and custom types',
            'Browser ID tracks anonymous visitors',
            'Point of sale (POS) identifies the data source',
            'API versions have different capabilities',
        ],
        sections: [
            {
                id: 'section-event-types',
                title: 'Event Types',
                content:
                    'VIEW events track page views with page context. IDENTITY events identify users with email or other identifiers. SEARCH events capture search queries. ADD, CONFIRM, CHECKOUT track commerce funnel. Custom events capture business-specific interactions.',
            },
            {
                id: 'section-implementation',
                title: 'Implementation',
                content:
                    'Include the Boxever JavaScript library or use REST API directly. Configure client key and point of sale. Send events with appropriate type and data payload. Handle responses and errors appropriately.',
            },
        ],
        examTips: [
            'VIEW is the most common event type - tracks page views with context',
            'IDENTITY event triggers identity resolution - merges anonymous to known profiles',
            'Know the required fields for each event type: type, channel, pos (point of sale)',
            'Browser ID is generated automatically by SDK and tracks anonymous visitors',
            'Commerce events: ADD (cart), CONFIRM (purchase), CHECKOUT track the shopping funnel',
            'Custom events capture business-specific interactions beyond standard types',
        ],
        resources: [
            {
                id: 'res-stream-api',
                title: 'Stream API Reference',
                url: 'https://doc.sitecore.com/cdp/en/developers/api/stream-api.html',
                description: 'Stream API documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-cdp-engage-sdk',
        certificationSlug: 'sitecore-cdp',
        competencySlug: 'stream-api',
        topicSlug: 'engage-sdk',
        overview:
            'The Sitecore Engage SDK simplifies data collection from web applications. Understanding SDK initialization, event methods, and identity management enables efficient implementation.',
        keyConceptsTitle: 'Engage SDK Concepts',
        keyConcepts: [
            'Engage SDK is the modern data collection library',
            'Automatic page view tracking available',
            'Identity methods link anonymous to known users',
            'Event methods send custom events',
            'Configurable for different environments',
        ],
        sections: [
            {
                id: 'section-initialization',
                title: 'SDK Initialization',
                content:
                    'Install the Engage SDK package. Configure with client key, target URL, and point of sale. Initialize early in page lifecycle. SDK handles cookie management and request batching.',
            },
            {
                id: 'section-methods',
                title: 'SDK Methods',
                content:
                    'pageView(): Send page view events. identity(): Identify users with email. event(): Send custom events. getGuestId(): Retrieve current browser ID.',
            },
        ],
        examTips: [
            'Engage SDK is the modern data collection library - replaces older Boxever SDK',
            'Know the main SDK methods: pageView(), identity(), event(), getGuestId()',
            'SDK handles browser ID management and cookie management automatically',
            'Configure for correct environment (production vs sandbox) with client key and target URL',
            'Automatic page view tracking is available if configured',
            'SDK handles request batching for performance optimization',
        ],
        resources: [
            {
                id: 'res-engage-sdk',
                title: 'Engage SDK',
                url: 'https://doc.sitecore.com/cdp/en/developers/api/javascript-tagging-examples.html',
                description: 'Engage SDK documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-cdp-identity',
        certificationSlug: 'sitecore-cdp',
        competencySlug: 'customer-profiles',
        topicSlug: 'identity-resolution',
        overview:
            'Identity resolution merges anonymous guest profiles into identified customer profiles. Understanding how profiles are matched and merged is essential for unified customer views.',
        keyConceptsTitle: 'Identity Resolution Concepts',
        keyConcepts: [
            'IDENTITY events trigger resolution',
            'Email is the primary identifier',
            'Multiple identifiers can be configured',
            'Guest data merges into customer profile',
            'Cross-device identity is supported',
        ],
        sections: [
            {
                id: 'section-process',
                title: 'Resolution Process',
                content:
                    'When an IDENTITY event is received, CDP looks for existing profiles with matching identifiers. If found, guest data merges into the customer. If not, a new customer profile is created from the guest.',
            },
            {
                id: 'section-identifiers',
                title: 'Identifiers',
                content:
                    'Email is the default identifier. Custom identifiers (loyalty ID, CRM ID) can be configured. Identifiers can have different trust levels. Multiple identifiers enable flexible matching.',
            },
        ],
        examTips: [
            'IDENTITY event is required for resolution',
            'Email is the primary default identifier',
            'Guest history merges into customer profile',
            'Know how custom identifiers work',
        ],
        resources: [
            {
                id: 'res-identity',
                title: 'Identity Resolution',
                url: 'https://doc.sitecore.com/cdp/en/users/sitecore-cdp/identity-resolution.html',
                description: 'Identity resolution documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-cdp-realtime-seg',
        certificationSlug: 'sitecore-cdp',
        competencySlug: 'segmentation',
        topicSlug: 'realtime-segmentation',
        overview:
            'Real-time segmentation creates dynamic audience segments based on current behavior and profile data. Understanding segment configuration enables targeted personalization.',
        keyConceptsTitle: 'Real-time Segmentation Concepts',
        keyConcepts: [
            'Segments define audience criteria',
            'Real-time evaluation for immediate membership',
            'Conditions combine profile and behavioral data',
            'Segments power personalization targeting',
            'Boolean logic combines multiple conditions',
        ],
        sections: [
            {
                id: 'section-creation',
                title: 'Creating Segments',
                content:
                    'Define segment criteria using conditions. Combine conditions with AND/OR logic. Use profile traits, behaviors, and attributes. Preview segment membership before activating.',
            },
            {
                id: 'section-usage',
                title: 'Using Segments',
                content:
                    'Segments are used as targeting conditions in Personalize. Real-time membership determination for each request. Segments can be exported to external systems. Analytics show segment performance.',
            },
        ],
        examTips: [
            'Real-time segments evaluate on each request',
            'Know how to combine conditions with logic operators',
            'Segments are used for experience targeting',
            'Profile traits enable pre-calculated segments',
        ],
        resources: [
            {
                id: 'res-segments',
                title: 'Audience Segments',
                url: 'https://doc.sitecore.com/cdp/en/users/sitecore-cdp/audience-segments.html',
                description: 'Segmentation documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-cdp-consent',
        certificationSlug: 'sitecore-cdp',
        competencySlug: 'privacy',
        topicSlug: 'consent-management',
        overview:
            'Consent management in CDP supports privacy compliance by tracking user consent preferences. Understanding consent handling is essential for GDPR and CCPA compliance.',
        keyConceptsTitle: 'Consent Concepts',
        keyConcepts: [
            'Consent is captured via API or UI',
            'Consent affects data processing',
            'Consent status is stored on profiles',
            'Opt-out stops data collection',
            'Consent history is maintained',
        ],
        sections: [
            {
                id: 'section-capture',
                title: 'Capturing Consent',
                content:
                    'Capture consent during registration or via consent banners. Send consent status via IDENTITY event. Update consent when preferences change. Store consent evidence for compliance.',
            },
            {
                id: 'section-processing',
                title: 'Processing Consent',
                content:
                    'Consent affects data collection and usage. Opted-out users have limited tracking. Consent levels control feature availability. Data deletion requests are supported.',
            },
        ],
        examTips: [
            'Consent is required for compliant data collection',
            'Know how consent affects data processing',
            'Understand GDPR and CCPA requirements',
            'Consent status is tracked on guest profiles',
        ],
        resources: [
            {
                id: 'res-consent',
                title: 'Consent Management',
                url: 'https://doc.sitecore.com/cdp/en/users/sitecore-cdp/managing-consent.html',
                description: 'Consent management documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-cdp-batch-import',
        certificationSlug: 'sitecore-cdp',
        competencySlug: 'batch-processing',
        topicSlug: 'batch-import',
        overview:
            'Batch import enables loading historical and offline data into CDP. Understanding file formats and import processes supports comprehensive customer profiles.',
        keyConceptsTitle: 'Batch Import Concepts',
        keyConcepts: [
            'Import historical and offline data',
            'Apache Parquet is preferred format',
            'JSON batch import also supported',
            'Schedule recurring imports',
            'Validate data before import',
        ],
        sections: [
            {
                id: 'section-formats',
                title: 'Import Formats',
                content:
                    'Apache Parquet: Efficient columnar format for large datasets. JSON: Flexible format for smaller imports. Both require specific schema alignment. Data validation occurs before processing.',
            },
            {
                id: 'section-process',
                title: 'Import Process',
                content:
                    'Prepare data in required format. Upload to CDP via API or UI. Monitor import job status. Review error logs for failures. Data merges with existing profiles.',
            },
        ],
        examTips: [
            'Parquet is recommended for large datasets',
            'Know the required fields for batch imports',
            'Imports merge with existing profile data',
            'Validation catches format errors early',
        ],
        resources: [
            {
                id: 'res-batch',
                title: 'Batch Import',
                url: 'https://doc.sitecore.com/cdp/en/users/sitecore-cdp/batch-data-import.html',
                description: 'Batch import documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
];

export const personalizeContent: TopicLearningContent[] = [
    // ========================================================================
    // Personalize Certification Topics
    // ========================================================================
    {
        topicId: 'topic-pers-web-exp',
        certificationSlug: 'sitecore-personalize',
        competencySlug: 'experiences',
        topicSlug: 'web-experiences',
        overview:
            'Web experiences enable on-site personalization by modifying page content based on visitor context. Understanding experience creation and targeting is essential for effective personalization.',
        keyConceptsTitle: 'Web Experience Concepts',
        keyConcepts: [
            'Web experiences modify page content in real-time',
            'Templates define what content is changed',
            'Targeting rules control who sees the experience',
            'Variants allow A/B testing within experiences',
            'JavaScript and CSS customize presentation',
        ],
        sections: [
            {
                id: 'section-creation',
                title: 'Creating Web Experiences',
                content:
                    'Create experiences in the Personalize UI. Select or create a web template. Define targeting conditions for the audience. Create variants for testing different approaches. Preview before activation.',
            },
            {
                id: 'section-templates',
                title: 'Web Templates',
                content:
                    'Templates define page modifications using HTML/CSS/JavaScript. Templates reference page elements via selectors. Actions include replace, insert, hide, and custom JavaScript. Reusable templates accelerate experience creation.',
            },
        ],
        examTips: [
            'Web experiences require Engage SDK on the page for real-time modifications',
            'Know the standard template actions: replace, insert, hide, custom JavaScript',
            'Targeting can use segments, conditions, and guest attributes',
            'Variants enable A/B testing within experiences',
            'Personalize exam: 43% of questions on Experiences competency - largest weight',
            'Out-of-the-box web experience templates available for common use cases',
        ],
        resources: [
            {
                id: 'res-web-exp',
                title: 'Web Experiences',
                url: 'https://doc.sitecore.com/personalize/en/users/sitecore-personalize/web-experiences.html',
                description: 'Web experiences documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-pers-fullstack',
        certificationSlug: 'sitecore-personalize',
        competencySlug: 'experiences',
        topicSlug: 'fullstack-experiences',
        overview:
            'Full Stack Interactive experiences enable server-side personalization via API. Understanding API integration patterns supports headless and backend personalization.',
        keyConceptsTitle: 'Full Stack Experience Concepts',
        keyConcepts: [
            'API-driven personalization for any platform',
            'Server-side decision making',
            'JSON response with personalized content',
            'Integration via REST API',
            'Supports headless architectures',
        ],
        sections: [
            {
                id: 'section-api-integration',
                title: 'API Integration',
                content:
                    'Call the Interactive API with guest context. Receive personalized response with content and decisions. Render response in your application. Track events for analytics.',
            },
            {
                id: 'section-use-cases',
                title: 'Use Cases',
                content:
                    'Headless CMS personalization. Mobile app content. Email content personalization. Server-rendered web pages. Any platform that can make HTTP requests.',
            },
        ],
        examTips: [
            'Full Stack uses REST API, not JavaScript SDK',
            'Response includes personalized content',
            'Know the API request format',
            'Supports any platform with HTTP capability',
        ],
        resources: [
            {
                id: 'res-fullstack',
                title: 'Full Stack Experiences',
                url: 'https://doc.sitecore.com/personalize/en/users/sitecore-personalize/full-stack-experiences.html',
                description: 'Full Stack experience documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-pers-ab-testing',
        certificationSlug: 'sitecore-personalize',
        competencySlug: 'experiments',
        topicSlug: 'ab-testing',
        overview:
            'A/B testing compares variants to determine the most effective approach. Understanding test setup, traffic allocation, and statistical significance is essential for optimization.',
        keyConceptsTitle: 'A/B Testing Concepts',
        keyConcepts: [
            'Compare control vs treatment variants',
            'Traffic allocation controls variant exposure',
            'Statistical significance validates results',
            'Goals define success metrics',
            'Duration affects result reliability',
        ],
        sections: [
            {
                id: 'section-setup',
                title: 'Test Setup',
                content:
                    'Define control and treatment variants. Set traffic allocation percentage. Choose primary goal metric. Configure test duration or sample size. Enable statistical significance threshold.',
            },
            {
                id: 'section-analysis',
                title: 'Result Analysis',
                content:
                    'Monitor test progress in dashboard. Wait for statistical significance. Review conversion rates by variant. Consider secondary metrics. Document learnings for future tests.',
            },
        ],
        examTips: [
            'Know how to calculate sample size needs based on base rate and minimum detectable difference',
            'Statistical significance indicates reliable results - don\'t declare winners too early',
            'Don\'t end tests too early - wait for statistical significance threshold',
            'Understand traffic allocation mechanics: control vs treatment percentage split',
            'Experiments competency is 23% of Personalize exam',
            'Goals define success metrics - choose primary goal carefully',
        ],
        resources: [
            {
                id: 'res-ab-testing',
                title: 'A/B Testing',
                url: 'https://doc.sitecore.com/personalize/en/users/sitecore-personalize/experiments.html',
                description: 'A/B testing documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
    {
        topicId: 'topic-pers-decision-models',
        certificationSlug: 'sitecore-personalize',
        competencySlug: 'decisioning',
        topicSlug: 'decision-models',
        overview:
            'Decision models define logic for real-time personalization decisions. Understanding the Decision Canvas and model components enables sophisticated decisioning.',
        keyConceptsTitle: 'Decision Model Concepts',
        keyConcepts: [
            'Decision Canvas provides visual model builder',
            'Models combine rules and data for decisions',
            'Programmable components enable custom logic',
            'Decisions return content or offers',
            'Models are versioned and testable',
        ],
        sections: [
            {
                id: 'section-canvas',
                title: 'Decision Canvas',
                content:
                    'Drag and drop components to build logic. Connect components to define flow. Configure each component\'s parameters. Test models before activation.',
            },
            {
                id: 'section-components',
                title: 'Model Components',
                content:
                    'Input: Guest data and context. Decision tables: Rule-based logic. Programmables: Custom JavaScript. Output: Final decision result.',
            },
        ],
        examTips: [
            'Decision Canvas is the visual model editor - drag and drop components to build logic',
            'Know the main component types: Input, Decision Tables, Programmables, Output',
            'Models version independently of experiences - can be tested separately',
            'Test models thoroughly before use in production',
            'Decisioning competency is 23% of Personalize exam',
            'Decision tables enable rule-based logic; Programmables enable custom JavaScript',
        ],
        resources: [
            {
                id: 'res-decisions',
                title: 'Decision Models',
                url: 'https://doc.sitecore.com/personalize/en/users/sitecore-personalize/decision-models.html',
                description: 'Decision model documentation',
                resourceType: 'OFFICIAL_DOC',
                isOfficial: true,
            },
        ],
    },
];
