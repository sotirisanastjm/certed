import type { Quiz, Question, DifficultyLevel, QuestionType } from '../types';

function createQuestion(
    id: string,
    text: string,
    type: QuestionType,
    difficulty: DifficultyLevel,
    answers: Array<{ text: string; isCorrect: boolean }>,
    explanation?: string,
    competencyId?: string,
    topicId?: string
): Question {
    return {
        id,
        questionText: text,
        explanation,
        questionType: type,
        difficulty,
        isActive: true,
        competencyId,
        topicId,
        answers: answers.map((answer, index) => ({
            id: `${id}-ans-${index + 1}`,
            answerText: answer.text,
            isCorrect: answer.isCorrect,
            sortOrder: index + 1,
            questionId: id,
        })),
    };
}

// XM Cloud Developer Quiz Questions - Based on real exam topics
const xmCloudQuestions: Question[] = [
    createQuestion(
        'xmc-q1',
        'A developer needs to remove a site collection folder in XM Cloud. Which script should they use?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Delete Site Collection', isCorrect: false },
            { text: 'Remove Site Collection Folder', isCorrect: true },
            { text: 'Clear Site Collection', isCorrect: false },
            { text: 'Purge Site Folder', isCorrect: false },
        ],
        'The "Remove Site Collection Folder" script is the correct way to remove a site collection folder in XM Cloud.',
        'comp-xmc-deployment',
        'topic-xmc-deploy-app'
    ),
    createQuestion(
        'xmc-q2',
        'Which resources are included during the provisioning step of a deployment to XM Cloud?',
        'MULTIPLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Content Management instance', isCorrect: true },
            { text: 'Editing Host', isCorrect: true },
            { text: 'Experience Edge', isCorrect: true },
            { text: 'Content Delivery servers', isCorrect: false },
        ],
        'During XM Cloud provisioning, the CM instance, Editing Host, and Experience Edge are created. XM Cloud does not use traditional CD servers.',
        'comp-xmc-deployment',
        'topic-xmc-environments'
    ),
    createQuestion(
        'xmc-q3',
        'What is the purpose of the following GraphQL query against the Experience Edge schema?\n\nlayout(site: "website", routePath: "/about") { item { rendered } }',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'It retrieves the raw item data from the content tree', isCorrect: false },
            { text: 'It retrieves the item layout for a URL', isCorrect: true },
            { text: 'It updates the item layout for the specified path', isCorrect: false },
            { text: 'It deletes the cached layout for the route', isCorrect: false },
        ],
        'The layout query with routePath retrieves the Layout Service output for rendering in frameworks like Next.js.',
        'comp-xmc-apis',
        'topic-xmc-graphql'
    ),
    createQuestion(
        'xmc-q4',
        'When a build to XM Cloud fails, what is the MOST useful resource for diagnosing the error?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Sitecore logs in Azure', isCorrect: false },
            { text: 'Deployment log files', isCorrect: true },
            { text: 'Browser developer console', isCorrect: false },
            { text: 'Experience Edge cache status', isCorrect: false },
        ],
        'Deployment log files provide detailed information about build failures and are the most useful resource for troubleshooting.',
        'comp-xmc-deployment',
        'topic-xmc-cicd'
    ),
    createQuestion(
        'xmc-q5',
        'In XM Cloud, a developer needs to define data structures for content items. What should they use?',
        'SINGLE_CHOICE',
        'BEGINNER',
        [
            { text: 'Components', isCorrect: false },
            { text: 'Templates', isCorrect: true },
            { text: 'Renderings', isCorrect: false },
            { text: 'Layouts', isCorrect: false },
        ],
        'Templates are used to define the data structure for content items in Sitecore, including XM Cloud.',
        'comp-xmc-data-modeling',
        'topic-xmc-templates'
    ),
    createQuestion(
        'xmc-q6',
        'Which role is required to use the XM Cloud Deploy app to deploy projects?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Content Author', isCorrect: false },
            { text: 'Organization Owner or Project Admin', isCorrect: true },
            { text: 'Any authenticated user', isCorrect: false },
            { text: 'System Administrator', isCorrect: false },
        ],
        'Only Organization Owners or Project Admins have permissions to deploy projects using the XM Cloud Deploy app.',
        'comp-xmc-deployment',
        'topic-xmc-deploy-app'
    ),
    createQuestion(
        'xmc-q7',
        'What is the out-of-the-box technology stack for XM Cloud front-end development?',
        'SINGLE_CHOICE',
        'BEGINNER',
        [
            { text: 'Angular with JSS', isCorrect: false },
            { text: 'Next.js with JSS', isCorrect: true },
            { text: 'Vue.js with JSS', isCorrect: false },
            { text: 'React without JSS', isCorrect: false },
        ],
        'XM Cloud provides Next.js with Sitecore JSS as the out-of-the-box technology stack for headless development.',
        'comp-xmc-renderings',
        'topic-xmc-jss'
    ),
    createQuestion(
        'xmc-q8',
        'An administrator-level user cannot see items in the content tree. What is the MOST likely cause?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'The items are not published', isCorrect: false },
            { text: 'Security permissions are restricting access', isCorrect: true },
            { text: 'The database connection is broken', isCorrect: false },
            { text: 'The items have been archived', isCorrect: false },
        ],
        'Even admin users can be restricted by security permissions set on specific items or templates.',
        'comp-xmc-security',
        'topic-xmc-roles'
    ),
    createQuestion(
        'xmc-q9',
        'Which GraphQL mutation is used to create a new item in XM Cloud?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'addItem', isCorrect: false },
            { text: 'createItem', isCorrect: true },
            { text: 'insertItem', isCorrect: false },
            { text: 'newItem', isCorrect: false },
        ],
        'The createItem mutation is used in the Authoring and Management GraphQL API to create new content items.',
        'comp-xmc-apis',
        'topic-xmc-graphql'
    ),
    createQuestion(
        'xmc-q10',
        'What type of webhook should be configured for workflow state changes in XM Cloud?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Item webhook', isCorrect: false },
            { text: 'Workflow webhook', isCorrect: true },
            { text: 'Publish webhook', isCorrect: false },
            { text: 'System webhook', isCorrect: false },
        ],
        'Workflow webhooks are specifically designed to trigger on workflow state changes.',
        'comp-xmc-apis',
        'topic-xmc-webhooks'
    ),
    createQuestion(
        'xmc-q11',
        'After publishing content to Experience Edge, what must happen for changes to be visible on the website?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Restart the rendering host', isCorrect: false },
            { text: 'The content is immediately available via the Edge GraphQL API', isCorrect: true },
            { text: 'Clear the browser cache', isCorrect: false },
            { text: 'Rebuild the Next.js application', isCorrect: false },
        ],
        'Once published to Experience Edge, content is immediately available through the GraphQL API for delivery.',
        'comp-xmc-apis',
        'topic-xmc-edge'
    ),
    createQuestion(
        'xmc-q12',
        'Which environment variable simplifies XM Cloud configuration by replacing multiple previous variables?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'SITECORE_API_KEY', isCorrect: false },
            { text: 'SITECORE_EDGE_CONTEXT_ID', isCorrect: true },
            { text: 'GRAPH_QL_ENDPOINT', isCorrect: false },
            { text: 'SITECORE_API_HOST', isCorrect: false },
        ],
        'SITECORE_EDGE_CONTEXT_ID is the simplified configuration variable that replaces multiple previous environment variables.',
        'comp-xmc-deployment',
        'topic-xmc-environments'
    ),
    createQuestion(
        'xmc-q13',
        'When creating a component in a Next.js XM Cloud application, which file defines how the component receives data from Sitecore?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'component.config.js', isCorrect: false },
            { text: 'The component props interface and field types', isCorrect: true },
            { text: 'datasource.json', isCorrect: false },
            { text: 'rendering.config.xml', isCorrect: false },
        ],
        'Component props and field type definitions determine how data flows from Sitecore to the Next.js component.',
        'comp-xmc-renderings',
        'topic-xmc-jss'
    ),
    createQuestion(
        'xmc-q14',
        'Why is it recommended to assign security to roles rather than individual users in XM Cloud?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'It improves system performance', isCorrect: false },
            { text: 'It allows for efficient management of access rights', isCorrect: true },
            { text: 'It is required by Sitecore licensing', isCorrect: false },
            { text: 'Individual user permissions are not supported', isCorrect: false },
        ],
        'Assigning permissions to roles allows administrators to manage access for multiple users efficiently by simply adding or removing users from roles.',
        'comp-xmc-security',
        'topic-xmc-roles'
    ),
    createQuestion(
        'xmc-q15',
        'What tasks does the XM Cloud publishing pipeline perform?',
        'MULTIPLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Calculate dependencies between items', isCorrect: true },
            { text: 'Archive expired content', isCorrect: true },
            { text: 'Push content to Experience Edge', isCorrect: true },
            { text: 'Deploy code changes to the rendering host', isCorrect: false },
        ],
        'The publishing pipeline calculates dependencies, archives expired content, and pushes content to Experience Edge. Code deployment is separate.',
        'comp-xmc-deployment',
        'topic-xmc-deploy-app'
    ),
];

