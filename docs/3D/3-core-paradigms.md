---
title: Core Paradigms
description: "Understanding 3D paradigms."
sidebar_position: 3
---

import PolyVsNurbsInteractive from '@site/src/components/poly-vs-nurbs-interactive';

# Core 3D Data Paradigms

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>6 min read</span>
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
Now that we've established what 3D space is from first principles, we can turn to the question of how data actually occupies that space. In 3D work, geometry is not a single, universal thing — it is expressed through a small number of fundamentally different representation paradigms. The core four are polygonal surfaces, NURBS surfaces, volumetric/implicit fields, and solid modeling, with point clouds forming a fifth, auxiliary category used primarily in reconstruction and measurement.

Each paradigm encodes geometry using its own mathematical logic: polygons through discrete vertices and faces, NURBS through continuous analytic surfaces, solids through boundary-defined volumes, and volumetrics through fields of density or distance. Point clouds differ again, describing samples of space without defining surfaces at all.

Because each paradigm conceptualizes geometry differently, moving between them is never seamless; it always requires conversion, interpretation, or approximation. Understanding these paradigms and their strengths, limitations, and conversion costs is essential for choosing the right workflows in Blender and for managing evidence in visual investigation.

---

import FeatureCard from '@site/src/components/FeatureCard';
import FeatureCardGrid from '@site/src/components/FeatureCardGrid';

<FeatureCardGrid>
  <FeatureCard 
    title="What You'll Learn" 
    headerColor="#6dfb72"
    textColor="#333"
    icon="fa-solid fa-book"
  >
    <ul style={{margin: 0, paddingLeft: '20px'}}>
      <li>The five core geometry paradigms</li>
      <li>Polygonal vs NURBS comparison</li>
      <li>When to use each approach</li>
    </ul>
  </FeatureCard>
  
  <FeatureCard 
    title="Key Concepts" 
    headerColor="#1C75BC"
    icon="fa-solid fa-cubes"
  >
    <ul style={{margin: 0, paddingLeft: '20px'}}>
      <li>Volumetrics and point clouds</li>
      <li>Subdivision surfaces (SubD)</li>
      <li>Conversion between paradigms</li>
    </ul>
  </FeatureCard>
  
  <FeatureCard 
    title="Why It Matters" 
    headerColor="#EF4C3C"
    icon="fa-solid fa-magnifying-glass"
  >
    <p style={{margin: 0}}>Understanding paradigms prevents treating incompatible data types as interchangeable—a common source of error in investigation.</p>
  </FeatureCard>
</FeatureCardGrid>

---

Blender is fundamentally a polygonal modeling tool. This is its core strength and the paradigm around which its tools, workflows, and modifiers are designed. While Blender can interface with other paradigms — importing point clouds, rendering volumetric data, or offering minimal NURBS support — these are secondary capabilities rather than native modeling systems.

In visual investigation, however, you can encounter multiple paradigms in the same project:

point clouds from LiDAR, photogrammetry, or SfM workflows,

volumetric datasets from scientific or forensic sources,

and polygonal geometry created manually or derived from reconstruction.

Each paradigm behaves according to its own mathematical rules. Confusing them — or attempting to treat them as interchangeable — is one of the fastest ways to lose precision, waste time, or produce geometry that cannot be verified or exported. Knowing what type of data you are looking at is as important as knowing what you intend to do with it.

In the following sections, we will examine volumetrics, point clouds, and NURBS first — the paradigms you are most likely to encounter but least likely to edit directly in Blender. We will then conclude with polygonal modeling, the paradigm at the heart of Blender’s design and the one in which you will conduct the majority of your investigative reconstruction work.

## Volumetrics

Volumetric data populates 3D space by filling it, not by outlining it.
Instead of defining surfaces, a volumetric representation divides space into countless tiny cells (voxels). Each voxel stores a value — such as density, color, temperature, or distance to the nearest surface. When combined, these values describe a field that occupies the entire region of interest.

Volumetrics excel at capturing shapes and phenomena that surface-based representations struggle with: smoke, fog, fluids, organic interiors, or highly irregular forms. The tradeoff is resolution: higher fidelity demands finer voxel grids, which rapidly increases memory and computation requirements. Blender can import and visualize such data, but its editing capabilities are limited. Volumetrics thus serve primarily as data sources or intermediate representations in Blender-based visual investigation, rather than as editable modeling environments.

## Point Clouds

A point cloud is a set of discrete points floating in 3D space.
Each point stores spatial coordinates (x, y, z) and sometimes extra information such as color, reflectance, or intensity. Crucially, that is all it contains: no surfaces, no edges, no faces, and no notion of how one point relates to another.

