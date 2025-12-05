---
sidebar_position: 2
---

# Knowledge Base Structure

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>8 min read</span>
  </div>
</div>

---

## Introduction

Understanding how this knowledge base is organized will help you navigate the content efficiently and find what you need for your investigative work.

---

## Site Structure Overview

```
docs/
├── intro.md                     # Welcome & methodology overview
├── introduction/                # Foundational orientation pages
├── 3D/                          # Mathematical/conceptual foundation
├── blender/                     # Software-specific training
├── data/                        # Evidence management workflows
├── tools-addons-techniques/     # Reference library (databases)
│   ├── addons/                  # Blender add-on catalog
│   ├── techniques/              # Modeling technique library
│   │   ├── precision-modeling/  # Precision technique pages
│   │   ├── direct-modeling/     # Direct modeling pages
│   │   └── [other techniques]
│   └── tools/                   # External tool documentation
└── use-cases/                   # Applied learning
    ├── case-gori-stalin-square/ # Full crime scene case study
    ├── the-analyst/             # Non-modeler track (7 pages)
    └── case-basic-model-inspection/

```

---

## Why It's Structured This Way

### 1. First-Principles Pedagogy (3D Context → Blender → Application)

The structure follows a deliberate **bottom-up learning progression**:

| Module | Purpose | Why First |
|--------|---------|-----------|
| **Introduction** | Set expectations, philosophy | Users need to understand this isn't a typical Blender course |
| **3D Context** | Mathematical foundation | You can't manipulate 3D space if you don't understand coordinates, vectors, transforms |
| **Blender** | Tool proficiency | Software is meaningless without spatial understanding |
| **Data** | Evidence management | Real investigations require organized, verifiable data |
| **Techniques** | Methods library | Reference material for "how to do X" |
| **Use Cases** | Applied synthesis | Everything comes together in real scenarios |

**Why this order?** Most tutorials jump straight into "click here, press that." This approach builds **understanding before action**—so when users encounter a novel problem, they can reason through it rather than searching for a tutorial.

---

### 2. Dual Learning Tracks

The structure supports two distinct user personas:

| Track | Located | Target User |
|-------|---------|-------------|
| **Creator Track** | Full curriculum (3D → Blender → Techniques → Use Cases) | Investigators who need to build 3D models from scratch |
| **Analyst Track** | Journalists, Legal professionals, managers, analysts who only need to *review and verify* 3D evidence |

**Why separate?** A lawyer doesn't need to learn subdivision modeling—they need to know how to measure distances in a 3D scene and verify accuracy. The Analyst track is a focused, practical shortcut.

---

### 3. Three-Pillar Framework (Container → Content → Situatedness)

The methodology is built around a forensic framework:

| Pillar | What It Means | Example |
|--------|---------------|---------|
| **Container** | The environment/location | Reconstructing a city square from satellite imagery |
| **Content** | Objects within the scene | Modeling a specific vehicle or munition |
| **Situatedness** | Relationships and analysis | "Where was the shooter standing given this bullet trajectory?" |

This framework explains why techniques are organized the way they are:
- **Photogrammetry, camera matching, terrain generation** → Building the Container
- **Direct modeling, boolean operations, precision modeling** → Creating Content
- **Measurement, camera tracking, timeline reconstruction** → Establishing Situatedness

---

### 4. Reference Library Architecture (Tools/Addons/Techniques)

The `tools-addons-techniques/` module is structured as a **searchable database** rather than a linear curriculum:

```
tools-addons-techniques/
├── index.mdx          # Filterable, sortable database tables
├── addons/            # Individual add-on documentation
├── techniques/        # Technique documentation
│   ├── precision-modeling/   # Sub-category with 8 pages
│   ├── direct-modeling/      # Sub-category with 10 pages
│   └── [standalone pages]
└── tools/             # External tools (fSpy, QGIS)
```

**Why this structure?**
- **Non-linear access**: Users can jump directly to "how do I do photogrammetry?" without reading prerequisites
- **Categorization**: Techniques are grouped by type (precision, direct, procedural) for easier discovery
- **Database tables**: React components provide search/filter/sort functionality—users can find relevant techniques by use case, difficulty, or category
- **Modularity**: Each technique page is self-contained with its own resources and examples

---

### 5. Case-Based Learning (Use Cases)

The `use-cases/` module provides complete, end-to-end workflows:

| Case | Structure | Purpose |
|------|-----------|---------|
| **Gori Stalin Square** | 5 phases: Data Collection → Scene Setup → Detailed Modeling → Timeline → Presentation | Full crime scene reconstruction demonstrating complete workflow |
| **The Analyst** | 7 focused modules | Practical course for non-modelers |
| **Basic Model Inspection** | (In progress) | Entry-level model review |

**Why case-based?** 
- Real investigations don't follow technique tutorials—they require combining multiple skills
- Cases show **decision-making process** (why choose photogrammetry over manual modeling?)
- Demonstrates the full pipeline from evidence ingestion to court-ready output

---

### 6. Template-Driven Consistency

The `template-pages/` folder provides standardized page structure:
- Difficulty badges (Beginner → Expert)
- Reading time estimates
- Intro video placeholder
- Feature cards (Resources, Links, Videos)
- Consistent sections (Introduction → Main Content → Summary → Key Takeaways)

**Why?** 
- Ensures every page has the same professional structure
- Makes content authoring faster and more consistent
- Improves user experience with predictable navigation

---

## The Design Logic

1. **Start conceptual, end practical**: Users understand *why* before *how*
2. **Support multiple user types**: Creators who build, analysts who verify
3. **Forensic framework**: Container/Content/Situatedness maps directly to investigation workflows
4. **Database over curriculum**: Techniques are reference material, not sequential lessons
5. **Case-based synthesis**: Real scenarios integrate all learned skills
6. **Standardization**: Templates ensure quality and consistency across growing content

This structure reflects the reality of visual investigation work: **it depends**. There's no single workflow, so the knowledge base provides foundations, tools, and examples—letting users construct their own path based on the specific constraints of each case.

---

## Learning Path

The content is organized into progressive modules:

1. **Introduction** - Foundational concepts and setup
2. **3D Context** - Core 3D concepts and mathematical foundations
3. **Blender** - Software-specific training and workflows
4. **Data** - Data management, gathering, and collaboration
5. **Tools, Addons & Techniques** - Reference library for methods and tools
6. **Use Cases** - Applied learning through real-world scenarios

## Content Types

- **Tutorials** - Step-by-step guides for specific techniques
- **Reference** - Documentation for tools and add-ons
- **Examples** - Practical demonstrations and case studies
- **Best Practices** - Recommended workflows and methodologies


## Module 1

### Phase 1: Geometry and the Nature of Dimensions

* Introduce the concept of **geometry** as the mathematical study of space and form.
* Explain **dimensions** step by step:

  * **0D:** A point — no length, width, or height.
  * **1D:** A line formed by connecting points.
  * **2D:** A plane formed by connecting lines.
  * **3D:** A solid formed by extending a plane into depth.
* Briefly touch on the **fourth dimension** as a conceptual or temporal dimension, preparing learners for animation later on.
* Emphasize how these principles form the **foundation of 3D modeling**.

---

### Phase 2: Translating Geometry into Blender Concepts

Once learners understand the fundamentals of geometry, the context shifts to **Blender** and **3D software terminology**.
Students learn how geometric concepts translate into Blender’s vocabulary:

* **0D point → Vertex**
* **1D line → Edge**
* **2D plane → Face**
* **3D object → Mesh**

This section bridges abstract geometry and practical 3D modeling, ensuring students know *why* things are named and structured the way they are.

---

### Phase 3: Getting to Know Blender

The third phase introduces the **Blender interface and workflow**, again using a first-principles approach.

* Start with a **minimal interface**, removing unnecessary panels and elements to make the environment less intimidating.
* Gradually **reintroduce tools and menus** as their function becomes relevant to the project.
* Constantly **connect each new concept** back to the foundational geometry and terminology (vertices, edges, faces, meshes).

This ensures that learners always understand *what’s happening under the hood*, not just which buttons to press.

---

### Phase 4: Learning Through a Small Project

Students apply what they’ve learned through a **small, focused project** designed to reinforce essential skills for **visual investigation**.
The project will:

* Introduce basic modeling and manipulation tools.

* Understand geometry as the foundation of 3D space.
* Recognize how abstract mathematical concepts translate into Blender’s 3D environment.
* Navigate and customize Blender’s interface confidently.
* Provide you with strategies that will help you tackle the diverse set of problems you might face.
* Apply first-principles thinking to build, analyze, and visualize 3D objects and scenes.
* Approach Blender as a **tool for exploration and understanding**, not just creation.

---

**Ready to get started?** Explore the modules in the sidebar to begin your journey into Blender for Visual Investigation.