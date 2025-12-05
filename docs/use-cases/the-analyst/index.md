---
sidebar_position: 1
---

# Working with Models: Non-Modelers Track

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>3 min read</span>
  </div>
</div>

---

## Overview

This practical course is designed for professionals who need to **work with 3D models created by others** - without learning to model from scratch. If you're a legal professional, manager, analyst, or investigator who needs to review, measure, and present 3D evidence, this track is for you.

## Who This Is For

- Legal professionals reviewing 3D evidence
- Managers overseeing visual investigation projects
- Analysts working with reconstruction data
- Anyone who needs to present 3D models but not create them

## What You'll Learn

This streamlined course covers only what you need:

✅ **Import models** in various file formats  
✅ **Navigate and organize** 3D scenes  
✅ **Position cameras** for clear views  
✅ **Take measurements** and verify dimensions  
✅ **Export screenshots** and renders for reports  

❌ **NOT covered:** Modeling techniques, mesh editing, geometry creation

## Prerequisites

- **Blender installed** (see [Installation Guide](/docs/blender))
- **Basic computer skills** (file management, mouse/keyboard)
- **No 3D experience required**

## Course Structure

This track consists of 5 focused lessons with hands-on exercises:

1. **[Importing Models](./importing-models)** - Load 3D files into Blender
2. **[Scene Setup](./scene-setup)** - Organize and manage your workspace
3. **[Camera & Views](./camera-and-views)** - Navigate and capture perspectives
4. **[Measurements](./measurements)** - Verify dimensions and add annotations
5. **[Presentations](./presentations)** - Create professional outputs for reports

## Time Commitment

- **Total learning time:** 3-4 hours
- **Each lesson:** 30-45 minutes
- **Practice exercises:** 15-20 minutes per lesson

## Learning Approach

Each lesson includes:
- Clear step-by-step instructions
- Practical exercises with verification steps
- Screenshots and visual guides
- Common mistakes to avoid
- Quick reference cards

