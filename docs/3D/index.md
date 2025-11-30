---
title: "3D Context"
description: "Understanding the foundational concepts of 3D space, geometry, and modeling for visual investigation."
sidebar_position: 1
---

# 3D Context

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
	<div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
		<span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
		<span style={{backgroundColor: '#2196f3', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
	</div>
	<div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
		<span style={{fontSize: '16px'}}>📖</span>
		<span>Module Overview</span>
	</div>
</div>

---

## Introduction

Before clicking a single button in Blender, it's worth understanding the environment you're stepping into. This module provides a **first-principles foundation** for 3D work—the conceptual vocabulary that underpins everything you'll do in visual investigation.

Most Blender courses skip directly to tools and techniques. We take a different approach: **understanding before action**. By grasping the logic of 3D space, the paradigms for representing geometry, and the anatomy of meshes, you'll develop intuition that transfers across any 3D software and helps you make informed decisions when reconstructing real-world events.

---

import FeatureCard from '@site/src/components/FeatureCard';
import FeatureCardGrid from '@site/src/components/FeatureCardGrid';

<FeatureCardGrid>
  <FeatureCard 
    title="Why This Matters" 
    headerColor="#6dfb72"
    textColor="#333"
    icon="fa-solid fa-lightbulb"
  >
    <p style={{margin: 0}}>Understanding 3D foundations helps you troubleshoot problems, choose appropriate techniques, and create verifiable reconstructions.</p>
  </FeatureCard>
  
  <FeatureCard 
    title="Software Agnostic" 
    headerColor="#1C75BC"
    icon="fa-solid fa-cube"
  >
    <p style={{margin: 0}}>These concepts apply across all 3D software. Learn them once, apply them everywhere—including Maya, Cinema 4D, and specialized forensic tools.</p>
  </FeatureCard>
  
  <FeatureCard 
    title="Visual Investigation Focus" 
    headerColor="#EF4C3C"
    icon="fa-solid fa-magnifying-glass"
  >
    <p style={{margin: 0}}>While broadly applicable, examples and emphasis are tailored to reconstruction, measurement, and evidence visualization workflows.</p>
  </FeatureCard>
</FeatureCardGrid>

---

## Module Contents

This module is organized as a progressive journey from abstract mathematical concepts to practical application:

### 1. The Logic of Space

**[The Logic of Space](./1-the-mathemathical-context.md)** — *10 min read*

Before we model anything, we must understand the environment we're working in. This page covers coordinate systems, axes, dimensions (0D → 1D → 2D → 3D), and spatial relationships. It's not a math lecture—it's a philosophical primer designed to give you intuition for 3D space.

**You'll learn:** Coordinate systems, origin points, axes conventions, and why Blender's Z-up orientation matters for your workflow.

---

### 2. Core Paradigms

**[Core 3D Data Paradigms](./3-core-paradigms.md)** — *6 min read*

Geometry isn't represented in a single, universal way—it's expressed through fundamentally different paradigms. This page explains the core approaches: **polygonal surfaces**, **NURBS**, **volumetric fields**, and **solid modeling**, with a focus on why polygonal modeling is Blender's primary strength.

**You'll learn:** The difference between representation paradigms, when to use each, and why polygonal is the baseline for visual investigation.

---

### 3. From Math to Mesh

**[From Math to Mesh](./4-from-math-to-mesh.md)** — *6 min read*

Bridging abstract mathematical space with concrete data structures. A point becomes a **vertex**, a line becomes an **edge**, a plane becomes a **face**, and together they form a **mesh**. This terminology shift reflects the move from pure geometry to computational geometry.

**You'll learn:** How mathematical concepts translate to Blender's vocabulary, and the fundamental building blocks of every 3D model.

---

### 4. Anatomy of a 3D Model

**[Anatomy of a 3D Model](./3-what-is-a-3d-model.md)** — *10 min read*

A mesh is more than just a surface. Looking at a model without understanding its structure is like judging a building's stability by its appearance alone. This page covers the "skeleton" of meshes: **geometry**, **topology**, **poly-count**, **normals**, and **manifold integrity**.

**You'll learn:** The Big Three attributes of mesh quality, how to identify common problems, and why mesh structure matters for forensic reliability.

---

### 5. Camera & Perspective

**[Camera & Perspective](./6-camera-and-perspective.md)** — *5 min read*

Camera knowledge operates on two levels: understanding the cameras that created your source material (photographs, video), and understanding virtual cameras for capturing your reconstructions. Both are crucial for visual investigation.

**You'll learn:** Focal length, lens distortion, perspective principles, and how camera matching connects real-world footage to 3D reconstructions.

---

### 6. File Formats

**[File Formats](./7-file-types.md)** — *4 min read*

Common export and interchange formats for sharing 3D evidence. Different formats preserve different data—choosing correctly ensures your reconstructions remain accurate and accessible for legal proceedings, collaboration, or archiving.

**You'll learn:** When to use `.blend`, `.fbx`, `.obj`, `.gltf`, and other formats, plus considerations for forensic documentation.

---

## Learning Path

<div class="phase-grid">
	<div class="phase-card">
		<h4>Phase 1: The Environment</h4>
		<p class="phase-sub">Where are we?</p>
		<ul>
			<li><a href="./1-the-mathemathical-context">The Logic of Space</a></li>
		</ul>
	</div>

	<div class="phase-card">
		<h4>Phase 2: The Approach</h4>
		<p class="phase-sub">How do we create?</p>
		<ul>
			<li><a href="./3-core-paradigms">Core Paradigms</a></li>
			<li><a href="./4-from-math-to-mesh">From Math to Mesh</a></li>
		</ul>
	</div>

	<div class="phase-card">
		<h4>Phase 3: The Object</h4>
		<p class="phase-sub">What are we working with?</p>
		<ul>
			<li><a href="./3-what-is-a-3d-model">Anatomy of a 3D Model</a></li>
		</ul>
	</div>

	<div class="phase-card">
		<h4>Phase 4: Viewing & Sharing</h4>
		<p class="phase-sub">How do we see and share?</p>
		<ul>
			<li><a href="./6-camera-and-perspective">Camera & Perspective</a></li>
			<li><a href="./7-file-types">File Formats</a></li>
		</ul>
	</div>
</div>

---

## Related Modules

Once you've grasped the 3D context, these modules build on this foundation:

| Module | Focus | Link |
|--------|-------|------|
| **Modeling Practice** | Practical workflows, techniques, and strategies | [Modeling Module](/docs/modeling) |
| **Blender** | Software-specific training and interface | [Blender Module](/docs/blender) |
| **Techniques** | Specific methods like photogrammetry, camera matching | [Techniques Library](/docs/tools-addons-techniques/techniques) |

---

## How to Use This Section

**For complete beginners:** Work through the pages in order. Each builds on the previous, creating a coherent mental model of 3D space.

**For experienced 3D users:** Skim for gaps in your knowledge. The investigative framing may offer new perspectives even on familiar concepts.

**For analysts (non-modelers):** Focus on [Anatomy of a 3D Model](./3-what-is-a-3d-model.md) and [Camera & Perspective](./6-camera-and-perspective.md)—these help you interrogate and verify models created by others.

:::tip Investigator's Workflow
For court-ready reconstructions: verify units and camera calibration before modeling, use polygonal meshes for compatibility, and export a locked copy of the scene with metadata.
:::
