---
sidebar_position: 4
---

# Camera & Views

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

Learn to navigate 3D space, position cameras, and capture views for documentation and presentations.

## Viewport Navigation Basics

### Mouse Navigation
| Action | Control |
|--------|---------|
| **Rotate view** | Middle Mouse Button (drag) |
| **Pan view** | `Shift` + Middle Mouse Button |
| **Zoom** | Scroll Wheel |
| **Frame selected** | Numpad `.` (period) |

### Keyboard Navigation (Numpad)
| View | Key |
|------|-----|
| **Front** | Numpad `1` |
| **Right** | Numpad `3` |
| **Top** | Numpad `7` |
| **Camera** | Numpad `0` |
| **Opposite** | Numpad `9` (after any view) |

:::tip No Numpad?
Go to `Edit → Preferences → Input` and enable **"Emulate Numpad"** to use regular number keys.
:::

## Exercise 1: Navigate Around a Model

### Objective
Practice all basic navigation controls.

### Steps
1. Import a model or use default scene
2. **Rotate view** - Middle Mouse Button, drag around
3. **Zoom in/out** - Scroll wheel
4. **Pan left/right/up/down** - `Shift` + Middle Mouse Button
5. **Frame object** - Select object, press Numpad `.`
6. **Try preset views:**
   - Numpad `1` (Front)
   - Numpad `3` (Right)
   - Numpad `7` (Top)

### Verification
✅ Can view model from all angles  
✅ Can zoom to see details  
✅ Understand orthographic preset views  

## Perspective vs Orthographic

### Perspective View
- **Default view** - objects farther away appear smaller (like human vision)
- Toggle: Numpad `5`

### Orthographic View
- **No perspective distortion** - parallel lines stay parallel
- Better for measurements and technical documentation
- Toggle: Numpad `5` (again)

## The Camera Object

The **Camera** defines what will be captured in screenshots and renders.

### View Through Camera
- Press **Numpad `0`** to see camera view
- Red border = camera frame
- Gray area = outside camera view

### Select the Camera
- Click the camera object in viewport
- Or click "Camera" in Outliner

### Move Camera
1. **Select camera** (click on it)
2. Press **`G`** to grab/move
3. Press **`R`** to rotate
4. Press **`S`** to scale (zoom)

## Exercise 2: Position Camera

### Objective
Set up a camera to frame your subject.

### Steps
1. Press **Numpad `0`** to view through camera
2. **Navigate** (Middle Mouse, Zoom) to get desired view
3. Press **`Ctrl + Alt + Numpad 0`** to move camera to current view
4. Press **Numpad `0`** again to verify camera position
5. Adjust if needed

### Alternative Method
1. Select the camera object
2. Press `G` then move it
3. Press `R` then rotate it
4. Check view with Numpad `0`

### Verification
✅ Camera frames your subject  
✅ Subject is centered in camera view  
✅ All important details are visible  

## Camera Settings

### Access Camera Properties
1. Select camera
2. Open **Properties Panel** (right side)
3. Click **Camera Properties** tab (camera icon)

### Key Settings

**Focal Length**
- Default: 50mm (human-like perspective)
- Lower values (24mm): Wider view, more distortion
- Higher values (85mm+): Narrower view, less distortion

**Clipping Start/End**
- Controls what's visible based on distance
- Usually don't need to change

**Sensor Size**
- Affects field of view
- Default usually fine

## Orthographic Camera

For technical documentation, use orthographic camera:

1. Select camera
2. Camera Properties → **Type** → **Orthographic**
3. Adjust **Orthographic Scale** to control zoom

## Exercise 3: Multiple Camera Views

### Objective
Create multiple cameras for different perspectives.

### Steps
1. **Add new camera:** `Shift + A` → Camera
2. **Rename cameras** in Outliner:
   - "Camera_Overview"
   - "Camera_Detail"
   - "Camera_Top"
3. **Position each camera** at different angles
4. **Switch between cameras:**
   - Select desired camera in Outliner
   - `Ctrl + Numpad 0` to make it active
   - Or: Scene Properties → Camera (dropdown)

### Verification
✅ Multiple cameras exist in scene  
✅ Can switch active camera  
✅ Each shows different view  

## Taking Screenshots

### Method 1: Viewport Screenshot
1. Position view as desired (Numpad `0` for camera)
2. `Edit` → `Preferences` → `Add-ons` → Enable **"Import-Export: Images as Planes"**
3. Or: Use OS screenshot tool (`Windows + Shift + S` on Windows)

### Method 2: Render Image
1. Set up camera view (Numpad `0`)
2. `Render` → `Render Image` (or `F12`)
3. `Image` → `Save As...` to save

## Viewport Overlays

Control what's visible in viewport:

**Top-right corner icons:**
- **Overlays dropdown** - Toggle grid, axes, camera guides
- Useful to hide distractions for screenshots

## Exercise 4: Document Multiple Views

### Objective
Capture and save views for a report.

### Steps
1. **Front view:** Numpad `1`, take screenshot
2. **Top view:** Numpad `7`, take screenshot
3. **3/4 perspective:** Position camera, Numpad `0`, render (`F12`)
4. **Detail shot:** Zoom close on important feature, screenshot
5. **Save all images** to a documentation folder

### Verification
✅ Have front, top, and perspective views  
✅ Images clearly show subject  
✅ Files saved with descriptive names  

## Quick Reference Card

### Navigation Shortcuts
| Action | Shortcut |
|--------|----------|
| Rotate view | Middle Mouse (drag) |
| Pan view | `Shift` + Middle Mouse |
| Zoom | Scroll Wheel |
| Frame selected | Numpad `.` |
| Front view | Numpad `1` |
| Right view | Numpad `3` |
| Top view | Numpad `7` |
| Camera view | Numpad `0` |
| Toggle ortho/persp | Numpad `5` |
| Move camera to view | `Ctrl + Alt + Numpad 0` |

---

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px'}}>
  
  <div style={{backgroundColor: '#8DF917', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-book" style={{fontSize: '24px', color: '#333'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: '#333'}}>Resources</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: '#333'}}>
      <li>Camera setup templates</li>
      <li>Screenshot workflow guide</li>
      <li>Viewport navigation cheat sheet</li>
    </ul>
  </div>

  <div style={{backgroundColor: '#1C75BC', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-link" style={{fontSize: '24px', color: 'white'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: 'white'}}>Links</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: 'white'}}>
      <li><a href="https://docs.blender.org/manual/en/latest/editors/3dview/navigate/camera_view.html" style={{color: 'white'}}>Camera View Docs</a></li>
      <li><a href="/docs/module-3-tools-addons-techniques/techniques/camera-matching" style={{color: 'white'}}>Camera Matching Technique</a></li>
    </ul>
  </div>

  <div style={{backgroundColor: '#ff9f2c', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-play" style={{fontSize: '24px', color: 'white'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: 'white'}}>Videos</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: 'white'}}>
      <li>Camera navigation tutorial</li>
      <li>Screenshot best practices</li>
    </ul>
  </div>

</div>

---

## Next Steps

Now that you can navigate and capture views, learn **[Measurements](./measurements)** to verify dimensions and add annotations.

:::tip Pro Tip
For forensic documentation, always capture orthographic views (top, front, side) in addition to perspective views - these provide accurate proportional reference.
:::
