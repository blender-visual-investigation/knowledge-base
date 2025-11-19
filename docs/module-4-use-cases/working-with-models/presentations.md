---
sidebar_position: 6
---

# Presentations & Export

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>10 min read</span>
  </div>
</div>

---

## Introduction

Learn to create professional-quality renders and exports for reports, presentations, and documentation.

## Lighting for Clarity

Good lighting makes models readable and professional.

### Quick Lighting Setup

**Method 1: Environment Lighting**
1. Switch to **Shading** workspace (top tabs)
2. Bottom panel → **World Properties** (🌍 icon)
3. **Color** → White or light gray
4. Increase **Strength** to 1.5 or 2.0

**Method 2: Three-Point Lighting**
1. `Shift + A` → **Light** → **Area**
2. Position above and to the side
3. Add two more lights (fill and rim)
4. Adjust **Power** in Light Properties

### Simple One-Light Setup
For quick documentation:
1. `Shift + A` → **Light** → **Sun**
2. Rotate to angle light appropriately (`R` to rotate)
3. Set **Strength** to 3-5

## Exercise 1: Basic Lighting

### Objective
Set up simple lighting for clear model visibility.

### Steps
1. Import or use existing model
2. Add **Sun light** (`Shift + A` → Light → Sun)
3. **Rotate light** to illuminate from above-front
4. Switch to **Rendered viewport shading** (top-right, sphere icon)
5. Adjust light **Strength** until model is clearly visible
6. Add second light from opposite side if needed

### Verification
✅ Model clearly visible  
✅ No harsh shadows obscuring details  
✅ Professional appearance  

## Viewport Shading Modes

Top-right corner of 3D viewport:

1. **Wireframe** - Shows mesh structure
2. **Solid** - Basic shading (default)
3. **Material Preview** - Shows materials with simple lighting
4. **Rendered** - Final appearance with all lighting

## Render Settings

### Access Render Properties
1. Properties Panel → **Render Properties** (📷 icon)
2. Key settings below

### Output Resolution
**Render Properties → Output:**
- **Resolution X:** 1920 (Full HD width)
- **Resolution Y:** 1080 (Full HD height)
- Higher for print: 3840 x 2160 (4K)

### File Format
**Render Properties → Output → File Format:**
- **PNG** - Best for reports (lossless, transparent background support)
- **JPEG** - Smaller files, no transparency
- **TIFF** - High quality for archival

## Exercise 2: Render an Image

### Objective
Create a high-quality render for documentation.

### Steps
1. **Set up camera** (Numpad `0` to view through camera)
2. **Position model** in frame
3. **Add lighting** (as in Exercise 1)
4. **Set output:**
   - Render Properties → Output
   - Resolution: 1920 x 1080
   - File Format: PNG
5. **Render:** Press `F12` (or Render → Render Image)
6. **Save:** `Image` → `Save As...`

### Verification
✅ Image renders completely  
✅ Model clearly visible  
✅ File saved in correct format  

## Background Settings

### Transparent Background
1. **Render Properties** → **Film**
2. Check **Transparent**
3. Render → Background will be checkerboard (transparent)
4. PNG format preserves transparency

### Solid Background Color
1. **World Properties** (🌍)
2. **Color** → Choose background color
3. **Strength** → 1.0
4. White or light gray common for documentation

## Orthographic Renders

For technical documentation:

### Setup Orthographic View
1. Select **Camera**
2. **Camera Properties** → **Type** → **Orthographic**
3. Adjust **Orthographic Scale** to frame model
4. Position camera (Front: Numpad `1` + `Ctrl+Alt+Numpad 0`)

### Standard Views
Create renders from multiple angles:
- Front (Numpad `1`)
- Right (Numpad `3`)
- Top (Numpad `7`)

## Exercise 3: Multiple View Documentation

### Objective
Create a set of standard orthographic views.

### Steps
1. **Create 3 cameras:**
   - Camera_Front
   - Camera_Top
   - Camera_Right

2. **Set all to Orthographic type**

3. **Position cameras:**
   - Select Camera_Front
   - Press Numpad `1` (front view)
   - Press `Ctrl+Alt+Numpad 0` (camera to view)
   - Repeat for Top and Right

4. **Render each view:**
   - Scene Properties → Camera → Select camera
   - Press `F12`
   - Save with descriptive name

### Verification
✅ Have front, top, right views  
✅ All orthographic (no perspective)  
✅ Model fully visible in each  

## Batch Rendering

