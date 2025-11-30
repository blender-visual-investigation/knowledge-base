---
sidebar_position: 1
---


# Blender for Visual Investigation

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>5 min read</span>
  </div>
</div>

---

## How to construct and communicate a spatial argument.

In theory Blender offers the oppertunity to play a role in the complete pipeline of constructing and communicating a spatial argument

- Container/Content (The World): Building the truth.
- Situatedness (The Analysis): Finding the truth.
- Abstract Visualization (The Data): Explaining the systems.
- Presentation (The Output): Communicating the argument.

## The Methodological Framework

The aim of this knowledge base is broad and ambitious. It is also a constant work in progress. Aimed at complete beginners to advanced users. We locate it within 3D space, explain the UI, and focus on one of its core strengths, polygonal modeling. A mathematical foundation of 3D space, how different paradigms exist to create or manipulate objects within this space, and introduce blender as a tool from the ground up. Understanding Blender from first principles, understanding it's strengths, weaknesses and oppertunities, and applying those to visual investigative scenarios. Blender can bring al sorts of data together and function as a central hub to construct and communicate a spatial argument.

Visual Investigation represents a distinct discipline where 3D modeling ceases to be an artistic pursuit and becomes a forensic instrument. Unlike entertainment workflows, where the primary metric is aesthetic appeal, the primary metric in investigation is verifiability. This knowledge base aims to provide a technical and methodological guide for using Blender to reconstruct events, analyze spatial relationships, and generate evidentiary assets. It bridges the gap between digital content creation (DCC) tools and forensic science.

As it stands now the focus is on three pillars: Container, Content, Situatedness. This system organizes all investigative workflows into three (interacting) pillars. A successful reconstruction requires the rigorous application of (a combination of) all three.

1. The Container (Macro-Spatial Reconstruction)

The "Container" is the environment in which an event occurred. It is the absolute coordinate system of the investigation.
Focus: Location (Room, Building, City Block, Terrain).
Methodology: Photogrammetry, Satellite Analysis, Camera Calibration.

Critical Constraint: The container must be geometrically calibrated to real-world data (blueprints, LiDAR, or perspective matching). Without a calibrated container, no analysis can be performed.

2. The Content (Micro-Spatial & Asset Generation)
The "Content" consists of the specific objects within the scene—vehicles, munitions, debris, or actors.
Focus: Objects (Evidence).

Methodology:
Modular Modeling: Efficiently reconstructing dense environments using standardized, repeating units.
Forensic Asset Generation: High-fidelity reconstruction of specific evidentiary objects (e.g., scanning a munition for analysis).
Critical Constraint: Content is modeled with varying fidelity based on its role. "Contextual Assets" (props) prioritize scale; "Evidentiary Assets" (subjects) prioritize surface accuracy and topology.

Note that it can also be the object on it's own and the reconstruction of it that can have forensic value. 

3. Situatedness (Spatial Analysis)

"Situatedness" is the analysis of the vector between Content and Container. It is the reconstruction of the event in time and space.
Focus: Relations (Line of Sight, Trajectory, Timeline).
Methodology: Spatio-Temporal Synchronization, Projection Mapping, Chronolocation.
Critical Constraint: Situatedness transforms a static 3D model into Situated Testimony. It allows investigators to verify witness accounts by placing them within the calibrated model.

---

Which leaves us with the million dollar question: which workflow should I use. And the answer is what makes 3D reconstruction difficult: it depends. There is no silver bullet. There are only choices and trade-offs. In standard 3D production, the pipeline is often linear: Concept → Model → Texture → Render. Visual Investigation is different. It is non-linear and highly reactive. We do not have the freedom to invent; we are constrained by the reality we are trying to reconstruct. Because every case offers different evidence and demands a different output, there is no single "correct" workflow.

A 3D model reconstruction of a rocket to be used in a VR training simulation is can be fundamentally different from a 3D model of the same rocket used to calculate impact and blast radius. One prioritizes frame rate; the other prioritizes millimeter precision, or a combination of both.

## Core Methodologies

