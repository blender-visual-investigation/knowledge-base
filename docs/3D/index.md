---
title: "3D Overview"
description: "Understanding the phases of 3D modeling and visualization for visual investigation."
sidebar_position: 1
---

# 3D Overview

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
	<div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
		<span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
		<span style={{backgroundColor: '#2196f3', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
	</div>
	<div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
		<span style={{fontSize: '16px'}}>📖</span>
		<span>Overview</span>
	</div>
</div>

---

This section explains the practical phases of creating, analysing, and sharing 3D reconstructions for visual investigation. Use the links below to jump to detailed articles in each area. This guide is mostly 3D software agnostic, focussing on concepts that apply across the 3D board. 

What source material do we have? -> What do we want as an end result? 

## Phases at a glance

<div class="phase-grid">
	<div class="phase-card">
		<h4>The Environment</h4>
		<p class="phase-sub">Where are we?</p>
		<ul>
			<li>The Logic of Space (mathematical foundations)</li>
		</ul>
	</div>

	<div class="phase-card">
		<h4>The Approach</h4>
		<p class="phase-sub">How do we create and/or manipulate?</p>
		<ul>
			<li>Modeling Paradigms and workflows (Polygonal, Nurbs, Direct Modeling, etc.)</li>
			<li>Destructive vs Non-Destructive Modeling (strategy and trade-offs)</li>
			<li>Modeling Phases (blockout → refine → detail)</li>
		</ul>
	</div>

	<div class="phase-card">
		<h4>The Scene or Object</h4>
		<p class="phase-sub">What are we interacting with?</p>
		<ul>
			<li>From Math to Mesh (turning measurements into geometry)</li>
			<li>Anatomy of a 3D Model (vertices, edges, faces)</li>
		</ul>
	</div>

	<div class="phase-card">
		<h4>Viewing</h4>
		<p class="phase-sub">How do we see what we have</p>
		<ul>
			<li>Camera & Perspective (how we view and capture the scene)</li>
		</ul>
	</div>

	<div class="phase-card">
		<h4>Data</h4>
		<p class="phase-sub">How do we store & share it?</p>
		<ul>
			<li>File formats, export considerations, and archiving</li>
		</ul>
	</div>
</div>



## Quick links

- [The Logic of Space](./2-the-mathemathical-context.md)
- [The Two Core Paradigms](./3-core-paradigms.md)
- [From Math to Mesh](./4-from-math-to-mesh.md)
- [Anatomy of a 3D Model](./5-what-is-a-3d-model.md)
- [Camera & Perspective](./6-camera-and-perspective.md)
- [File Formats](./7-file-types.md)

### Modeling Practice

- [The Case for Polygonal Modeling](../modeling/1-case-for-polygonal.md)
- [Modeling Workflows](../modeling/2-modeling-workflows.md)
- [Managing Mixed Techniques](../modeling/3-managing-complexity.md)
- [Destructive vs Non-Destructive Modeling](../modeling/4-destructive-vs-non-destructive.md)
- [Modeling Phases](../modeling/5-modeling-phases.md)

## How to use this section

Start with **Phase 1** to establish coordinate systems, units, and camera understanding. Move to **Phase 2** to choose the right modeling technique for the object, then follow **Phase 3** for workflow strategy. Finally, consult **Phase 4** for file format and sharing requirements.

:::tip Investigator's workflow
For court-ready reconstructions: verify units and camera calibration before modeling, use polygonal meshes for compatibility, and export a locked copy of the scene with metadata.
:::
:::tip Investigator's workflow