// Sitecore 10 .NET Developer Quiz Questions - Based on real exam topics
const sitecore10DevQuestions: Question[] = [
    createQuestion(
        'sc10-q1',
        'A developer runs the serialization command but receives an error that the command is not available. What is the MOST likely cause?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'The Sitecore instance is not running', isCorrect: false },
            { text: 'The Sitecore CLI serialization plugin is not installed', isCorrect: true },
            { text: 'The developer lacks admin permissions', isCorrect: false },
            { text: 'The sitecore.json file is missing', isCorrect: false },
        ],
        'Serialization commands require the Sitecore CLI serialization plugin to be installed.',
        'comp-sc10-scs',
        'topic-sc10-cli'
    ),
    createQuestion(
        'sc10-q2',
        'Which placeholder identifier format should be used to ensure unique keys when nesting components?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Static placeholder keys', isCorrect: false },
            { text: 'Dynamic placeholder keys with unique suffix', isCorrect: true },
            { text: 'GUID-based placeholder keys', isCorrect: false },
            { text: 'Sequential numeric keys', isCorrect: false },
        ],
        'Dynamic placeholders generate unique keys allowing multiple instances of the same nested component.',
        'comp-sc10-layout',
        'topic-sc10-placeholders'
    ),
    createQuestion(
        'sc10-q3',
        'What is the primary purpose of field sections in a data template?',
        'SINGLE_CHOICE',
        'BEGINNER',
        [
            { text: 'To define security permissions', isCorrect: false },
            { text: 'To organize fields into logical groups', isCorrect: true },
            { text: 'To enable field validation', isCorrect: false },
            { text: 'To set default field values', isCorrect: false },
        ],
        'Field sections organize template fields into logical groups for better content editing experience.',
        'comp-sc10-items',
        'topic-sc10-templates'
    ),
    createQuestion(
        'sc10-q4',
        'In Sitecore MVC, which fields should NOT be rendered using Html.Sitecore().Field() because they are complex fields?',
        'MULTIPLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Checkbox', isCorrect: true },
            { text: 'Multilist', isCorrect: true },
            { text: 'Single-Line Text', isCorrect: false },
            { text: 'Treelist', isCorrect: true },
        ],
        'Complex fields like Checkbox, Multilist, and Treelist require custom handling and should not use the standard Field() method.',
        'comp-sc10-components',
        'topic-sc10-view-rendering'
    ),
    createQuestion(
        'sc10-q5',
        'A developer does not set a module file path in the sitecore.json. What happens when they run serialization commands?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'All items are serialized by default', isCorrect: false },
            { text: 'Related items will not be serialized during push or pull commands', isCorrect: true },
            { text: 'The command throws an error', isCorrect: false },
            { text: 'Items are serialized to a temporary folder', isCorrect: false },
        ],
        'Without a module file path, the serialization commands will not know which items to include in push/pull operations.',
        'comp-sc10-scs',
        'topic-sc10-module-matching'
    ),
    createQuestion(
        'sc10-q6',
        'What is a benefit of using the Sitecore ASP.NET Core Rendering SDK?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'It enables independent applications that can run without Sitecore', isCorrect: false },
            { text: 'It enables lightweight .NET Core applications with code preview without full Sitecore restarts', isCorrect: true },
            { text: 'It replaces the need for Docker containers', isCorrect: false },
            { text: 'It provides built-in database caching', isCorrect: false },
        ],
        'The ASP.NET Core Rendering SDK allows for lightweight applications that can preview code changes without restarting Sitecore.',
        'comp-sc10-components',
        'topic-sc10-controller-rendering'
    ),
    createQuestion(
        'sc10-q7',
        'Under what condition can fields be edited inline using the Experience Editor in Sitecore MVC?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Only when using View Renderings', isCorrect: false },
            { text: 'When the field is rendered using the Field() helper method', isCorrect: true },
            { text: 'When the field type is Single-Line Text only', isCorrect: false },
            { text: 'Only for fields on the context item', isCorrect: false },
        ],
        'Fields rendered using the Field() helper method are automatically enabled for inline editing in Experience Editor.',
        'comp-sc10-components',
        'topic-sc10-view-rendering'
    ),
    createQuestion(
        'sc10-q8',
        'What is the purpose of the Datasource Location field on a rendering definition?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'It defines where the rendering code file is located', isCorrect: false },
            { text: 'It specifies where content authors can select datasource items from', isCorrect: true },
            { text: 'It sets the default item to render', isCorrect: false },
            { text: 'It configures caching behavior', isCorrect: false },
        ],
        'The Datasource Location field defines the location in the content tree where authors can select datasource items.',
        'comp-sc10-components',
        'topic-sc10-datasources'
    ),
    createQuestion(
        'sc10-q9',
        'Where should you view workflow commands for an item?',
        'MULTIPLE_CHOICE',
        'BEGINNER',
        [
            { text: 'Experience Editor ribbon', isCorrect: true },
            { text: 'Content Editor Review tab', isCorrect: true },
            { text: 'Workbox', isCorrect: true },
            { text: 'Control Panel', isCorrect: false },
        ],
        'Workflow commands are accessible from Experience Editor, Content Editor Review tab, and Workbox.',
        'comp-sc10-items',
        'topic-sc10-workflows'
    ),
    createQuestion(
        'sc10-q10',
        'What is the recommended practice for setting presentation details in a multisite implementation?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Set presentation on each content item individually', isCorrect: false },
            { text: 'Set presentation on Standard Values of templates', isCorrect: true },
            { text: 'Use a single shared layout for all sites', isCorrect: false },
            { text: 'Configure presentation in web.config', isCorrect: false },
        ],
        'Standard Values allow items created from a template to inherit presentation details, which is the best practice for multisite setups.',
        'comp-sc10-items',
        'topic-sc10-standard-values'
    ),
    createQuestion(
        'sc10-q11',
        'What is the purpose of setting insert options on specific items in the content tree?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'To restrict which templates can be used site-wide', isCorrect: false },
            { text: 'To allow content authors to insert items under that specific item in addition to inherited options', isCorrect: true },
            { text: 'To define workflow requirements', isCorrect: false },
            { text: 'To configure publishing restrictions', isCorrect: false },
        ],
        'Insert options on items add to the inherited options, allowing more granular control over what content can be created.',
        'comp-sc10-items',
        'topic-sc10-templates'
    ),
    createQuestion(
        'sc10-q12',
        'Which file controls the configuration patch loading order in Sitecore 10?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'web.config', isCorrect: false },
            { text: 'Layers.config', isCorrect: true },
            { text: 'Sitecore.config', isCorrect: false },
            { text: 'ConnectionStrings.config', isCorrect: false },
        ],
        'Layers.config defines the order in which configuration patch files are loaded in Sitecore 10.',
        'comp-sc10-structure',
        'topic-sc10-config'
    ),
    createQuestion(
        'sc10-q13',
        'What is the purpose of the Sitecore Extranet security domain?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'It stores Sitecore administrator accounts', isCorrect: false },
            { text: 'It contains user accounts and roles for managing website visitor access', isCorrect: true },
            { text: 'It manages API client credentials', isCorrect: false },
            { text: 'It stores service account credentials', isCorrect: false },
        ],
        'The Extranet domain is used for website visitor authentication and contains customized roles for content access.',
        'comp-sc10-security',
        'topic-sc10-domains'
    ),
    createQuestion(
        'sc10-q14',
        'Which files are required to launch a vanilla Sitecore instance in Docker containers?',
        'MULTIPLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'docker-compose.yml', isCorrect: true },
            { text: '.env file', isCorrect: true },
            { text: 'Dockerfile', isCorrect: false },
            { text: 'kubernetes.yaml', isCorrect: false },
        ],
        'Docker-compose.yml and .env files are the essential files for launching a Sitecore container environment.',
        'comp-sc10-containers',
        'topic-sc10-docker'
    ),
    createQuestion(
        'sc10-q15',
        'What is the correct way to configure multiple websites in a single Sitecore instance?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Create separate databases for each site', isCorrect: false },
            { text: 'Define sites in configuration with hostname bindings', isCorrect: true },
            { text: 'Install multiple Sitecore instances', isCorrect: false },
            { text: 'Use different application pools', isCorrect: false },
        ],
        'Multiple sites are configured using site definitions in configuration files with hostname and virtual folder bindings.',
        'comp-sc10-structure',
        'topic-sc10-multisite'
    ),
];