For multiple cameras:

1. Install add-on: **"Render Shots"** (search in preferences)
2. Or manually: Switch camera → Render → Save → Repeat

## Adding Context Elements

### Scale Reference
Add a human figure or ruler for scale:
1. Import reference model (human, ruler, car)
2. Position next to subject
3. Include in render

### Ground Plane
1. `Shift + A` → **Mesh** → **Plane**
2. `S` → `50` → `Enter` (scale large)
3. Position below model (`G` → `Z` → `-1`)
4. Add subtle material (light gray)

## Export for Different Uses

### For Reports (Static Images)
- **Format:** PNG, 1920x1080 or higher
- **Background:** Transparent or white
- **Views:** Front, top, side, perspective

### For Presentations (PowerPoint, etc.)
- **Format:** PNG or JPEG, 1920x1080
- **Lighting:** High contrast, clear visibility
- **Annotations:** Add before rendering

### For Print
- **Format:** PNG or TIFF
- **Resolution:** 3840x2160 or higher
- **DPI:** 300 for print quality

### For Web/Email
- **Format:** JPEG
- **Resolution:** 1920x1080 (reduce file size)
- **Compression:** Medium to high

## Exercise 4: Complete Documentation Package

### Objective
Create a full set of renders for a case report.

### Deliverables
1. **Overview render** - Perspective view showing entire model
2. **Front orthographic** - Technical front view
3. **Top orthographic** - Bird's eye view
4. **Detail shots** - 2-3 closeups of important features
5. **Annotated view** - Include measurements and labels

### Steps
1. Set up all views and cameras
2. Configure lighting for each
3. Set appropriate resolution (1920x1080 minimum)
4. Render each view (`F12`)
5. Save with clear filenames:
   - `CaseXXX_Overview.png`
   - `CaseXXX_Front_Ortho.png`
   - `CaseXXX_Top_Ortho.png`
   - `CaseXXX_Detail_Door.png`

### Verification
✅ All views rendered and saved  
✅ Filenames clearly labeled  
✅ Consistent lighting across views  
✅ Professional appearance  

## Quick Reference Card

### Rendering Shortcuts
| Action | Command |
|--------|---------|
| Render image | `F12` |
| Camera view | Numpad `0` |
| Camera to view | `Ctrl+Alt+Numpad 0` |
| Toggle shading | `Z` (menu) |
| Save render | `Image` → `Save As` |

### Common Render Settings
- **Resolution:** 1920x1080 (HD), 3840x2160 (4K)
- **File Format:** PNG (reports), JPEG (web)
- **Background:** Transparent (PNG with Film → Transparent)
- **Camera Type:** Perspective (realistic) or Orthographic (technical)

---

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px'}}>
  
  <div style={{backgroundColor: '#8DF917', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-book" style={{fontSize: '24px', color: '#333'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: '#333'}}>Resources</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: '#333'}}>
      <li>Lighting setup templates</li>
      <li>Export settings checklist</li>
      <li>Render optimization guide</li>
    </ul>
  </div>

  <div style={{backgroundColor: '#1C75BC', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-link" style={{fontSize: '24px', color: 'white'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: 'white'}}>Links</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: 'white'}}>
      <li><a href="https://docs.blender.org/manual/en/latest/render/index.html" style={{color: 'white'}}>Rendering Documentation</a></li>
      <li><a href="/docs/module-4-use-cases/crime-scene-reconstruction" style={{color: 'white'}}>Crime Scene Reconstruction</a></li>
    </ul>
  </div>

  <div style={{backgroundColor: '#ff9f2c', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-play" style={{fontSize: '24px', color: 'white'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: 'white'}}>Videos</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: 'white'}}>
      <li>Lighting for documentation</li>
      <li>Render settings explained</li>
    </ul>
  </div>

</div>

---

## Course Complete! 🎉

Congratulations! You've completed the **Working with Models** course. You now have the essential skills to:

✅ Import 3D models  
✅ Organize complex scenes  
✅ Navigate and capture views  
✅ Measure and verify dimensions  
✅ Create professional renders  

### Next Steps

- **Practice:** Apply these skills to real case files
- **Advanced Learning:** Explore [Crime Scene Reconstruction](../crime-scene-reconstruction) workflow
- **Full Course:** Consider the complete [Modelers Track](/docs/intro) to learn modeling from scratch

:::tip Keep Learning
Join our community for ongoing support and advanced techniques. See [Support](/docs/1.%20introduction/support) for resources.
:::
