---
sidebar_position: 1
---

# Case Study: Gori Stalin Square 2018

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#ff9800', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>45 min read</span>
  </div>
</div>

---

## Case Overview

**Location:** Stalin Square, Gori, Georgia  
**Date:** August 2008  
**Event:** Artillery strike during the Russo-Georgian War  
**Objective:** Create an accurate 3D reconstruction of the square, document civilian positions, and analyze movement patterns when the rocket struck

## What You'll Learn

This comprehensive tutorial demonstrates a complete visual investigation workflow:

- **Photo Reference Gathering** - Sourcing images from Flickr and online archives
- **Video Analysis** - Extracting spatial information from YouTube footage
- **Geospatial Context** - Using Google Maps and Google Earth for accurate positioning
- **Scene Reconstruction** - Building the square architecture and environment
- **Timeline Reconstruction** - Documenting people's positions and movements
- **Evidence Visualization** - Presenting findings for investigation or legal purposes

## Prerequisites

Before starting this case study, you should be familiar with:

- ✅ Basic Blender navigation (see [First Steps](/docs/blender/working-with-blender/first-steps))
- ✅ Camera positioning (see [Camera & Views](/docs/use-cases/the-analyst/camera-and-views))
- ✅ Import/export workflows (see [Importing Models](/docs/use-cases/the-analyst/importing-models))
- ✅ Measurement tools (see [Measurements](/docs/use-cases/the-analyst/measurements))

## Data Sources

### Primary Sources

1. **Flickr Archive** - Historical photos of Stalin Square before and after the event
2. **YouTube Documentation** - News footage and eyewitness videos from August 2008
3. **Google Maps** - Current satellite imagery and street view (for reference)
4. **Google Earth** - Historical imagery from 2008 period
5. **Open Source Intelligence (OSINT)** - News reports, verified witness accounts

### Data Collection Phase

#### Step 1: Photo Reference Gathering
- Search Flickr for "Stalin Square Gori" with date filters (2007-2009)
- Download high-resolution images showing square layout
- Capture street-level views from multiple angles
- Document photo metadata (date, time, photographer position)

#### Step 2: Video Analysis
- Locate relevant YouTube footage from August 2008
- Extract frames showing the square before, during, after incident
- Note camera positions and angles
- Document timestamp information

#### Step 3: Geospatial Baseline
- Use Google Earth Pro's historical imagery (2008)
- Measure square dimensions
- Identify key landmarks (statue, buildings, streets)
- Export elevation data if available

## Reconstruction Workflow

### Phase 1: Scene Setup (Week 1)

**Objective:** Create accurate base geometry of Stalin Square

#### Tasks:
1. **Import satellite imagery** as reference plane
2. **Establish scale** using known dimensions (roads, buildings)
3. **Model ground plane** matching satellite imagery
4. **Block out buildings** surrounding the square
5. **Add major landmarks** (Stalin statue, monuments)
6. **Set up coordinate system** aligned to cardinal directions

**Deliverables:**
- Scaled base scene matching August 2008 layout
- Verified measurements against multiple sources
- Camera positions for reference photos

### Phase 2: Detailed Modeling (Week 2)

**Objective:** Add architectural detail visible in photo/video evidence

#### Tasks:
1. **Refine building facades** matching photo references
2. **Add street furniture** (benches, lights, signs)
3. **Model vegetation** (trees, landscaping) as it appeared in 2008
4. **Texture buildings** with photo references (image-based modeling)
5. **Add vehicles** present in the scene

**Techniques Used:**
- [Camera Matching](/docs/tools-addons-techniques/techniques/camera-matching) for photo alignment
- [Image-Based Modeling](/docs/tools-addons-techniques/techniques/image-based-modeling) for textures
- [Establishing Scale & Dimension](/docs/tools-addons-techniques/techniques/establishing-scale-dimension)

### Phase 3: Timeline Reconstruction (Week 3)

**Objective:** Document civilian positions and movements

#### Tasks:
1. **Create proxy models** for people (simple geometry)
2. **Position figures** based on video/photo evidence
3. **Document positions** at key timestamps (before/during/after)
4. **Create movement paths** showing evacuation patterns
5. **Add annotations** identifying individuals when possible