// Content Hub Developer Quiz Questions - Based on real exam topics
const contentHubDevQuestions: Question[] = [
    createQuestion(
        'ch-dev-q1',
        'What object is used within Content Hub scripts to perform API operations?',
        'SINGLE_CHOICE',
        'BEGINNER',
        [
            { text: 'HttpClient', isCorrect: false },
            { text: 'MClient', isCorrect: true },
            { text: 'ApiClient', isCorrect: false },
            { text: 'WebClient', isCorrect: false },
        ],
        'MClient is the primary object used for Content Hub API operations within C# scripts.',
        'comp-ch-dev-scripts',
        'topic-ch-dev-script-basics'
    ),
    createQuestion(
        'ch-dev-q2',
        'What is the difference between in-process and background processes in Content Hub?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'In-process runs synchronously and blocks until complete; background runs asynchronously', isCorrect: true },
            { text: 'Background processes are faster than in-process', isCorrect: false },
            { text: 'In-process can only run on assets', isCorrect: false },
            { text: 'There is no difference', isCorrect: false },
        ],
        'In-process scripts execute synchronously and block user interactions until complete. Background processes run asynchronously.',
        'comp-ch-dev-actions',
        'topic-ch-dev-action-basics'
    ),
    createQuestion(
        'ch-dev-q3',
        'In a Content Hub Developer exam, which area is emphasized as critical for success?',
        'SINGLE_CHOICE',
        'BEGINNER',
        [
            { text: 'Front-end design', isCorrect: false },
            { text: 'Schema design', isCorrect: true },
            { text: 'Network configuration', isCorrect: false },
            { text: 'Database optimization', isCorrect: false },
        ],
        'Schema design is considered a critical area for Content Hub certification success.',
        'comp-ch-dev-admin',
        'topic-ch-dev-schemas'
    ),
    createQuestion(
        'ch-dev-q4',
        'How can you obtain an asset ID in a Content Hub metadata processing script?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Context.AssetId', isCorrect: false },
            { text: 'Context.TargetId or through the entity object', isCorrect: true },
            { text: 'Request.AssetId', isCorrect: false },
            { text: 'MClient.GetCurrentAsset()', isCorrect: false },
        ],
        'Asset IDs can be obtained from Context.TargetId or through the entity object in metadata scripts.',
        'comp-ch-dev-scripts',
        'topic-ch-dev-metadata'
    ),
    createQuestion(
        'ch-dev-q5',
        'What percentage of the Content Hub Developer exam covers administrative competencies?',
        'SINGLE_CHOICE',
        'BEGINNER',
        [
            { text: '40%', isCorrect: false },
            { text: '60%', isCorrect: true },
            { text: '50%', isCorrect: false },
            { text: '70%', isCorrect: false },
        ],
        'The Content Hub Developer exam includes 60% administrative competencies (36 questions) and 40% developer competencies (24 questions).',
        'comp-ch-dev-admin'
    ),
    createQuestion(
        'ch-dev-q6',
        'Which query language is used in Content Hub scripts for entity retrieval?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'SQL', isCorrect: false },
            { text: 'LINQ', isCorrect: true },
            { text: 'XQuery', isCorrect: false },
            { text: 'GraphQL', isCorrect: false },
        ],
        'LINQ queries are used in Content Hub C# scripts for filtering and retrieving entities.',
        'comp-ch-dev-api',
        'topic-ch-dev-queries'
    ),
    createQuestion(
        'ch-dev-q7',
        'What is the relationship between taxonomies and assets in Content Hub?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'One-to-one', isCorrect: false },
            { text: 'One-to-many (one taxonomy item can relate to many assets)', isCorrect: true },
            { text: 'Many-to-one', isCorrect: false },
            { text: 'No direct relationship', isCorrect: false },
        ],
        'Taxonomies have a one-to-many relationship with assets, allowing hierarchical classification.',
        'comp-ch-dev-admin',
        'topic-ch-dev-schemas'
    ),
    createQuestion(
        'ch-dev-q8',
        'When should you use a background process instead of an in-process script?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'When immediate user feedback is required', isCorrect: false },
            { text: 'When the operation may take a long time and should not block the user', isCorrect: true },
            { text: 'When working with small amounts of data', isCorrect: false },
            { text: 'Background processes should always be preferred', isCorrect: false },
        ],
        'Background processes are ideal for long-running operations that should not block user interactions.',
        'comp-ch-dev-actions',
        'topic-ch-dev-action-basics'
    ),
    createQuestion(
        'ch-dev-q9',
        'What triggers can be configured to execute in Content Hub?',
        'MULTIPLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Execute actions based on entity events', isCorrect: true },
            { text: 'Make API calls to external systems', isCorrect: true },
            { text: 'Run scripts automatically when conditions are met', isCorrect: true },
            { text: 'Modify Sitecore XP content directly', isCorrect: false },
        ],
        'Triggers can execute actions, make API calls, and run scripts based on entity events and conditions.',
        'comp-ch-dev-triggers',
        'topic-ch-dev-trigger-config'
    ),
    createQuestion(
        'ch-dev-q10',
        'How do you save an asset asynchronously in a Content Hub script?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'entity.Save()', isCorrect: false },
            { text: 'await MClient.Entities.SaveAsync(entity)', isCorrect: true },
            { text: 'MClient.SaveEntity(entity)', isCorrect: false },
            { text: 'entity.CommitAsync()', isCorrect: false },
        ],
        'The SaveAsync method on MClient.Entities is used for asynchronous entity saving.',
        'comp-ch-dev-scripts',
        'topic-ch-dev-metadata'
    ),
    createQuestion(
        'ch-dev-q11',
        'What is the purpose of external page components in Content Hub?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'To embed Content Hub in external websites', isCorrect: false },
            { text: 'To create custom UI components for Content Hub pages', isCorrect: true },
            { text: 'To export content to external systems', isCorrect: false },
            { text: 'To manage external user authentication', isCorrect: false },
        ],
        'External page components allow developers to build custom UI components using JavaScript for Content Hub pages.',
        'comp-ch-dev-components',
        'topic-ch-dev-component-create'
    ),
    createQuestion(
        'ch-dev-q12',
        'How can you interact with page entity data in Content Hub JavaScript components?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Using the entity API directly', isCorrect: false },
            { text: 'Through the options.entityId and entity events', isCorrect: true },
            { text: 'Via GraphQL only', isCorrect: false },
            { text: 'JavaScript cannot access entity data', isCorrect: false },
        ],
        'External page components receive entity information through options.entityId and can subscribe to entity events.',
        'comp-ch-dev-components',
        'topic-ch-dev-js-integration'
    ),
];