---

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginTop: '30px'}}>
  
  <div style={{backgroundColor: '#8DF917', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-book" style={{fontSize: '24px', color: '#333'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: '#333'}}>Resources</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: '#333'}}>
      <li>Sample 3D models for practice</li>
      <li>Quick reference cards (printable)</li>
      <li>Keyboard shortcut guide</li>
    </ul>
  </div>

  <div style={{backgroundColor: '#1C75BC', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-link" style={{fontSize: '24px', color: 'white'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: 'white'}}>Links</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: 'white'}}>
      <li><a href="https://www.blender.org/download/" style={{color: 'white'}}>Download Blender</a></li>
      <li><a href="/knowledge-base/docs/introduction/support" style={{color: 'white'}}>Get Support</a></li>
      <li><a href="https://notebooklm.google.com/notebook/fb5da8b0-98c0-4a37-a957-7e45325fe62a" style={{color: 'white'}}>AI Learning Assistant</a></li>
    </ul>
  </div>

  <div style={{backgroundColor: '#ff9f2c', padding: '20px', borderRadius: '8px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)'}}>
    <div style={{display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '12px'}}>
      <i className="fa-solid fa-play" style={{fontSize: '24px', color: 'white'}}></i>
      <h3 style={{margin: 0, fontSize: '18px', color: 'white'}}>Videos</h3>
    </div>
    <ul style={{margin: 0, paddingLeft: '20px', color: 'white'}}>
      <li>Blender interface walkthrough</li>
      <li>Import workflow demonstration</li>
      <li>Measurement tools tutorial</li>
    </ul>
  </div>

</div>

---

## Ready to Start?

Begin with **[Lesson 1: Importing Models](./importing-models)** to load your first 3D file into Blender.

:::tip Course Tip
Keep Blender open while following the lessons. Practice each exercise immediately after reading the instructions - hands-on learning is the fastest path to proficiency.
:::



This is a pivot from **"The Creator"** path to **"The Analyst"** path. This is a very common scenario in newsrooms and legal teams: one specialist builds the scene, but five other people need to investigate it, verify it, or take screenshots from it.

### The Strategy: "Forensic 3D Literacy"
To answer your specific question: **Yes, you should absolutely include the broader 3D context.**

An analyst does not need to know *how* to extrude a polygon, but they strictly need to know *what* a polygon is. If they don't understand the difference between a raw LiDAR scan and a reconstructed proxy, they might misinterpret a jagged geometry artifact as real-world damage on a vehicle.

**The Goal:** Not "Modeling Proficiency," but **"3D Literacy and Interrogation."**

Here is a curriculum designed specifically for the **Non-Modeler / Analyst**.

---

## Course Title: Forensic 3D Literacy & Analysis

### Module 1: The Mental Framework (Theory Only)
*Before opening the software, we define what we are looking at.*

* **1.1 The Nature of the Data:**
    * **The Two Paradigms:** Briefly explaining Polygons vs. NURBS (so they know why curves look "faceted").
    * **Input Types:** The difference between a **Scan** (Reality Capture/Point Cloud) and a **Model** (Manual Interpretation). *Crucial for judging reliability.*
    * **The "It Depends" Matrix:** Understanding that a model might be built for *speed* (VR) or *precision* (Analysis), and how to identify which one they are looking at.
* **1.2 The Trust Chain:**
    * How to check file metadata.
    * Understanding scale (Why 1 unit must equal 1 meter).

### Module 2: Navigation & "Do No Harm"
*Blender is scary. The first goal is overcoming the fear of breaking the file.*

* **2.1 The "Safe Mode" Interface:**
    * Stripping the UI: Hiding the timeline, animation, and sculpting tabs.
    * The **Outliner**: How to find objects.
    * **Collections:** How to hide/unhide roofs, walls, or debris to see inside.
    * **Selection:** How to select objects without accidentally moving them (Locking transforms).
* **2.2 Viewport Navigation:**
    * Orbit, Pan, Zoom.
    * **Fly/Walk Navigation:** Moving through a scene like a video game (essential for checking line-of-sight).
    * **View Switching:** Jumping to Top/Front/Side views for orthographic analysis.

### Module 3: Visual Interrogation
*Changing how the data looks to reveal different information.*

* **3.1 Viewport Shading Modes:**
    * **Wireframe:** Seeing through objects (checking for hidden assets).
    * **Solid:** Checking basic geometry.
    * **Material Preview:** Seeing textures.
    * **Rendered:** Seeing lighting and shadows.
* **3.2 Lighting & Atmosphere:**
    * Moving the "Sun" to check shadows at different times of day.
    * Adjusting exposure (seeing into dark corners).
* **3.3 The Camera:**
    * Looking through the "Witness Camera" (Numpad 0).
    * Adjusting focal length (understanding how zoom compresses space).
    * **Background Images:** Toggling the opacity of the reference photo to check if the model aligns with the evidence.

### Module 4: Measurement & Verification
*The core investigative task.*

* **4.1 The Ruler Tool:**
    * Quick point-to-point measurements (Distance).
    * Measuring angles (Trajectories).
* **4.2 The "MeasureIt" Addon (or similar):**
    * Displaying live dimensions for reports.
* **4.3 Verification Checks:**
    * Checking "Face Orientation" (Is the wall inside out?).
    * Checking "Scale" (Is the car actually 4 meters long, or is the scale unapplied?).

### Module 5: Output & Reporting
*Getting the evidence out of Blender.*

* **5.1 The Grease Pencil (Annotations):**
    * Drawing circles/arrows directly in 3D space to highlight evidence.
    * Writing notes on the screen.
* **5.2 Viewport Rendering:**
    * Taking high-res screenshots (Playblast) vs. Full Cycle Renders.
    * Exporting clean images with measurements visible.
    * Making a simple turntable animation (if needed for presentation).

---

## The "Anti-Curriculum": What to EXCLUDE
To keep this accessible, you must rigorously exclude the creation tools. This audience should **never** enter:
* **Edit Mode:** No vertex pushing, extruding, or beveling.
* **Sculpt Mode:** No brushes.
* **UV Editing / Shading Nodes:** They don't need to make materials.
* **Animation Graph Editor:** Too complex.
* **Modifiers:** They should know they *exist* (e.g., "This wall is smooth because of a modifier"), but they shouldn't be adding them.

## Summary of the Approach
This curriculum treats Blender not as a creative studio, but as a **Viewer & Verification Tool**.

The narrative for this group is: *"You don't need to build the crime scene. You just need to walk through it, measure the distance between the suspect and the victim, check if the shadows match the witness statement, and take a photo for your report."*

### Next Step
Would you like me to draft a specific "Cheat Sheet" or "Interface Setup Guide" for this Analyst persona, showing which buttons they should focus on and which they should ignore?


Here is the **"Analyst’s Field Guide"** for Blender.

This document is designed to be printed out or kept on a second monitor. It strips away 90% of Blender’s complexity to focus strictly on **Navigation, Verification, and Documentation**.

***

# The Analyst’s Field Guide to Blender
**Role:** Viewer / Auditor
**Goal:** Navigate the scene, verify spatial relationships, measure distances, and capture evidence.
**Golden Rule:** *Do not press 'Tab'.* (This creates geometry; you only want to inspect it.)

---

## 1. The "Safe Mode" Setup
Before you begin, simplify the interface to prevent accidental edits.

1.  **Lock Object Modes:** Go to *Edit > Lock Object Modes*. (Check the box).
    * *Why:* This prevents you from accidentally clicking into "Sculpt" or "Edit" mode and distorting the evidence.
2.  **The "T" and "N" Shelves:**
    * Press **`T`** to toggle the **Toolbar** (Left). Keep this open.
    * Press **`N`** to toggle the **Sidebar** (Right). This contains specific view and dimension data.
3.  **Maximize Viewport:**
    * Move your mouse over the 3D Viewport and press **`Ctrl + Space`**.
    * *Effect:* This hides all the confusing panels (Timeline, Properties) and gives you a full-screen view of the evidence. Press it again to return.



---

## 2. Navigation Controls (How to Move)
Think of the Viewport as a camera you are holding.

| Action | Mouse / Keyboard | Description |
| :--- | :--- | :--- |
| **Orbit** | **Hold Middle Mouse (MMB)** | Rotates around the center of the screen. |
| **Pan** | **Shift + Hold MMB** | Slides the view left/right/up/down. |
| **Zoom** | **Scroll Wheel** | Moves closer or further away. |
| **Focus** | Select Object + **Numpad `.`** | Snaps the camera to focus specifically on the selected evidence. |
| **Walk Mode** | **`Shift + ~` (Tilde)** | **FPS Mode.** Use `W` `A` `S` `D` to walk and mouse to look. Gravity can be toggled with `Tab`. Essential for checking "human" line-of-sight. |

### The "Views" Numpad (Orthographic)
Use these to check alignment without perspective distortion.
* **`1`**: Front View
* **`3`**: Side View
* **`7`**: Top View (Map View)
* **`5`**: Toggle Perspective / Orthographic (Flattens the view).



---

## 3. Visual Interrogation (The Shading Modes)
Top right corner of the Viewport. These 4 spheres change how the data is rendered.

1.  **Wireframe (The X-Ray):**
    * *Use Case:* Seeing inside buildings, checking for hidden objects, or seeing through walls.
2.  **Solid (The Clay):**
    * *Use Case:* Checking the geometry. Is the wall flat or bumpy? Is the car damaged or clean?
3.  **Material Preview:**
    * *Use Case:* Seeing textures and photos without heavy lighting calculation.
4.  **Rendered:**
    * *Use Case:* Checking lighting, shadows, and time-of-day accuracy.



---

## 4. The Toolkit (Left Toolbar)
You only need three tools from this list.

### A. The Cursor (Select Box)
* **Icon:** Mouse Pointer.
* **Action:** Click to select an object. (Highlighted in Orange).
* **Check:** Look at the "N-Panel" (Right side) under **Item** to see the Dimensions (X, Y, Z) of what you selected.

### B. The Ruler (Measure)
* **Icon:** Ruler / Triangle.
* **Action:** Click and Drag from point A to point B.
* **Precision Tip:** Hold **`Ctrl`** while dragging to snap the ruler to specific vertices (corners). This ensures you are measuring the *exact* edge, not just the empty space near it.
* **Delete:** Select a measurement line and press `X` or `Delete`.



### C. The Annotate Tool (Grease Pencil)
* **Icon:** Pencil.
* **Action:** Draw circles, arrows, or notes directly onto the 3D scene.
* **Use Case:** Highlighting a specific bullet hole or line of sight for a screenshot.
* **Note:** These are 2D drawings in 3D space.

---

## 5. Verification Checklist
When you open a file from a modeler, perform this 30-second audit:

1.  **Check Scale:**
    * Select a reference object (like a door or a car).
    * Open the Side Panel (`N`), look at **Dimensions**.
    * *Audit:* Is the door ~2 meters high? If it says "200 meters" or "0.02 meters," the scale is wrong, and measurements are invalid.
2.  **Check Face Orientation (The "Inside-Out" Check):**
    * Top Right Dropdown (Overlays) > Check box **Face Orientation**.
    * *Audit:* Everything should be **BLUE**. If you see **RED**, the polygons are inside-out (normals are flipped), which causes render errors.
3.  **Check Sources:**
    * Toggle the "Outliner" (Top Right List).
    * Look for a collection named "Reference" or "Cameras."
    * *Audit:* Toggle the "Eye" icon to see the original photos/cameras used to build the scene. Do they align with the model?

---

## 6. Exporting Evidence (The Screenshot)
Do not use your OS screenshot tool (Snipping Tool/Grab). It creates low-res images.

1.  **Position your camera.**
2.  **Turn off Overlays:** (Top Right, the icon with two overlapping circles). This hides the grid, 3D cursor, and outlines for a clean view.
3.  **Go to:** *View > Viewport Render Image*.
4.  **Result:** A clean, high-resolution image of exactly what you see, saved to the output folder.