---
title: Modeling Workflows
description: "Overview of the distinct workflows for generating and manipulating meshes in Blender."
sidebar_position: 3
---

# Modeling Workflows

Within the polygonal modeling space, there are distinct ways to generate or manipulate meshes. These fall into logical categories based on *who or what* drives the geometry creation: you, the computer, or the real world.

:::tip Work in Progress
This section provides an overview of the major workflows. Click any card to explore that technique in depth—though some pages are still being developed. Check back regularly for updates!
:::

## Manual Generation *(Human-driven, direct control over geometry)*

<div className="workflow-grid">

<a href="/knowledge-base/docs/module-3-tools-addons-techniques/techniques/direct-modeling" className="workflow-card">
  <div className="workflow-card-icon">
    <i className="fa-solid fa-pen-ruler"></i>
  </div>
  <div className="workflow-card-content">
    <h4>Direct Modeling</h4>
    <p>Manual manipulation of vertices, edges, and faces. The foundation of all polygonal modeling with the highest level of control.</p>
  </div>
  <i className="fa-solid fa-arrow-right workflow-card-arrow"></i>
</a>

<a href="/knowledge-base/docs/module-3-tools-addons-techniques/techniques/subdivision-surfaces" className="workflow-card">
  <div className="workflow-card-icon">
    <i className="fa-solid fa-circle-nodes"></i>
  </div>
  <div className="workflow-card-content">
    <h4>Subdivision Surfaces</h4>
    <p>Model a low-poly cage and let algorithms calculate smooth surfaces. The bridge between polygonal control and organic curves.</p>
  </div>
  <i className="fa-solid fa-arrow-right workflow-card-arrow"></i>
</a>

<a href="/knowledge-base/docs/module-3-tools-addons-techniques/techniques/sculpting" className="workflow-card">
  <div className="workflow-card-icon">
    <i className="fa-solid fa-paintbrush"></i>
  </div>
  <div className="workflow-card-content">
    <h4>Sculpting</h4>
    <p>Brush-based workflow for organic forms. Push, pull, and shape geometry like digital clay.</p>
  </div>
  <i className="fa-solid fa-arrow-right workflow-card-arrow"></i>
</a>

<a href="/knowledge-base/docs/module-3-tools-addons-techniques/techniques/modular-modeling" className="workflow-card">
  <div className="workflow-card-icon">
    <i className="fa-solid fa-puzzle-piece"></i>
  </div>
  <div className="workflow-card-content">
    <h4>Kitbashing</h4>
    <p>Composing complex forms by combining pre-existing geometric libraries. Speed-focused concepting.</p>
  </div>
  <i className="fa-solid fa-arrow-right workflow-card-arrow"></i>
</a>

</div>

## Algorithmic Generation *(Computer-driven, rule-based geometry)*

<div className="workflow-grid">

<a href="/knowledge-base/docs/module-3-tools-addons-techniques/techniques/procedural-modeling" className="workflow-card">
  <div className="workflow-card-icon">
    <i className="fa-solid fa-gears"></i>
  </div>
  <div className="workflow-card-content">
    <h4>Procedural Modeling</h4>
    <p>Define rules or algorithms that Blender follows to generate geometry. Non-destructive and parametric.</p>
  </div>
  <i className="fa-solid fa-arrow-right workflow-card-arrow"></i>
</a>

<a href="/knowledge-base/docs/module-3-tools-addons-techniques/techniques/boolean-modeling" className="workflow-card">
  <div className="workflow-card-icon">
    <i className="fa-solid fa-layer-group"></i>
  </div>
  <div className="workflow-card-content">
    <h4>Boolean Operations</h4>
    <p>Combine objects using set logic—union, difference, intersection. Non-destructive but topology-heavy.</p>
  </div>
  <i className="fa-solid fa-arrow-right workflow-card-arrow"></i>
</a>

<a href="/knowledge-base/docs/module-3-tools-addons-techniques/techniques/simulation-physics" className="workflow-card">
  <div className="workflow-card-icon">
    <i className="fa-solid fa-wind"></i>
  </div>
  <div className="workflow-card-content">
    <h4>Simulation</h4>
    <p>Use physics solvers to deform geometry. Generates complex organic forms impossible to model by hand.</p>
  </div>
  <i className="fa-solid fa-arrow-right workflow-card-arrow"></i>
</a>

<a href="/knowledge-base/docs/module-3-tools-addons-techniques/techniques/ai-mesh-generation" className="workflow-card">
  <div className="workflow-card-icon">
    <i className="fa-solid fa-robot"></i>
  </div>
  <div className="workflow-card-content">
    <h4>Generative AI</h4>
    <p>Neural networks predicting 3D topology from 2D data. Rapidly evolving into standard drafting tools.</p>
  </div>
  <i className="fa-solid fa-arrow-right workflow-card-arrow"></i>
</a>

</div>

## Captured Generation *(Real-world data converted to geometry)*

<div className="workflow-grid">

<a href="/knowledge-base/docs/module-3-tools-addons-techniques/techniques/photogrammetry" className="workflow-card">
  <div className="workflow-card-icon">
    <i className="fa-solid fa-camera"></i>
  </div>
  <div className="workflow-card-content">
    <h4>Reality Capture</h4>
    <p>Deriving geometry from the real world via photogrammetry or LiDAR scanning.</p>
  </div>
  <i className="fa-solid fa-arrow-right workflow-card-arrow"></i>
</a>

</div>

## The Unifier *(Bridging all workflows back to clean polygonal meshes)*

<div className="workflow-grid">

<a href="/knowledge-base/docs/module-3-tools-addons-techniques/techniques/retopology-mesh-optimization" className="workflow-card">
  <div className="workflow-card-icon">
    <i className="fa-solid fa-diagram-project"></i>
  </div>
  <div className="workflow-card-content">
    <h4>Retopology</h4>
    <p>Building optimized polygonal meshes over existing objects. The critical bridge that standardizes any source into editable geometry.</p>
  </div>
  <i className="fa-solid fa-arrow-right workflow-card-arrow"></i>
</a>

</div>
