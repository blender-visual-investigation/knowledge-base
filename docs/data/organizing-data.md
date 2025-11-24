---
sidebar_position: 3
---

# Organizing Data

Effective data organization strategies for visual investigation projects.

## Project Structure

### Recommended Folder Hierarchy

```
Project_Name/
├── 01_Original_Data/
│   ├── Photos/
│   │   ├── RAW/
│   │   └── JPEG/
│   ├── Video/
│   ├── Measurements/
│   └── Documents/
├── 02_Reference/
│   ├── Floor_Plans/
│   ├── Maps/
│   └── Existing_Photos/
├── 03_Processing/
│   ├── Photogrammetry/
│   ├── Camera_Tracking/
│   └── Measurements/
├── 04_Blender_Files/
│   ├── Scene_Models/
│   ├── Object_Models/
│   └── Archive/
├── 05_Renders/
│   ├── Draft/
│   └── Final/
├── 06_Deliverables/
│   ├── Reports/
│   ├── Images/
│   └── Videos/
└── 07_Documentation/
    ├── Notes/
    ├── Logs/
    └── Metadata/
```

## Naming Conventions

### Files

**Format**: `YYYYMMDD_Project_Type_Description_Version`

**Examples:**
- `20250102_CrimeScene_Photo_Overview_v01.jpg`
- `20250102_Accident_Model_MainScene_v03.blend`
- `20250102_Building_Render_NorthView_Final.png`

**Benefits:**
- Sorts chronologically
- Clear purpose
- Easy to find
- Version tracking

### Blender Files

**Specific naming:**
- `_WIP` - Work in progress
- `_v01, _v02` - Version numbers
- `_Final` - Approved final version
- `_Backup` - Backup copies

**Example progression:**
1. `Scene_Reconstruction_WIP.blend`
2. `Scene_Reconstruction_v01.blend`
3. `Scene_Reconstruction_v02.blend`
4. `Scene_Reconstruction_Final.blend`

## Metadata Organization

### Photo Metadata

**Create a CSV/spreadsheet:**

| Filename | Date | Time | Camera | Focal Length | Location | Notes |
|----------|------|------|--------|--------------|----------|-------|
| IMG_0001.jpg | 2025-01-02 | 14:30 | Canon 5D | 24mm | North corner | With scale |

**Tools:**
- ExifTool
- Adobe Bridge
- Photo management software

### Measurement Log

**Document all measurements:**

| ID | Description | Value | Unit | Method | Date | Verified |
|----|-------------|-------|------|--------|------|----------|
| M01 | Room length | 5.85 | m | Laser | 2025-01-02 | Yes |
| M02 | Door height | 2.10 | m | Tape | 2025-01-02 | Yes |

## Version Control

### For Blender Files

**Save incrementally:**
- Save new version at major milestones
- Keep previous versions
- Use "Save As" with version numbers
- Don't delete old versions until project complete

**Blender's built-in versioning:**
- File → Save As → Enable "+" button for incremental saves
- Automatically creates numbered versions

### For Data Files

**Original vs. Processed:**
- Never modify original data files
- Keep originals in separate folder
- Work on copies
- Document all processing steps

## Backup Strategy

### 3-2-1 Rule

**3** copies of important data
**2** different storage media
**1** copy offsite

**Implementation:**
1. Working copy on computer
2. External hard drive backup
3. Cloud storage or separate location

### Backup Schedule

**Daily:** 
- Current work files
- Blender files in progress

**Weekly:**
- Complete project folder
- Verify backup integrity

**Project end:**
- Full archive
- Long-term storage
- Documentation complete

## Search and Retrieval

### Tagging System

**Use consistent tags:**
- Location identifiers
- Date ranges
- Evidence types
- Processing status

### Project Database

**Consider creating:**
- Master spreadsheet of all files
- Notes on key findings
- Cross-references
- Quick lookup index

## Collaborative Projects

### Shared Storage

**Best practices:**
- Centralized project folder
- Clear file locking
- Communication about changes
- Regular synchronization

### Naming for Teams

**Include initials:**
- `20250102_BB_Model_Building_v01.blend`
- `20250102_JD_Photo_Process_Notes.txt`

### Documentation

**Shared documentation:**
- Project wiki or shared document
- Decision log
- Change log
- Issue tracker

## Long-term Archiving

### At Project Completion

**Archive includes:**
- All original data
- Final Blender files
- Rendered outputs
- Complete documentation
- Metadata and logs
- Processing notes

### Storage Format

**Use standard formats:**
- JPEG/PNG for images (avoid proprietary)
- MP4/MOV for video
- PDF for documents
- Blender .blend files
- Plain text for notes

**Avoid:**
- Compressed/lossy versions of originals
- Proprietary formats without converters
- Single points of failure

## Tools and Software

### File Management
- Total Commander
- FreeCommander
- Windows Explorer with custom views

### Photo Organization
- Adobe Lightroom
- Darktable (free)
- DigiKam (free)

### Metadata Tools
- ExifTool
- XnView MP
- Photoshop

### Backup Tools
- Robocopy (Windows)
- rsync (Linux/Mac)
- Commercial backup software

## Common Organization Mistakes

1. **No consistent naming** - Files become unfindable
2. **Editing originals** - Lose source data
3. **No backups** - Catastrophic data loss
4. **Poor folder structure** - Chaos and confusion
5. **No documentation** - Forget what's what
6. **Version confusion** - Which file is current?
7. **No metadata** - Lost context

## Organization Checklist

- [ ] Folder structure created
- [ ] Naming convention defined
- [ ] Original data preserved
- [ ] Metadata documented
- [ ] Backups configured
- [ ] Version control system in place
- [ ] Team protocols established (if applicable)
- [ ] Documentation template ready