// CDP Quiz Questions - Based on real exam topics
const cdpQuestions: Question[] = [
    createQuestion(
        'cdp-q1',
        'Which cookie is used by Sitecore CDP to store browser identification?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'session_id', isCorrect: false },
            { text: 'bid_{clientKey}', isCorrect: true },
            { text: 'cdp_guest', isCorrect: false },
            { text: 'sitecore_visitor', isCorrect: false },
        ],
        'The bid_{clientKey} cookie stores the browser ID for visitor identification in Sitecore CDP.',
        'comp-cdp-stream',
        'topic-cdp-sessions'
    ),
    createQuestion(
        'cdp-q2',
        'Which cookie is used to determine which A/B test bucket a visitor belongs to?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'boxever_test', isCorrect: false },
            { text: 'bx_bucket_number', isCorrect: true },
            { text: 'test_variant', isCorrect: false },
            { text: 'experiment_id', isCorrect: false },
        ],
        'The bx_bucket_number cookie determines which test bucket a visitor is assigned to for experimentation.',
        'comp-cdp-stream',
        'topic-cdp-sessions'
    ),
    createQuestion(
        'cdp-q3',
        'What event types does the Stream API support?',
        'MULTIPLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'VIEW', isCorrect: true },
            { text: 'IDENTITY', isCorrect: true },
            { text: 'CUSTOM', isCorrect: true },
            { text: 'DELETE', isCorrect: false },
        ],
        'The Stream API supports VIEW, IDENTITY, and CUSTOM event types for tracking user behavior.',
        'comp-cdp-stream',
        'topic-cdp-stream-api'
    ),
    createQuestion(
        'cdp-q4',
        'What file format is recommended for batch data imports in Sitecore CDP?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'CSV', isCorrect: false },
            { text: 'Apache Parquet', isCorrect: true },
            { text: 'XML', isCorrect: false },
            { text: 'Excel XLSX', isCorrect: false },
        ],
        'Apache Parquet is the recommended format for efficient batch data imports in CDP.',
        'comp-cdp-batch',
        'topic-cdp-batch-import'
    ),
    createQuestion(
        'cdp-q5',
        'How can you retrieve guest data using the CDP API?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Using the Stream API with a GET request', isCorrect: false },
            { text: 'Using a custom provider call or the Interactive API', isCorrect: true },
            { text: 'Guest data cannot be retrieved via API', isCorrect: false },
            { text: 'Only through the CDP dashboard', isCorrect: false },
        ],
        'Guest data can be retrieved using custom provider calls or the Interactive API in CDP.',
        'comp-cdp-profiles',
        'topic-cdp-guest-api'
    ),
    createQuestion(
        'cdp-q6',
        'How many questions are on the Sitecore CDP certification exam?',
        'SINGLE_CHOICE',
        'BEGINNER',
        [
            { text: '50 questions', isCorrect: false },
            { text: '30 questions', isCorrect: true },
            { text: '60 questions', isCorrect: false },
            { text: '25 questions', isCorrect: false },
        ],
        'The CDP exam consists of 30 questions with a 60-minute time limit, requiring 80% to pass.',
        'comp-cdp-architecture'
    ),
    createQuestion(
        'cdp-q7',
        'What is the purpose of identity resolution in Sitecore CDP?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'To verify user passwords', isCorrect: false },
            { text: 'To merge guest profiles from different channels into a unified customer view', isCorrect: true },
            { text: 'To encrypt personally identifiable information', isCorrect: false },
            { text: 'To delete duplicate records', isCorrect: false },
        ],
        'Identity resolution merges guest profiles from different touchpoints into a single unified customer view.',
        'comp-cdp-profiles',
        'topic-cdp-identity'
    ),
    createQuestion(
        'cdp-q8',
        'What SDK is recommended for implementing web tracking in Sitecore CDP?',
        'SINGLE_CHOICE',
        'BEGINNER',
        [
            { text: 'JSS SDK', isCorrect: false },
            { text: 'Engage SDK', isCorrect: true },
            { text: 'Analytics SDK', isCorrect: false },
            { text: 'Boxever SDK', isCorrect: false },
        ],
        'The Sitecore Engage SDK is the recommended SDK for web tracking and event collection in CDP.',
        'comp-cdp-stream',
        'topic-cdp-engage-sdk'
    ),
    createQuestion(
        'cdp-q9',
        'Which competencies are covered in the CDP certification exam?',
        'MULTIPLE_CHOICE',
        'BEGINNER',
        [
            { text: 'Customer Data Platform concepts', isCorrect: true },
            { text: 'Real-Time Behavioral Data Ingestion', isCorrect: true },
            { text: 'Batch Data Ingestion', isCorrect: true },
            { text: 'Content Management', isCorrect: false },
        ],
        'The CDP exam covers Customer Data Platform, Real-Time Data, Interactive API, Batch Ingestion, and Audience Export.',
        'comp-cdp-architecture'
    ),
    createQuestion(
        'cdp-q10',
        'How do you forcibly close a session in Sitecore CDP?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Delete the browser cookies', isCorrect: false },
            { text: 'Send a FORCE_CLOSE event via the Stream API', isCorrect: true },
            { text: 'Call the session.close() method', isCorrect: false },
            { text: 'Sessions cannot be manually closed', isCorrect: false },
        ],
        'A FORCE_CLOSE event can be sent through the Stream API to manually close a session.',
        'comp-cdp-stream',
        'topic-cdp-sessions'
    ),
    createQuestion(
        'cdp-q11',
        'What information should be included in an IDENTITY event?',
        'MULTIPLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Email address or unique identifier', isCorrect: true },
            { text: 'Browser ID', isCorrect: true },
            { text: 'Channel information', isCorrect: true },
            { text: 'Credit card number', isCorrect: false },
        ],
        'IDENTITY events typically include identifiers like email, browser ID, and channel information. Never include sensitive payment data.',
        'comp-cdp-stream',
        'topic-cdp-stream-api'
    ),
    createQuestion(
        'cdp-q12',
        'What is the latest version of the Stream API?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Version 1.0', isCorrect: false },
            { text: 'Version 2.1', isCorrect: true },
            { text: 'Version 3.0', isCorrect: false },
            { text: 'Version 2.0', isCorrect: false },
        ],
        'Stream API version 2.1 is the latest version with enhanced features for data ingestion.',
        'comp-cdp-stream',
        'topic-cdp-stream-api'
    ),
];

