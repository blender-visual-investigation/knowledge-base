## Introduction
## Key Features
## Main Content Section
---
title: Modeling Phases
description: A structured approach to modeling projects — from reference and blocking to finalization and validation.
sidebar_position: 6
---

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
    <span style={{backgroundColor: '#2196f3', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>6 min read</span>
  </div>
</div>

---

## Introduction

The stages of modeling from reference and blockout to cleanup and export. Original content follows.

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
      <h4 style={{margin: 0, color: '#333'}}>Checklist</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>Blockout → refine → detail → validate.</p>
    </div>
  </div>
  
  <div style={{
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{backgroundColor: '#1C75BC', padding: '15px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px'}}>
      <i className="fa-solid fa-link" style={{fontSize: '20px'}}></i>
      <h4 style={{margin: 0}}>Milestones</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>Key validation points and export readiness checks.</p>
    </div>
  </div>
</div>

---

## Main Content Section

# Building Evidence: A Structured Workflow 

**Category:** Fundamentals | **Reading Time:** 10 Minutes

When tackling a visual investigation, the urge to jump into Blender and start modeling details straight away is strong. You want to see the scene take shape. But in forensic reconstruction and investigative reporting, a pretty model isn't enough—it needs to be an accurate, verifiable one.

Modeling for investigation is less about artistic flair and more about rigorous methodology. If your model is challenged—in court, by an editor, or by the public—you need to be able to show exactly how it was built and what data defines its dimensions.

In this guide, we will move beyond just "pushing vertices." We will introduce a structured, phased approach to modeling designed specifically for accuracy, repeatability, and auditability. You will learn why investigative workflows differ significantly from standard game or VFX pipelines, and why "blocking out" the scene is the most critical step you'll take.

-----

## Why a Phased Approach Matters

If you try to do everything at once—matching perspective, adding details, applying textures, and fixing topology—you will quickly end up with a messy, unusable model.

By breaking the process into distinct phases, you ensure that the foundation is solid before you build the house. For visual investigation, this approach is crucial because:

  * **Accuracy:** You establish correct scale and proportions before getting distracted by details.
  * **Repeatability:** If new evidence arrives, a structured model is easier to update without starting over.
  * **Auditability:** Stakeholders can review earlier phases to understand how you arrived at the final result.

-----

## The 7 Phases of Investigative Modeling

Here is the standard workflow for creating verifiable 3D models in Blender for investigative purposes.

### 1\. Planning & Reference Gathering

Before opening Blender, you must gather your data. A model is only as good as its sources.

  * **The What:** Collect photographic evidence, satellite imagery, measurements, blueprints, and floor plans.
  * **The Why:** This data defines the "truth" of your scene.
  * **Actionable Tip:** Define your precision requirements immediately. Is this model just for a general visualization of a space, or must it support accurate measurements and line-of-sight analysis? Knowing this upfront saves hours later.

### 2\. Blocking / Rough Proportions

This is the most important phase for beginners. Forget details; focus on large shapes.

  * **The What:** Establish broad shapes using simple primitives (cubes, cylinders, planes). Focus on the overall scale, orientation, and relationships between major components like walls, floors, and vehicles.
  * **The Why:** If the foundation is wrong, no amount of detailing will fix it. This phase establishes the spatial "truth."

:::tip
Resist the urge to model doorknobs when you haven't finalized the walls. If you are modeling a car crash, block out the cars as simple boxes first to get their positions right before modeling the actual vehicle geometry.
:::

[**Visual Suggestion:** Insert an image here showing a "Block-out" of a scene next to the reference photo. It should look very basic, using only grey cubes and planes to match the perspective.]

### 3\. Proportional Refinement

Once the big shapes are locked in, you can start refining.

  * **The What:** Adjust the geometry to match the reference more closely. Refine the topology (the structure of your wireframe) and edge flow.
  * **The Why:** Clean topology is essential if you need to deform objects later (like showing damage) or take precise measurements along edges.

### 4\. Detail & Surface Work

Now you can add the elements that make the scene recognizable.

  * **The What:** Add smaller geometry, beveled edges, and specific textural elements.
  * **The Why:** These details add context, but they must be grounded in the established proportions.
  * **Actionable Tip:** Maintain non-destructive workflows wherever possible. Use modifiers (like Bevel or Subdivision Surface) rather than permanently altering the mesh geometry. This allows you to easily roll back changes if new evidence emerges.

### 5\. UVs & Textures (Optional)

In many investigations, a grey "clay render" is preferable because it highlights geometry rather than distracting aesthetics.

  * **The What:** Applying images or patterns to the 3D surfaces.
  * **The Why:** Only required if the goal is a photorealistic presentation, or if you are conducting texture-based analysis (e.g., mapping a bloodstain pattern onto a floor).
  * **Actionable Tip:** If you do use textures, document their sources rigorously to maintain traceability.

### 6\. Precision & Verification

This is the phase that separates investigative modeling from artistic modeling.

  * **The What:** Use Blender’s measurement tools to check distances, edge lengths, and angles against your source data.
  * **The Why:** You must verify that the digital scale matches the real-world origin data. A room modeled 10% too small can invalidate an entire line-of-sight analysis.

[**Visual Suggestion:** Insert a screenshot showing Blender's "Measure" tool active in a scene, displaying real-world units (e.g., meters) next to an object.]

### 7\. Finalization & Export

Preparing the asset for its final use.

  * **The What:** Convert the model to a sharable format (like `.obj` or `.fbx`) for stakeholders who don't use Blender.
  * **Actionable Tip:** Always save a master "non-destructive" `.blend` file that keeps all modifiers active, should you need to return and edit it later.

-----

:::note Best Practices for Auditability
Credibility comes from transparency. To ensure your work can be audited:

  * **Keep a Clear Version History:** Save new versions at the start of every major phase (e.g., `Scene_v02_Blocking.blend`, `Scene_v03_Refined.blend`).
  * **Use Naming Conventions:** Name your objects clearly (e.g., `Wall_North_External` instead of just `Cube.004`) so others can understand the scene structure.
  * **Document Everything:** Keep a README file in your project folder recording units used, measurement references, and validation steps.
    :::

-----

## Perspective: Investigation vs. VFX Workflows

It is helpful to understand how different our investigative approach is from standard industry pipelines used in gaming or visual effects (VFX).

In VFX, the goal is photorealism and artistic appeal. A typical VFX pipeline involves many steps designed to polish the look of an asset, as shown in this overview:

\<details\>
\<summary\>Click to view a standard 9-Step VFX Workflow\</summary\>

1.  **Block-out phase:** Defining basic shapes and proportions.
2.  **Mid/High-Poly Modeling:** Refining shapes and increasing polygon count.
3.  **Detailing/sculpting:** Adding fine details like wrinkles, damage, and imperfections.
4.  **UV Unwrapping:** Preparing the 2D surface map for textures.
5.  **Texturing:** Applying colors and materials.
6.  **Shading:** Defining how light interacts with materials (reflections, transparency).
7.  **Lighting:** Setting the mood with highlights and shadows.
8.  **Rendering:** Generating the final image.
9.  **Post-Processing:** Fine-tuning colors and adding effects like motion blur.

\</details\>

**Don’t be alarmed by that list.**

For our Visual Investigation projects, we will mostly be staying in that very first phase: **The Block-out**.

While a VFX artist moves quickly past the block-out to get to texturing and lighting, the investigative modeler spends most of their time ensuring the block-out is mathematically absolutely correct based on the evidence. We rarely need advanced shading, cinematic lighting, or post-processing.

Our goal is a model that works on its own as spatial evidence, which can then be iterated on by others if a polished presentation is required later.

-----

## Next Steps

Mastering the phases of modeling is the first step toward creating defensible visual evidence. Remember, a simple, accurate block-out is infinitely more valuable to an investigation than a detailed, inaccurate render.

**Key Takeaways:**

  * Always gather data and define precision goals *before* modeling.
  * Spend the majority of your time in the "Blocking" phase getting proportions right.
  * Use non-destructive workflows (modifiers) so you can adapt to new evidence.
  * Verify your model with measurement tools frequently.

Ready to start your first structured block-out? Head over to our **Knowledge Base** for a step-by-step tutorial on setting up your Blender scene with correct real-world units for investigation.