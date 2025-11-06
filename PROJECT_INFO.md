# Project Information

## Project Overview

**Project Name:** Blender for Visual Investigation - Knowledge Base

**Purpose:** A comprehensive knowledge base and documentation site for using Blender in the context of visual investigations, forensics, crime scene reconstruction, and evidence visualization.

**Repository:** https://github.com/blender-visual-investigation/knowledge-base

**Deployment:** https://blender-visual-investigation.github.io/knowledge-base/

---

## Project Context

This knowledge base serves professionals and enthusiasts working in visual investigation fields who use Blender as their primary 3D tool. The content spans from beginner to expert level, covering:

### Core Content Areas

1. **Blender Introduction**
   - Fundamentals of Blender
   - Understanding the 3D world
   - Interface and basic operations
   - Getting started guides

2. **Tools & Add-ons**
   - Essential Blender tools for investigations
   - Recommended add-ons and extensions
   - Third-party plugins
   - Tool configuration and optimization

3. **Techniques**
   - Modeling techniques
   - Texturing and materials
   - Lighting and rendering
   - Animation workflows
   - Forensic-specific methods

4. **Visual Investigation Applications**
   - Crime scene reconstruction
   - Forensic visualization
   - Evidence presentation
   - Photogrammetry workflows
   - Geospatial data visualization
   - Incident reconstruction

5. **Use Case Tutorials**
   - Step-by-step tutorials
   - Real-world case studies
   - Complete workflow demonstrations
   - Best practices and standards

6. **News & Developments**
   - Latest Blender releases
   - AI and machine learning integration
   - New tools and techniques
   - Industry updates
   - Community highlights

---

## Technical Stack

- **Platform:** Docusaurus 3.9.2 (Classic Template)
- **Language:** JavaScript
- **Node.js:** Version 20+
- **Deployment:** GitHub Pages via GitHub Actions
- **Search:** Algolia DocSearch (configured, awaiting activation)

---

## Site Configuration

### Branding
- **Site Title:** Blender for Visual Investigation
- **Logo:** BVI_Logo_Small.png
- **Primary Color:** #308ce7
- **Theme:** Light/Dark mode support

### Features
- Hideable sidebar
- Auto-collapse categories
- Custom scroll progress bar
- Last update author/time tracking
- Blog with comprehensive tagging system
- Responsive design
- Video embeds
- Interactive feature cards

---

## Content Organization

### Documentation Structure
```
docs/
├── intro.md (Getting Started)
├── markdown-examples.md (Feature showcase)
├── tutorial-basics/ (Basic tutorials)
├── tutorial-extras/ (Advanced content)
└── template-pages/ (Reusable templates)
    ├── index.md (Card-based template gallery)
    └── page-template.md (Standard template)
```

### Blog Tags (42 tags across 7 categories)

**Blender Basics**
- blender-basics, 3d-fundamentals, getting-started

**Tools & Add-ons**
- tools, addons, plugins

**Techniques**
- techniques, modeling, texturing, lighting, animation, rendering

**Visual Investigation Context**
- forensics, reconstruction, evidence-visualization, photogrammetry, geospatial

**Tutorials & Use Cases**
- tutorials, case-study, workflow, best-practices

**News & Updates**
- ai, machine-learning, news, releases, announcements

**Technology & Integration**
- python, automation, data-import, integration

**Community & Resources**
- resources, community, tips

---

## Target Audience

- **Primary:** Forensic investigators, law enforcement, legal professionals
- **Secondary:** Accident reconstructionists, insurance investigators
- **Tertiary:** 3D artists interested in forensic visualization
- **All Levels:** Content ranges from beginner to expert

---

## Content Guidelines

### Documentation
- Clear, step-by-step instructions
- Visual aids (screenshots, diagrams, videos)
- Difficulty level indicators (BEGINNER/INTERMEDIATE/ADVANCED/EXPERT)
- Real-world examples and use cases
- Best practices for forensic accuracy

### Blog Posts
- Tag appropriately with relevant tags
- Include author information
- Date all posts
- Focus on actionable information
- Link to related documentation

### Tutorials
- Specific, measurable outcomes
- Required prerequisites listed
- Time estimates provided
- Downloadable sample files when applicable
- Verification steps included

---

## Development Information

**Local Development:**
```bash
npm start  # Development server (running on port 3001)
npm run build  # Production build
```

**Git Configuration:**
- User: blender-visual-investigation
- Email: boudewyn.bvi@protonmail.com

**Deployment:**
- Automatic deployment via GitHub Actions on push to main
- Manual deployment possible via `npm run deploy`

---

## Future Enhancements

- Activate Algolia search (pending API credentials)
- Expand template collection
- Add more case study examples
- Community contribution guidelines
- Video tutorial series
- Interactive 3D examples
- Downloadable resource packs

---

## Notes

- Node.js version must be 20+ for builds
- Search box width: 300px desktop, 200px mobile
- Sidebar auto-collapse enabled for better navigation
- Custom components stored in `src/components/`
- Theme overrides in `src/css/custom.css`

---

**Last Updated:** October 30, 2025
