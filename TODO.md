# Project TODO List

*Last Updated: November 26, 2025*

This document tracks outstanding tasks, content gaps, and planned improvements for the BVI Knowledge Base.

---

## 🔴 High Priority

### Content Completion

- [ ] **Blender Module Content** - Complete documentation for:
  - [ ] `blender/working-with-blender/` - UI, shortcuts, customization guides
  - [ ] `blender/precision-fundamentals/` - All 7 precision technique files
  - [ ] `blender/foundational-polygonal-modeling/` - All 9 modeling operation files

- [ ] **3D Context Finalization**
  - [ ] Review and finalize `4-types-of-modeling.md` (legacy file after split)
  - [ ] Add cross-references between paradigm pages and technique pages
  - [ ] Complete `6-camera-and-perspective.md` content
  - [ ] Finish `7-destructive-vs-non-destructive.md` examples
  - [ ] Complete `8-modeling-phases.md` with practical examples

- [ ] **Use Case: Gori Stalin Square**
  - [ ] Complete Phase 2-5 documentation content
  - [ ] Add screenshots and visual walkthroughs
  - [ ] Include downloadable project files

### Infrastructure

- [ ] **Algolia Search Activation**
  - [ ] Obtain API credentials
  - [ ] Update `docusaurus.config.js` with real values
  - [ ] Test search functionality

- [ ] **Broken Link Audit**
  - [ ] Run `npm run build` and check for broken links
  - [ ] Fix any internal cross-references
  - [ ] Verify all external links are valid

---

## 🟡 Medium Priority

### Data Module

- [ ] **Complete Data Documentation**
  - [ ] `methodology.md` - Full workflow documentation
  - [ ] `analyzing-data.md` - Analysis techniques
  - [ ] `organizing-data.md` - File organization best practices
  - [ ] `collaboration.md` - Team workflow guides

### Tools, Addons & Techniques

- [ ] **Technique Pages Content**
  - [ ] `photogrammetry.md` - Detailed SfM workflow
  - [ ] `camera-matching.md` - fSpy integration guide
  - [ ] `camera-tracking.md` - Motion tracking workflow
  - [ ] `gaussian-splatting.md` - Emerging tech overview
  - [ ] `ai-mesh-generation.md` - Current tools landscape
  - [ ] `boolean-modeling.md` - Hard surface techniques
  - [ ] `procedural-modeling.md` - Geometry nodes basics
  - [ ] `sculpting.md` - Organic forms workflow
  - [ ] `simulation-physics.md` - Cloth/rigid body basics
  - [ ] `terrain-landscape-generation.md` - BlenderGIS integration
  - [ ] `retopology-mesh-optimization.md` - Clean topology guide
  - [ ] `rigging-animation.md` - Timeline reconstruction

- [ ] **Direct Modeling Sub-Pages**
  - [ ] Complete all 10 technique files in `techniques/direct-modeling/`
  - [ ] Add keyboard shortcuts and best practices

- [ ] **Precision Modeling Sub-Pages**
  - [ ] Complete all 8 technique files in `techniques/precision-modeling/`
  - [ ] Include measurement verification workflows

- [ ] **Addon Pages Enhancement**
  - [ ] Add installation instructions to each addon page
  - [ ] Include use case examples
  - [ ] Add version compatibility notes

### The Analyst Track

- [ ] **Complete Lesson Content**
  - [ ] `importing-models.md` - File format handling
  - [ ] `scene-setup.md` - Organization techniques
  - [ ] `camera-and-views.md` - Navigation guide
  - [ ] `measurements.md` - Ruler and MeasureIt usage
  - [ ] `presentations.md` - Export workflows
  - [ ] `crime-scene-reconstruction.md` - Analyst perspective

- [ ] **Create Downloadable Resources**
  - [ ] Analyst's Quick Reference Card (PDF)
  - [ ] Sample 3D models for exercises
  - [ ] Keyboard shortcut cheat sheet

---

## 🟢 Low Priority / Future Enhancements

### Content Expansion

- [ ] **Case: Basic Model Inspection**
  - [ ] Design beginner-friendly inspection exercise
  - [ ] Create step-by-step tutorial
  - [ ] Include sample files

- [ ] **Additional Use Cases**
  - [ ] Traffic accident reconstruction tutorial
  - [ ] Architectural visualization for legal contexts
  - [ ] Ballistic trajectory visualization
  - [ ] Fire/explosion scene analysis

- [ ] **Video Content**
  - [ ] Create video tutorials for key workflows
  - [ ] Record Blender interface walkthroughs
  - [ ] Produce technique demonstration videos

### Technical Improvements

- [ ] **Interactive Components**
  - [ ] Add more interactive examples throughout docs
  - [ ] Create interactive quiz/self-test components
  - [ ] Add 3D model viewer for case study files

- [ ] **Performance Optimization**
  - [ ] Lazy load Three.js components
  - [ ] Optimize image assets
  - [ ] Add service worker for offline access

- [ ] **Accessibility**
  - [ ] Add alt text to all images
  - [ ] Ensure keyboard navigation works
  - [ ] Test screen reader compatibility

### Community & Documentation

- [ ] **Contributing Guide**
  - [ ] Create CONTRIBUTING.md
  - [ ] Document code style guidelines
  - [ ] Set up issue templates

- [ ] **Blog Content**
  - [ ] Write introductory blog post
  - [ ] Document case study write-ups
  - [ ] Share technique spotlights

---

## 🔧 Maintenance Tasks

### Regular Updates

- [ ] Review Blender version compatibility (currently targeting 4.x)
- [ ] Update addon version information
- [ ] Refresh external links
- [ ] Update techniques.json and addons.json as needed

### Technical Debt

- [ ] Remove legacy `4-types-of-modeling.md` after confirming migration
- [ ] Clean up `module-3-tools-addons-techniques/techniques/` (empty directory)
- [ ] Remove duplicate/orphaned files in `docs/3D context/` vs `docs/3D/`
- [ ] Standardize frontmatter across all documentation files
- [ ] Review and clean `archive/` directory

---

## 📊 Progress Metrics

| Area | Files | Complete | In Progress | Not Started |
|------|-------|----------|-------------|-------------|
| Introduction | 5 | 5 | 0 | 0 |
| 3D Context | 12 | 8 | 3 | 1 |
| Blender | 21 | 5 | 10 | 6 |
| Data | 4 | 0 | 2 | 2 |
| Techniques | 35+ | 5 | 15 | 15 |
| Addons | 12 | 8 | 4 | 0 |
| Use Cases | 14 | 4 | 6 | 4 |
| **Total** | **100+** | **~35%** | **~40%** | **~25%** |

---

## 📝 Notes

### Directory Structure Observations

The project has evolved with some legacy naming that should be cleaned up:
- `docs/3D context/` (old) vs `docs/3D/` (current) - consolidate
- `docs/module-1-blender/` vs `docs/blender/` - the latter is active
- `docs/module-2-data/` vs `docs/data/` - the latter is active
- `docs/module-3-tools-addons-techniques/techniques/` is empty; content is in `docs/tools-addons-techniques/`

### Content Philosophy Reminders

When completing content, remember:
1. First principles approach - explain "why" before "how"
2. Visual investigation focus - accuracy over aesthetics
3. Include verification steps in tutorials
4. Link to related techniques/addons
5. Add difficulty badges and reading time estimates

---

*This TODO is a living document. Update as tasks are completed or priorities shift.*
