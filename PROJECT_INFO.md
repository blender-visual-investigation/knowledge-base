# Project Information

## Project Overview

**Project Name:** Blender for Visual Investigation - Knowledge Base

**Purpose:** A comprehensive educational knowledge base for learning Blender from first principles with a focus on visual investigation, forensics, crime scene reconstruction, and evidence visualization.

**Repository:** https://github.com/blender-visual-investigation/knowledge-base

**Deployment:** https://blender-visual-investigation.github.io/knowledge-base/

---

## Project Context

This knowledge base serves as a complete learning platform for professionals and students who want to use Blender for visual investigation work. The content follows a first-principles teaching philosophy, starting with fundamental geometric concepts before diving into software specifics.

### Target Audience

- **Primary:** Students learning 3D for visual investigation purposes
- **Secondary:** Forensic investigators, law enforcement, legal professionals
- **Tertiary:** Accident reconstructionists, insurance investigators, 3D artists interested in forensic visualization
- **All Levels:** Content ranges from beginner (starting from zero knowledge) to advanced techniques

### Dual Learning Tracks

The knowledge base serves two distinct user groups:

1. **The Creator Track** (Full Modeler Course)
   - Learn to create 3D models from scratch
   - Cover all modules: 3D Context → Blender → Data → Techniques → Use Cases
   - Focus on modeling techniques, mesh manipulation, geometry creation
   - Target: Students, professionals building reconstruction skills

2. **The Analyst Track** (Non-Modelers Practical Course)
   - Work with pre-existing 3D models provided by others
   - Focus: Navigation, verification, measurement, documentation
   - Streamlined path: Forensic 3D Literacy → Working with Models
   - Target: Legal professionals, managers, analysts who need to review/present 3D evidence
   - Located in Use Cases as "The Analyst" standalone practical course

---

## Content Structure (Current State)

### Module Organization

#### **Introduction** (`docs/introduction/`)
- General Information
- On Blender (capabilities, open-source benefits, versions)
- Common Pitfalls (learning philosophy, expectations)
- Structure
- Support

**Status:** ✅ Complete (5 files)

#### **3D Context** (`docs/3D/`)
Core conceptual foundation for understanding 3D space and modeling.

- `index.md` - 3D Overview with phase cards
- `1-the-mathemathical-context.md` - Interactive 1D/2D/3D visualizations
- `2-from-math-to-mesh.md` - Bridging geometry to Blender concepts
- `3-what-is-a-3d-model.md` - Anatomy of meshes
- `4-types-of-modeling.md` - Legacy file (content migrated)
- `4-modeling-paradigms-workflows/` - Modeling Paradigms directory
  - `1-core-paradigms.md` - Polygonal vs NURBS + SubD
  - `2-case-for-polygonal.md` - Why polygonal is baseline
  - `3-modeling-workflows.md` - Workflow cards (10 techniques)
  - `4-managing-complexity.md` - Mixed technique strategies
- `5-file-types.md` - File format guide
- `6-camera-and-perspective.md` - Camera and viewing
- `7-destructive-vs-non-destructive.md` - Modeling strategies
- `8-modeling-phases.md` - Blockout → Refine → Detail

**Status:** ✅ Structure complete, content ~80% written

#### **Blender** (`docs/blender/`)
Software-specific training organized into focused areas.

- `blender-introduction-setup.md` - Getting started
- **Working with Blender** (`working-with-blender/`)
  - UI, First Steps, Customize, Add-ons, Shortcuts (5 files)
- **Precision Fundamentals** (`precision-fundamentals/`)
  - Unit Setup, 3D Cursor, Pivot Points, Snapping, Measurement, Movement/Sizing, Applying Transforms (7 files)
- **Foundational Polygonal Modeling** (`foundational-polygonal-modeling/`)
  - Extrude, Inset, Loop Cut, Edge Slide, Fill/Join, Knife/Bisect, Edge Loops, Bridging, Shrink/Fatten (9 files)

**Status:** ⏳ Structure established, content 40-60% complete

#### **Data** (`docs/data/`)
Data management for investigation workflows.

- Methodology
- Analyzing Data
- Organizing Data
- Collaboration

**Status:** ⏳ Structure established (4 files), content in progress

#### **Tools, Add-ons & Techniques** (`docs/tools-addons-techniques/`)
Reference library with searchable databases.

- **Addons** (`addons/`)
  - `index.mdx` - Addon Database with sortable/filterable table
  - 11 individual addon pages (.mdx format)
  - Categories: Workflow Enhancement, Camera Matching, Geospatial, Measurement, Photogrammetry, Visualization
  
