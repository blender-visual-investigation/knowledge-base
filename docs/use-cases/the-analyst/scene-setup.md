---
sidebar_position: 3
---

# Scene Setup & Organization

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>7 min read</span>
  </div>
</div>

---

## Introduction

Learn how to organize imported models into a clean, manageable scene. Proper organization makes it easier to work with complex reconstructions containing many objects.

## The Outliner Panel

The **Outliner** (top-right corner) is your scene's file browser. It shows all objects in a hierarchical list.

### Understanding the Outliner
- **Eye icon** 👁️ - Toggle visibility in viewport
- **Camera icon** 📷 - Toggle visibility in renders
- **Arrow** ▶️ - Expand/collapse hierarchy
- **Selected objects** highlighted in orange

## Exercise 1: Naming Objects

### Objective
Practice renaming objects for better organization.

### Steps
1. Import a model (or use the default scene)
2. In the **Outliner**, **double-click** an object name
3. Type a descriptive name (e.g., "Vehicle_Front", "Building_Main")
4. Press `Enter` to confirm
5. Repeat for all objects

### Why This Matters
Good naming prevents confusion in scenes with dozens or hundreds of objects.

## Collections

**Collections** are like folders for organizing related objects.

### Creating Collections

**Method 1: Via Outliner**
1. In the Outliner, click `Scene Collection`
2. Right-click → `New Collection`
3. Name it (e.g., "Vehicles", "Evidence", "Reference")

**Method 2: Via Menu**
```
Object → Collection → New Collection
```

### Moving Objects to Collections

1. In Outliner, **drag and drop** objects onto collection names
2. Or: Select object → `M` (Move to Collection) → Choose collection

## Exercise 2: Organize a Scene

### Objective
Create collections and organize multiple objects.

### Setup
Import 3-5 different models or add primitive objects (`Shift + A`)

### Steps
1. **Create collections:**
   - "Main_Subject"
   - "Reference_Objects"
   - "Measurements"

2. **Rename objects** with descriptive names

3. **Move objects** into appropriate collections (drag in Outliner)

4. **Test visibility** by clicking eye icons to hide/show collections

### Verification
✅ All objects have descriptive names  
✅ Objects grouped in logical collections  
✅ Can hide/show entire collections  

## Visibility Controls

### Hide Objects
- **H** - Hide selected objects
- **Alt + H** - Unhide all
- **Shift + H** - Hide all except selected (isolate)

### Eye Icon vs Camera Icon
- **Eye** 👁️ - Controls viewport visibility (what you see while working)
- **Camera** 📷 - Controls render visibility (what appears in final images)

## Layers and View Layers

For advanced organization, Blender uses **View Layers** (don't worry about this yet, but good to know it exists for complex scenes).

## Transform Properties

### Accessing Object Properties
1. Select an object
2. Look at **Properties Panel** (right side)
3. Click the **Object Properties** tab (orange cube icon)

### Key Properties
- **Location** (X, Y, Z coordinates)
- **Rotation** (angle on each axis)
- **Scale** (size multiplier)

## Exercise 3: Precise Positioning

### Objective
Practice moving objects to specific coordinates.

### Steps
1. Select an object
2. Open **Object Properties** (orange cube icon)
3. Under **Transform**, set:
   - Location X: `0`
   - Location Y: `0`
   - Location Z: `0`
4. The object moves to scene origin (center)

5. Try setting specific coordinates:
   - Location X: `5`
   - Location Y: `-3`
   - Location Z: `2`

### Verification
✅ Object moves when you change coordinates  
✅ Understand relationship between numbers and position  

## Snapping and Alignment

### Basic Snapping
- **Shift + Tab** - Toggle snapping on/off
- Useful for aligning objects to grid or each other

### Align to Grid
1. Select object
2. Press `G` (grab/move)
3. Hold `Ctrl` while moving - object snaps to grid points

## Common Organization Mistakes

### ❌ Using Default Names
**"Cube.001", "Cube.002", "Cube.003"** tells you nothing

### ✅ Use Descriptive Names
**"Wall_North", "Door_Entry", "Window_Left"** instantly recognizable

### ❌ Everything in Scene Collection
Hard to manage visibility and selection

### ✅ Logical Collection Structure
Groups related objects, easy to toggle visibility

## Quick Reference Card

### Organization Shortcuts
| Action | Shortcut |
|--------|---------|
| Rename object | Double-click in Outliner |
| Move to collection | `M` |
| Hide selected | `H` |
| Unhide all | `Alt + H` |
| Isolate selected | `Shift + H` |
| Focus selected | Numpad `.` (period) |

---

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px'}}>
  
  <div style={{backgroundColor: '#8DF917', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-book" style={{fontSize: '24px', color: '#333'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: '#333'}}>Resources</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: '#333'}}>
      <li>Scene organization templates</li>
      <li>Naming convention guide</li>
      <li>Collection hierarchy examples</li>
    </ul>
  </div>

  <div style={{backgroundColor: '#1C75BC', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-link" style={{fontSize: '24px', color: 'white'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: 'white'}}>Links</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: 'white'}}>
      <li><a href="https://docs.blender.org/manual/en/latest/scene_layout/collections/index.html" style={{color: 'white'}}>Collections Documentation</a></li>
      <li><a href="/docs/module-1-blender/1-3-working-in-blender/ui" style={{color: 'white'}}>Blender UI Guide</a></li>
    </ul>
  </div>

  <div style={{backgroundColor: '#ff9f2c', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-play" style={{fontSize: '24px', color: 'white'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: 'white'}}>Videos</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: 'white'}}>
      <li>Outliner workflow demonstration</li>
      <li>Collections best practices</li>
    </ul>
  </div>

</div>

---

## Next Steps

With your scene organized, learn **[Camera & Views](./camera-and-views)** to capture and document different perspectives.

:::tip Pro Tip
Spend time organizing your scene early - it saves hours of frustration later when working with complex reconstructions.
:::
