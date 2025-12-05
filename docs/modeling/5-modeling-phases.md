---
title: Modeling Phases
description: A structured approach to modeling projects — from reference and blocking to finalization and validation.
sidebar_position: 5
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
Building Evidence: A Structured WorkflowCategory: Fundamentals | Reading Time: 10 MinutesA primary methodological error in forensic reconstruction is the prioritization of surface detail over structural accuracy. In standard 3D modeling, there is often a rush to achieve visual fidelity—adding textures, bevels, or damage effects early in the process. In a visual investigation, this approach creates significant risk.If a model is detailed before its fundamental scale and spatial relationships are verified, any subsequent correction requires destructive rework. A vehicle modeled with high-fidelity geometry is of no evidentiary value if its position or scale relative to the scene is incorrect.To ensure accuracy and efficiency, investigators should adhere to a Phased Approach. This workflow prioritizes macro-structural verification before micro-detail implementation, ensuring that complexity is only added to a validated geometric foundation.The Importance of a Phased MethodologyAttempting to address perspective matching, topology, and detailing simultaneously often leads to unmanageable and inaccurate models. By segmenting the workflow into distinct phases, the investigator ensures that each step relies on a verified predecessor.Accuracy: Ensures scale and proportions are validated before resources are invested in detailing.Repeatability: Facilitates the updating of specific phases as new evidence becomes available without dismantling the entire asset.Auditability: Creates a transparent construction history, allowing stakeholders to verify the geometric basis of the investigation.The 6 Phases of Investigative Modeling1. Data Acquisition & CalibrationThe reliability of a model is determined by its source data. This phase focuses on gathering and organizing the "ground truth" of the scene.Objective: Aggregate photographic evidence, satellite imagery, architectural blueprints, and measurement data.Methodology: Determine the hierarchy of precision. In the absence of blueprints, Camera Calibration (Perspective Matching) becomes the primary method for deriving dimensions. Identify specific images that will serve as perspective anchors for the coordinate system.2. Volumetric BlockingThis phase establishes the spatial "truth" of the scene. The focus is exclusively on mass, scale, and orientation.Objective: Define major volumes using geometric primitives (cubes, cylinders, planes). Establish the relationship between fixed infrastructure (walls, floors) and dynamic objects (vehicles, debris).Rationale: Structural errors must be identified here. If the foundation is flawed, high-fidelity details will not correct the spatial inaccuracies.Protocol: Use simple bounding boxes to represent complex objects. For example, a vehicle should be represented by a box matching its wheelbase and height dimensions before any chassis geometry is modeled.3. Dimensional Verification (The Audit Gate)This phase functions as a mandatory checkpoint. Detailing should not commence until the volumetric block-out is validated against the source data.Objective: Utilize measurement tools to audit distances, angles, and edge lengths. Cross-reference the block-out against multiple perspective-matched camera views to ensure alignment across all available angles.Rationale: A deviation in scale (e.g., a 10% error in room dimensions) can invalidate subsequent analytical outputs, such as line-of-sight or trajectory calculations. Digital scale must correspond to real-world data.4. Geometric RefinementUpon verification of the primary volumes, the geometry can be subdivided and refined to match the reference forms.Objective: Adjust geometry to reflect actual contours. Optimize topology (edge flow) for boolean stability.Rationale: In forensic workflows, clean topology is not primarily for deformation (as in VFX), but for computational accuracy. Clean meshes allow for precise boolean operations (e.g., cutting trajectory paths) and ensure accurate vertex snapping during analysis.5. ContextualizationThis phase improves the legibility of the scene, adding elements that aid in object identification.Objective: Add secondary geometry, identifying features, and bevels to distinguish objects.Rationale: Contextual details assist stakeholders in recognizing the scene, but they must adhere strictly to the verified proportions from Phase 3.Note on Texturing: "Clay renders" (untextured grey models) are often preferred in forensics. Applying specific textures (e.g., specific material finishes) implies knowledge of the material properties. If the material cannot be verified, it should not be represented, as false detail introduces bias.6. Documentation & ExportThe final phase prepares the asset for analysis, external review, or publication.Objective: Configure views for clarity (often utilizing orthographic projections) and export to interoperable formats (.obj, .fbx).Protocol: Maintain a non-destructive master file with all modifiers active. This preserves the ability to audit the construction history or rollback changes if the investigation is challenged.:::note Protocol for AuditabilityTransparency is essential for credibility. To ensure the model withstands scrutiny:Version Control: Save distinct versions at the conclusion of every phase (e.g., Scene_v02_Blocking, Scene_v03_Verified).Nomenclature: Use descriptive naming conventions (e.g., Wall_North_Ext) rather than default software names.Documentation: Maintain a project log recording the units used, primary measurement references, and specific images used for perspective matching.:::Comparison: Investigative vs. VFX WorkflowsIt is useful to distinguish this approach from standard entertainment pipelines.In Visual Effects (VFX), the objective is photorealism. Consequently, the workflow often accelerates through the blocking phase to focus on texturing, shading, and lighting.In Visual Investigation, the priority is evidentiary accuracy.VFX Block-out: A rough approximation to guide the artist.Forensic Block-out: A high-precision spatial volume serving as evidence.Investigative workflows rarely require advanced shading or cinematic lighting. The model functions primarily as reliable spatial data, where geometric precision takes precedence over aesthetic finish.

-----

:::note Best Practices for Auditability
Credibility comes from transparency. To ensure your work can be audited:

  * **Keep a Clear Version History:** Save new versions at the start of every major phase (e.g., `Scene_v02_Blocking.blend`, `Scene_v03_Refined.blend`).
  * **Use Naming Conventions:** Name your objects clearly (e.g., `Wall_North_External` instead of just `Cube.004`) so others can understand the scene structure.
  * **Document Everything:** Keep a README file in your project folder recording units used, measurement references, and validation steps.
    :::

-----

## Perspective: Investigation vs. VFX Workflows

It is helpful to understand that an investigative approach is different from standard industry pipelines used in gaming or visual effects (VFX), but also shares similarities. 

In VFX, the goal is photorealism and artistic appeal. A typical VFX pipeline involves many steps designed to polish the look of an asset, as shown in this overview:

\<details\>
\<summary\>Click to view a standard 9-Step VFX Workflow\</summary\>

1.  **Block-out phase:** Defining basic shapes and proportions.
2.  **Mid/High-Poly Modeling:** Refining shapes, adding more specific detail and increasing polygon count.
3.  **Detailing/sculpting:** Adding fine details like wrinkles, damage, and imperfections.
4.  **UV Unwrapping:** Preparing the 2D surface map for textures.
5.  **Texturing:** Creating and applying colors and materials.
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

  * Always gather as much data and define precision goals *before* modeling.
  * Spend the majority of your time in the "Blocking" phase getting proportions right.
  * Use non-destructive workflows (modifiers) so you can adapt to new evidence.
  * Verify your model with measurement tools frequently.

Ready to start your first structured block-out? Head over to our **Knowledge Base** for a step-by-step tutorial on setting up your Blender scene with correct real-world units for investigation.