### 1. Spatio-Temporal Synchronization
A foundational step in any investigation is the organization of chaotic data into a structured timeline and 3D space.

**Spatial Synchronization:
- Use visual evidence to create a proxy model of the environment (container)
- Place visual evidence within a proxy model of the environment to analyze relations, verify assumptions etc. 

**Poly-Perspective Sculpting:** To model a cloud of smoke, investigators use silhouettes from multiple synchronized camera angles. By sculpting the volume from these intersecting viewpoints, they generate a 3D shape of the plume.

**Blast Dynamics:** For explosions, the expansion rate of the fireball is measured frame-by-frame. By modeling the blast wave as a sphere, investigators can triangulate the precise epicenter and calculate the detonation velocity, which helps identify the explosive material.

### 3. Projection Mapping & Texture Projection
When investigating fires or surface damage (e.g., Grenfell Tower), individual videos often lack context.

**Motion Tracking:** Footage is stabilized and tracked to the 3D model of the building. Due to poor lighting or camera shake in witness footage, this often requires **Manual Tracking**—frame-by-frame adjustment of the virtual camera using geometry as a guide.

**Projection:** Once tracked, the video is projected onto the surface of the building model. When multiple videos are projected simultaneously, they create a comprehensive texture map of the event, revealing spread patterns invisible in isolation.

Your job as a visual investigator is not just to "know Blender." It is to assess the specific constraints of the case—the evidence available and the answers required—and choose the specific path through the polygonal paradigm that gets you there efficiently and defensibly.

So instead of following a step-by-step path, there is a constant process of personal interrogation. We must continuously ask: "Given what I have, and what I need to prove, which path is the most efficient and accurate?" This knowledge base aims to assist you with that. 

To navigate this, we need to understand the variables at play, and they are many. 

## The Blender for Visual Investigation Knowledge Base: A Structured Curriculum

The aim of this knowledge base is to provide you with free, comprehensive knowledge that is systematically designed to equip investigators, journalists, and researchers with the advanced **3D visualization and analysis capabilities** while using Blender. Its content is strategically organized around foundational pillars to ensure a targeted and efficient learning trajectory:

### **The 3D context**

This module provides a **beginner-friendly onboarding** to the 3D context in which Blender plays its part. The objective is to efficiently transition users from a **zero-knowledge state** to having a baseline idea of where things fall.

---

### **Blender for Investigative Purposes: Foundational Skills**

This module provides a **disciplined, beginner-friendly onboarding** to the Blender environment. Unlike general tutorials focused on creative production (e.g., gaming or film), this instruction is **uniquely scoped** to the requirements of visual investigation. The objective is to efficiently transition users from a **zero-knowledge state** to demonstrating a comfortable command of the software's essential tools for verifiable and accurate 3D modeling.

---

### **Specialized Toolkit & Methodologies**

This pillar curates and details a collection of **Blender tools, add-ons, and technical methodologies** that have been refined and adapted specifically for the investigative context. Each resource is accompanied by a **detailed operational explanation** and a **clear delineation of its applicability** across various use cases (e.g., measurement, geo-location, line-of-sight analysis), thereby maximizing the utility of the software in evidence analysis.

---

### **Applied Analysis: Case-Based Workflow Integration**

Focusing on practical application, this section presents **full, integrated workflows** derived from typical or analyzing existing investigative scenarios. It offers **strategy guidance** and **in-depth technical analyses** of the combined techniques and tools required. The goal is to provide a complete outcome, highlight strategies to get to that outcome effectivly and efficiently, from the initial investigative briefing and evidence ingestion to the generation of a precise, verifiable, and desired output.


### Teaching Philosophy

Most Blender courses start directly with modeling, rendering, or project-based workflows.
This course takes a different approach — it begins by **building an understanding of geometry and dimensionality**, so learners grasp what they are actually doing when they manipulate  in 3D space.

By starting with geometry, you learn to think visually *and* structurally, connecting the abstract world of mathematics to the practical world of digital modeling.

---

import FeatureCard from '@site/src/components/FeatureCard';
import FeatureCardGrid from '@site/src/components/FeatureCardGrid';

## Course Structure


