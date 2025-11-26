---
title: Sculpting
description: "A brush-based workflow for shaping geometry like digital clay in Blender."
sidebar_position: 5
---

# Sculpting

Sculpting is a brush-based workflow where you push, pull, and shape geometry like digital clay. Unlike direct modeling, which manipulates individual vertices, sculpting uses brushes to deform large areas of a high-resolution mesh simultaneously.

## Overview

Sculpting in Blender simulates traditional clay modeling. You start with a base mesh and use various brushes to:

- Add or remove volume
- Smooth surfaces
- Create fine details (wrinkles, pores, damage)
- Shape organic forms intuitively

This technique excels at creating organic shapes that would be tedious or impossible to model vertex-by-vertex.

## When to Use Sculpting

- **Organic forms:** Characters, creatures, anatomy
- **Natural objects:** Rocks, terrain, trees
- **Damage and wear:** Dents, scratches, erosion
- **High-frequency detail:** Skin pores, fabric folds, surface texture
- **Concept exploration:** Quickly blocking out forms

## Key Brushes in Blender

| Brush | Description |
|-------|-------------|
| Draw | Adds or subtracts volume in brush direction |
| Clay Strips | Builds up strips of "clay" |
| Grab | Moves geometry like pushing clay |
| Smooth | Averages vertex positions to smooth surfaces |
| Crease | Creates sharp creases and folds |
| Pinch | Pulls vertices toward brush center |
| Inflate | Expands geometry outward |
| Flatten | Levels surfaces to a plane |
| Scrape | Flattens peaks and fills valleys |

## Workflow

1. **Start with a base mesh:** Use a simple polygonal model or sculpting primitive
2. **Block out major forms:** Use Grab and Clay brushes at low resolution
3. **Add subdivision:** Increase mesh density with Dyntopo or Multires
4. **Refine details:** Switch to finer brushes for surface detail
5. **Retopologize:** Create a clean, low-poly mesh over the sculpt for animation

## Sculpting Modes

- **Dyntopo (Dynamic Topology):** Automatically adds/removes vertices as you sculpt. Great for exploration but creates unstructured topology.
- **Multires (Multiresolution):** Adds subdivision levels while preserving the base mesh. Better for animation workflows.
- **Voxel Remesh:** Rebuilds the mesh as a uniform voxel grid. Useful for combining shapes.

## Trade-offs

**Advantages:**
- Intuitive, artistic workflow
- Fast for organic shapes
- Excellent for fine detail

**Limitations:**
- Generates extremely high-resolution geometry
- Topology is often unstructured and unusable for animation
- Requires retopology for production use
- Performance-intensive with dense meshes

## Integration with Other Techniques

Sculpting rarely stands alone in a production pipeline:

1. **Direct Modeling → Sculpting:** Create a base mesh, then sculpt details
2. **Sculpting → Retopology:** Clean up the sculpted mesh for animation
3. **Sculpting → Baking:** Transfer detail to normal/displacement maps

## Related Techniques

- [Retopology](/docs/tools-addons-techniques/techniques/retopology-mesh-optimization) — Clean up sculpted meshes
- [Direct Modeling](/docs/tools-addons-techniques/techniques/direct-modeling) — Create base meshes for sculpting

---

Sculpting is essential for organic detail work, but remember: the output is usually raw data that requires optimization before use in animation or real-time applications.