// Personalize Quiz Questions - Based on real exam topics
const personalizeQuestions: Question[] = [
    createQuestion(
        'pers-q1',
        'What types of experiences can be created in Sitecore Personalize?',
        'MULTIPLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Web Experiences', isCorrect: true },
            { text: 'Full Stack Interactive Experiences', isCorrect: true },
            { text: 'Triggered Experiences', isCorrect: true },
            { text: 'Database Experiences', isCorrect: false },
        ],
        'Sitecore Personalize supports Web, Full Stack Interactive, and Triggered Experiences.',
        'comp-pers-experiences',
        'topic-pers-web-exp'
    ),
    createQuestion(
        'pers-q2',
        'What percentage of the Personalize exam focuses on Experiences?',
        'SINGLE_CHOICE',
        'BEGINNER',
        [
            { text: '23%', isCorrect: false },
            { text: '43%', isCorrect: true },
            { text: '33%', isCorrect: false },
            { text: '11%', isCorrect: false },
        ],
        'The Experiences competency accounts for 43% of the Sitecore Personalize exam.',
        'comp-pers-experiences'
    ),
    createQuestion(
        'pers-q3',
        'What tool is used to create decision logic in Sitecore Personalize?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'SQL Editor', isCorrect: false },
            { text: 'Decision Canvas', isCorrect: true },
            { text: 'JavaScript Console', isCorrect: false },
            { text: 'Rule Editor', isCorrect: false },
        ],
        'The Decision Canvas provides a drag-and-drop interface for building decision models.',
        'comp-pers-decisioning',
        'topic-pers-decision-models'
    ),
    createQuestion(
        'pers-q4',
        'What is a key consideration when setting up session qualification rules?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Session qualifications only work with web experiences', isCorrect: false },
            { text: 'Session qualification determines when a visitor qualifies for an experience during their session', isCorrect: true },
            { text: 'Session qualifications are optional', isCorrect: false },
            { text: 'Only one qualification rule can be set per experience', isCorrect: false },
        ],
        'Session qualification rules determine the conditions under which a visitor qualifies for an experience during their session.',
        'comp-pers-experiences',
        'topic-pers-variants'
    ),
    createQuestion(
        'pers-q5',
        'Which out-of-the-box web experience templates are available in Sitecore Personalize?',
        'MULTIPLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Pop-up', isCorrect: true },
            { text: 'Banner', isCorrect: true },
            { text: 'Inline content', isCorrect: true },
            { text: 'Email template', isCorrect: false },
        ],
        'Out-of-the-box web experience templates include pop-ups, banners, and inline content. Email templates are for triggered experiences.',
        'comp-pers-experiences',
        'topic-pers-web-exp'
    ),
    createQuestion(
        'pers-q6',
        'How do you test a Triggered Experience in Sitecore Personalize?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Use the built-in testing feature in the UI', isCorrect: false },
            { text: 'Manually trigger the experience in a controlled environment', isCorrect: true },
            { text: 'Triggered experiences cannot be tested', isCorrect: false },
            { text: 'Deploy to production and monitor', isCorrect: false },
        ],
        'Triggered Experiences do not have a built-in testing feature and require manual testing in a controlled environment.',
        'comp-pers-experiences',
        'topic-pers-triggered'
    ),
    createQuestion(
        'pers-q7',
        'What determines statistical significance in an A/B test?',
        'SINGLE_CHOICE',
        'ADVANCED',
        [
            { text: 'The number of page views', isCorrect: false },
            { text: 'Sufficient sample size and confidence level', isCorrect: true },
            { text: 'The duration of the test only', isCorrect: false },
            { text: 'The number of variants', isCorrect: false },
        ],
        'Statistical significance requires adequate sample size and the desired confidence level to draw reliable conclusions.',
        'comp-pers-experiments',
        'topic-pers-stats'
    ),
    createQuestion(
        'pers-q8',
        'What is the difference between A/B testing and multivariate testing?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'A/B tests one variable; multivariate tests combinations of multiple variables', isCorrect: true },
            { text: 'They are identical in function', isCorrect: false },
            { text: 'A/B testing is faster', isCorrect: false },
            { text: 'Multivariate testing only works on mobile', isCorrect: false },
        ],
        'A/B testing compares two versions, while multivariate testing examines combinations of multiple variable changes simultaneously.',
        'comp-pers-experiments',
        'topic-pers-mvt'
    ),
    createQuestion(
        'pers-q9',
        'What feature uses machine learning for automatic optimization in Sitecore Personalize?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Manual Targeting', isCorrect: false },
            { text: 'Auto-Optimization', isCorrect: true },
            { text: 'Static Rules', isCorrect: false },
            { text: 'Decision Tables', isCorrect: false },
        ],
        'Auto-Optimization uses machine learning to automatically allocate traffic to better-performing variants.',
        'comp-pers-decisioning',
        'topic-pers-auto-opt'
    ),
    createQuestion(
        'pers-q10',
        'How do you identify a winning variant in an experiment?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'By the variant with the most impressions', isCorrect: false },
            { text: 'Using the Performance Dashboard to analyze metrics against business goals', isCorrect: true },
            { text: 'The first variant always wins', isCorrect: false },
            { text: 'By random selection', isCorrect: false },
        ],
        'The Performance Dashboard provides analytics to identify winning variants based on defined business goals.',
        'comp-pers-experiments',
        'topic-pers-dashboards'
    ),
    createQuestion(
        'pers-q11',
        'What is the base rate in the context of experiments?',
        'SINGLE_CHOICE',
        'ADVANCED',
        [
            { text: 'The cost of running the experiment', isCorrect: false },
            { text: 'The current conversion rate before the experiment', isCorrect: true },
            { text: 'The minimum sample size', isCorrect: false },
            { text: 'The number of variants', isCorrect: false },
        ],
        'The base rate is the current conversion rate, used as a baseline to measure experiment impact.',
        'comp-pers-experiments',
        'topic-pers-stats'
    ),
    createQuestion(
        'pers-q12',
        'What is the minimum detectable difference (MDD)?',
        'SINGLE_CHOICE',
        'ADVANCED',
        [
            { text: 'The largest expected improvement', isCorrect: false },
            { text: 'The smallest improvement the experiment is designed to detect', isCorrect: true },
            { text: 'The difference between variants', isCorrect: false },
            { text: 'The statistical confidence level', isCorrect: false },
        ],
        'MDD is the smallest effect size the experiment is designed to detect with statistical significance.',
        'comp-pers-experiments',
        'topic-pers-stats'
    ),
];

