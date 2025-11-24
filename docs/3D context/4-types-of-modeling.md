---
title: Modeling Paradigms & Workflows
description: "Overview of polygonal and NURBS modeling paradigms, workflows, and their strengths and limitations."
sidebar_position: 4
---


# Modeling Paradigms & Workflows
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

Time for a short intermezzo. Without necessarily realizing it we've spent time understanding a specific modeling paradigm. Vertices, edges, faces, topology—these are all **polygonal** concepts. However, this isn't the only way to represent 3D geometry mathematically. Understanding the alternatives clarifies what polygonal modeling is, why Blender is built around it, and when (if ever) you might need something different.

---

## Key Features

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px'}}>
  <div style={{
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{backgroundColor: '#8DF917', padding: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
      <i className="fa-solid fa-book" style={{fontSize: '20px', color: '#333'}}></i>
      <h4 style={{margin: 0, color: '#333'}}>Decision Tree</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>Quick guide: which technique fits which object type.</p>
    </div>
  </div>
  
  <div style={{
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{backgroundColor: '#1C75BC', padding: '15px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px'}}>
      <i className="fa-solid fa-link" style={{fontSize: '20px'}}></i>
      <h4 style={{margin: 0}}>Examples</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>Examples showing blockout → refine workflows.</p>
    </div>
  </div>
</div>

--- 

## The Two Core Paradigms

There are two distinct paradigms for representing 3D geometry — polygonal and NURBS — each built on fundamentally different mathematical principles. Beyond these, specialized workflows and alternative representations exist. Understanding these distinctions is critical because mixing paradigms without intention produces structurally unstable and difficult-to-work-with models.

Since we are using Blender, and Blender is fundamentally a polygonal modeling tool. We will be focussing on this paradigm. While NURBS support is there, that's not where its strength lies. Nonetheless, knowing what other paradigm exists prevents you from accidentally blending incompatible approaches and creating geometry that behaves unpredictably.

### Polygonal Modeling

Everything we've discussed so far—vertices, edges, faces, meshes—is polygonal modeling. Objects are built from discrete vertices connected by edges, with surfaces defined by polygonal faces. This is the framework you've been working in from the beginning. Blender is fundamentally a polygonal modeling tool. While it has NURBS support, that's not where its strength lies.

Strengths:

Direct control over every vertex and edge
Predictable, deterministic results
Excellent UV mapping support
Optimized for real-time rendering
Extensive tool support in Blender
Ideal for hard surfaces and architectural precision

Limitations:

Curved surfaces require many polygons to look smooth
Organic forms can be tedious to create without sculpting
Topology matters significantly—poor topology causes shading, animation and deformation problems.

### NURBS (Non-Uniform Rational B-Splines)
NURBS is a fundamentally different way of thinking about 3D representation. Instead of discrete vertices and faces, NURBS uses control points that influence smooth, continuous mathematical curves and surfaces. You don't define a surface by dividing it into polygons—you define it mathematically as a continuous surface.
NURBS is not Blender's native paradigm. Specialized tools like Rhinoceros or Maya handle NURBS more elegantly. Blender can work with NURBS, but it's not the ideal environment.
Strengths:

Smooth curves are mathematically perfect—no polygon tessellation needed
Requires fewer control points for smooth surfaces
Excellent for product design and industrial objects
Mathematically elegant and precise
Native to specialized software (Rhino, Maya)

Limitations:

Limited tool support in Blender compared to dedicated NURBS software
Less intuitive for complex, irregular topology
Conversion to polygons is required for final rendering—introduces conversion artifacts
Harder to add fine detail
Poor UV mapping workflow
Not Blender's strength

Let's have a look at how they compare in their essence. 


import ModelingComparison3D from '@site/src/components/ModelingComparison3D/index.js';

<ModelingComparison3D />








## Workflows and Operations (Both Paradigms)
These techniques can be applied to either polygonal or NURBS geometry:
Sculpting: A brush-based workflow where you push, pull, and shape geometry like digital clay. In polygonal modeling, sculpting generates high-resolution geometry that requires optimization before animation. This approach is common for character creation and organic detail.
Procedural Modeling: Uses rules, algorithms, and parameters to generate geometry automatically. Rather than manually placing vertices, you define a set of rules that Blender follows to create the model. Powerful for complex structures and easily modifiable designs.
Booleans: Operations that combine multiple objects using set logic (union, difference, intersection). Can be applied to either polygonal meshes or NURBS surfaces, though the results and workflows differ between paradigms.

An Exotic Alternative: SDF (Signed Distance Fields)
For completeness, there exists a fundamentally different way of thinking about 3D representation: Signed Distance Fields. Rather than storing discrete geometry (polygons or control points), an SDF encodes space itself by storing the distance from any point to the nearest surface. Negative values indicate being inside; positive values indicate being outside.
This is not a modeling paradigm you'll typically use in Blender for reconstruction work, but it represents a distinctly different conceptual approach—defining space rather than defining surfaces. SDFs are increasingly used in real-time rendering, volumetric effects, and computational geometry, but they require specialized tools and workflows outside traditional 3D modeling.

Why This Matters: Avoiding Hybrid Chaos
Each modeling paradigm has its own internal logic. Mixing them carelessly creates problems:

A NURBS surface converted to polygons may introduce unexpected topology or excessive polygon counts.
Combining high-resolution sculpted geometry with low-polygon hard surfaces causes rendering inconsistencies and animation issues.
Procedural geometry that hasn't been properly evaluated can produce unpredictable results when animated or textured.

The solution: Choose your primary paradigm based on your needs, commit to it, and only blend techniques when you have a clear reason. For reconstruction work, polygonal modeling is your foundation. You may add sculpting for detail or procedural elements for efficiency, but do so deliberately—not accidentally.

For this course, we focus exclusively on polygonal modeling because Blender is a polygonal tool. It's optimized for this paradigm, has the most mature and extensive tools for it, and produces the most predictable results for reconstruction work. You've already been learning within this framework. Now you understand what that framework is, why it matters, and what other possibilities exist.


---

### Types of Modeling

You've now spent several chapters working entirely within the polygonal modeling paradigm. Vertices, edges, faces, topology—these are all polygonal concepts. However, this isn't the only way to represent 3D geometry mathematically, nor is it the only way to interact with it. Distinguishing between the **data structure** (what the object is made of) and the **workflow** (how you manipulate it) is critical.
At their core, there are two distinct paradigms for representing 3D geometry—Polygonal and NURBS. Beyond these, specialized workflows like sculpting and procedural generation exist to create or manipulate that geometry. Understanding these distinctions prevents you from confusing the tool with the material.

### The Two Core Paradigms

#### 1. Polygonal Modeling
Everything we've discussed so far—vertices, edges, faces—is polygonal modeling. Objects are built from discrete points connected by edges, with surfaces defined by planar faces.
Blender is fundamentally a polygonal modeling tool.
**Strengths:**
* Direct control over topology (edge flow).
* Optimized for real-time rendering, animation, and deformation.
* Extensive tool support in Blender.
* The industry standard for games and VFX.

**Limitations:**
* Raw polygons are flat (planar); they cannot be truly curved.
* Without modifiers, curved surfaces require excessive vertex counts.

#### The "Smoothness" Solution: Subdivision Surfaces (SubD)
Because raw polygons are flat, you might assume they are bad for curved objects. This is incorrect. In polygonal modeling, we use **Subdivision Surfaces** to solve this.
You model a low-resolution "cage" (simple polygons), and Blender calculates a mathematically smooth surface based on that cage. This bridges the gap between polygonal control and smooth curves.
* **Constraint:** You must maintain "all-quad" topology (four-sided faces) to ensure the subdivision algorithm works without artifacts.



#### 2. NURBS (Non-Uniform Rational B-Splines)
NURBS is a fundamentally different way of thinking. Instead of discrete vertices, NURBS uses control points that influence continuous mathematical curves. You don't define a surface by dividing it into faces—you define it mathematically.
**Strengths:**
* Curves are mathematically perfect/infinite resolution.
* Ideal for industrial design (cars, products) where manufacturing precision is required.
* Native to specialized CAD software (Rhino, SolidWorks).

**Limitations:**
* Topology is rigid and difficult to animate or deform.
* Poor UV mapping workflow.
* Limited tool support in Blender (Blender is not a NURBS-native tool).

### Workflows vs. Representations
Do not confuse **how you work** with **what you create**. The following are methods to generate the geometry described above.

**Sculpting:**
A brush-based workflow where you treat geometry like digital clay.
* *The Output:* Sculpting generates extremely high-density polygonal meshes.
* *The Catch:* While excellent for organic shapes, sculpted meshes have poor topology for animation. They are usually raw data, not the final model.

**Procedural Modeling (Geometry Nodes):**
Uses rules and algorithms to generate geometry automatically.
* *The Output:* Can generate Polygons, Curves, or Volumes.
* *The Power:* Non-destructive. You can change the rules later to update the model.

**Retopology (The Critical Link):**
This is how we avoid chaos. Retopology is the process of drawing a clean, low-density polygonal mesh over the top of a high-density sculpt.
* *Why it matters:* It allows you to sculpt with artistic freedom, then "trace" that object to create a clean, efficient polygonal mesh that is ready for animation.



### An Exotic Alternative: SDF (Signed Distance Fields)
For completeness, there is a third representation: Signed Distance Fields. Rather than storing geometry, an SDF encodes space itself by storing the distance from any point to the nearest surface.
In Blender, this logic is used in **Volumetrics** and increasingly in **Geometry Nodes**. It is powerful for boolean operations (combining shapes) because it cannot create "broken" geometry. However, it must usually be converted to polygons for final rendering.

### Why This Matters: The Pipeline
Each paradigm has its own internal logic. Mixing them carelessly creates structural instability.
* A NURBS surface converted to polygons often has messy triangles that don't subdivide well.
* A raw Sculpt is too heavy to animate.

**The Solution:**
For this course, and for most reconstruction work, **Polygonal Modeling with Subdivision Surfaces** is your foundation.
If you need organic detail, you may **Sculpt** it, but you must then **Retopologize** it back into clean polygons.
You are now working within a specific framework: The Polygonal Paradigm. Understand its boundaries so you can push them effectively.


---

# 3D Geometry: A Primer on Modeling Paradigms and workflows 

**Category:** Fundamentals | **Reading Time:** 8 Minutes

In the world of visual investigation and forensic reconstruction, creating geometry is more than just making things look "real"—it is about creating accurate, verifiable representations of space and evidence.

If you are coming from a background in journalism, law, or research, opening Blender can feel like walking into a workshop with thousands of tools but no instruction manual. You might ask: *Do I sculpt this car crash? Do I mathematically program this building? or do I build it polygon by polygon?*

**In this guide, we will demystify the 3D modeling landscape.**

We will explore:

1.  **The "Big Six" Modeling Methods:** How they work and where they fit in Blender.
2.  **The Investigator’s Baseline:** Why specific methods are better for court-ready evidence.
3.  **Strategic Application:** How to choose the right tool for accuracy and analysis.

-----

## The Modeling Methods Overview

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

<Tabs>
  <TabItem value="polygonal" label="Polygonal Modeling" default>

### Polygonal Modeling

**The Concept:**  
This is the foundational method used in almost all real-time 3D applications. You define geometry using a collection of flat faces (polygons) connected by edges and vertices. It is a direct manipulation method—you push and pull these components to build shapes.

**Blender Context:** Primary and Native (Edit Mode).  
**Investigator's Take:** This gives you absolute control over the structure of your object.  
**Pros:** Universal compatibility, precise control, and essential for animation/rigging.

:::tip Actionable Advice
Start here. Master the **Extrude (E)**, **Scale (S)**, and **Move (G)** commands in Edit Mode. 90% of your investigative scenes (rooms, streets, simple props) will be built using this method.
:::

  </TabItem>
  <TabItem value="subdivision" label="Subdivision Surface">

### Subdivision Surface Modeling

**The Concept:**  
An extension of polygonal modeling. It uses an algorithm to smooth a low-resolution "cage" (your rough model) into a high-resolution, curved surface.

**Blender Context:** Native Modifier (`Subdivision Surface`).  
**Investigator's Take:** Useful for creating smooth objects like helmets, vehicles, or furniture without handling millions of tiny polygons manually.  
**Pros:** Efficiently creates smooth, organic shapes while keeping the source data manageable.

  </TabItem>
  <TabItem value="sculpting" label="Sculpting">

### Sculpting

**The Concept:**  
Simulates real-world clay modeling. You start with a dense mesh and use virtual brushes to push, pull, smooth, and pinch the surface.

**Blender Context:** Native Sculpt Mode.  
**Investigator's Take:** Perfect for **organic forms** or **damage analysis**. If you need to represent a dented car bumper or soil displacement, sculpting allows you to "paint" that damage onto the mesh.  
**Pros:** Intuitive; excellent for high-frequency detail.

  </TabItem>
  <TabItem value="procedural" label="Procedural Modeling">

### Procedural Modeling (Geometry Nodes)

**The Concept:**  
Instead of modeling by hand, you generate geometry using rules and parameters. Changing a number (e.g., "Wall Height: 3m" to "4m") instantly updates the model.

**Blender Context:** Geometry Nodes.  
**Investigator's Take:** Ideal for reconstructing environments where parameters might change as new evidence comes in (e.g., adjusting the height of a fence based on a new witness report).  
**Pros:** Non-destructive and easy to iterate.

  </TabItem>
  <TabItem value="cad" label="CAD / NURBS">

### CAD / NURBS

**The Concept:**  
Mathematical, curve-based surfaces defined by equations. This is the standard for engineering and manufacturing.

**Blender Context:** Limited. Blender is not a CAD tool like SolidWorks.  
**Investigator's Take:** Use CAD for source data, not creation. If you receive engineering files of a weapon or a machine part, they will likely be NURBS. You will usually convert these to polygons to use them effectively in Blender.  
**Pros:** Absolute mathematical precision.

  </TabItem>
  <TabItem value="boolean" label="Boolean Operations">

### Boolean Operations

**The Concept:**  
Combining, subtracting, or intersecting two objects (e.g., using a cylinder to cut a hole in a wall).

**Blender Context:** Native Modifier (`Boolean`).  
**Investigator's Take:** A vital shortcut. Instead of modeling a window frame vertex-by-vertex, you simply "cut" the window out of the wall.  
**Pros:** Rapid hard-surface modeling.

  </TabItem>
</Tabs>

-----

## Why Polygonal Modeling is Our Baseline

For 90% of this knowledge base we focus on Polygonal Modeling. While other methods have their uses, polygonal meshes offer three distinct advantages:

### 1\. Universal Compatibility

Polygonal meshes (`.obj`, `.fbx`, `.stl`) are the *lingua franca* of 3D.

  * **Why it matters:** If you need to send your 3D evidence to a 3D printer, a VR viewing platform, or a legal team using different software, polygonal meshes are guaranteed to work.

### 2\. Flexibility and Iteration

Investigative work is often messy. You might be matching a model to a blurry CCTV frame or a grainy photograph.

  * **Why it matters:** Polygonal modeling allows for "vertex-level" adjustments. Tools like **Loop Cut** and **Edge Slide** let you refine the topology to match the perspective of a photo without rebuilding the whole object.

### 3\. Analysis Ready

Forensic analysis often requires simulating movement (animation) or measuring precise distances.

  * **Why it matters:** Blender’s precision tools (like the *Measure It* add-on) attach directly to the vertices of a polygonal mesh, ensuring your measurements are grounded in the actual geometry of the scene.

-----

## Troubleshooting: Common Pitfalls for Beginners

Even smart researchers make mistakes when learning 3D. Watch out for these traps:

**1. The Boolean Trap**

  * **Problem:** You used a Boolean to cut a hole, and now there are weird shadows or glitches on your object.
  * **Solution:** Booleans create "messy" geometry (N-gons). Always check your wireframe after a cut. You may need to manually connect vertices to clean up the shape.

**2. The "Heavy" Scene**

  * **Problem:** You sculpted a terrain, and now Blender is lagging.
  * **Solution:** Sculpting creates millions of polygons. Use the **Decimate Modifier** to reduce the polygon count while keeping the overall shape, making the scene lighter for your computer.

**3. Scale Confusion**

  * **Problem:** You imported a CAD model and it's microscopic.
  * **Solution:** CAD often uses Millimeters; Blender defaults to Meters. Always check your **Scene Units** in the Properties panel before importing external data.

-----

## Combining Techniques — be deliberate

You can and often should combine modeling techniques — for example, using Booleans to quickly block out hard-surface volumes and then refining the result with polygonal cleanup or sculpting for detail. However, be deliberate when mixing approaches:

- Booleans are fast for blockouts but create N-gons and messy topology that can break deformation, shading, or measurement accuracy. Always inspect the wireframe and perform cleanup (triangulate, retopologize, or manually fix topology) before relying on the model for analysis.
- Sculpting over a booleaned mesh may require remeshing or retopology to get a usable, animation-ready mesh.
- Procedural (Geometry Nodes) outputs can be baked to meshes for final adjustments, but remember that procedural setups are non-destructive and may need a final conversion step for export or downstream tools.

Rule of thumb: choose the fastest method for blocking out the form, then convert to a controlled polygonal topology for accuracy, measurement, and export.


## Next Steps

You now understand the "vocabulary" of 3D geometry. As a visual investigator, you don't need to be a master sculptor or a procedural wizard—you need to be a master of **accuracy**.

**Key Takeaways:**

  * Master **Polygonal Modeling** first; it is the foundation of your evidence.
  * Use **Booleans** for speed, but clean up the mess they make.
  * Use **Sculpting** only for organic details (damage, terrain) that don't require mathematical precision.

### Ready to apply this?

Visit the **[Link to Knowledge Base]** to download our specific tutorials on setting up your first Polygonal Mesh specifically for scene reconstruction.

:::info Free Download: The Modeling Method Cheat Sheet
Confused about which method to pick for a specific object?
**[Click here to download our 1-Page Decision Tree PDF]**
It guides you through questions like *"Is it organic?"* or *"Does it need to move?"* to help you pick the right technique instantly.
:::

-----

### **Advisor's Note on Visuals & Interactivity**

1.  **Interactive "Before & After" Sliders:**

      * *Where:* In the **Subdivision Surface** section.
      * *What:* A slider that reveals the "Low Poly Cage" on the left and the "Smoothed Result" on the right. This instantly visually explains the algorithm.
      * *Why:* It bridges the gap between technical jargon and visual understanding.

2.  **Tabbed Content Blocks (Docusaurus Feature):**

      * *Where:* In the **Modeling Methods Overview**.
      * *Structure:*
        ```markdown
        <Tabs>
          <TabItem value="poly" label="Polygonal">Content...</TabItem>
          <TabItem value="sculpt" label="Sculpting">Content...</TabItem>
        </Tabs>
        ```
      * *Why:* This prevents the "wall of text" effect and allows the user to click through methods at their own pace.

3.  **Video/GIF Tooltips:**

      * *Where:* Next to the "Actionable Advice" sections.
      * *What:* Short, looping GIFs showing exactly where the button is in the UI (e.g., where the "Boolean Modifier" is located).
      * *Why:* Beginners get lost in Blender's UI. A visual anchor helps them find the tool immediately.

4.  **The Lead Magnet (Decision Tree):**

      * Create a simple flow-chart graphic.
      * *Start:* "What are you making?"
      * *Branches:* "A Building" -\> "Polygonal" | "A Dented Car" -\> "Polygonal Base + Sculpting Details" | "A Bullet Trajectory" -\> "Simple Curve/Line".
      * This is high-value for investigators who need to make efficient time-management decisions.





# 3D Modeling Techniques for Visual Investigation
The world of 3D modeling encompasses several distinct approaches to creating geometry. For the purpose of visual investigation and forensic reconstruction, understanding these methods is essential for choosing the right tools for accuracy, analysis, and final presentation.

## Modeling Methods Overview

1. **Polygonal Modeling**

Polygonal modeling is the foundational method used across almost all real-time 3D applications. Geometry is defined by a collection of flat faces (polygons), which are connected by edges and vertices. It is a direct manipulation method where the user moves, scales, and rotates these components to build the desired shape.

**Blender Support:** Primary and Native. Blender's Edit Mode is the core of its polygonal modeling tools.

**Pros:** Universal compatibility, direct control, and suitability for animation and rigging.

2. **Subdivision Surface Modeling**

This technique is an extension of polygonal modeling. It utilizes a Subdivision Surface (Subsurf) algorithm to smooth a low-resolution control cage (a polygonal mesh) into a high-resolution, curved surface.

**Blender Support:** Native Modifier. The Subdivision Surface Modifier is non-destructive, meaning the underlying polygonal cage can be easily edited while the smooth result is maintained.

**Pros:** Efficiently creates smooth, organic shapes while keeping the source data manageable.

3. **Sculpting**

Sculpting simulates real-world clay modeling. The user starts with a dense mesh and uses virtual brushes to push, pull, smooth, and pinch the surface. This technique excels at organic forms and adding high-frequency detail.

**Blender Support:** Native Sculpt Mode. Blender provides a comprehensive set of sculpting tools.

**Pros:** Intuitive for artistic and organic creation; excellent for detail work like damage or natural decay.

4. **Procedural Modeling**

Procedural modeling generates 3D geometry from a set of rules, parameters, or algorithms rather than direct manual manipulation. Changing an input parameter (e.g., number of steps, width, curve formula) instantly updates the entire model.

**Blender Support:** Native (Geometry Nodes). Blender's powerful Geometry Nodes system allows for complex procedural generation and modification of models.

**Pros:** Non-destructive, easy to iterate, and excellent for generating complex patterns, environments, or consistent variations quickly.

5. **CAD (Computer Aided Design) / NURBS**

CAD software primarily uses NURBS (Non-Uniform Rational B-Splines)—mathematically perfect, curve-based surfaces. These models are defined by control points and equations, ensuring precision is maintained across the entire surface regardless of zoom level.

**Blender Support:** Limited. Blender supports NURBS curves and simple surfaces but lacks the robust, history-based, engineering-focused parametric workflow found in dedicated CAD packages (like Fusion 360 or SolidWorks).

**Pros:** Absolute mathematical precision, essential for high-tolerance engineering and manufacturing.

6. **Boolean Operations**

Boolean modeling involves combining, subtracting, or intersecting two or more objects to create complex geometry. While technically an operation rather than a standalone method, it is a crucial technique in rapid hard-surface modeling.

**Blender Support:** Native Modifier and Tools. Blender supports Boolean operations through a non-destructive Modifier and destructive tools in Edit Mode.

**Pros:** Quickly creates complex cutouts, holes, and joints that would be tedious to model manually.

## The Case for Polygonal Modeling as the Baseline

For visual investigation, polygonal modeling must serve as the foundational baseline due to its intrinsic qualities:

- **Universal Compatibility:** Polygonal meshes are the only geometry type universally supported by rendering engines, simulation software, legal viewing platforms, and 3D printing services (via `.obj`, `.fbx`, `.stl`). This guarantees that the final evidence artifact can be shared and reviewed by any stakeholder, regardless of their software.
- **Flexibility and Iteration:** The direct, low-level access to vertices and edges allows the investigator to make fine, local adjustments required to match uncertain or noisy source evidence (e.g., matching a model to a blurry photograph). Tools like the Loop Cut and Edge Slide permit topological refinement without starting over.
- **Animation and Analysis Ready:** As the native format for animation, a polygonal model can be easily rigged to simulate human movement or keyframed to analyze trajectories and chronological sequences, which are common requirements in forensic analysis.
- **Integration with Precision Tools:** Blender's most effective precision measurement tools, such as the Measure It add-on and the Edge Length Overlay, operate directly on the vertices and edges of a polygonal mesh.

While polygonal modeling is the basis, investigators should use other techniques when the situation demands it:

- Sculpting is ideal for adding fine, non-geometric detail (e.g., wear, damaged surfaces).
- Procedural Modeling (Geometry Nodes) can be used to quickly create repeating architectural elements (e.g., fences, repeated windows) or simulate effects like complex debris patterns.
- CAD/NURBS should be used only if the source data involves high-tolerance engineering components (e.g., machinery) and then imported into Blender as a polygon mesh for final scene integration.

## Choosing Your Modeling Method: Shape Types

| Shape Type | Technique | Examples |
|------------|-----------|----------|
| Simple, hard surface shapes | Poly modelling | Car |
| Smooth hard forms | Subdiv (Subdivision Surface) | Also a car |
| Repetition | Arrays,  | Roof tiles, Chain bollards, Gumball machines |
| Curved, long | Curves | Rope, Chain links, Donut racks |
| Irregular, complex shapes | Booleans | Fire hydrant |
| Bespoke or need many | Geonodes (Geometry Nodes) | Tree, grass, bush |
| Organic, living | Sculpting | Character, Ornate shapes |
| Cloth | Cloth simulator | Shirt for a character, Flag |
| Tubes | Lathing | Wine glass |

The strength of Blender for visual investigation lies in its ability to combine the reliable foundation of polygonal modeling with the precision of its measurement systems, ensuring the final reconstructed scene is both verifiable and universally shareable.