**Analysis:**
- How many civilians were present?
- Where were they positioned when strike occurred?
- Which direction did people move?
- What obstacles affected evacuation?

### Phase 4: Impact Analysis (Week 4)

**Objective:** Visualize the strike location and effects

#### Tasks:
1. **Identify impact point** from damage evidence
2. **Model blast radius** based on forensic reports
3. **Document damage patterns** to structures
4. **Create visibility analysis** - what could witnesses see?
5. **Generate sight lines** from various positions

### Phase 5: Presentation (Week 5)

**Objective:** Create clear visualizations for reporting

#### Tasks:
1. **Set up presentation cameras** (overview, key angles, details)
2. **Create annotated renders** with measurements
3. **Generate timeline sequence** showing before/during/after
4. **Export orthographic views** for technical documentation
5. **Prepare 3D PDF** or interactive model for court presentation

## Technical Considerations

### Accuracy Standards
- Measurements verified against multiple sources
- Photo timestamps confirmed through metadata
- Shadow analysis for time-of-day verification
- Scale references (vehicles, people) for validation

### Evidence Chain
- Document all source material with URLs/dates
- Save original files separate from processed versions
- Maintain detailed notes on modeling decisions
- Version control for iterative changes

### Limitations
- Some areas may lack photographic coverage
- Historical Google Earth imagery resolution varies
- Vegetation may have changed between photo dates
- Witness accounts may contain discrepancies

## Expected Outcomes

Upon completion, you will have:

1. **3D Model** - Accurate reconstruction of Stalin Square circa August 2008
2. **Documentation Package** - Annotated renders, measurements, timeline
3. **Analysis Report** - Findings regarding civilian positions and movements
4. **Presentation Materials** - Court-ready visualizations and interactive model
5. **Skills Developed** - Complete OSINT-to-3D workflow for visual investigation

## Resources & Tools

### Blender Add-ons Required
- **BlenderGIS** - Geographic data import
- **Import Images as Planes** - Reference photo positioning
- **MeasureIt** - Dimension verification
- **Camera Calibration** - Photo matching

### External Tools
- **Google Earth Pro** - Historical imagery and KML export
- **QGIS** (optional) - Advanced geospatial analysis
- **FFmpeg** - Video frame extraction
- **ExifTool** - Photo metadata analysis

---

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px'}}>
  
  <div style={{backgroundColor: '#8DF917', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-book" style={{fontSize: '24px', color: '#333'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: '#333'}}>Resources</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: '#333'}}>
      <li>Flickr archive search guide</li>
      <li>OSINT collection checklist</li>
      <li>Measurement verification spreadsheet</li>
    </ul>
  </div>

  <div style={{backgroundColor: '#1C75BC', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-link" style={{fontSize: '24px', color: 'white'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: 'white'}}>Links</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: 'white'}}>
      <li><a href="https://www.google.com/earth/about/versions/#earth-pro" style={{color: 'white'}}>Google Earth Pro</a></li>
      <li><a href="https://www.flickr.com/" style={{color: 'white'}}>Flickr Advanced Search</a></li>
      <li><a href="/docs/module-2-data/2-1-gathering-data" style={{color: 'white'}}>Data Gathering Guide</a></li>
    </ul>
  </div>

  <div style={{backgroundColor: '#ff9f2c', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-play" style={{fontSize: '24px', color: 'white'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: 'white'}}>Videos</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: 'white'}}>
      <li>Photo reference workflow</li>
      <li>Google Earth data extraction</li>
      <li>Timeline visualization techniques</li>
    </ul>
  </div>

</div>

---

## Getting Started

This is a comprehensive multi-week project. Begin with **Phase 1: Scene Setup** and work through systematically. Each phase builds on the previous work.

:::warning Case Sensitivity
This case study involves a real-world conflict event. Approach the material with appropriate professionalism and sensitivity to the human impact of these events.
:::

:::tip Project Scope
This tutorial can be completed in stages. You don't need to finish all 5 phases - even completing Phase 1-2 provides valuable hands-on experience with OSINT and 3D reconstruction workflows.
:::