// OrderCloud Quiz Questions - Based on real exam topics
const orderCloudQuestions: Question[] = [
    createQuestion(
        'oc-q1',
        'What type of architecture does OrderCloud use?',
        'SINGLE_CHOICE',
        'BEGINNER',
        [
            { text: 'Monolithic', isCorrect: false },
            { text: 'API-first, headless', isCorrect: true },
            { text: 'Serverless only', isCorrect: false },
            { text: 'Traditional MVC', isCorrect: false },
        ],
        'OrderCloud is an API-first, headless commerce platform with a RESTful API.',
        'comp-oc-architecture',
        'topic-oc-api-first'
    ),
    createQuestion(
        'oc-q2',
        'What is a marketplace in OrderCloud?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'A public shopping website', isCorrect: false },
            { text: 'A container for organizations and all commerce data', isCorrect: true },
            { text: 'A payment processor', isCorrect: false },
            { text: 'A shipping carrier integration', isCorrect: false },
        ],
        'A marketplace in OrderCloud is a container that holds all organizations, products, and commerce data.',
        'comp-oc-architecture',
        'topic-oc-environments'
    ),
    createQuestion(
        'oc-q3',
        'What are the main organization types in OrderCloud?',
        'MULTIPLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Buyer', isCorrect: true },
            { text: 'Seller', isCorrect: true },
            { text: 'Supplier', isCorrect: true },
            { text: 'Administrator', isCorrect: false },
        ],
        'OrderCloud has three main organization types: Buyer, Seller, and Supplier.',
        'comp-oc-users',
        'topic-oc-organizations'
    ),
    createQuestion(
        'oc-q4',
        'What is used to control API permissions in OrderCloud?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Access Control Lists', isCorrect: false },
            { text: 'Security Profiles', isCorrect: true },
            { text: 'API Keys only', isCorrect: false },
            { text: 'Role-based Policies', isCorrect: false },
        ],
        'Security Profiles control API permissions and define what actions users can perform.',
        'comp-oc-users',
        'topic-oc-security'
    ),
    createQuestion(
        'oc-q5',
        'What are valid order states in OrderCloud?',
        'MULTIPLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Unsubmitted', isCorrect: true },
            { text: 'Open', isCorrect: true },
            { text: 'Completed', isCorrect: true },
            { text: 'Processing', isCorrect: false },
        ],
        'OrderCloud order states include Unsubmitted, Open, Completed, and Canceled (not Processing).',
        'comp-oc-orders',
        'topic-oc-order-flow'
    ),
    createQuestion(
        'oc-q6',
        'How are price schedules used in OrderCloud?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'To schedule when prices change', isCorrect: false },
            { text: 'To define product pricing including quantity breaks and buyer-specific prices', isCorrect: true },
            { text: 'To manage shipping costs', isCorrect: false },
            { text: 'To set tax rates', isCorrect: false },
        ],
        'Price schedules define pricing rules including quantity breaks, min/max quantities, and buyer-specific pricing.',
        'comp-oc-pricing',
        'topic-oc-price-schedules'
    ),
    createQuestion(
        'oc-q7',
        'How are webhooks used in OrderCloud?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'For sending marketing emails', isCorrect: false },
            { text: 'For order events, validation, and external system integration', isCorrect: true },
            { text: 'For database backups', isCorrect: false },
            { text: 'For user authentication only', isCorrect: false },
        ],
        'Webhooks enable integration with external systems, order validation, and event-driven workflows.',
        'comp-oc-integration',
        'topic-oc-webhooks'
    ),
    createQuestion(
        'oc-q8',
        'What is the purpose of product specs in OrderCloud?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'To define product documentation', isCorrect: false },
            { text: 'To create product variants with options like size and color', isCorrect: true },
            { text: 'To set product prices', isCorrect: false },
            { text: 'To manage inventory levels', isCorrect: false },
        ],
        'Product specs define options (like size, color) that generate product variants.',
        'comp-oc-products',
        'topic-oc-variants-specs'
    ),
    createQuestion(
        'oc-q9',
        'How do you assign products to buyers in OrderCloud?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Products are automatically available to all buyers', isCorrect: false },
            { text: 'Through catalog assignments to buyer organizations or user groups', isCorrect: true },
            { text: 'By creating separate products for each buyer', isCorrect: false },
            { text: 'Products cannot be restricted by buyer', isCorrect: false },
        ],
        'Products are made available to buyers through catalog assignments at the organization or user group level.',
        'comp-oc-products',
        'topic-oc-catalogs-categories'
    ),
    createQuestion(
        'oc-q10',
        'What is the OrderCloud Catalyst framework used for?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Front-end development', isCorrect: false },
            { text: 'Building middleware and integration services', isCorrect: true },
            { text: 'Database management', isCorrect: false },
            { text: 'User interface design', isCorrect: false },
        ],
        'Catalyst is a framework for building middleware applications that integrate with OrderCloud.',
        'comp-oc-integration',
        'topic-oc-middleware'
    ),
    createQuestion(
        'oc-q11',
        'What is the passing score for the OrderCloud certification exam?',
        'SINGLE_CHOICE',
        'BEGINNER',
        [
            { text: '70%', isCorrect: false },
            { text: '80%', isCorrect: true },
            { text: '75%', isCorrect: false },
            { text: '85%', isCorrect: false },
        ],
        'The OrderCloud certification requires a minimum passing score of 80%.',
        'comp-oc-architecture'
    ),
    createQuestion(
        'oc-q12',
        'How do promotions work in OrderCloud?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Promotions are applied automatically to all orders', isCorrect: false },
            { text: 'Promotions can be automatic or require a code, with eligibility rules', isCorrect: true },
            { text: 'Promotions only work with specific payment types', isCorrect: false },
            { text: 'Promotions cannot be customized', isCorrect: false },
        ],
        'Promotions can be automatic or code-based, with customizable eligibility rules and stacking behavior.',
        'comp-oc-pricing',
        'topic-oc-promotions'
    ),
];

