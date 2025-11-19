---
sidebar_position: 5
---

# Measurements & Annotations

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

Learn to measure distances, verify dimensions, and add annotations to 3D models - essential skills for forensic documentation and evidence presentation.

## Setting Up Units

**Always set units first** to match your real-world measurements.

### Configure Scene Units
1. Open **Properties Panel** (right side)
2. Click **Scene Properties** tab (📝 icon)
3. Under **Units:**
   - **Unit System:** Metric (or Imperial)
   - **Length:** Meters (or Feet)
   - **Unit Scale:** 1.000 (usually)

### Common Unit Settings
- **Forensics (Metric):** Meters with 3 decimal places
- **Forensics (Imperial):** Feet/Inches
- **Architecture:** Centimeters or Millimeters

## Exercise 1: Set Scene Units

### Objective
Configure proper units for measurement work.

### Steps
1. Open **Scene Properties** (📝 icon)
2. Set **Unit System** to **Metric**
3. Set **Length** to **Meters**
4. Import a model (or use default cube)
5. In viewport overlays, enable **Edge Length**

### Verification
✅ Scene Properties shows Metric/Meters  
✅ Can see measurements in viewport  

## Built-in Edge Length Display

### Enable Edge Length Overlay
1. Top-right viewport corner → **Overlays** dropdown
2. Under **Measurement**, check **Edge Length**
3. Select an object and press **Tab** (Edit Mode)
4. Select edges to see their lengths displayed

## The MeasureIt Add-on

**MeasureIt** is a powerful built-in add-on for measurements and annotations.

### Enable MeasureIt
1. `Edit` → `Preferences` → `Add-ons`
2. Search for **"MeasureIt"**
3. Check the box to enable
4. Close preferences

### MeasureIt Panel Location
- Press `N` to open sidebar in 3D Viewport
- Click **View** tab → **MeasureIt** section

## Exercise 2: Basic Measurements

### Objective
Measure distances between points in your model.

### Steps
1. **Enable MeasureIt** (as above)
2. In **MeasureIt panel** (N key → View tab)
3. Click **Add** → **Segment**
4. Click two points in viewport to create measurement
5. Measurement appears with distance value
6. Repeat to measure multiple distances

### Verification
✅ Measurement lines visible in viewport  
✅ Correct units displayed (meters/feet)  
✅ Can create multiple measurements  

## Types of Measurements

### Segment (Distance)
- Straight-line distance between two points
- Most common measurement type

### Angle
- Angle between three points
- Useful for verifying perpendicularity

### Area
- Surface area of selected faces
- Select faces in Edit Mode, use Area measurement

## Measurement Settings

In **MeasureIt panel:**

**Display Options:**
- **Show in Viewport** - Toggle measurement visibility
- **Font Size** - Adjust text size
- **Line Width** - Thickness of measurement lines
- **Color** - Change measurement line color

## Exercise 3: Verify Object Dimensions

### Objective
Check if a model's dimensions match expected real-world size.

### Setup
Import a model that should have known dimensions (e.g., a vehicle, room)

### Steps
1. **Switch to Edit Mode** (`Tab`)
2. **Select opposite corners** of object
3. **Create measurement** (MeasureIt → Add → Segment)
4. **Compare** to known real-world dimension
5. **Note discrepancies** for documentation

### Common Issues
- **Scale is wrong:** Object imported at wrong size
- **Units mismatch:** Model created in inches, imported as meters

### Verification
✅ Measurements match expected dimensions  
✅ Documented any size discrepancies  

## Measuring Between Objects

### Object Centers
1. Select first object → `Shift + S` → **Cursor to Selected**
2. `Shift + A` → **Empty** → **Plain Axes** (marks center)
3. Repeat for second object
4. Use MeasureIt between empties

### Bounding Box
- Viewport Overlays → Enable **Bounding Box**
- Shows rectangular boundary around objects

## Scaling Objects to Correct Size

