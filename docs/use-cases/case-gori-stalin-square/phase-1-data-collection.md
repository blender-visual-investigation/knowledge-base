---
sidebar_position: 2
---

# Phase 1: Data Collection

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#ff9800', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>30 min read</span>
  </div>
</div>

---

## Introduction

Before any 3D reconstruction work can begin, you must gather comprehensive source material. This phase focuses on collecting photos, videos, and geospatial data about Stalin Square in Gori, Georgia during August 2008.

## Objectives

By the end of this phase, you will have:

- ✅ Historical photos of Stalin Square from multiple angles
- ✅ Video footage showing the square during the incident
- ✅ Satellite imagery from Google Earth (August 2008)
- ✅ Measurements and scale references
- ✅ Organized documentation of all sources

---

## Step 1: Flickr Photo Search

### Search Strategy

**Primary Keywords:**
- "Stalin Square Gori"
- "Gori Georgia 2008"
- "Gori city center"
- "გორი" (Gori in Georgian)

**Date Range:** 2007-2009 (to capture before/after conditions)

### Advanced Flickr Search

1. Go to **Flickr Advanced Search**: https://www.flickr.com/search/advanced/
2. Enter keywords: `"Stalin Square" OR "Gori" Georgia`
3. Set date range: **January 2007 - December 2009**
4. Sort by: **Date Taken (oldest first)**
5. Filter by: **Creative Commons licenses** (if needed for publication)

### What to Look For

**Essential Views:**
- **Overview shots** - Entire square from elevated positions
- **Ground level** - Street-level views from multiple sides
- **Detail shots** - Buildings, monuments, street furniture
- **Before/after** - Damage documentation (post-August 2008)

### Download Process

1. **Click photo** to open full view
2. **Download icon** → Choose **"Original" size** (largest available)
3. **Document metadata:**
   - Photographer name
   - Date taken
   - GPS coordinates (if available)
   - Camera angle/position estimate
4. **Save to folder:** `Gori_Case/01_Photos/Flickr/`
5. **Rename files:** `YYYY-MM-DD_photographer_description.jpg`

### Metadata Documentation

Create a spreadsheet: `photo_inventory.xlsx`

| Filename | Date | Photographer | Source URL | GPS Lat | GPS Lon | View Angle | Notes |
|----------|------|--------------|------------|---------|---------|------------|-------|
| 2008-07-15_user123_square-overview.jpg | 2008-07-15 | flickr.com/user123 | https://... | 41.9845 | 44.1156 | NE | Pre-incident |

## Step 2: YouTube Video Analysis

### Finding Relevant Footage

**Search Terms:**
- "Gori Georgia August 2008"
- "Gori shelling 2008"
- "Gori rocket attack"
- "South Ossetia war Gori"

### Video Selection Criteria

Look for videos showing:
- **News coverage** - Professional footage with timestamps
- **Eyewitness videos** - Ground-level perspectives
- **Aftermath documentation** - Damage surveys
- **Background views** - Square visible in frame, even if not main subject

### Frame Extraction

**Using VLC Player (Free):**
1. Open video in VLC
2. `Video` → `Take Snapshot` (or `Shift+S`)
3. Snapshots save to: `Pictures` folder by default
4. Extract frames showing:
   - Square before incident
   - During incident (if available)
   - Immediate aftermath
   - Damage documentation

**Using FFmpeg (Advanced):**
```bash
ffmpeg -i video.mp4 -vf "select=eq(n\,0)" -vframes 1 frame_0001.png
```

### Video Documentation

Create: `video_inventory.xlsx`

| Video Title | Channel | Upload Date | Timestamp | Description | Source URL |
|-------------|---------|-------------|-----------|-------------|------------|
| "Gori Under Attack" | NewsChannel | 2008-08-09 | 02:34 | Shows square from north | https://... |

## Step 3: Google Earth Historical Imagery

### Setup Google Earth Pro

1. **Download:** https://www.google.com/earth/about/versions/#earth-pro
2. **Install and launch**
3. **Enable Historical Imagery:**
   - Click **clock icon** in toolbar
   - Or: `View` → `Historical Imagery`

### Locate Stalin Square

**Coordinates:** 41.9845° N, 44.1156° E

1. **Search:** Type "Stalin Square, Gori" or paste coordinates
2. **Zoom in** until square clearly visible
3. **Use historical slider** to find August 2008 imagery

### Capture Reference Images

**Multiple Views:**

1. **Top-down (Orthographic):**
   - Eye altitude: 500-1000m
   - Looking straight down
   - Screenshot: `Gori_satellite_topdown_2008.jpg`

2. **Oblique angles:**
   - Tilt view to ~45°
   - Capture from N, S, E, W
   - Shows building heights

3. **Street-level context:**
   - Lower altitude (100-200m)
   - Shows street width, details

### Measurement Tools

**Using Google Earth Ruler:**
1. **Tools** → **Ruler** (or `Ctrl+Shift+M`)
2. **Measure:**
   - Square dimensions (length × width)
   - Building footprints
   - Road widths
   - Distance between landmarks
3. **Document measurements** in spreadsheet

**Measurements Needed:**
- Square total area
- Main monument to each corner
- Building heights (if 3D buildings available)
- Street widths
- Tree positions (for scale)

## Step 4: Google Maps Current Reference

### Street View Collection

1. **Open Google Maps:** https://maps.google.com
2. **Search:** "Stalin Square, Gori, Georgia"
3. **Drag Street View icon** (orange person) onto map
4. **Navigate** to capture views from all sides
5. **Screenshot each angle**

