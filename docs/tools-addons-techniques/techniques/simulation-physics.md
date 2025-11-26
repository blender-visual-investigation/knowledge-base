---
title: Simulation & Physics-Based Modeling
description: "Using physics solvers to generate geometry through cloth, fluid, and particle simulations in Blender."
sidebar_position: 12
---

# Simulation & Physics-Based Modeling

Simulation uses physics solvers—gravity, collision, wind, and other forces—to deform and generate geometry automatically. Instead of manually modeling every fold in a curtain or every ripple in water, you let Blender's physics engine calculate realistic results.

## Overview

Physics-based modeling treats geometry as a physical object subject to real-world forces. You define the object's properties (mass, stiffness, friction) and the environment (gravity, wind, obstacles), then run a simulation to see how the geometry responds.

The result is frozen into static geometry that can be used like any other mesh.

## When to Use Simulation

- **Cloth and fabric:** Curtains, flags, clothing, bedsheets
- **Soft bodies:** Cushions, jelly, organic deformation
- **Fluid and smoke:** Water, fire, fog, explosions
- **Rigid body dynamics:** Falling objects, debris, destruction
- **Hair and fur:** Strand-based grooming

## Common Simulation Types in Blender

| Type | Use Case |
|------|----------|
| Cloth | Fabric draping, flags, tents, clothing |
| Soft Body | Bouncy, squishy objects |
| Rigid Body | Falling objects, collisions, destruction |
| Fluid | Water, lava, honey |
| Smoke/Fire | Volumetric effects |
| Particle | Hair, grass, debris, rain |

## Basic Workflow

1. **Create base geometry:** Start with a simple mesh (e.g., a flat plane for cloth)
2. **Assign physics:** Add the appropriate physics modifier (Cloth, Soft Body, etc.)
3. **Set up collisions:** Define which objects the simulation interacts with
4. **Configure properties:** Adjust stiffness, mass, damping, etc.
5. **Run simulation:** Play the timeline to calculate physics
6. **Bake the result:** Cache the simulation for consistent playback
7. **Apply modifier:** Convert the simulated result to static geometry

## Example: Cloth Simulation

```
1. Add a Plane mesh (subdivided for detail)
2. Add Cloth modifier to the plane
3. Add a Collision modifier to any obstacle objects
4. Set cloth properties (Cotton, Silk, Leather presets)
5. Play animation to run simulation
6. On desired frame, Apply the modifier to freeze geometry
```

## Advantages

- **Physically accurate:** Results follow real-world physics
- **Impossible to replicate manually:** Complex folds, fluid dynamics
- **Fast iteration:** Adjust parameters and re-simulate
- **Procedural:** Non-destructive until applied

## Limitations

- **Computationally expensive:** High-resolution simulations are slow
- **Unpredictable:** Small parameter changes can produce very different results
- **Requires cleanup:** Simulated geometry may need retopology
- **Learning curve:** Physics parameters require experimentation

## Tips for Visual Investigation

- **Fabric evidence:** Simulate how clothing might drape or fold in a scene
- **Debris patterns:** Use rigid body physics to simulate how objects might scatter
- **Fluid flow:** Visualize how liquids might pool or spread
- **Collision testing:** Check if objects could physically interact as claimed

## Related Techniques

- [Procedural Modeling](/docs/tools-addons-techniques/techniques/procedural-modeling) — Rule-based geometry generation
- [Retopology](/docs/tools-addons-techniques/techniques/retopology-mesh-optimization) — Clean up simulation results

---

Simulation generates complex organic geometry that would be impossible to sculpt or model by hand. Use it when physical accuracy matters more than artistic control.