If measurements reveal wrong scale:

### Method 1: Scale by Factor
1. Select object
2. Press `S` (scale)
3. Type scale factor (e.g., `0.01` to convert cm to m)
4. Press `Enter`

### Method 2: Scale to Exact Dimension
1. Select object
2. Press `S` then `X`, `Y`, or `Z` for axis
3. Type desired length
4. Press `Enter`

## Exercise 4: Fix Incorrect Scale

### Objective
Correct a model that imported at wrong size.

### Setup
Import a model, measure it, find it's 10x too large

### Steps
1. **Measure current size** (e.g., 50 meters)
2. **Calculate scale factor** (should be 5m → factor = 0.1)
3. **Select object** → `S` → `0.1` → `Enter`
4. **Re-measure** to verify (now 5 meters)
5. **Document correction** in your notes

### Verification
✅ Object now correct size  
✅ Measurements match specifications  

## Annotations with Grease Pencil

Add freehand annotations directly in 3D space.

### Enable Annotation Tool
1. Toolbar (left side) → **Annotate** tool (pencil icon)
2. Or press `D` to activate
3. Draw directly in viewport

### Annotation Options
- `D` - Activate annotation
- `D` + drag - Draw annotation
- `Shift + D` + drag - Erase annotations
- Line thickness/color in top bar

## Exercise 5: Annotated Documentation

### Objective
Create a fully annotated view for a report.

### Steps
1. **Set camera view** (Numpad `0`)
2. **Add measurements** to key dimensions
3. **Add text annotations:**
   - `Shift + A` → **Text**
   - Edit text content
   - Position near relevant features
4. **Add grease pencil arrows** pointing to important details
5. **Take screenshot** (`F12` or viewport screenshot)

### Verification
✅ Measurements clearly visible  
✅ Text labels describe key features  
✅ Arrows point to important details  
✅ Image suitable for report  

## Quick Reference Card

### Measurement Shortcuts
| Action | Command |
|--------|---------|
| Edit Mode | `Tab` |
| Open sidebar | `N` |
| Annotate tool | `D` |
| Add Empty | `Shift + A` → Empty |
| Scale | `S` |
| Cursor to selected | `Shift + S` → Cursor to Selected |

### Units Checklist
- [ ] Scene units set correctly (Metric/Imperial)
- [ ] Length unit appropriate (Meters/Feet)
- [ ] Unit scale = 1.000
- [ ] Edge Length overlay enabled
- [ ] MeasureIt add-on active

---

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px'}}>
  
  <div style={{backgroundColor: '#8DF917', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-book" style={{fontSize: '24px', color: '#333'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: '#333'}}>Resources</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: '#333'}}>
      <li>Measurement verification checklist</li>
      <li>Unit conversion table</li>
      <li>Annotation templates</li>
    </ul>
  </div>

  <div style={{backgroundColor: '#1C75BC', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-link" style={{fontSize: '24px', color: 'white'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: 'white'}}>Links</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: 'white'}}>
      <li><a href="https://docs.blender.org/manual/en/latest/addons/3d_view/measureit.html" style={{color: 'white'}}>MeasureIt Documentation</a></li>
      <li><a href="/docs/module-3-tools-addons-techniques/techniques/establishing-scale-dimension" style={{color: 'white'}}>Scale & Dimension Guide</a></li>
    </ul>
  </div>

  <div style={{backgroundColor: '#ff9f2c', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-play" style={{fontSize: '24px', color: 'white'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: 'white'}}>Videos</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: 'white'}}>
      <li>MeasureIt walkthrough</li>
      <li>Scaling techniques</li>
    </ul>
  </div>

</div>

---

## Next Steps

With measurement skills mastered, learn **[Presentations](./presentations)** to create professional outputs for reports and presentations.

:::tip Pro Tip
Always verify model scale before taking detailed measurements. A model at the wrong scale will give accurate relative measurements but incorrect absolute dimensions.
:::