- **Techniques** (`techniques/`)
  - `index.mdx` - Techniques Database with sortable/filterable table
  - 15+ technique categories covering:
    - Data Capture: Photogrammetry, Camera Matching/Tracking, Image-Based, Depth Maps, Gaussian Splatting
    - Modeling: Boolean, Modular, Procedural, SubD, Direct Modeling, Sculpting
    - Precision: Scale/Dimension, Precision Modeling
    - Analysis: Retopology, Rigging/Animation, Simulation/Physics
    - Emerging: AI Mesh Generation
  - **Direct Modeling** sub-directory (10 technique files)
  - **Precision Modeling** sub-directory (8 technique files)
  - **Basics** sub-directory (video-to-still)

- **Tools** (`tools/`)
  - `index.mdx` - Tools Database
  - fSpy, QGIS documentation

**Status:** ⏳ Database infrastructure complete, individual pages 30-50% content

#### **Use Cases & Tutorials** (`docs/use-cases/`)
Real-world application workflows.

- **Case: Gori Stalin Square** (`case-gori-stalin-square/`)
  - 5-phase crime scene reconstruction workflow
  - Index + Phase 1-5 documentation (6 files)
  
- **The Analyst** (`the-analyst/`) - Non-Modelers Track
  - Comprehensive index with curriculum overview
  - Importing Models, Scene Setup, Camera/Views, Measurements, Presentations
  - Crime Scene Reconstruction guide (7 files)
  
- **Case: Basic Model Inspection** (`case-basic-model-inspection/`)
  - Index only (content planned)

**Status:** ⏳ Analyst track ~70% complete, Gori case structure complete, Basic inspection ~10%

#### **Template Pages** (`docs/template-pages/`)
- Page template with video embed, feature cards, badges

**Status:** ✅ Complete

#### **Archive** (`docs/archive/`)
- Legacy content, tutorial basics/extras, examples

**Status:** ✅ Archived (not active development)

---

## Technical Stack

### Core Technologies
- **Platform:** Docusaurus 3.9.2 (Classic Preset with v4 future flag)
- **Language:** JavaScript/React 19.0.0
- **Node.js:** Version 20+ (required)
- **3D Visualization:** Three.js v0.181.0
- **Data Visualization:** D3.js v7.9.0
- **Markdown Processing:** gray-matter v4.0.3
- **Deployment:** GitHub Pages via GitHub Actions
- **Search:** Algolia DocSearch (configured, awaiting activation)

### Custom Components (`src/components/`)

**Interactive 3D Visualizations (7 components):**
- `Interactive1D/` - 1D coordinate line visualization
- `Interactive2D/` - 2D plane with orbit controls
- `Interactive3D/` - Full 3D space with Blender axis conventions
- `InteractiveTransform3D/` - Transform controls (position/rotation/scale)
- `InteractiveCamera/` - Camera and perspective demonstration
- `ModelingComparison3D/` - Modeling approach comparison
- `poly-vs-nurbs-interactive/` - Polygonal vs NURBS comparison

**Data Tables & Databases (3 components):**
- `AddonTable/` - Sortable, filterable addon database with search
- `TechniqueTable/` - Sortable, filterable technique database with search
- `ToolTable/` - Sortable, filterable tool database with search

**UI Components (2 components):**
- `ScrollProgressBar/` - Page reading progress indicator
- `HomepageFeatures/` - Landing page feature cards

### Data Infrastructure (`src/data/`)
- `addons.json` - 11 curated addons with metadata, categories, tags
- `techniques.json` - 15 technique entries with categories/tags
- `tools.json` - External tools database

### Build Scripts (`scripts/`)
- `generate-addon-data.js` - Pre-build script for addon data generation
- Runs automatically via `npm run prebuild`

### Interactive Features
All 3D components include:
- Real-time Three.js rendering with WebGL
- Color-coded axes (X: red, Y: green, Z: blue)
- Coordinate labels with live updates
- Helper lines showing geometric relationships
- Controls positioned right-side of viewport (desktop)
- Responsive design (stacks on mobile)

---

## Site Configuration

### Branding & Theme
- **Site Title:** Blender for Visual Investigation
- **Navbar Title:** BVI: Knowledge Base
- **Tagline:** "Connect the dots"
- **Logo:** BVI_Logo_Small.png
- **Primary Color:** #308ce7
- **Red Accent:** #ef4c3c
- **Green Accent:** #8DF917
- **Blue Accent:** #1C75BC
- **Font:** Overpass (Google Fonts)
- **Icons:** Font Awesome 6.5.1
- **Theme:** Light/Dark mode with custom styling

### Navigation
- **Navbar:** Logo, Title, Blog (right), Search (right)
- **Footer:** Learning Assistance, More Content, More links, Copyright
- **Sidebar:** 
  - Dynamic generation from filesystem
  - Auto-collapsible categories
  - Folder icons for navigation items
  - Visual divider above Template Pages

