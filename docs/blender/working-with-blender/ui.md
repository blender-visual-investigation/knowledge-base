---
title: "Blender from Scratch: Object Mode"
description: Exploring the User Interface
sidebar_position: 1
---

# Exploring the User Interface

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

This guide walks you through Blender's user interface and fundamental operations. You'll learn how to navigate the viewport, select and transform objects, and work with the different panels and workspaces that make up Blender's workspace.

---

import FeatureCard from '@site/src/components/FeatureCard';
import FeatureCardGrid from '@site/src/components/FeatureCardGrid';

<FeatureCardGrid>
  <FeatureCard 
    title="Resources" 
    headerColor="#6dfb72"
    textColor="#333"
    icon="fa-solid fa-book"
  >
    <p style={{margin: 0}}>Official Blender documentation on interface, navigation, and basic operations.</p>
  </FeatureCard>
  
  <FeatureCard 
    title="Template File" 
    headerColor="#1C75BC"
    icon="fa-solid fa-download"
  >
    <p style={{margin: 0}}><a href="#" style={{color: 'white', textDecoration: 'none', fontWeight: 'bold'}}>Download starter template</a> to follow along with the exercises.</p>
  </FeatureCard>
  
  <FeatureCard 
    title="Practice" 
    headerColor="#EF4C3C"
    icon="fa-solid fa-play"
  >
    <p style={{margin: 0}}>Hands-on exercises to build muscle memory for common workflows.</p>
  </FeatureCard>
</FeatureCardGrid>

---

## The Blender Interface

### Main Areas

- **3D Viewport**: Where you work with 3D objects
- **Outliner**: Hierarchical view of scene objects
- **Properties Panel**: Object and scene settings
- **Timeline**: Animation controls

### Navigation

**Mouse Navigation** (default):
- **Middle Mouse Button (MMB)**: Rotate view
- **Shift + MMB**: Pan view
- **Scroll Wheel**: Zoom in/out
- **Numpad**: Quick view angles (1=Front, 3=Right, 7=Top)

**Keyboard Shortcuts**:
- `G`: Grab (move)
- `R`: Rotate
- `S`: Scale
- `X/Y/Z`: Constrain to axis
- `Tab`: Toggle Edit Mode
- `Ctrl + Z`: Undo

### Selecting Objects

- **Left Click**: Select object
- **Shift + Left Click**: Add to selection
- **A**: Select all
- **Alt + A`: Deselect all
- **B`: Box select
- **C**: Circle select

## Workspaces

Blender offers predefined workspaces for different tasks:

- **Layout**: General purpose
- **Modeling**: 3D modeling tools
- **Shading**: Materials and textures
- **Animation**: Timeline and keyframes
- **Rendering**: Render settings and output

---

## Hands-On Exercises

### Exercise 1: First Steps Practice

1. Select the default cube
2. Press `G` to move it
3. Press `R` to rotate it  
4. Press `S` to scale it
5. Press `X` and confirm to delete it
6. Press `Shift + A` to add a new object

## Exercise 2: Creating a Simple Scene

### Objective
Build a basic scene with multiple objects.

### Steps

1. Add a plane: `Shift + A` → Mesh → Plane
2. Scale it: `S` → `10` → Enter (makes it larger)
3. Add a cube: `Shift + A` → Mesh → Cube
4. Move cube up: `G` → `Z` → `1` → Enter
5. Add a light: `Shift + A` → Light → Point
6. Move light: `G` → `Z` → `5` → Enter

## Exercise 3: Camera Setup

### Objective
Learn to position and align the camera.

### Steps

1. Select the camera (click on it in 3D view or Outliner)
2. Press `Numpad 0` to view through the camera
3. Position camera: `G` then move as needed
4. Point at center: Select camera → Add Constraint → Track To → Target: (select your main object)

## Exercise 4: Measurement Practice

### Objective
Work with accurate measurements for forensic work.

### Steps

1. Enable measurements: Edit → Preferences → Interface → Display → Edge Length
2. Tab into Edit Mode
3. Select edges and observe dimensions in the top-left
4. Practice creating objects with specific dimensions

## Tips for Forensic Work

- Always work with real-world units (meters, centimeters)
- Use scene scale settings: Properties → Scene → Units
- Enable measurement overlays
- Document your camera settings
- Save incremental versions of your work

## Common Beginner Mistakes

- Forgetting to save regularly
- Working without reference dimensions
- Not organizing objects in the Outliner
- Ignoring the active object vs selected objects
- Applying transformations in Object Mode vs Edit Mode

---

## Next Steps

Practice these exercises until they become second nature. Speed and precision come with repetition. Use the template file above to have a pre-configured workspace to experiment with.
