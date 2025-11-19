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

1. **Modelers Track** (Full Course)
   - Learn to create 3D models from scratch
   - Cover all modules: Introduction → 3D Context → Blender Basics → Data → Techniques → Use Cases
   - Focus on modeling techniques, mesh manipulation, geometry creation
   - Target: Students, professionals building reconstruction skills

2. **Non-Modelers Track** (Practical Workflow)
   - Work with pre-existing 3D models provided by others
   - Streamlined path: Introduction → Basic Blender UI → Working with Models use case
   - Focus on importing, organizing, viewing, measuring, and presenting models
   - Target: Legal professionals, managers, analysts who need to review/present 3D evidence
   - Located in Module 4: Use Cases as a standalone practical course

---

## Content Structure

### Module Organization

#### **Introduction** (docs/1. introduction/)
- General Information
- On Blender (capabilities, open-source benefits, forensic applications, versions, shortcuts, add-ons)
- Common Pitfalls (learning philosophy, realistic expectations, conflicting information)
- Structure
- Support

#### **3D Context** (docs/3D context/)
- The Mathematical Context (interactive 1D, 2D, 3D coordinate visualizations)
- The Computer Graphics Context
- What is a 3D Model
- Types of Modeling
- File Types

#### **Module 1: Blender** (docs/module-1-blender/)
- **1.2 Introduction to Blender**
  - Getting started with the software
- **1.3 Working in Blender**
  - UI customization
  - First steps
  - Customize settings
  - Add-ons

#### **Module 2: Handling Data** (docs/module-2-data/)
- Methodology (0)
- Gathering Data (1)
- Organizing Data (2)
- Collaboration (3)

#### **Module 3: Tools, Add-ons & Techniques** (docs/module-3-tools-addons-techniques/)
- **Add-ons:** Index and specific add-on documentation
- **Techniques:** 15 technique documentation files
  - Establishing Scale & Dimension
  - Camera Matching
  - Image-Based Modeling
  - Depth Map Modeling
  - Terrain & Landscape Generation
  - Photogrammetry
  - Gaussian Splatting
  - Modular Modeling
  - Precision Modeling
  - Boolean Modeling
  - Procedural Modeling
  - Retopology & Mesh Optimization
  - AI Mesh Generation
  - Camera Tracking
  - Rigging & Animation
- **Tools:** Tool documentation

#### **Module 4: Use Cases & Tutorials** (docs/module-4-use-cases/)
- **Crime Scene Reconstruction:** Comprehensive workflow guide for forensic reconstruction
- **Working with Models (Non-Modelers Track):** Practical course for users who need to work with existing 3D models without creating them
  - Importing Models: File format handling, troubleshooting imports
  - Scene Setup: Organization, collections, hierarchies
  - Camera & Views: Positioning, orthographic views, screenshots
  - Measurements & Annotations: Using measurement tools, documenting dimensions
  - Presentations: Lighting for clarity, exporting for reports
  - Exercises: Step-by-step practical tasks for each topic

#### **Template Pages** (docs/template-pages/)
- Index (card-based gallery)
- Standard Page Template (with video embed, feature cards, badges, reading time)

#### **Archive** (docs/archive/)
- Legacy content and examples

---

## Technical Stack

### Core Technologies
- **Platform:** Docusaurus 3.9.2 (Classic Preset with v4 future flag)
- **Language:** JavaScript/React 19.0.0
- **Node.js:** Version 20+ (required)
- **3D Visualization:** Three.js v0.181.0
- **Deployment:** GitHub Pages via GitHub Actions
- **Search:** Algolia DocSearch (configured, awaiting activation)

### Custom Components
- **Interactive1D:** 1D coordinate system visualization with Three.js
- **Interactive2D:** 2D plane coordinate system with orbit controls
- **Interactive3D:** Full 3D space visualization with Blender-compatible axis conventions
- **ScrollProgressBar:** Red progress indicator for page scrolling
- **HomepageFeatures:** Feature cards for landing page