// System Administrator Quiz Questions - Based on real exam topics
const sitecore10AdminQuestions: Question[] = [
    createQuestion(
        'admin-q1',
        'What is the recommended maximum number of index update strategies per index?',
        'SINGLE_CHOICE',
        'ADVANCED',
        [
            { text: '1', isCorrect: false },
            { text: '3', isCorrect: true },
            { text: '5', isCorrect: false },
            { text: 'Unlimited', isCorrect: false },
        ],
        'It is recommended to have no more than 3 index update strategies per index for optimal performance.',
        'comp-sc10-admin-performance',
        'topic-admin-optimization'
    ),
    createQuestion(
        'admin-q2',
        'What types of publishing are available in Sitecore?',
        'MULTIPLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Full publish', isCorrect: true },
            { text: 'Incremental publish', isCorrect: true },
            { text: 'Smart publish', isCorrect: true },
            { text: 'Instant publish', isCorrect: false },
        ],
        'Sitecore supports Full publish, Incremental publish, and Smart publish modes.',
        'comp-sc10-admin-workflow',
        'topic-admin-publishing'
    ),
    createQuestion(
        'admin-q3',
        'What is the purpose of the Sitecore Support Portal?',
        'SINGLE_CHOICE',
        'BEGINNER',
        [
            { text: 'Content editing', isCorrect: false },
            { text: 'Creating support tickets and accessing hotfixes', isCorrect: true },
            { text: 'User management', isCorrect: false },
            { text: 'Database backup', isCorrect: false },
        ],
        'The Support Portal is used for creating tickets, accessing hotfixes, and finding documentation.',
        'comp-sc10-admin-support',
        'topic-admin-support-portal'
    ),
    createQuestion(
        'admin-q4',
        'What is the Sitecore Installation Framework (SIF) used for?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Content migration', isCorrect: false },
            { text: 'Installing Sitecore and its prerequisites', isCorrect: true },
            { text: 'Performance monitoring', isCorrect: false },
            { text: 'User authentication', isCorrect: false },
        ],
        'SIF is the recommended tool for installing Sitecore 10 and configuring prerequisites.',
        'comp-sc10-admin-install',
        'topic-admin-install'
    ),
    createQuestion(
        'admin-q5',
        'What should an administrator do when a user reports being locked out?',
        'SINGLE_CHOICE',
        'BEGINNER',
        [
            { text: 'Delete and recreate the user account', isCorrect: false },
            { text: 'Unlock the user account in User Manager', isCorrect: true },
            { text: 'Restart the Sitecore server', isCorrect: false },
            { text: 'Clear the database cache', isCorrect: false },
        ],
        'Administrators can unlock user accounts through the User Manager in the Control Panel.',
        'comp-sc10-admin-users',
        'topic-admin-user-mgmt'
    ),
    createQuestion(
        'admin-q6',
        'What topology options are available for Sitecore XP?',
        'MULTIPLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'CM/CD separation', isCorrect: true },
            { text: 'XP vs XM configurations', isCorrect: true },
            { text: 'Single server deployment', isCorrect: true },
            { text: 'Peer-to-peer cluster', isCorrect: false },
        ],
        'Sitecore XP supports various topologies including CM/CD separation, XP/XM configurations, and single server.',
        'comp-sc10-admin-architecture',
        'topic-admin-arch'
    ),
    createQuestion(
        'admin-q7',
        'What is the difference between Smart publish and Incremental publish?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'They are the same', isCorrect: false },
            { text: 'Smart compares versions; Incremental publishes items changed since last publish', isCorrect: true },
            { text: 'Incremental is faster than Smart', isCorrect: false },
            { text: 'Smart only publishes new items', isCorrect: false },
        ],
        'Smart publish compares source and target versions; Incremental publishes items modified since the last publish operation.',
        'comp-sc10-admin-workflow',
        'topic-admin-publishing'
    ),
    createQuestion(
        'admin-q8',
        'Where can administrators rebuild search indexes?',
        'SINGLE_CHOICE',
        'BEGINNER',
        [
            { text: 'Experience Editor', isCorrect: false },
            { text: 'Control Panel - Indexing Manager', isCorrect: true },
            { text: 'Content Editor', isCorrect: false },
            { text: 'Workbox', isCorrect: false },
        ],
        'The Indexing Manager in the Control Panel allows administrators to rebuild search indexes.',
        'comp-sc10-admin-control-panel',
        'topic-admin-indexing'
    ),
    createQuestion(
        'admin-q9',
        'What should be checked before applying a Sitecore update?',
        'MULTIPLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Compatibility matrix with current version', isCorrect: true },
            { text: 'Backup of databases and files', isCorrect: true },
            { text: 'Review of release notes', isCorrect: true },
            { text: 'User login count', isCorrect: false },
        ],
        'Before updates, check compatibility, create backups, and review release notes for breaking changes.',
        'comp-sc10-admin-install',
        'topic-admin-updates'
    ),
    createQuestion(
        'admin-q10',
        'What is the primary tool for monitoring Sitecore health?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Experience Analytics', isCorrect: false },
            { text: 'Sitecore logs and health checks', isCorrect: true },
            { text: 'Content Editor', isCorrect: false },
            { text: 'Workbox', isCorrect: false },
        ],
        'Sitecore logs and built-in health checks are primary tools for monitoring system health.',
        'comp-sc10-admin-performance',
        'topic-admin-monitoring'
    ),
];

// Content Hub Administrator Quiz Questions - Based on real exam topics
const contentHubAdminQuestions: Question[] = [
    createQuestion(
        'ch-admin-q1',
        'What is the relationship between taxonomies and assets in Content Hub?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'One-to-one', isCorrect: false },
            { text: 'One-to-many (one taxonomy item can relate to many assets)', isCorrect: true },
            { text: 'Many-to-one', isCorrect: false },
            { text: 'No relationship', isCorrect: false },
        ],
        'Taxonomies have a hierarchical one-to-many relationship with assets for classification.',
        'comp-ch-admin-schema',
        'topic-ch-admin-taxonomy'
    ),
    createQuestion(
        'ch-admin-q2',
        'What must be established before creating a workflow in Content Hub?',
        'MULTIPLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Taxonomies for workflow states', isCorrect: true },
            { text: 'Schema with state flow enabled', isCorrect: true },
            { text: 'Security policies', isCorrect: false },
            { text: 'External integrations', isCorrect: false },
        ],
        'Workflows require taxonomies for states and a schema configured for state flow.',
        'comp-ch-admin-workflows',
        'topic-ch-admin-workflows'
    ),
    createQuestion(
        'ch-admin-q3',
        'What is the purpose of permission policies in Content Hub?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'To define database access', isCorrect: false },
            { text: 'To control access to assets and features based on user groups', isCorrect: true },
            { text: 'To manage external integrations', isCorrect: false },
            { text: 'To configure portal themes', isCorrect: false },
        ],
        'Permission policies combined with user groups control access to Content Hub assets and features.',
        'comp-ch-admin-security',
        'topic-ch-admin-permissions'
    ),
    createQuestion(
        'ch-admin-q4',
        'What cloud platform does Content Hub run on?',
        'SINGLE_CHOICE',
        'BEGINNER',
        [
            { text: 'AWS', isCorrect: false },
            { text: 'Microsoft Azure', isCorrect: true },
            { text: 'Google Cloud', isCorrect: false },
            { text: 'IBM Cloud', isCorrect: false },
        ],
        'Content Hub is a cloud-native platform that runs on Microsoft Azure.',
        'comp-ch-admin-architecture',
        'topic-ch-admin-overview'
    ),
    createQuestion(
        'ch-admin-q5',
        'What modules are included in Content Hub?',
        'MULTIPLE_CHOICE',
        'BEGINNER',
        [
            { text: 'DAM (Digital Asset Management)', isCorrect: true },
            { text: 'CMP (Content Marketing Platform)', isCorrect: true },
            { text: 'MRM (Marketing Resource Management)', isCorrect: true },
            { text: 'ERP (Enterprise Resource Planning)', isCorrect: false },
        ],
        'Content Hub includes DAM, CMP, MRM, and PCM modules.',
        'comp-ch-admin-architecture',
        'topic-ch-admin-overview'
    ),
    createQuestion(
        'ch-admin-q6',
        'How do you create a unique taxonomy prefix to avoid conflicts?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Use the default prefix', isCorrect: false },
            { text: 'Create a custom prefix (e.g., "MY.") for your taxonomies', isCorrect: true },
            { text: 'Prefixes are assigned automatically', isCorrect: false },
            { text: 'Use GUIDs as prefixes', isCorrect: false },
        ],
        'Creating a custom prefix helps avoid conflicts with existing system taxonomies.',
        'comp-ch-admin-schema',
        'topic-ch-admin-taxonomy'
    ),
    createQuestion(
        'ch-admin-q7',
        'What is the purpose of portals in Content Hub?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'To store files externally', isCorrect: false },
            { text: 'To provide customized user interfaces for different roles', isCorrect: true },
            { text: 'To manage API connections', isCorrect: false },
            { text: 'To configure security policies', isCorrect: false },
        ],
        'Portals provide customized page layouts and interfaces for different user groups.',
        'comp-ch-admin-portal',
        'topic-ch-admin-pages'
    ),
    createQuestion(
        'ch-admin-q8',
        'What determines the order of states in a workflow?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Creation date', isCorrect: false },
            { text: 'Sort order property on taxonomy items', isCorrect: true },
            { text: 'Alphabetical order', isCorrect: false },
            { text: 'Random assignment', isCorrect: false },
        ],
        'The sort order of workflow states is determined by the sort property on taxonomy items.',
        'comp-ch-admin-workflows',
        'topic-ch-admin-workflows'
    ),
    createQuestion(
        'ch-admin-q9',
        'How many questions are on the Content Hub Administrator exam?',
        'SINGLE_CHOICE',
        'BEGINNER',
        [
            { text: '60 questions', isCorrect: false },
            { text: '50 questions', isCorrect: true },
            { text: '40 questions', isCorrect: false },
            { text: '30 questions', isCorrect: false },
        ],
        'The Content Hub Administrator exam has 50 questions with a 100-minute time limit.',
        'comp-ch-admin-architecture'
    ),
    createQuestion(
        'ch-admin-q10',
        'What types of triggers can be configured in Content Hub?',
        'SINGLE_CHOICE',
        'INTERMEDIATE',
        [
            { text: 'Time-based triggers only', isCorrect: false },
            { text: 'Entity event triggers with conditions', isCorrect: true },
            { text: 'Manual triggers only', isCorrect: false },
            { text: 'Email triggers only', isCorrect: false },
        ],
        'Triggers execute actions based on entity events and configurable conditions.',
        'comp-ch-admin-workflows',
        'topic-ch-admin-triggers'
    ),
];