### Custom CSS Features (`src/css/custom.css`)
- Frosted glass navbar effect
- Dark mode grid overlay background
- Phase cards (`.phase-grid`, `.phase-card`)
- Workflow cards (`.workflow-grid`, `.workflow-card`)
- Sidebar folder icons and active states
- Nested sidebar vertical indicator lines
- TOC "On this page" header
- Footer custom styling (#0d0f13 background)
- 🔗 link icons for heading anchors
- `.viewportWrapper` layout for interactive components
- `.resetButton` styled for theme consistency

---

## Teaching Philosophy

### Core Principles
1. **Start with "Why":** Understand geometric foundations before software
2. **First-Principles Thinking:** Build understanding from fundamental concepts
3. **Context Matters:** Different use cases require different approaches ("it depends")
4. **Realistic Expectations:** Learning 3D is a marathon, not a sprint
5. **Favor Simplicity:** Direct modeling as default, complexity when needed
6. **Two Tracks:** Creators (full course) and Analysts (verification focus)

### Learning Phases
1. **Phase 1:** Geometry and dimensions (0D → 1D → 2D → 3D)
2. **Phase 2:** Translation to Blender concepts (vertex, edge, face, mesh)
3. **Phase 3:** Blender interface and workflow
4. **Phase 4:** Practical application through projects

### Key Messages
- Blender is a Swiss Army Knife (versatile but not the only tool)
- Focus on 15% of Blender's capabilities relevant to investigation work
- Visual investigation prioritizes accuracy over aesthetics
- Community support available (NotebookLM, forums)

---

## Development Information

### Local Development
```bash
npm install        # Install dependencies
npm start          # Development server (runs prebuild + docusaurus start)
npm run build      # Production build
npm run serve      # Serve production build locally
npm run clear      # Clear cache
npm run deploy     # Deploy to GitHub Pages
```

### Git Configuration
- **User:** blender-visual-investigation
- **Email:** boudewyn.bvi@protonmail.com
- **Branch:** main
- **Deployment:** Automatic via GitHub Actions on push to main

### Project Structure
```
bvi_knowledge/
├── docs/                    # Documentation content
│   ├── intro.md            # Welcome page
│   ├── introduction/       # Course introduction (5 files)
│   ├── 3D/                 # 3D context (8 files + subdirectory)
│   ├── blender/            # Blender training (3 subdirectories, 21 files)
│   ├── data/               # Data management (4 files)
│   ├── tools-addons-techniques/  # Reference library
│   │   ├── addons/         # 12 addon pages
│   │   ├── techniques/     # 20+ technique pages + subdirs
│   │   └── tools/          # 3 tool pages
│   ├── use-cases/          # Tutorials & cases (3 subdirectories)
│   ├── template-pages/     # Reusable templates
│   └── archive/            # Legacy content
├── blog/                   # Blog posts
├── src/
│   ├── components/         # 12 React component directories
│   ├── css/custom.css      # Theme overrides (~450 lines)
│   ├── data/               # JSON databases (3 files)
│   ├── pages/              # Standalone pages
│   └── theme/              # Theme customizations
├── scripts/                # Build scripts (generate-addon-data.js)
├── static/img/             # Images and assets
├── docusaurus.config.js    # Site configuration
├── sidebars.js             # Dynamic sidebar generation
└── package.json            # Dependencies
```

---

## Content Status Summary

| Module | Structure | Content | Priority |
|--------|-----------|---------|----------|
| Introduction | ✅ Complete | ✅ Complete | — |
| 3D Context | ✅ Complete | ⏳ 80% | High |
| Blender | ✅ Complete | ⏳ 50% | High |
| Data | ✅ Complete | ⏳ 40% | Medium |
| Tools/Addons/Techniques | ✅ Complete | ⏳ 35% | Medium |
| Use Cases | ✅ Complete | ⏳ 55% | High |
| Interactive Components | ✅ Complete | ✅ Complete | — |
| Database Infrastructure | ✅ Complete | ✅ Complete | — |

---

## External Resources

### Learning Assistance
- **NotebookLM:** https://notebooklm.google.com/notebook/fb5da8b0-98c0-4a37-a957-7e45325fe62a

### Community
- **YouTube:** @blendervisualinvestigation
- **Sketchfab:** Portfolio and 3D model showcase
- **GitHub:** Open-source repository

---

## Notes

### Technical Requirements
- Node.js version must be 20+ for builds
- Three.js and D3.js for interactive components
- Font Awesome 6.5.1 for icons
- React 19.0.0 for modern component features

### Known Considerations
- Some tutorial videos may reference older Blender versions
- UI elements may have moved since Blender 2.8+ interface redesign
- Interactive components optimized for desktop (mobile responsive but best on larger screens)
- Algolia search awaiting API credentials

---

**Last Updated:** November 26, 2025
**Version:** 2.0.0