### Interactive Features
All interactive components include:
- Real-time Three.js rendering with WebGL
- Color-coded axes (X: red #ef4c3c, Y: green #2ecc71, Z: blue #1e90ff)
- Coordinate labels with live updates
- Helper lines showing geometric relationships
- Optimized rendering (depthTest: false for proper layering)
- Responsive design

---

## Site Configuration

### Branding & Theme
- **Site Title:** Blender for Visual Investigation
- **Tagline:** "Connect the dots"
- **Logo:** BVI_Logo_Small.png
- **Primary Color:** #308ce7
- **Red Accent:** #ef4c3c (used in interactive components, progress bar)
- **Green Accent:** #8DF917 (used in feature cards)
- **Blue Accent:** #1C75BC (used in feature cards)
- **Font:** Overpass (Google Fonts)
- **Icons:** Font Awesome 6.5.1
- **Theme:** Light/Dark mode support with custom dark mode styling

### Navigation
- **Navbar:** 
  - Title and Logo
  - Blog link (positioned right)
  - Search bar (positioned right, 300px desktop, 200px mobile)
- **Footer:**
  - **Learning Assistance:** NotebookLM external link
  - **More Content:** YouTube, Sketchfab
  - **More:** Blog, GitHub
  - Copyright with 50px top margin
  - Dark background (#0d0f13)
- **Sidebar:**
  - Auto-collapsible categories
  - Hideable sidebar
  - CSS divider above Template Pages section

### Features
- Auto-collapse sidebar categories
- Custom scroll progress bar (solid red)
- Last update author/time tracking
- Blog with comprehensive tagging system
- Responsive design
- YouTube video embeds
- Interactive feature cards with Font Awesome icons
- Difficulty badges (BEGINNER/INTERMEDIATE/ADVANCED/EXPERT)
- Reading time indicators

---

## Content Guidelines

### Documentation Philosophy
- **First Principles Approach:** Start with fundamental concepts (geometry, dimensions) before software specifics
- **Visual Learning:** Heavy use of interactive 3D visualizations, diagrams, and videos
- **Practical Application:** Focus on real-world use cases and workflows
- **Accuracy Over Aesthetics:** Emphasis on measurement precision, not visual appeal
- **Experimentation Encouraged:** "It depends" philosophy - multiple approaches are valid

### Page Template Standards
Each documentation page should include:
- Difficulty level badge(s)
- Reading time estimate (top right)
- Video embed (when applicable)
- Three feature cards: Resources, Links, Videos (with Font Awesome icons)
- Clear section headers
- Practical examples and workflows
- Best practices and common pitfalls

### Documentation Best Practices
- Clear, step-by-step instructions
- Visual aids (screenshots, diagrams, videos, interactive 3D)
- Real-world examples and use cases
- Prerequisites listed
- Time estimates provided
- Cross-references to related topics
- Verification steps included

---

## Teaching Philosophy

### Core Principles
1. **Start with "Why":** Understand geometric foundations before using software
2. **First-Principles Thinking:** Build understanding from fundamental concepts
3. **Context Matters:** Different use cases require different approaches ("it depends")
4. **Realistic Expectations:** Learning 3D is a marathon, not a sprint
5. **Avoid Dogma:** Be wary of "always do X, never do Y" advice
6. **Professional Guidance:** Prioritize advice from professional experience

### Learning Path
1. **Phase 1:** Geometry and dimensions (0D → 1D → 2D → 3D → 4D)
2. **Phase 2:** Translation to Blender concepts (vertex, edge, face, mesh)
3. **Phase 3:** Blender interface and workflow (minimal → gradual expansion)
4. **Phase 4:** Small focused project (reinforcing fundamentals)

### Key Messages
- Blender is a Swiss Army Knife (versatile but not the only tool)
- Focus on 15% of Blender's capabilities relevant to investigation work
- No lighting, texturing, compositing, or rendering for this use case
- Version updates may outdated some tutorial content
- Community support available (NotebookLM, forums)

---

## Development Information

### Local Development
```bash
npm start          # Development server (port 3000)
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
│   ├── intro.md            # Welcome/Getting Started page
│   ├── introduction/       # Course introduction
│   ├── 3D context/         # Mathematical foundations
│   ├── module-1-blender/   # Blender basics
│   ├── module-2-data/      # Data handling
│   ├── module-3-tools-addons-techniques/
│   ├── module-4-use-cases/ # Tutorials and case studies
│   ├── template-pages/     # Reusable templates
│   └── archive/            # Legacy content
├── blog/                   # Blog posts with tags
├── src/
│   ├── components/         # React components
│   │   ├── Interactive1D/  # 1D coordinate visualization
│   │   ├── Interactive2D/  # 2D coordinate visualization
│   │   ├── Interactive3D/  # 3D coordinate visualization
│   │   ├── ScrollProgressBar/
│   │   └── HomepageFeatures/
│   ├── css/
│   │   └── custom.css     # Theme overrides
│   ├── pages/             # Standalone pages
│   └── theme/             # Theme customizations
├── static/
│   └── img/               # Images and assets
├── docusaurus.config.js   # Site configuration
├── sidebars.js            # Sidebar structure
└── package.json           # Dependencies
```

---

## Custom Styling

### CSS Customizations (src/css/custom.css)
- Footer copyright: 75% size, 50px top margin
- Footer background: #0d0f13
- Hash link icons: 🔗 emoji instead of #
- Dark mode grid overlay: Desktop only
- Template Pages sidebar divider: 1px border-top with spacing
- Custom color scheme matching interactive components

### Component Styling
- Interactive components use module CSS for scoped styling
- Solid color sliders matching axis colors
- Consistent typography and spacing
- Responsive breakpoints for mobile/tablet/desktop

---

## Future Enhancements

### Immediate Priorities
- Activate Algolia search (pending API credentials)
- Fill in technique documentation content (15 files created as placeholders)
- Add more use case tutorials
- Create video tutorial series
- Downloadable sample files and resource packs

### Long-term Goals
- Community contribution guidelines
- Interactive 3D model viewer for case studies
- Blender add-on development tutorials
- Advanced forensic techniques
- Integration with geospatial tools
- Python automation workflows
- VR/AR visualization tutorials

---

## External Resources

### Learning Assistance
- **NotebookLM:** https://notebooklm.google.com/notebook/fb5da8b0-98c0-4a37-a957-7e45325fe62a
- **Blender Hotkey Sheet:** Blender Artists Community (https://blenderartists.org/t/blender-keyboard-shortcuts-and-mouse-actions/1345338) - Auto-generated PDF for Blender 4.5

### Community
- **YouTube:** @blendervisualinvestigation
- **Sketchfab:** Portfolio and 3D model showcase
- **GitHub:** Open-source repository and issue tracking

---

## Notes

### Technical Requirements
- Node.js version must be 20+ for builds
- Three.js required for interactive components
- Font Awesome for icons
- React 19.0.0 for modern component features

### Known Considerations
- Some tutorial videos may reference older Blender versions
- UI elements may have moved since Blender 2.8+ interface redesign
- Template pages separated with CSS divider for visual organization
- Interactive components optimized for desktop (mobile responsive but best on larger screens)

### Content Status
- ✅ Introduction modules complete
- ✅ 3D Context with interactive visualizations complete
- ✅ Module 1 (Blender) structure established
- ✅ Module 2 (Data) structure established
- ✅ Module 3 technique files created (content in progress)
- ✅ Module 4 initialized with crime scene reconstruction guide
- ✅ Template pages fully functional
- ⏳ Detailed technique documentation in progress
- ⏳ Additional use case tutorials planned
- ⏳ Video content integration ongoing

---

**Last Updated:** November 9, 2025
**Version:** 1.0.0