// Create Quiz objects for each certification
export const quizzes: Quiz[] = [
    {
        id: 'quiz-xm-cloud-dev',
        slug: 'xm-cloud-developer-practice',
        title: 'XM Cloud Developer Practice Quiz',
        description: 'Test your knowledge of XM Cloud architecture, deployment, JSS development, Experience Edge GraphQL, and content serialization. Questions based on official exam objectives.',
        quizType: 'PRACTICE',
        difficulty: 'INTERMEDIATE',
        timeLimit: 25,
        passingScore: 80,
        isActive: true,
        certificationId: 'cert-xm-cloud-developer',
        questions: xmCloudQuestions,
    },
    {
        id: 'quiz-sc10-dev',
        slug: 'sitecore-10-developer-practice',
        title: 'Sitecore 10 .NET Developer Practice Quiz',
        description: 'Practice questions covering Sitecore architecture, templates, serialization, MVC renderings, containers, and configuration. Based on real exam topics.',
        quizType: 'PRACTICE',
        difficulty: 'INTERMEDIATE',
        timeLimit: 25,
        passingScore: 80,
        isActive: true,
        certificationId: 'cert-sitecore-10-developer',
        questions: sitecore10DevQuestions,
    },
    {
        id: 'quiz-sc10-admin',
        slug: 'sitecore-10-administrator-practice',
        title: 'Sitecore 10 System Administrator Practice Quiz',
        description: 'Test your skills in Control Panel navigation, publishing strategies, user management, indexing, and performance optimization.',
        quizType: 'PRACTICE',
        difficulty: 'INTERMEDIATE',
        timeLimit: 20,
        passingScore: 80,
        isActive: true,
        certificationId: 'cert-sitecore-10-admin',
        questions: sitecore10AdminQuestions,
    },
    {
        id: 'quiz-ch-dev',
        slug: 'content-hub-developer-practice',
        title: 'Content Hub Developer Practice Quiz',
        description: 'Practice questions on Content Hub scripting with MClient, REST API, triggers, schema design, and external page components.',
        quizType: 'PRACTICE',
        difficulty: 'INTERMEDIATE',
        timeLimit: 20,
        passingScore: 80,
        isActive: true,
        certificationId: 'cert-content-hub-developer',
        questions: contentHubDevQuestions,
    },
    {
        id: 'quiz-ch-admin',
        slug: 'content-hub-administrator-practice',
        title: 'Content Hub Administrator Practice Quiz',
        description: 'Test your knowledge of Content Hub administration including schemas, taxonomies, workflows, security, and portal configuration.',
        quizType: 'PRACTICE',
        difficulty: 'INTERMEDIATE',
        timeLimit: 20,
        passingScore: 80,
        isActive: true,
        certificationId: 'cert-content-hub-admin',
        questions: contentHubAdminQuestions,
    },
    {
        id: 'quiz-cdp',
        slug: 'sitecore-cdp-practice',
        title: 'Sitecore CDP Practice Quiz',
        description: 'Practice questions covering CDP architecture, Stream API, cookies, identity resolution, batch imports, and guest data management.',
        quizType: 'PRACTICE',
        difficulty: 'INTERMEDIATE',
        timeLimit: 20,
        passingScore: 80,
        isActive: true,
        certificationId: 'cert-cdp',
        questions: cdpQuestions,
    },
    {
        id: 'quiz-personalize',
        slug: 'sitecore-personalize-practice',
        title: 'Sitecore Personalize Practice Quiz',
        description: 'Test your knowledge of experiences, experiments, A/B testing, decisioning, and the Engage SDK in Sitecore Personalize.',
        quizType: 'PRACTICE',
        difficulty: 'INTERMEDIATE',
        timeLimit: 20,
        passingScore: 80,
        isActive: true,
        certificationId: 'cert-personalize',
        questions: personalizeQuestions,
    },
    {
        id: 'quiz-ordercloud',
        slug: 'ordercloud-practice',
        title: 'OrderCloud Practice Quiz',
        description: 'Practice questions on OrderCloud architecture, user management, product catalogs, pricing, promotions, and order management.',
        quizType: 'PRACTICE',
        difficulty: 'INTERMEDIATE',
        timeLimit: 20,
        passingScore: 80,
        isActive: true,
        certificationId: 'cert-ordercloud',
        questions: orderCloudQuestions,
    },
];

export function getQuizByCertificationId(certificationId: string): Quiz | undefined {
    return quizzes.find((quiz) => quiz.certificationId === certificationId);
}

export function getQuizBySlug(slug: string): Quiz | undefined {
    return quizzes.find((quiz) => quiz.slug === slug);
}

export function getActiveQuizzes(): Quiz[] {
    return quizzes.filter((quiz) => quiz.isActive);
}
