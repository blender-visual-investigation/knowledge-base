# Developer Guide: Interactive Elements & Components

This guide documents all custom interactive components built for the Blender for Visual Investigation knowledge base. It covers both 3D visualization components and UI/data display components.

---

## Table of Contents

1. [BlenderViewport Wrapper](#the-blenderviewport-component)
2. [Interactive 3D Visualizations](#interactive-3d-visualizations)
   - Interactive1D
   - Interactive2D
   - Interactive3D
   - InteractiveTransform3D
   - InteractiveCamera
   - ModelingComparison3D
3. [UI Components](#ui-components)
   - FeatureCard & FeatureCardGrid
   - AddonTable
   - ToolTable
   - TechniqueTable
4. [Styling Guidelines](#styling-guidelines)
5. [Creating New Components](#creating-a-new-interactive-component)

---

## The `BlenderViewport` Component

**Location:** `src/components/BlenderViewport/index.js`

The `BlenderViewport` wrapper provides a consistent, Blender-inspired UI frame for all interactive 3D and 2D visualizations. It includes:
- A header with dimension tabs (Point/Vertex, Line/Edge, Plane/Face, Volume/Mesh, Topology)
- A sidebar with Transform properties (Location, Rotation, Scale)
- A statistics panel (Points/Verts, Segments/Edges)
- A timeline/footer with playback controls
- Support for custom controls via the `extraSidebarContent` prop

### Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | required | The main content area (Canvas, SVG, div). |
| `title` | string | `"3D Viewport"` | The title displayed in the header. |
| `activeTab` | string | `"Mesh (3D)"` | The active tab name for highlighting. |
| `stats` | object | `{ verts: 0, edges: 0, ... }` | Scene statistics to display in the sidebar. |
| `location` | object | `{x:0, y:0, z:0}` | The position vector to display/edit. |
| `rotation` | object | `{x:0, y:0, z:0}` | The rotation vector to display/edit. |
| `scale` | object | `null` | The scale vector. If `null`, the scale section is hidden. |
| `onLocationChange` | function | `undefined` | Callback `(axis, value) => void` when location changes. |
| `onRotationChange` | function | `undefined` | Callback `(axis, value) => void` when rotation changes. |
| `onScaleChange` | function | `undefined` | Callback `(axis, value) => void` when scale changes. |
| `extraSidebarContent` | ReactNode | `null` | Custom controls to render in the sidebar. |
| `disableTransform` | boolean | `false` | Grays out the transform panel. |
| `disableYZ` | boolean | `false` | Disables Y and Z axis inputs (for 1D demos). |
| `disableScale` | boolean | `false` | Disables the scale inputs. |
| `use1DLabels` | boolean | `false` | Uses "Points/Segments" instead of "Verts/Edges". |
| `nurbsMode` | boolean | `false` | Adjusts labels for NURBS (e.g., "Control Points"). |
| `timelineFrame` | number | `1` | Current frame/step number. |
| `totalFrames` | number | `250` | Total frames/steps. |
| `isPlaying` | boolean | `false` | Whether autoplay is active. |
| `onPlayPause` | function | `null` | Callback for play/pause button. |
| `onPrevStep` | function | `null` | Callback for previous step button. |
| `onNextStep` | function | `null` | Callback for next step button. |

---

## Interactive 3D Visualizations

### Interactive1D

**Location:** `src/components/Interactive1D/index.js`

A step-by-step visualization teaching 1D space concepts:
- Step 0: The Origin (0D point)
- Step 1: Coordinates (number line with ticks)
- Step 2: The X Axis (red axis line)
- Step 3: Position animation (point moving along X)
- Step 4: The Line Segment (two points connected)

**Features:**
- Autoplay with 6-second intervals per step
- Animated point movement in step 3
- Info box overlay explaining each concept
- Uses orthographic camera for true 2D view

**Usage in MDX:**
```jsx
import Interactive1D from '@site/src/components/Interactive1D';

<Interactive1D />
```

---

### Interactive2D

**Location:** `src/components/Interactive2D/index.js`

Builds on 1D to teach 2D space concepts:
- Step 0: The Origin (0,0)
- Step 1: The X Axis (red horizontal)
- Step 2: The Y Axis (green vertical) + grid
- Step 3: Position in 2D (point moving in circle)
- Step 4: The Triangle (first polygon)
- Step 5: The Quad/Face (two triangles forming a quad)

**Features:**
- Grid helper appears in step 2
- Circular motion animation in step 3
- Pulsing highlight on new geometry
- Different colors for first (orange) and second (blue) triangles

**Usage in MDX:**
```jsx
import Interactive2D from '@site/src/components/Interactive2D';

<Interactive2D />
```

---

### Interactive3D

**Location:** `src/components/Interactive3D/index.js`

The culmination—teaching 3D space concepts:
- Step 0: The Face (quad from 2D)
- Step 1: The Z Axis (blue depth axis)
- Step 2: Depth (point animating along Z)
- Step 3: The Prism (triangular extrusion)
- Step 4: The Cube (8 verts, 12 edges, 6 faces)
- Step 5: The Mesh (icosahedron with rotation)

**Features:**
- OrbitControls for user camera interaction
- Perspective camera for true 3D viewing
- XY and XZ grid planes
- Pulsing animations on geometry
- Rotating mesh demonstration in final step

**Usage in MDX:**
```jsx
import Interactive3D from '@site/src/components/Interactive3D';

<Interactive3D />
```

---

### InteractiveTransform3D

**Location:** `src/components/InteractiveTransform3D/index.js`

A sandbox for exploring 3D transformations:
- Fully editable Location (X, Y, Z)
- Fully editable Rotation (X, Y, Z in degrees)
- Fully editable Scale (X, Y, Z)
- Orange cube with neon outline
- Real-time updates as values change

**Features:**
- Bidirectional binding: edit inputs OR drag in viewport
- OrbitControls for camera
- Grid helpers on XY and XZ planes
- Axis visualization (red X, green Y, blue Z)

**Usage in MDX:**
```jsx
import InteractiveTransform3D from '@site/src/components/InteractiveTransform3D';

<InteractiveTransform3D />
```

---

### InteractiveCamera

**Location:** `src/components/InteractiveCamera/index.js`

Demonstrates camera optics and field of view:
- Adjustable focal length (10mm–200mm)
- Selectable sensor sizes (Full Frame, APS-C, Micro 4/3, etc.)
- Real-time FOV calculation
- Visible camera frustum (yellow lines)
- Target objects to see what's "in frame"

**Features:**
- Three.js CameraHelper for frustum visualization
- Camera body and lens 3D models
- Calculated properties panel (FOV, sensor dimensions, crop factor)
- OrbitControls to view the setup from any angle

**Sensor Presets:**
- Full Frame (35mm): 36 × 24 mm
- APS-C (Canon): 22.3 × 14.9 mm
- APS-C (Nikon): 22.2 × 14.8 mm
- Micro 4/3: 17.3 × 13 mm
- 1 inch: 13.2 × 8.8 mm
- iPhone Main (1/1.28"): ~9.8 × 7.3 mm

**Usage in MDX:**
```jsx
import InteractiveCamera from '@site/src/components/InteractiveCamera';

<InteractiveCamera />
```

---

### ModelingComparison3D

**Location:** `src/components/ModelingComparison3D/index.js`

Side-by-side comparison of Polygonal vs NURBS modeling:
- Left viewport: Polygonal curve (red, straight line segments)
- Right viewport: NURBS curve (blue, smooth mathematical curve)
- Same control points, different interpolation

**Features:**
- Uses Three.js NURBSCurve from examples
- OrbitControls on both viewports
- Visual demonstration of the fundamental difference

**Usage in MDX:**
```jsx
import ModelingComparison3D from '@site/src/components/ModelingComparison3D';

<ModelingComparison3D />
```

---

## UI Components

### FeatureCard & FeatureCardGrid

**Location:** `src/components/FeatureCard/index.js`, `src/components/FeatureCardGrid/index.js`

Styled cards for highlighting key features, resources, or categories.

**FeatureCard Props:**

| Prop | Type | Description |
|------|------|-------------|
| `title` | string | Card title |
| `color` | string | Named color ('green', 'blue', 'red') or hex color |
| `headerColor` | string | (deprecated) Use `color` instead |
| `textColor` | string | Header text color (auto-determined if omitted) |
| `icon` | string | Font Awesome class (e.g., `'fa-solid fa-book'`) |
| `variant` | string | Style variant: `'default'`, `'glassmorphism'`, `'gradient'`, `'material'`, `'minimal'`, `'premium'` |
| `children` | ReactNode | Card body content |

**Usage in MDX:**
```jsx
import FeatureCard from '@site/src/components/FeatureCard';
import FeatureCardGrid from '@site/src/components/FeatureCardGrid';

<FeatureCardGrid>
  <FeatureCard title="Videos" color="red" icon="fa-solid fa-play">
    <p>Video tutorials and demonstrations.</p>
  </FeatureCard>
  <FeatureCard title="Resources" color="green" icon="fa-solid fa-book">
    <p>Documentation and guides.</p>
  </FeatureCard>
  <FeatureCard title="Links" color="blue" icon="fa-solid fa-link">
    <p>External resources.</p>
  </FeatureCard>
</FeatureCardGrid>
```

---

### AddonTable

**Location:** `src/components/AddonTable/index.js`

A sortable, filterable table for displaying Blender add-ons.

**Features:**
- Text search across name, category, and tags
- Filter by category dropdown
- Filter by tag dropdown
- Sortable columns (Name, Category, Price)
- Clickable tags for quick filtering
- Download links

**Data Format:**
```javascript
const addonData = [
  {
    title: "Addon Name",
    slug: "/path/to/addon-page",
    category: "Modeling",
    tags: ["free", "geometry"],
    price: "Free",
    description: "Short description",
    download_link: "https://..."
  },
  // ...
];
```

**Usage in MDX:**
```jsx
import AddonTable from '@site/src/components/AddonTable';

<AddonTable data={addonData} />
```

---

### ToolTable

**Location:** `src/components/ToolTable/index.js`

Similar to AddonTable but for external tools (non-Blender software).

**Same features as AddonTable:** search, filter, sort, clickable tags, download links.

**Usage in MDX:**
```jsx
import ToolTable from '@site/src/components/ToolTable';

<ToolTable data={toolData} />
```

---

### TechniqueTable

**Location:** `src/components/TechniqueTable/index.js`

Table for listing investigative techniques.

**Columns:** Name, Category, Tags, Description (no price or download link).

**Usage in MDX:**
```jsx
import TechniqueTable from '@site/src/components/TechniqueTable';

<TechniqueTable data={techniqueData} />
```

---

## Styling Guidelines

To maintain visual consistency across the knowledge base:

### Colors

| Use Case | Color |
|----------|-------|
| Panel backgrounds | `#1d1d1d` |
| Header/sidebar backgrounds | `#2d2d2d` |
| Primary text | `#e0e0e0` |
| Secondary text/labels | `#888` or `#aaa` |
| Accent (Blender Orange) | `#e77e22` |
| X Axis (Red) | `#ff5252` |
| Y Axis (Green) | `#2dc66b` |
| Z Axis (Blue) | `#308ce7` |

### Typography

- **System fonts:** `-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif`
- **UI elements:** 11px–12px
- **Labels:** 10px–11px, lighter weight
- **Titles:** 14px, bold

### Info Boxes

For in-viewport explanatory overlays:
```javascript
{
  position: 'absolute',
  bottom: 16,
  left: 16,
  background: 'rgba(29, 29, 29, 0.95)',
  backdropFilter: 'blur(4px)',
  padding: '12px 16px',
  borderRadius: 8,
  border: '1px solid #444',
  maxWidth: 320,
  zIndex: 10
}
```

---

## Creating a New Interactive Component

### Step 1: Create Component File

Create `src/components/MyNewConcept/index.js`:

```javascript
import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import BlenderViewport from '../BlenderViewport';

export default function MyNewConcept() {
  const mountRef = useRef(null);
  const [step, setStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  // ... Three.js setup and animation logic

  return (
    <BlenderViewport
      title="My New Concept"
      activeTab="Mesh (3D)"
      stats={{ verts: 8, edges: 12 }}
      location={{ x: 0, y: 0, z: 0 }}
      timelineFrame={step + 1}
      totalFrames={5}
      isPlaying={isPlaying}
      onPlayPause={() => setIsPlaying(!isPlaying)}
      onPrevStep={() => setStep(s => Math.max(0, s - 1))}
      onNextStep={() => setStep(s => Math.min(4, s + 1))}
    >
      <div ref={mountRef} style={{ width: '100%', height: '100%' }} />
    </BlenderViewport>
  );
}
```

### Step 2: Add Custom Controls (Optional)

```javascript
const customControls = (
  <div>
    <div style={{ fontSize: 11, fontWeight: 600, color: '#e77e22', marginBottom: 8 }}>
      My Settings
    </div>
    <input 
      type="range" 
      min="0" 
      max="100"
      value={myParam} 
      onChange={(e) => setMyParam(Number(e.target.value))} 
    />
  </div>
);

// Then pass to BlenderViewport:
<BlenderViewport extraSidebarContent={customControls}>
```

### Step 3: Use in Documentation

```jsx
import MyNewConcept from '@site/src/components/MyNewConcept';

<MyNewConcept />
```

---

## Reference Implementations

For complete working examples, see:

- **Step-based animation:** `src/components/Interactive1D/index.js`
- **Full transform controls:** `src/components/InteractiveTransform3D/index.js`
- **Camera optics:** `src/components/InteractiveCamera/index.js`
- **Side-by-side comparison:** `src/components/ModelingComparison3D/index.js`
- **Data tables:** `src/components/AddonTable/index.js`