Point clouds typically originate from real-world measurement systems.
LiDAR records the return time of laser pulses, photogrammetry reconstructs points by triangulating image features, and depth sensors emit structured light or infrared patterns to infer distance. The strength of point clouds is their directness: they represent raw observational data with minimal interpretation. For visual investigation, this makes them an important source of spatial evidence.

However, points alone do not define shape.
A point cloud has no topology, no interior or exterior, and no continuous surface. Converting a cloud into a mesh requires estimation — algorithms infer where a surface ought to be based on point distribution. Real scanner data also contains noise, missing patches, outliers, and uneven density, which complicate reconstruction.

Blender can display point clouds efficiently, but its ability to edit them is limited. In most workflows, you will use point clouds for visual inspection or as a reference, and then perform one of two actions:

Convert the cloud to a mesh for modeling or measurement, or Model on top of it using polygonal tools while treating the cloud as a guide.

Point clouds are therefore best understood as measurement data, not as a modeling paradigm — a starting point from which more explicit geometry can be derived.

## NURBS

NURBS (Non-Uniform Rational B-Splines) define smooth shapes using control points and mathematical equations. You can think of a NURBS surface as a flexible sheet held in place by pins: move a pin, and the entire sheet deforms smoothly and continuously. This makes NURBS exceptionally good at representing curvature with mathematical precision.

NURBS dominate CAD and industrial design environments such as Rhino, SolidWorks, and CATIA. In these systems, NURBS are integrated into a parametric modeling workflow: dimensions, constraints, and relationships govern how parts update. Change one measurement, and the entire object recalculates itself. This rule-driven approach is invaluable for engineering and iterative design.

Where NURBS excel is smooth, continuous, precision surfaces: aircraft skins, car exteriors, product housings, and architectural components. They are less well-suited to sharp details, intricate branching topology, or irregular organic forms. The underlying mathematics can also make operations brittle — trimming, joining, or blending surfaces can produce unexpected artifacts or failures.

In visual investigation, you may encounter NURBS when working with engineering, architectural, or manufacturing files. Blender can import and display NURBS curves and surfaces, but its NURBS toolset is minimal, and its overall workflow is not designed around surface-patch modeling. For almost any practical task inside Blender, NURBS are converted to polygonal meshes, where Blender’s modeling tools are strongest and most predictable.

Although NURBS is central to engineering and product-design pipelines, it is a misconception that Blender cannot be used for precision work. Blender’s polygonal tools, combined with accurate reference scaling and snapping, allow for the creation of highly accurate models suitable for 3D printing and other tolerance-sensitive workflows.

## Polygonal vs. NURBS: The Modeling Decision

When building 3D geometry from scratch, the practical choice narrows to two paradigms: NURBS and polygonal modeling. Let's have a look at how they compare in their essence.

<PolyVsNurbsInteractive />

<div style={{marginBottom: '30px'}}></div>

>If we play around with the element above and switch between modeling modes in the right N-Panel, the critical tradeoff emerges. NURBS surfaces achieve smooth curves with significantly fewer control points than polygonal modeling requires. Polygons approximate smoothness through subdivision. This is a recursive technique dividing faces to create finer geometry. However, this increases face count exponentially, making the mesh computationally heavier. This explains why NURBS excels at smooth, precision-defined surfaces, while polygonal subdivision offers you direct control over mesh density and structure.

### The "Smoothness" Solution: Subdivision Surfaces (SubD)

Subdivision Surface modeling bridges the gap between raw polygonal modeling and the smooth curves NURBS provide. You model a low-resolution "cage" (simple polygons), and Blender calculates a mathematically smooth surface based on that cage.

:::info Constraint
You must maintain "all-quad" or "mostly-quad" topology (four-sided faces) to ensure the subdivision algorithm works without artifacts. More on that in the anatomy of a 3D model chapter.
:::

## Conclusion
Blender is built for the polygonal paradigm, and that will be our focus. But this doesn't mean we cannot include data from other paradigms—we can import, visualize, and convert between them as needed.

---

## Summary

Understanding the different geometry paradigms helps you make informed decisions about data handling and workflow choices in visual investigation.

**Key Takeaways:**
- Five paradigms exist: Polygonal, NURBS, Volumetric, Solid, and Point Clouds
- Blender is optimized for polygonal modeling—its primary strength
- Point clouds are raw measurement data, not editable geometry
- NURBS excel at smooth, precision surfaces but require conversion for Blender work
- Subdivision surfaces bridge the gap between polygonal and smooth modeling
- Converting between paradigms always involves interpretation or approximation

**Further Resources:**
- [From Math to Mesh](/docs/3D/4-from-math-to-mesh) - Polygonal terminology and concepts
- [Anatomy of a 3D Model](/docs/3D/3-what-is-a-3d-model) - Understanding mesh structure
- [Blender Documentation: Mesh Editing](https://docs.blender.org/manual/en/latest/modeling/meshes/index.html)