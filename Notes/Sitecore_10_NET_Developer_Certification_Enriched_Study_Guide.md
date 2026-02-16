# Sitecore 10 .NET Developer Certification - Enriched Study Guide

---

## Table of Contents

1. [Sitecore Platform Architecture](#sitecore-platform-architecture)
2. [Sitecore Data Structure & Items](#sitecore-data-structure--items)
3. [Templates & Standard Values](#templates--standard-values)
4. [Layouts & Renderings](#layouts--renderings)
5. [Placeholders & Dynamic Placeholders](#placeholders--dynamic-placeholders)
6. [Datasources](#datasources)
7. [Publishing & Databases](#publishing--databases)
8. [Versioning](#versioning)
9. [Security & User Management](#security--user-management)
10. [Workflows](#workflows)
11. [Indexing & Search](#indexing--search)
12. [Content Serialization](#content-serialization)
13. [Configuration & Patch Files](#configuration--patch-files)
14. [Docker & Containers](#docker--containers)
15. [ASP.NET Core Headless Development](#aspnet-core-headless-development)
16. [HTML Caching](#html-caching)
17. [Media Library](#media-library)
18. [Exam Tips & Common Questions](#exam-tips--common-questions)

---

## Sitecore Platform Architecture

### Core Products

The Sitecore Experience Platform consists of three main products:

| Product | Purpose | Key Features |
|---------|---------|--------------|
| **Experience Manager (XM)** | Content management and publishing | Web Content Management (WCM), content creation, personalization, publishing |
| **Experience Platform (XP)** | XM + Marketing capabilities | xConnect, xDB, customer intelligence, marketing automation |
| **Experience Commerce (XC)** | E-commerce solution | Built on XP, integrates content management with commerce functionality |

### xConnect and xDB

- **xConnect**: Service layer between xDB and trusted clients/devices/interfaces that collect and search experience data over HTTPS
- **xDB**: Collection of servers and storage roles that store and process experience data
- External clients must use xConnect to read/write xDB data (CM server cannot access xDB directly)

### Server Roles

| Role | Abbreviation | Purpose |
|------|--------------|---------|
| Content Management | CM | Content editing by authors, reads/writes to Master database |
| Content Delivery | CD | Hosts public websites, reads from Web database |
| Publishing Instance | PI | Handles publishing operations |

### Database Architecture

| Database | Purpose | Access |
|----------|---------|--------|
| **Master** | Stores all versions (published/draft), used by CM | CM reads/writes, CD has no access |
| **Web** | Contains latest publishable version only | CD reads, visitors see content from here |
| **Core** | Configuration database, UI settings, editor configurations | System configuration |

**Key Points:**
- Master database is typically larger than Web (contains all versions)
- Web database contains only the clean, final, approved version
- Developer artifacts (layouts, templates, renderings) must be published to be "live"

---

## Sitecore Data Structure & Items

### Fundamental Terminology

#### Item
- Basic unit of content and organization in Sitecore
- Anything created in the content tree is an item
- Each item has a unique Name and ID
- All items are created from a template
- Items are the building blocks for both content and developer artifacts

#### Content Tree
- Hierarchical organizational system for items
- Each item has one parent and zero or more children
- Enables logical organization of content and developer items

#### Template
- Data structures used to create items
- Defines field sections and fields with specific data types
- Can set defaults for field values, layout, and allowed child item types
- Supports multiple inheritance (templates can inherit from multiple templates)

#### Item Buckets
- Containers for organizing large numbers of items
- "Bucketable" items can be placed within item buckets
- Useful for managing site content as item count increases
- Hides items in the tree but allows easy retrieval via search

### Item Structure Comparison to OOP

| Sitecore Concept | OOP Equivalent |
|-----------------|----------------|
| Template | Class |
| Standard Values | Constructor |
| Fields | Properties/Fields |
| Field Type | Data Type |
| Content Item | Object/Instance |

---

## Templates & Standard Values

### Template Types

#### Page Templates
- Have a layout associated with them
- Define the structure of entire pages (layout + fields)
- Often inherit from multiple data source templates (not include own fields)
- Should be created for each unique page type (Home, Contact, etc.)

#### Data Source Templates
- No layout associated
- Define data structure of a single content unit
- Used by page templates through inheritance
- Each represents a portion of the whole page data structure

#### Base Templates
- Similar to abstract/base classes in OOP
- Provide common fields across multiple templates
- Should not be used to create items directly
- Other templates inherit from them

#### Parameter Templates
- Fields control presentation, not content
- Example: Changing whitespace, background colors
- Used for component styling options

#### Command Templates
- Enable code execution before item creation
- Can invoke wizards to collect information
- Programmatically create sets of items

### Template Field Types

#### Versioned Fields (Default)
- Separate values for each language version
- Separate values for each numbered version within a language
- Do not check 'Shared' or 'Unversioned' checkboxes

#### Shared Fields
- Same value across all languages and versions
- Check 'Shared' checkbox when creating
- Use for data that shouldn't be versioned (e.g., profile image)

#### Unversioned Fields
- Same value across all numbered versions within a language
- Different values possible for different languages
- Check 'Unversioned' checkbox when creating
- Use for data that should have language variations but not version history

### Standard Values

Standard values act as constructors for templates, providing:

1. **Initial field values** - Populated when item is created
2. **Default presentation details** - Layout, renderings, placeholder settings
3. **Insert options** - What child items can be created

**Best Practice:** Set presentation details on standard values before creating content items.

### Tokens

Tokens are variables resolved at item creation time. Built-in tokens:

| Token | Resolves To |
|-------|-------------|
| `$name` | Item name |
| `$id` | Item ID |
| `$parentid` | Parent item ID |
| `$parentname` | Parent item name |
| `$date` | System date (yyyyMMdd) |
| `$time` | System time (HHmmss) |
| `$now` | Date and time (yyyyMMddTHHmmss) |

**Usage Example:** Set `$name` as standard value for a Title field to automatically populate with item name.

### Insert Options

- Restrict what item types can be added as children
- Set on standard values of templates
- Enforces content topology
- "Insert from template" option only visible to admin users
- Without insert options set, authors cannot create child items

### Field Sources

Field sources define content location for selection-type fields:

- **Image/File fields:** Defines browsing location in Media Library
- **Rich Text fields:** Configures toolbar buttons
- **Selection fields:** Defines root item for options list

---

## Layouts & Renderings

### Layouts

Layouts are the scaffolding for web pages:

- Define the page shell with `<head>` and `<body>` tags
- Include styling and JavaScript references
- Contain placeholders for renderings
- Cannot execute business logic (that's for renderings)
- Implementations: Razor .cshtml files

**Key Methods:**
```csharp
@Html.Sitecore().Field("title")      // Renders a field
@Html.Sitecore().Placeholder("main") // Defines a placeholder
```

### Shared vs Final Layouts

| Layout Type | Purpose |
|-------------|---------|
| **Shared Layout** | Used by all versions of an item |
| **Final Layout** | Combines shared layout with version-specific details |

**Use Cases for Final Layouts:**
- Different layouts for different languages
- Temporary campaign layouts (revert to shared afterward)
- Time-limited page modifications

### Rendering Types

#### View Rendering
- Simplest type - just a Razor view with fields
- Uses default `RenderingModel`
- Client-side logic only
- Good for simple, static content display

#### Controller Rendering
- Server-side rendering with controller action
- Can use custom models
- Supports business logic (API calls, external data)
- Used for complex, dynamic components

### Rendering Binding Methods

| Binding Type | Description | Use Case |
|--------------|-------------|----------|
| **Static** | Fixed position in layout | Header, Footer (never moves) |
| **Dynamic** | Via placeholder | Main content (flexible placement) |

**Best Practice:** Set renderings on template standard values, not directly on items.

### Composite Renderings

Renderings can contain other renderings, creating nested structures:
- Parent rendering exposes its own placeholders
- Enables modular, reusable component architecture

---

## Placeholders & Dynamic Placeholders

### Standard Placeholders

Placeholders identify positions in markup for renderings:

- Identified by unique placeholder key (e.g., "main")
- Allow authors to dynamically add components
- Require Placeholder Settings for Experience Editor functionality
- Must be unique within a page (same key = duplicated content)

### Placeholder Settings

Placeholder Settings control what can be added:

- Define allowed renderings for a placeholder
- Enable Experience Editor functionality
- Without settings, authors cannot add/remove renderings
- Configured in the content tree

**If rendering not appearing in placeholder selection:**
- Check if rendering is registered in Allowed Controls
- Verify placeholder settings exist

**If placeholder not available in Experience Editor:**
- Check presentation details are configured

### Dynamic Placeholders

Dynamic placeholders solve the duplicate key problem:

**Problem:** Multiple instances of same placeholder key duplicate content

**Solution:** Dynamic placeholders generate unique keys:
```
col-center_{GUID}_0
col-center_{GUID}_1
col-center_{GUID}_2
```

**Syntax:**
```csharp
@Html.Sitecore().DynamicPlaceholder("placeholder-key")
```

**Key Points:**
- Use when same placeholder may appear multiple times
- Sitecore automatically appends unique identifiers
- Essential for repeating components (carousels, accordions)

---

## Datasources

### Field Datasources

Field datasources define selection options:

- Part of template definition
- Content authors cannot modify
- Points to items in content tree
- Used by selection-type fields (dropdowns, lists)

**Example:** A "Fruits" dropdown field with datasource pointing to `/sitecore/content/fruits`

### Rendering Datasources

Rendering datasources enable component reuse:

| Property | Purpose |
|----------|---------|
| **Datasource Location** | Where authors can select datasource from |
| **Datasource Template** | Restricts item types that can be selected |
| **Datasource** | The selected datasource item |

**Fallback Mechanism:**
1. Item's rendering datasource
2. Template standard values datasource
3. Rendering definition datasource
4. Blank display

**Best Practice:** Set datasource location and template to restrict author choices to valid options.

### Compatible Renderings

When changing one rendering to another:
- Compatible renderings preserve the datasource
- Enables component swapping without data loss
- Configure in rendering definition

---

## Publishing & Databases

### Publishing Types

| Type | Description | Speed | Use Case |
|------|-------------|-------|----------|
| **Republish** | Publishes all items regardless of changes | Slowest | Initial site publish |
| **Smart Publish** | Compares revision numbers, publishes changed items only | Faster | Regular publishing |
| **Incremental Publish** | Publishes items in publishing queue | Fastest | Continuous content updates |

### Publishing Sources

- **Publish from:** Master database
- **Publish to:** Web database (or custom publishing targets)
- Can publish single item from Content Editor or Experience Editor
- Publishing clears HTML cache by default (configurable)

### Publishing Targets

- Default target is Web database
- Custom publishing targets can be configured
- Each target is an independent content tree

---

## Versioning

### Version Types

| Type | Description |
|------|-------------|
| **Language Versions** | Same item in different languages |
| **Numbered Versions** | Different versions within same language |

### Version Management

- Unlimited versions per item
- Can rollback to any previous version
- Publish specific version to make it live
- Versioned fields support separate values per version

---

## Security & User Management

### Security Accounts

#### Roles
- Group users into structured units (managers, authors, etc.)
- Assign access rights to groups instead of individuals
- Support inheritance (roles can contain other roles)
- Manage in Role Manager

#### Users
- Individual accounts with name, domain, email, password
- Can belong to multiple roles
- Can have direct access rights assigned
- Manage in User Manager

### Security Domains

Domains are collections of security accounts with common rules:

| Domain | Purpose |
|--------|---------|
| **Extranet** | Website visitors, read-only rights, public site access |
| **Sitecore** | Internal users, client tool access, content editing |
| **Default** | Virtual domain in memory, typically maps to Extranet |

**Default Users/Roles per Domain:**
- Anonymous user
- Everyone role (includes all users and anonymous)

### Access Right Inheritance

**Default Behavior:**
- Items inherit rights from ancestors
- Descendants automatically inherit settings
- Reduces configuration overhead

**Overriding Inheritance:**
- Deny inheritance to block ancestor settings
- Item-level settings override template standard values
- Best practice: Assign rights on as few items as possible

### Security Tools

| Tool | Purpose |
|------|---------|
| **User Manager** | Create/manage users, change passwords, lock/unlock |
| **Role Manager** | Create/manage roles, assign members |
| **Security Editor** | Assign access rights to items |
| **Access Viewer** | Overview of access rights per item |
| **Domain Manager** | Create/manage domains |
| **Content Editor Security Tab** | Item-level security management |

### Unlocking Users

**Path:** Launchpad → User Manager → Select User → Unlock

---

## Workflows

### Workflow Components

| Component | Description |
|-----------|-------------|
| **States** | Stages an item moves through (Draft, Awaiting Approval, Approved) |
| **Commands** | Actions that move items between states |
| **Actions** | Code executed when entering state or executing command |

### Workflow Requirements

- Minimum: Initial and Final states
- Only items in Final state can be published
- Workflows defined under `/sitecore/System/Workflows`

### Workbox

The Workbox tool displays:
- Items in workflow
- Current workflow state
- Editing history
- Number of items per state
- Available commands per state

**Actions in Workbox:**
- Preview items
- Open items
- Compare versions
- RSS feed for state changes

### Workflow State Management

Can change workflow state from:
- Workbox
- Experience Editor
- Content Editor

---

## Indexing & Search

### Default Indexes

| Index | Purpose |
|-------|---------|
| **Master** | Indexes master database items |
| **Web** | Indexes web database items |
| **Core** | Indexes core database items |

### Custom Indexes

Create custom indexes when:
- Isolating part of content tree
- Bringing external data into Sitecore
- Sharding for large content
- Defining custom start paths

### Index Management

- Add index to Solr: Create folder with `core.properties`
- View/rebuild in Sitecore Indexing Manager
- Query using `ContentSearch` API from code

### Search Results Pages

Build search pages with controller renderings:
1. Read datasource item ID
2. Retrieve datasource
3. Create query using `ContentSearch` API
4. Display results

---

## Content Serialization

### Purpose

Serialization allows developers to:
- Move content changes between environments
- Store items in source control
- Deploy template/rendering changes
- Share developer artifacts

### Tools

| Tool | Type |
|------|------|
| **Sitecore CLI** | Command-line interface |
| **Sitecore for Visual Studio** | GUI plugin |

Both tools have identical functionality - choose based on preference.

### Serialization Structure

#### Sitecore.json

Configuration file for:
- Global development plugins
- Module locations
- Serialization behavior

**Important:** If module path not in `sitecore.json`, it won't be serialized.

#### Module.json

Defines what to serialize with includes:

```json
{
  "namespace": "MyModule",
  "items": {
    "includes": [
      {
        "name": "templates",
        "path": "/sitecore/templates/myproject",
        "scope": "ItemAndDescendants",
        "database": "Master",
        "allowedPushOperations": "CreateUpdateAndDelete"
      }
    ]
  }
}
```

### Include Properties

| Property | Required | Values | Default |
|----------|----------|--------|---------|
| `name` | Yes | String | None |
| `path` | Yes | String | None |
| `scope` | No | SingleItem, ItemAndChildren, ItemAndDescendants | ItemAndDescendants |
| `database` | No | Master, Core | Master |
| `allowedPushOperations` | No | CreateOnly, CreateAndUpdate, CreateUpdateAndDelete | CreateUpdateAndDelete |

### Scope Values

| Scope | Description |
|-------|-------------|
| **SingleItem** | Only the specified item |
| **ItemAndChildren** | Item and direct children |
| **ItemAndDescendants** | Item and all descendants |
| **Ignored** | Excludes item from serialization |

### Serialization Operations

- **Pull:** Items from Sitecore to disk
- **Push:** Items from disk to Sitecore
- Include in source control after pulling

---

## Configuration & Patch Files

### Sitecore.config

Central configuration file containing:
- Project name and path
- Caching settings
- Site definitions
- All Sitecore settings

**Best Practice:** Never modify directly - use patch files instead.

### Patch Files

Patch files customize `Sitecore.config`:

- Add or change configuration settings
- Sitecore merges patches at runtime
- Changes isolated from core installation
- Easier upgrades

### Patch Load Order

Controlled in `/App_config/layers.config`:

```xml
<loadOrder>
  <add path="FolderA" type="Folder" />
  <add path="FolderB/custom.config" type="File" />
  <add path="FolderC" type="Folder" />
</loadOrder>
```

**Loading Sequence:**
1. Files/folders specified in `<loadOrder>` (in order listed)
2. Unspecified files/folders (alphabetical)
3. Root files before subfolder files

### Patch Attributes

Register namespaces:
```xml
<configuration xmlns:patch="http://www.sitecore.net/xmlconfig/"
                xmlns:set="http://www.sitecore.net/xmlconfig/set/">
```

| Attribute | Purpose |
|-----------|---------|
| `patch:before` | Insert before specified element |
| `patch:after` | Insert after specified element |
| `patch:attribute` | Define/replace attribute |
| `patch:delete` | Remove element |
| `patch:instead` | Replace element |

### Patch Example

Add site before existing "website":

```xml
<configuration xmlns:patch="http://www.sitecore.net/xmlconfig/">
  <sitecore>
    <sites>
      <site patch:before="*[@name='website']" 
            name="mysite" 
            rootPath="/sitecore/content/mysite" />
    </sites>
  </sitecore>
</configuration>
```

---

## Docker & Containers

### System Prerequisites

#### Software
- Windows 10 Pro/Enterprise version 1809+ (1909+ for process isolation)
- Hyper-V
- Docker Desktop for Windows
- Docker Compose
- Visual Studio

#### Hardware
- 64-bit processor with SLAT
- 4GB RAM minimum (32GB recommended)
- Virtualization enabled in BIOS
- Quad-core CPU or higher
- 25GB+ SSD storage

### Docker Files

| File | Purpose |
|------|---------|
| `docker-compose.yaml` | Service definitions |
| `.env` | Environment variables |

### License Handling

Two methods:

1. **Compress (Default):**
   - Use `ConvertTo-CompressedBase64String` cmdlet
   - Store in `SITECORE_LICENSE` environment variable

2. **Mount:**
   - Use when compression fails
   - Set `HOST_LICENSE_FOLDER` environment variable
   - Configure `SITECORE_LICENSE_LOCATION` for volume path

### Sitecore Container Registry

- Sitecore 10+ provides images for dev and production
- Images available for all topologies

### Debugging

Attach to `w3wp.exe` process from Visual Studio for container debugging.

---

## ASP.NET Core Headless Development

### Architecture

Traditional CMS: Backend and frontend tightly coupled in single application

Headless Architecture:
- **Frontend:** Rendering Host (ASP.NET Core app)
- **Backend:** Sitecore Content Delivery
- **Bridge:** Layout Service (returns JSON)

### Layout Service

- Powers Sitecore JSS and ASP.NET Core
- Returns page data as JSON object
- Runs on Content Delivery server
- No HTML/markup in response

### Rendering Host Benefits

1. **Fast Iterations:** No Sitecore restart for preview
2. **Visual Studio Debugging:** Run with F5, full debugging support
3. **Seamless Integration:** Works with existing architecture

### View Types

| Type | Description | Files Required |
|------|-------------|----------------|
| **Model-Bound View** | Default binding to provided type | View + Model |
| **Custom View Component** | Complex reusable logic | View + Model + Component Class |
| **Partial View** | Renders within another view | View only |

### Configuration Requirements

#### Site Definition

Configure in patch file:
- `rootPath` for site content location
- `hostName`/`targetHostName` for external-facing URL

#### Experience Editor Support

Required settings:
- `EnableExperienceEditor = true` in appsettings
- Use JSON Renderings (not View/Controller)
- Use Dynamic Placeholders

### Startup.cs Functions

- Register Layout Service Client
- Register Rendering Engine services
- Map component names to implementations
- Enable Experience Editor support
- Configure routing and static files

---

## HTML Caching

### Benefits

- ~50% performance improvement with heavy caching
- Reduces database calls
- Improves page load times

### Caching Considerations

**Good Candidates:**
- Static content (articles, headers)
- Navigation bars
- Non-personalized content

**Poor Candidates:**
- User-specific data
- Sensitive information
- Personalized content

### Configuration

Enable in patch file:
```xml
<site name="mysite" cacheHtml="true" htmlCacheSize="50MB" />
```

| Property | Purpose |
|----------|---------|
| `cacheHtml` | Enable HTML caching |
| `htmlCacheSize` | Cache size (default 25MB) |
| `preventHtmlCacheClear` | Prevent cache clear on publish |

### Cache Clearing

- Default: Cache cleared on every publish
- Can disable with `preventHtmlCacheClear`
- Clear on publish event handler: `publish:end`

---

## Media Library

### Purpose

Central storage for all media assets:
- Images
- Documents
- Videos
- Audio files

### Features

- Folder organization (like content tree)
- Search functionality
- Drag & Drop upload
- Versionable media items
- Browse upload

---

## Exam Tips & Common Questions

### Certification Exam Breakdown

| Topic | Questions |
|-------|-----------|
| Components, Controls & Renderings | 13 |
| Item Management | 10 |
| Security & User Management | 8 |
| Sitecore Structure & Platform | 6 |
| Layout & Placeholders | 5 |
| Sitecore Content Serialization | 5 |
| Containers | 3 |

### Key Exam Points

#### Multisite Implementation
- Create folder for each site
- Each site folder has own Home item
- Store shared content outside site folders
- Use global components folder for shared components

#### Static vs Dynamic Binding
- Static binding: Authors cannot select in Experience Editor
- Dynamic binding: Flexible but requires placeholder settings

#### Publishing
- Synchronizing Master with publishing targets
- Single item publish from Content Editor or Experience Editor

#### Serialization
- `sitecore.json`: Global config, plugins, module locations
- Module path not found = ignored (not serialized)
- Default scope: ItemAndDescendants

#### Hostname Configuration
- Must add to Windows hosts file for browser access
- Without it: Cannot access via IP in browser

#### Insert Options
- Set on standard values for template
- Can add additional options at specific item level
- Controls child item creation

#### Placeholder Issues
- Rendering not in selection: Not in Allowed Controls
- Placeholder not in Experience Editor: Missing presentation details

#### Workflow State Changes
- Available in Workbox, Experience Editor, Content Editor
- Only Final state items can be published

#### Docker License Issues
- If compression fails: Mount license file as Docker volume
- Path: `C:\inetpub\wwwroot\app_data\license.xml`

#### MVC Files Outside Webroot
- Use Visual Studio Publish (not Sitecore Rocks)

#### .NET Core Templates
- Support development scenarios only

#### Debugging Docker
- Attach to `w3wp.exe` process

#### Compatible Renderings
- Change rendering while preserving datasource

#### Current Request in MVC
- `Sitecore.Context.HttpContext.Request`

#### Complex Fields in Experience Editor
- Wrap with `BeginField` and `EndField`

#### Field Editability
- **Editable:** Single-Line Text, Multi-Line Text, Date, Number, Image, Rich Text, General Link
- **Not Inline Editable:** Checkbox, Multilist, Droplist, Treelist

#### Make Field Editable/Non-Editable
- .NET Core: `editable: true/false`
- MVC: `DisableWebEdit = true/false`

#### Standard Values Fallback
- Can work as default values for fields without explicit values

#### Base Templates with Different Datasources
- Cannot use base template if datasources differ
- Fields with different datasources are unique per template

#### Unlocking Users
- Launchpad → User Manager → Select User → Unlock

#### Role Creation
- User Manager → User → Member Of → Available Roles

#### Web Database Items
- Items created directly in Web will be overwritten by Master during publish

#### Field Rendering Limitations
- `Html.Sitecore().Field()` cannot render complex fields (Checkbox, Treelist)

#### Experience Editor Buttons
- Used when field options unavailable in Experience Editor
- Improves user experience

#### Sharing Content Between Sites
- Store outside individual site content trees

#### Sitecore Support Package
- Used when contacting Sitecore support
- Helps replicate issues without environment access
- Contains log files and system information

#### ASP.NET Core Application Features
- Independent, lightweight, decoupled
- Consumes Layout Service
- Preview code changes without restart

#### HOST_LICENSE_FOLDER Variable
- Used when license compression fails
- `SITECORE_LICENSE` cannot be used
- Mounts license from host machine

---

## Quick Reference Tables

### Template Inheritance
- Default inheritance: Standard Template
- Multiple inheritance supported
- Base templates provide common fields

### Rendering Types Decision Matrix

| Scenario | Rendering Type |
|----------|---------------|
| Simple content display | View Rendering |
| External data/API calls | Controller Rendering |
| Business logic required | Controller Rendering |
| Custom model needed | Controller Rendering |

### Publishing Decision Matrix

| Scenario | Publishing Type |
|----------|----------------|
| First site publish | Republish |
| Regular updates | Smart Publish |
| Continuous updates | Incremental Publish |

### Field Type Selection

| Need | Field Type |
|------|-----------|
| Simple text | Single-Line Text |
| Long text with formatting | Rich Text |
| Image selection | Image |
| Item reference | Droplink, Treelist |
| Multiple references | Multilist |
| Date | Date |
| Number | Number |
| Checkbox | Checkbox |

### Cache Strategy

| Content Type | Cache Recommendation |
|--------------|---------------------|
| Global navigation | Cache (shared) |
| Header/Footer | Cache (shared) |
| Personalized content | No cache |
| User-specific data | No cache |
| Static articles | Cache |

---

## Glossary

| Term | Definition |
|------|------------|
| **CM** | Content Management server for authoring |
| **CD** | Content Delivery server for public site |
| **PI** | Publishing Instance server |
| **Item** | Basic unit of Sitecore content |
| **Template** | Data structure for creating items |
| **Rendering** | Component that renders part of a page |
| **Placeholder** | Position marker for renderings |
| **Layout** | Page shell with placeholders |
| **Datasource** | Content item for a rendering |
| **Standard Values** | Default values for template instances |
| **Workflow** | Process for content approval |
| **Serialization** | Converting items to files for source control |
| **Patch File** | Configuration modification file |
| **xConnect** | Service layer for xDB access |
| **xDB** | Experience data storage and processing |
| **Layout Service** | JSON provider for headless rendering |
| **Rendering Host** | ASP.NET Core app in headless architecture |

---

*This study guide covers the key topics for the Sitecore 10 .NET Developer Certification exam. Focus on understanding the concepts and their practical applications rather than memorizing facts.*
