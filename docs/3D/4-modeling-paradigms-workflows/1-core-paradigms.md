---
title: The Two Core Paradigms
description: "Understanding polygonal and NURBS modeling paradigms and subdivision surfaces."
sidebar_position: 1
---

# The Two Core Paradigms

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

Time for a short intermezzo. Without necessarily realizing it we've spent time understanding a specific modeling paradigm. Vertices, edges, faces, topology—these are all **polygonal** concepts. However, this isn't the only way to represent 3D geometry mathematically. Understanding the alternatives clarifies what polygonal modeling is, why Blender is built around it, and when (if ever) you might need something different.

---

There are two distinct paradigms for representing 3D geometry — polygonal and NURBS — each built on fundamentally different mathematical principles. Beyond these, specialized workflows and alternative representations exist. Understanding these distinctions is critical because mixing paradigms without intention produces structurally unstable and difficult-to-work-with models.

Since we are using Blender, and Blender is fundamentally a polygonal modeling tool. We will be focussing on this paradigm. While NURBS support is there, that's not where its strength lies. Nonetheless, knowing what other paradigm exists prevents you from accidentally blending incompatible approaches and creating geometry that behaves unpredictably.

## Polygonal Modeling

Everything we've discussed so far—vertices, edges, faces, meshes—is polygonal modeling. Objects are built from discrete vertices connected by edges, with surfaces defined by polygonal faces. This is the framework you've been working in from the beginning. Blender is fundamentally a polygonal modeling tool. While it has NURBS support, that's not where its strength lies.

**Strengths:**

- Direct control over every vertex and edge
- Predictable, deterministic results
- Excellent UV mapping support
- Optimized for real-time rendering
- Extensive tool support in Blender
- Ideal for hard surfaces and architectural precision

**Limitations:**

- Curved surfaces require many polygons to look smooth
- Organic forms can be tedious to create without sculpting
- Topology matters significantly—poor topology causes shading, animation and deformation problems

## NURBS (Non-Uniform Rational B-Splines)

NURBS is a fundamentally different way of thinking about 3D representation. Instead of discrete vertices and faces, NURBS uses control points that influence smooth, continuous mathematical curves and surfaces. You don't define a surface by dividing it into polygons—you define it mathematically as a continuous surface. These models are defined by control points and equations, ensuring precision is maintained across the entire surface regardless of zoom level. CAD software primarily uses NURBS.

NURBS is not Blender's native paradigm. Specialized tools like Rhinoceros or Maya handle NURBS more elegantly. Blender can work with NURBS, but it's not the ideal environment.

**Strengths:**

- Smooth curves are mathematically perfect—no polygon tessellation needed
- Requires fewer control points for smooth surfaces
- Excellent for product design and industrial objects
- Mathematically elegant and precise
- Native to specialized software (Rhino, Maya)

**Limitations:**

- Limited tool support in Blender compared to dedicated NURBS software
- Less intuitive for complex, irregular topology
- Conversion to polygons is required for final rendering—introduces conversion artifacts
- Harder to add fine detail
- Poor UV mapping workflow
- Not Blender's strength

:::caution
Even though NURBS is primarily used in engineering and product development, it is a common misconception that Blender does not allow to be used for similar applications. It is possible to create highly accurate models in Blender that can be used for 3D printing. 
:::

import PolyVsNurbsInteractive from '@site/src/components/poly-vs-nurbs-interactive';

Let's have a look at how they compare in their essence. 

<PolyVsNurbsInteractive />

If we play around with the element above it reveals a critical tradeoff between the two paradigms. NURBS surfaces achieve smooth, continuous curves with significantly fewer control points than polygonal modeling requires. Polygonal models can approximate similar smoothness through subdivision—a recursive technique that divides faces to create finer geometry—but this comes at a computational cost. Each subdivision level increases face count exponentially, making the mesh "heavier" in terms of rendering performance. This distinction illuminates why NURBS excels at smooth, precision-defined surfaces, while polygonal subdivision offers control artists direct influence over the mesh density and structure at the cost of managing more geometry.

## The "Smoothness" Solution: Subdivision Surfaces (SubD)

As we can see, Subdivision Surface modeling is bridging the gap between raw polygonal modeling on the one hand, and getting smooth curves the NURBS provide on the other. Oversimplified: You model a low-resolution/low-poly "cage" (simple polygons), and Blender calculates a mathematically smooth surface based on that cage. This bridges the gap between polygonal control and smooth curves.

:::info Constraint
You must maintain "all-quad" or "mostly-quad" topology (four-sided faces) to ensure the subdivision algorithm works without artifacts. More on that in the anatomy of a 3D model chapter.
:::

For now it is important that we understand that Blender is a tool that was built for the polygonal modeling paradigm, and that this is what we will be focusing on.
