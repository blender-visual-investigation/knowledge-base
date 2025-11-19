---
sidebar_position: 2
---

# Basic Case: Model Inspection

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

<div style={{
  position: 'relative',
  paddingBottom: '56.25%',
  height: 0,
  overflow: 'hidden',
  maxWidth: '100%',
  marginBottom: '30px',
  borderRadius: '8px',
  boxShadow: '0 4px 6px rgba(0,0,0,0.1)'
}}>
  <iframe
    style={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      border: 0
    }}
    src="https://www.youtube.com/embed/CKRIjej1nMI"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>
</div>

## Introduction

This case study focuses on the practical aspects of working with an existing 3D model in Blender for visual investigation. It is designed for users who have Blender installed and are familiar with the basic interface but need to know how to extract useful information from a provided scene.

This section will cover:
- **Navigating** a provided 3D scene.
- **Measuring** distances and dimensions relevant to a case.
- **Rendering** useful images for reports or analysis.
- **Locating** object properties and metadata.

**Note:** This tutorial does *not* cover modeling or creating objects from scratch.

---

## Key Features

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px'}}>
  <div style={{
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{backgroundColor: '#8DF917', padding: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
      <i className="fa-solid fa-book" style={{fontSize: '20px', color: '#333'}}></i>
      <h4 style={{margin: 0, color: '#333'}}>Resources</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>Download the sample investigation model here (Link TBD).</p>
    </div>
  </div>
  
  <div style={{
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{backgroundColor: '#1C75BC', padding: '15px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px'}}>
      <i className="fa-solid fa-link" style={{fontSize: '20px'}}></i>
      <h4 style={{margin: 0}}>Links</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>Blender Navigation Shortcuts cheat sheet.</p>
    </div>
  </div>
</div>

---

## Main Content Section

### 1. Opening and Inspecting the Model

When you receive a 3D model for investigation, the first step is to open it and understand the scene scale and organization.
- Use `File > Open` to load the `.blend` file.
- Check the **Outliner** (top right) to see the list of objects in the scene.
- Verify the unit system in **Scene Properties** (usually set to Metric/Meters).

### 2. Finding Dimensions and Information

Visual investigations often require verifying physical sizes.
- **Object Dimensions:** Select an object and press `N` to open the Sidebar. Under the **Item** tab, you can see the bounding box dimensions (X, Y, Z).
- **Measure Tool:** Use the Measure tool in the toolbar (left side) to click and drag ruler lines across the scene to measure specific distances between points.

### 3. Rendering Useful Images

To document your findings, you need to export clear images.
- **Camera Setup:** Press `Numpad 0` to look through the camera. If no camera exists, add one with `Shift + A > Camera`.
- **View Lock:** To easily position the camera, press `N`, go to **View**, and check **Camera to View**. Now, navigating the viewport moves the camera.
- **Render:** Press `F12` to render the current view. Save the image via `Image > Save As`.

---

## Summary

By mastering these basic inspection techniques, you can effectively use Blender as a tool for verifying spatial data and generating visual evidence from existing 3D models, without needing to be a 3D modeler yourself.
