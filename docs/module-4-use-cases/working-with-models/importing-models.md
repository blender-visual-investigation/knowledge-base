---
sidebar_position: 2
---

# Importing Models

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

Learn how to import 3D models from various file formats into Blender. This is the first essential skill for working with models created by others.

## Common 3D File Formats

| Format | Extension | Best For | Import Support |
|--------|-----------|----------|----------------|
| **Wavefront OBJ** | `.obj` | General purpose, widely compatible | ✅ Excellent |
| **FBX** | `.fbx` | Industry standard, animation support | ✅ Excellent |
| **Blender Native** | `.blend` | Full Blender feature support | ✅ Perfect |
| **STL** | `.stl` | 3D printing, simple geometry | ✅ Good |
| **glTF/GLB** | `.gltf`, `.glb` | Web/AR/VR applications | ✅ Excellent |
| **Collada** | `.dae` | Cross-platform exchange | ✅ Good |

## Basic Import Process

### Step 1: Open Blender
1. Launch Blender
2. You'll see the default startup scene with a cube, camera, and light
3. For a clean start: **Delete the default cube** (Select it → `X` → Delete)

### Step 2: Import Your Model

**Method 1: File Menu**
```
File → Import → [Choose Format] → Navigate to your file → Import
```

**Method 2: Drag and Drop** (for supported formats)
- Simply drag the file from your file explorer into Blender's viewport

### Step 3: Verify Import
- The model should appear in the 3D viewport
- Check the **Outliner** (top-right panel) to see imported objects
- Use **Middle Mouse Button** to rotate the view and inspect the model

## Exercise 1: Import an OBJ File

### Objective
Practice importing a basic OBJ file and verifying it loaded correctly.

### Steps
1. **Download a sample OBJ model** (or use one provided by your team)
2. In Blender: `File` → `Import` → `Wavefront (.obj)`
3. Navigate to your file and click **Import OBJ**
4. **Rotate your view** (Middle Mouse Button) to see the model
5. Check the **Outliner** - you should see the imported object listed

### Verification
✅ Model visible in viewport  
✅ Object appears in Outliner  
✅ Can rotate view around the model  

## Import Options Explained

When importing, you'll see an options panel. Key settings:

### For OBJ Files
- **Forward/Up Axis**: Controls orientation (usually Y Forward, Z Up)
- **Split by Object**: Creates separate objects for different parts
- **Image Search**: Looks for texture files in nearby folders

### For FBX Files
- **Manual Orientation**: Check if model imports sideways/upside down
- **Use Pre/Post Rotation**: Adjust if orientation is wrong
- **Import Normals**: Usually keep enabled

## Common Import Issues

### Problem: Model Appears Too Large/Small
**Solution:** After import, press `S` (scale), type a number (e.g., `0.1` to shrink or `10` to enlarge), then `Enter`

### Problem: Model Is Missing Textures
**Solution:** 
1. Ensure texture image files are in the same folder as the 3D file
2. Re-import with "Image Search" enabled
3. Check the Shading workspace to see if materials loaded

### Problem: Model Imports Sideways or Upside Down
**Solution:** 
1. Select the model
2. Press `R` (rotate), then `X`, `Y`, or `Z` for axis
3. Type `90` or `-90` for 90-degree rotation

### Problem: Can't Find Import Option
**Solution:** Make sure you have the correct file format selected in `File → Import`

## Exercise 2: Import Multiple Formats

### Objective
Practice importing different file types and understanding their differences.

### Steps
1. **Import an OBJ file** (as in Exercise 1)
2. **Delete it** (Select → `X` → Delete)
3. **Import an FBX file** using `File → Import → FBX (.fbx)`
4. **Delete it**
5. **Import a BLEND file** using `File → Open` (this replaces the entire scene)

### Observations
- Notice how different formats behave
- FBX often includes cameras and lights
- BLEND files replace your entire scene

## Quick Reference Card

### Import Shortcuts
| Action | Command |
|--------|---------|
| Import menu | `File → Import` |
| Delete selected | `X` → Delete |
| Rotate view | Middle Mouse Button (drag) |
| Pan view | `Shift` + Middle Mouse Button |
| Frame selected | Numpad `.` (period) |
| Zoom | Scroll Wheel |

---

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px'}}>
  
  <div style={{backgroundColor: '#8DF917', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-book" style={{fontSize: '24px', color: '#333'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: '#333'}}>Resources</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: '#333'}}>
      <li>Free 3D models: Sketchfab, TurboSquid</li>
      <li>File format comparison chart</li>
      <li>Import troubleshooting guide</li>
    </ul>
  </div>

  <div style={{backgroundColor: '#1C75BC', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-link" style={{fontSize: '24px', color: 'white'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: 'white'}}>Links</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: 'white'}}>
      <li><a href="https://docs.blender.org/manual/en/latest/files/import_export.html" style={{color: 'white'}}>Official Import Docs</a></li>
      <li><a href="/docs/3D%20context/5-file-types" style={{color: 'white'}}>3D File Types Guide</a></li>
    </ul>
  </div>

  <div style={{backgroundColor: '#ff9f2c', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-play" style={{fontSize: '24px', color: 'white'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: 'white'}}>Videos</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: 'white'}}>
      <li>File import walkthrough</li>
      <li>Troubleshooting common issues</li>
    </ul>
  </div>

</div>

---

## Next Steps

Now that you can import models, move on to **[Scene Setup](./scene-setup)** to learn how to organize and manage your imported models.

:::tip Pro Tip
Always keep a copy of your original 3D files in a separate folder before importing into Blender. This ensures you can re-import if needed.
:::
