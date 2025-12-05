---
title: Organizing Data
description: Strategies for structuring, naming, and managing data in visual investigation projects—approaches that adapt to your needs.
sidebar_position: 3
---

# Organizing Data

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
    <span style={{backgroundColor: '#2196f3', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>20 min read</span>
  </div>
</div>

---

import FeatureCard from '@site/src/components/FeatureCard';
import FeatureCardGrid from '@site/src/components/FeatureCardGrid';

<FeatureCardGrid>
  <FeatureCard 
    title="What You'll Learn" 
    headerColor="#6dfb72"
    textColor="#333"
    icon="fa-solid fa-folder-tree"
  >
    <ul style={{margin: 0, paddingLeft: '20px'}}>
      <li>Strategies for structuring project folders</li>
      <li>Approaches to file naming that scale</li>
      <li>Organizing 3D assets and reconstruction scenes</li>
      <li>Backup principles for protecting your work</li>
    </ul>
  </FeatureCard>
  
  <FeatureCard 
    title="Key Principles" 
    headerColor="#1C75BC"
    icon="fa-solid fa-compass"
  >
    <ul style={{margin: 0, paddingLeft: '20px'}}>
      <li>Consistency matters more than perfection</li>
      <li>Protect original data at all costs</li>
      <li>Separate assets from reconstruction scenes</li>
      <li>Systems should fit your workflow</li>
    </ul>
  </FeatureCard>
  
  <FeatureCard 
    title="Why It Matters" 
    headerColor="#EF4C3C"
    icon="fa-solid fa-magnifying-glass"
  >
    <p style={{margin: 0}}>Good organization isn't bureaucracy—it's what lets you find that one crucial file at 2am when the deadline looms. It's also what makes your methodology reproducible.</p>
  </FeatureCard>
</FeatureCardGrid>

---

## The Core Problem: Finding Things Later

Every investigator eventually faces the same frustration: you need that one photograph, that specific measurement, that version of the model from three weeks ago—and you can't find it. Or worse, you find five versions and can't remember which one is correct.

Data organization isn't about following rigid rules. It's about creating systems that work for *your* brain and *your* projects, while maintaining enough structure that others (including future-you) can understand what you did and why.

**The goal**: When you return to a project six months later, or when a colleague needs to understand your work, the organization should make the path clear.

This connects directly to methodology: as discussed in the [Methodology](/docs/data) page, documentation and transparency aren't optional extras—they're what transform your work from illustration into evidence. Your folder structure and naming conventions are part of that documentation.

---

## Thinking About Project Structure

There's no single "correct" folder structure. What matters is having *a* structure that's consistent and logical for your type of work. Here are some approaches to consider.

### Strategy 1: Organize by Evidence Status

This approach separates files by their role in your investigation—what's original versus what you've created or processed.

```
Project_Name/
├── 01_Original_Evidence/      # Untouched source material
│   ├── Video/
│   ├── Photos/
│   └── Documents/
├── 02_Working_Copies/         # Processed versions you're analyzing
│   ├── Extracted_Frames/
│   ├── Enhanced_Images/
│   └── Transcriptions/
├── 03_Reference_Material/     # Contextual info (maps, specs, research)
├── 04_Blender_Projects/       # Your reconstruction files
├── 05_Outputs/                # Renders, exports, deliverables
└── 06_Documentation/          # Logs, notes, methodology writeups
```

**When this works well**: Forensic or legal work where chain of custody matters, or any project where you need absolute clarity about what's original versus processed.

**The core principle**: Original evidence lives in one place, never modified. Everything else is derived work.

### Strategy 2: Organize by Workflow Stage

This approach follows the natural progression of an investigation—from data collection through analysis to final output.

```
Project_Name/
├── 01_Gather/                 # All raw inputs
├── 02_Process/                # Intermediate work
├── 03_Model/                  # Blender files and 3D work
├── 04_Analyze/                # Measurements, comparisons, tests
├── 05_Present/                # Final renders and reports
└── 00_Archive/                # Old versions, abandoned approaches
```

**When this works well**: Projects with clear phases, or when you want the folder structure to remind you where you are in the process.

### Strategy 3: Organize by Source Type

Sometimes the nature of your sources dictates the structure—especially when you're pulling from many different origins.

```
Project_Name/
├── Satellite_Imagery/
├── Street_Level_Photos/
├── CCTV_Footage/
├── Survey_Documents/
├── Witness_Accounts/
├── Blender_Files/
└── Analysis_Outputs/
```

**When this works well**: Investigations drawing on diverse source types where you need quick access to "all the satellite images" or "all the video."

### The Hybrid Reality

Most real projects end up with hybrid structures. You might organize by evidence status at the top level, then by source type within each category. Or you might start with one approach and adapt as the project evolves.

**What actually matters**:
- Can you find things quickly?
- Can someone else understand the logic?
- Are originals clearly separated from derivatives?
- Is there a place for documentation?

If your system achieves these goals, it's working.

---

## Naming Conventions: Strategies That Scale

File names are your first line of defense against chaos. A good naming convention answers the question: "What is this file?" without needing to open it.

### The Building Blocks of a Name

Consider what information helps identify a file:
- **Date**: When was it created or captured?
- **Project**: Which investigation does it belong to?
- **Type**: What kind of file is it (photo, model, render)?
- **Description**: What specifically is it?
- **Version**: Which iteration?
- **Source/Author**: Who created it or where did it come from?

You don't need all of these for every file—choose what's relevant for your work.

### Example Approaches

**Date-first naming** (useful when chronology matters):
```
2024-05-15_Site_Photo_NorthEntrance.jpg
2024-05-15_Site_Photo_InteriorHallway.jpg
2024-05-18_Model_BuildingShell_v02.blend
```
Files sort chronologically. You can immediately see when something was created.

**Project-first naming** (useful when working across multiple investigations):
```
CaseAlpha_Photo_Intersection_20240515.jpg
CaseAlpha_Model_Scene_v03.blend
CaseBeta_Measurement_RoomDimensions.csv
```
All files from one case group together regardless of when they were created.

**Type-first naming** (useful when you need to find all items of a kind):
```
Photo_CaseAlpha_Intersection_001.jpg
Model_CaseAlpha_Scene_v03.blend
Render_CaseAlpha_OverheadView_Final.png
```
All photos appear together in alphabetical listings.

### Version Naming Strategies

Tracking versions prevents the nightmare of "final_v2_REAL_final_updated.blend". Some approaches:

**Sequential numbering**: `_v01`, `_v02`, `_v03`
- Simple and clear
- Use leading zeros for proper sorting (v01 not v1)

**Date-based versions**: `_20240515`, `_20240518`
- Automatically documents when changes happened
- Useful when you might have multiple versions per day: `_20240515a`, `_20240515b`

**Milestone naming**: `_WIP`, `_Review`, `_Approved`, `_Final`
- Communicates status rather than just sequence
- Combine with numbers: `_v03_Review`, `_v04_Final`

**Blender's approach**: Use the `+` button in Save As dialog to auto-increment numbers
- Quick and consistent
- Results in: `Scene.blend`, `Scene.001.blend`, `Scene.002.blend`

### What to Avoid

- Spaces in filenames (use underscores or hyphens instead)
- Special characters that break on different operating systems
- Vague names: `stuff.blend`, `new_version.blend`, `test.jpg`
- Names that require opening the file to understand: `IMG_4523.jpg`

---

## Protecting Original Data

This principle is non-negotiable: **never modify original source files**. This aligns directly with the Berkeley Protocol's emphasis on preservation and chain of custody.

### Why This Matters

- Original files may contain metadata you'll need later
- You might realize your processing introduced errors
- For legal or accountability purposes, unaltered originals are essential
- You can't undo changes you don't remember making

### Practical Approaches

**Physical separation**: Keep originals in a clearly labeled folder that you treat as read-only. Some investigators even set folder permissions to prevent accidental modification.

**Working copy workflow**:
1. Originals go into `Original_Evidence/` (or whatever you call it)
2. Copy files to a working folder before any processing
3. Never open originals except to copy them
4. Document any processing applied to working copies

**Verification**: For critical evidence, generate file hashes (SHA-256) when you first receive files. This creates a fingerprint you can check later to verify nothing has changed.

```powershell
# PowerShell command to generate SHA-256 hash
Get-FileHash -Algorithm SHA256 "path\to\file.jpg"
```

Store hashes in your source documentation alongside the files they verify.

---

## Tracking Metadata: What's Worth Recording

Metadata is information about your information—and capturing it early saves enormous frustration later. But you don't need to document everything. Focus on what you'll actually need.

### For Photographs

At minimum, record:
- Where the photo came from (source, URL, archive reference)
- When it was taken (if known) versus when you obtained it
- Technical specs relevant to your analysis (resolution, focal length if using for camera matching)

A simple spreadsheet works fine:

| Filename | Source | Date Taken | Date Obtained | Resolution | Notes |
|----------|--------|------------|---------------|------------|-------|
| intersection_view.jpg | CCTV archive | 2024-03-15 | 2024-05-10 | 1920x1080 | Frame extracted from video, timestamp 14:32:07 |
| building_north.jpg | Site visit | 2024-05-12 | 2024-05-12 | 4000x3000 | Taken with 24mm lens, includes scale reference |

### For Measurements

Track enough to understand and verify later:

| ID | Description | Value | Method | Date | Confidence | Source |
|----|-------------|-------|--------|------|------------|--------|
| M01 | Doorway width | 0.92m | Laser measure | 2024-05-12 | High | Site visit |
| M02 | Window height | ~1.5m | Estimated from photo | 2024-05-15 | Medium | Photo comparison with known door height |

The "Confidence" column helps when you're building your model—you know which measurements to trust versus which are estimates.

### For Video

- Source and chain of custody
- Format specs (resolution, frame rate, codec)
- Timestamp information and any timezone concerns
- Which portions you've extracted or analyzed

### What You Don't Need

Don't create busywork. If a piece of metadata isn't going to help you find, verify, or understand the file later, skip it. A simple system you actually use beats an elaborate one you abandon.

---

## Version Control and Backups

### The Version Control Mindset

Version control means being able to answer: "What changed between version 2 and version 3?" and "Can I go back to how things were last Tuesday?"

**For Blender files**: Save new versions at meaningful milestones, not just randomly. Good moments to version up:
- Before making major changes
- After completing a significant phase
- When something finally works and you don't want to lose it
- Before experimenting with something risky

**Keep a brief log** of what changed:
```
Scene_Reconstruction_v01.blend - Initial blocking from floor plans
Scene_Reconstruction_v02.blend - Added camera match to CCTV footage
Scene_Reconstruction_v03.blend - Refined vehicle positions after frame-by-frame analysis
Scene_Reconstruction_v04.blend - Added lighting for time-of-day simulation
```

This takes 30 seconds and saves hours of confusion later.

### Backup Strategies

The classic **3-2-1 rule** remains solid guidance:
- **3** copies of important data
- **2** different types of storage media
- **1** copy offsite (different physical location)

**Practical implementation might look like**:
1. Working files on your computer
2. Regular sync to an external drive or NAS
3. Cloud backup (encrypted) or copy at another location

**For active projects**: Back up at least daily. Blender auto-save is helpful but not a backup—if your drive fails, auto-saves fail with it.

**What to back up**:
- All original evidence (highest priority)
- Current Blender files
- Documentation and logs
- Project configuration and preferences

---

## Examples from Real Workflows

### Example 1: Small-Scale Historical Research

A researcher investigating a demolished building's layout works primarily from archival photographs and insurance maps.

**Their approach**:
```
Demolished_Factory_Research/
├── Sources/
│   ├── Photographs/          # Scans from historical society
│   ├── Maps/                  # Insurance maps, city surveys
│   └── Documents/             # Building permits, newspaper clippings
├── Analysis/
│   ├── Reference_Images/      # Annotated copies for modeling
│   └── Measurements/          # Spreadsheet with estimated dimensions
├── Blender/
│   ├── Factory_Model_v01.blend
│   └── Factory_Model_v02.blend
├── Outputs/
│   └── Renders/
└── Notes.md                   # Running log of decisions and sources
```

**What works here**: Simple structure matching simple needs. The `Notes.md` file captures methodology informally but usefully.

### Example 2: Incident Reconstruction Team

A team of three investigators reconstructing a traffic incident from multiple video sources and site measurements.

**Their approach**:
```
Case_20240315_Intersection/
├── 01_Evidence/
│   ├── CCTV_Original/
│   │   ├── Camera_A/
│   │   └── Camera_B/
│   ├── Dashcam/
│   └── Evidence_Log.xlsx      # Hash values, chain of custody
├── 02_Working/
│   ├── Extracted_Frames/
│   ├── Stabilized_Video/
│   └── Processing_Notes.md
├── 03_Site_Data/
│   ├── Measurements/
│   ├── Survey_Points/
│   └── Reference_Photos/
├── 04_Reconstruction/
│   ├── Scene_Model_v01_BB.blend
│   ├── Scene_Model_v02_BB.blend
│   └── Scene_Model_v03_JD.blend    # Initials indicate who made changes
├── 05_Analysis/
│   ├── Speed_Calculations/
│   ├── Sight_Line_Tests/
│   └── Analysis_Log.xlsx
├── 06_Deliverables/
│   ├── Draft_Report/
│   └── Final_Report/
└── Methodology.md
```

**What works here**: 
- Evidence isolation with hash verification
- Clear working copy separation
- Team member attribution in filenames
- Formal methodology document

### Example 3: Rapid Response Documentation

An investigator needs to quickly document an event from social media before content disappears.

**Their approach**:
```
Event_20240520/
├── Captures/
│   ├── 20240520_143500_twitter_@user123_video.mp4
│   ├── 20240520_143500_twitter_@user123_screenshot.png
│   └── 20240520_144200_telegram_channel_photo.jpg
├── Metadata/
│   └── capture_log.csv        # URL, capture time, hash, notes
└── Working/
    └── ...
```

**What works here**: Timestamps embedded in filenames for rapid capture. Metadata logged quickly with essentials only. Structure can be reorganized once the rush passes.

---

## Structuring 3D Projects Within Investigations

Visual investigation projects often sit within a larger case file. The 3D reconstruction component needs to be self-contained and portable—you should be able to archive, transfer, or hand off the Blender work without breaking dependencies or losing context.

This section presents an approach adapted from visual effects pipelines for the specific demands of investigative work. It's not the only way to structure 3D projects, but it addresses common problems that arise when reconstructions grow complex.

### The Asset-Shot Separation

A key strategy for maintaining clarity in complex reconstructions is separating the *creation* of 3D objects from their *application* in specific scenarios.

**Assets** are independent digital components:
- A specific vehicle model built to documented specifications
- A reconstructed building based on survey data
- A topographic terrain mesh from photogrammetry or GIS data

Each asset is built and verified in isolation, ensuring accuracy before it enters any reconstruction scene.

**Scenes (or "Shots")** are specific scenarios where assets are assembled:
- Placing the vehicle asset onto the terrain asset to test a sight-line hypothesis
- Positioning multiple assets according to witness statements
- Setting up lighting conditions for a specific time of day

This separation matters because you might use the same vehicle asset in multiple scenarios, or test different positioning hypotheses. If the asset itself changes, every scene that references it updates accordingly.

### The WIP vs. Published Protocol

In forensic work, clarity about which file represents the "current accurate state" is essential. Consider adopting a **Work In Progress (WIP)** versus **Published** protocol:

**WIP Directory**: Contains iterative files during construction—`Terrain_v01.blend`, `Terrain_v02.blend`, etc. This is your sandbox for experimentation.

**Published Directory**: Contains only finalized, verified versions—`Terrain_Master.blend`. When assembling reconstruction scenes, you link only from Published, ensuring your analysis builds upon verified data rather than experimental iterations.

This approach adds overhead, so it's most valuable for:
- Projects with multiple team members
- Long-running investigations where you'll return to work months later
- Reconstructions that may be subject to legal scrutiny

For simpler projects, the standard versioning approach (`_v01`, `_v02`, `_Final`) may be sufficient.

### A Comprehensive Structure for 3D Investigation

Here's a directory structure that creates a "single source of truth" for the 3D component of an investigation:

```
Case_ID_Project_Name/
├── 01_3D_Data/              # The core Blender workspace
│   ├── Assets/              # Verified digital components
│   │   ├── Vehicles/
│   │   ├── Architecture/
│   │   └── Topography/
│   └── Scenes/              # Reconstruction scenarios
│       ├── Scenario_010/
│       ├── Scenario_020/
│       └── Scenario_030/
├── 02_Evidence_Ref/         # Raw visual evidence (photos, satellite imagery)
├── 03_Textures/             # Processed surface maps and materials
├── 04_Output/               # Rendered simulations and visual aids
├── 05_Edit/                 # Video assembly and timeline work
└── 06_Scratchpad/           # Temporary R&D and testing
```

**Key considerations**:

- **Use intervals of 10 for scene numbering** (010, 020, 030). This allows inserting intermediate scenarios (015, 025) without renumbering everything.

- **02_Evidence_Ref houses your source material**. Never link Blender files to images in Downloads or Desktop. Migrate all evidentiary images into this directory *before* importing into Blender. This keeps the project self-contained.

- **03_Textures centralizes processed image maps**. When textures live in one place, you avoid "broken path" errors when transferring the project to another workstation or archiving.

- **04_Output is often transient**. Unlike source files, renders can typically be overwritten unless a specific version is required for the case record.

- **06_Scratchpad gives experiments a home**. Quick tests and abandoned approaches go here rather than cluttering your main directories.

### Practical Implementation

**Create a template**: Don't build this structure manually for every case. Create a master directory called `_MASTER_TEMPLATE` containing the empty folder hierarchy. When starting a new investigation, duplicate and rename it.

**Use relative paths in Blender**: When linking external dependencies (images, other .blend files), ensure paths are set to relative rather than absolute. This means if the main project folder moves (to an external drive, cloud storage, or another investigator's machine), internal links remain intact because they reference locations relative to the project root, not a specific drive letter.

To enable relative paths:
- In Blender preferences: Edit → Preferences → File Paths → enable "Relative Paths" 
- When saving: ensure the checkbox for "Relative Path" is enabled in file browser
- Existing files: File → External Data → Make Paths Relative

### Troubleshooting Common Issues

**The "pink surface" problem**: Objects appear bright magenta/pink in the viewport. This means Blender has lost the link to an image texture—usually because the source image was moved or deleted from its original location (often Desktop or Downloads).

*To fix*: Navigate to File → External Data → Find Missing Files, then direct Blender to scan your `02_Evidence_Ref` or `03_Textures` directory.

*To prevent*: Always move assets into the project structure before importing into Blender.

**Scaling the structure**: The full hierarchy may feel excessive for a minor reconstruction. For rapid, single-asset investigations, a simplified structure (`3D`, `Evidence`, `Output`) works fine. The key discipline is segregation—never mix source evidence with output renders, and keep originals untouched.

---

## Adapting These Strategies

The examples above aren't prescriptions—they're illustrations of how different contexts shape different solutions. Consider your answers to these questions:

**About your projects**:
- How many sources do you typically work with?
- How long do projects usually last?
- How often do you return to old projects?
- Do you work alone or with others?

**About your workflow**:
- At what points do you create new versions?
- What information do you need when searching for files?
- How much metadata is realistic to capture?
- What's already working in your current approach?

**About your risks**:
- What happens if you lose a file?
- What happens if you can't prove a file is original?
- What happens if you can't remember why you made a decision?

Your answers should guide your organizational choices. A solo hobbyist exploring historical sites needs different systems than a forensic team preparing for court.

---

## When Things Go Wrong

Even with good systems, projects can become disorganized. Some recovery strategies:

**The "archaeology" approach**: When you open an old, messy project, spend 30 minutes understanding what's there before changing anything. Make notes. Identify the critical files. Only then start reorganizing.

**Incremental cleanup**: Don't try to reorganize everything at once. Fix naming as you touch files. Add metadata when you have context. Gradual improvement beats abandoned perfection.

**Learn from pain**: When you can't find something, note why. When a naming collision causes confusion, document it. These frustrations reveal where your system needs strengthening.

---

## Tools That Can Help

These aren't requirements—use what fits your workflow:

**File management**:
- Your OS file explorer (learn keyboard shortcuts)
- Total Commander, FreeCommander, or similar power tools
- Syncthing for cross-device synchronization

**Metadata and organization**:
- ExifTool (command line, powerful for batch operations)
- XnView MP (visual browser with metadata tools)
- Plain text files or spreadsheets for logs

**Backup and sync**:
- Robocopy (Windows), rsync (Linux/Mac) for local backups
- Syncthing, Resilio Sync for peer-to-peer sync
- Cloud services with versioning (choose based on your privacy/security needs)

**Hash verification**:
- PowerShell `Get-FileHash` (Windows)
- `sha256sum` (Linux/Mac)
- HashCheck Shell Extension for Windows Explorer integration

---

## Summary

Good data organization serves your investigation by making files findable, relationships clear, and methodology transparent. The specific structures and naming conventions matter less than consistency and fitness for purpose.

**Key Takeaways:**
- Choose organizational approaches that fit your actual workflow
- Protect original evidence through separation and verification
- For complex 3D work, separate assets from reconstruction scenes
- Use relative paths in Blender to keep projects portable
- Version control and backups prevent catastrophic loss
- Systems should evolve as you learn what works

**Further Resources:**
- [Methodology](/docs/data) - The broader framework these practices support
- [Analyzing Data](/docs/data/analyzing-data) - Data analysis techniques
- [Collaboration](/docs/data/collaboration) - Team-specific organizational considerations
- [Berkeley Protocol](https://www.ohchr.org/en/publications/policy-and-methodological-publications/berkeley-protocol-digital-open-source) - Standards for evidence handling