**Note:** These are current (2024-2025), not 2008, but useful for:
- Building architectural details
- Permanent landmark verification
- Understanding spatial relationships

### Current Satellite View

- **Capture high-res satellite** for comparison
- **Identify changes** between 2008 and now
- **Document modifications** to square layout

## Step 5: OSINT Research

### News Archives

**Search Archives:**
- BBC News archives
- Reuters
- Associated Press (AP)
- Local Georgian news (English sections)

**What to Find:**
- Date and time of incident
- Weather conditions
- Number of casualties
- Specific damage reports
- Witness statements with location details

### Wikipedia & Historical Records

- **South Ossetia War** Wikipedia page
- **Gori** city page - historical info
- Academic papers on the conflict
- Human rights reports with site analysis

### Document Everything

Create: `OSINT_sources.xlsx`

| Source Type | Title/Description | Date | Author | URL | Relevance | Notes |
|-------------|-------------------|------|--------|-----|-----------|-------|
| News Article | "Gori Shelled" | 2008-08-09 | BBC | https://... | High | Mentions square |

## Organization Structure

### Folder Hierarchy

```
Gori_Case/
├── 01_Photos/
│   ├── Flickr/
│   │   ├── 2008-07-15_user123_square-overview.jpg
│   │   └── ...
│   ├── YouTube_Frames/
│   │   ├── video01_frame_001.png
│   │   └── ...
│   └── GoogleMaps/
│       ├── streetview_north.jpg
│       └── ...
├── 02_Satellite/
│   ├── GoogleEarth_2008_topdown.jpg
│   ├── GoogleEarth_2008_oblique_north.jpg
│   └── ...
├── 03_Videos/
│   ├── video01_news_coverage.mp4
│   └── ...
├── 04_OSINT/
│   ├── articles/
│   └── reports/
└── 05_Documentation/
    ├── photo_inventory.xlsx
    ├── video_inventory.xlsx
    ├── measurements.xlsx
    └── OSINT_sources.xlsx
```

## Quality Control Checklist

Before moving to Phase 2, verify:

- [ ] **Minimum 10 photos** from different angles
- [ ] **At least 2 video sources** with square visible
- [ ] **Google Earth imagery** from August 2008 period
- [ ] **Measurements documented** for key dimensions
- [ ] **All sources cataloged** with URLs and dates
- [ ] **Photos organized** in logical folder structure
- [ ] **Metadata preserved** (EXIF data, timestamps)
- [ ] **Permission/licensing noted** for each source

## Common Issues & Solutions

### Problem: No 2008 Google Earth Imagery

**Solution:** 
- Use closest available date (2007 or 2009)
- Cross-reference with photo evidence
- Note discrepancies in documentation

### Problem: Limited Photo Coverage

**Solution:**
- Expand search terms (Georgian language, alternate spellings)
- Check other platforms (Instagram, Twitter archives)
- Contact local photographers/historians

### Problem: Video Quality Too Low

**Solution:**
- Use multiple sources for same view
- Enhance frames with photo editing (carefully, document edits)
- Focus on identifiable landmarks for reference

## Exercise: Complete Data Collection

### Task
Gather complete source material for Stalin Square reconstruction

### Steps
1. **Spend 2-3 hours** collecting photos (Flickr, image search)
2. **Find 3-5 video sources** showing the square
3. **Capture Google Earth** historical imagery (multiple views)
4. **Create measurement spreadsheet** with at least 5 key dimensions
5. **Document all sources** in inventory spreadsheets
6. **Organize files** in folder structure above

### Deliverables
- Organized file structure with collected materials
- Completed inventory spreadsheets
- Minimum 10 reference photos
- Google Earth screenshots (top, oblique views)
- Measurement documentation

---

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px'}}>
  
  <div style={{backgroundColor: '#8DF917', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-book" style={{fontSize: '24px', color: '#333'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: '#333'}}>Resources</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: '#333'}}>
      <li>Photo inventory template (Excel)</li>
      <li>OSINT collection checklist</li>
      <li>Google Earth measurement guide</li>
    </ul>
  </div>

  <div style={{backgroundColor: '#1C75BC', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-link" style={{fontSize: '24px', color: 'white'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: 'white'}}>Links</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: 'white'}}>
      <li><a href="https://www.flickr.com/search/advanced/" style={{color: 'white'}}>Flickr Advanced Search</a></li>
      <li><a href="https://www.google.com/earth/about/versions/#earth-pro" style={{color: 'white'}}>Google Earth Pro</a></li>
      <li><a href="/docs/module-2-data/2-1-gathering-data" style={{color: 'white'}}>Data Gathering Guide</a></li>
    </ul>
  </div>

  <div style={{backgroundColor: '#ff9f2c', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-play" style={{fontSize: '24px', color: 'white'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: 'white'}}>Videos</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: 'white'}}>
      <li>Flickr search strategies</li>
      <li>Google Earth historical imagery tutorial</li>
      <li>OSINT fundamentals</li>
    </ul>
  </div>

</div>

---

## Next Steps

With comprehensive source material collected, proceed to **[Phase 2: Scene Setup](./phase-2-scene-setup)** to begin building the base geometry in Blender.

:::tip Data Collection Tip
Spend adequate time on this phase - thorough source material collection prevents frustrating gaps discovered during modeling. It's easier to gather extra references now than to search for specific details mid-project.
:::
