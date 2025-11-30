# Depth Map Modeling

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#2196f3', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>7 min read</span>
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
    src="https://www.youtube.com/embed/egBNsSCajDg"
    title="Depth Map Modeling Tutorial"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>
</div>

## Introduction

Depth map modeling uses depth information to create 3D geometry from 2D images. By interpreting grayscale values as height or distance data, you can transform flat images into three-dimensional surfaces—a powerful technique for visual investigation work when you need to reconstruct surfaces from photographs, satellite imagery, or specialized depth-sensing cameras.

This page will cover:
- What depth maps are and how they encode 3D information in 2D images
- The workflow for converting depth data into geometry using displacement modifiers
- Understanding height fields, stereo imaging, and depth sensing technologies
- Best practices for preparing depth maps and optimizing displacement resolution
- Common pitfalls when working with noisy or incomplete depth data

---

import FeatureCard from '@site/src/components/FeatureCard';
import FeatureCardGrid from '@site/src/components/FeatureCardGrid';

<FeatureCardGrid>
  <FeatureCard 
    title="Resources" 
    headerColor="#6dfb72"
    textColor="#333"
    icon="fa-solid fa-book"
  >
    <p style={{margin: 0}}>Access guides on depth map generation, displacement techniques, and height field modeling workflows.</p>
  </FeatureCard>
  
  <FeatureCard 
    title="Links" 
    headerColor="#1C75BC"
    icon="fa-solid fa-link"
  >
    <p style={{margin: 0}}>Explore Blender's displacement modifier documentation and related image-based modeling tools.</p>
  </FeatureCard>
  
  <FeatureCard 
    title="Videos" 
    headerColor="#EF4C3C"
    icon="fa-solid fa-play"
  >
    <p style={{margin: 0}}>Watch practical tutorials on creating 3D terrain and surfaces from depth data for reconstruction work.</p>
  </FeatureCard>
</FeatureCardGrid>

---

## What is a Depth Map?

A **depth map** is a grayscale image where pixel brightness represents distance or elevation. Brighter values typically indicate areas closer to the camera (or higher elevation), while darker values represent areas farther away (or lower elevation).

### Common Sources

- **Stereo cameras or photogrammetry software** — Calculate depth via triangulation between two viewpoints
- **LiDAR and depth-sensing cameras** — Direct distance measurement (e.g., iPhone depth sensors)
- **AI-generated depth estimation** — Single image depth prediction using machine learning
- **Satellite elevation data** — Digital Elevation Models (DEMs) from geographic surveys
- **Manual painting or procedural generation** — Artist-created height maps

### Monocular Depth Estimation: AI-Based Approaches

**Monocular depth estimation** is the process of predicting a dense depth map from a single RGB image. Unlike stereo vision, which calculates depth via triangulation, monocular estimation relies on learned features to infer the Z-distance of every pixel.

#### Understanding Output Types

**Disparity Map:**
- Represents the pixel distance between the same point in two stereo images
- In monocular models, this is often an intermediate calculation assuming a virtual second camera
- Related to depth through: `Depth = (Focal Length × Baseline) / Disparity`

**Depth Map:**
- The actual distance (Z-value) of a point in real-world space
- **Metric Depth:** Absolute real-world units (meters)
- **Relative Depth:** Normalized values (0-1) indicating order without physical scale

#### Current State-of-the-Art Models

| Model | Specialty | Size | Training Code | Best For |
|-------|-----------|------|---------------|----------|
| **Depth Anything V2** | Fine detail, reflective surfaces | 99MB - 1.3GB | ✓ Available | General-purpose, glass/mirrors, lightweight deployment |
| **DepthCrafter** | Temporal video consistency | ~3GB | ✗ Not public | Video processing, VFX, stable frame-to-frame transitions |
| **Depth Pro (Apple)** | Zero-shot metric depth | 1.9GB | ✗ Not public | High-precision measurement, sharp boundary definition |
| **Marigold** | Lightweight efficiency | 167MB - 300MB | ✓ Available | Custom fine-tuning, resource-constrained environments |
| **Metric3D** | Absolute metric accuracy | 150MB - 1.65GB | ✓ Available | AR applications, true-to-scale measurements |
| **DPT (MiDaS 3.0)** | Robust relative depth | 498MB - 1.37GB | Community only | Legacy support, general relative depth tasks |

#### Evaluation Datasets

Model performance depends heavily on training data:

- **NYU Depth V2** — Indoor scenes, standard for indoor navigation
- **DIODE** — Dense Indoor and Outdoor Depth, balanced dataset
- **ETH3D** — Multi-view stereo, variety of environments
- **KITTI** — Street scenes and autonomous driving data
- **Middlebury** — Classic high-precision stereo benchmark

#### Selection Guide

Choose based on your specific requirements:

- **Custom Training/Fine-tuning:** Depth Anything V2, Marigold, Metric3D
- **Fast Inference (Basic Hardware):** Depth Anything V2 (Small), Marigold, DPT
- **Video/Temporal Stability:** DepthCrafter
- **Metric Accuracy (Real-world scale):** Depth Pro, Metric3D
- **Complex Surfaces (Glass/Mirrors):** Depth Anything V2
- **Permissive Licensing:** Depth Anything V2, Marigold, Metric3D

:::tip Overall Recommendation
**Depth Anything V2** is currently the strongest general-purpose contender due to its balance of accuracy, robustness against difficult materials, and code availability.
:::

## How Depth Maps Work in Blender

Blender can interpret depth maps in several ways:

1. **Displacement Modifier:** Deforms geometry based on texture values, pushing vertices up or down according to brightness
2. **Displace Texture Node (Shading):** Creates the illusion of depth through shader calculations without actual geometry
3. **Height Field Import:** Direct conversion of image pixels to vertex heights on a subdivided plane

The displacement modifier is the most common approach for creating actual 3D geometry from depth data.

## Workflow

1. **Obtain or Generate Depth Map:** Acquire depth data from sensors, software, or AI tools
2. **Prepare Image:** Clean up noise, adjust contrast, ensure proper grayscale format
3. **Create Base Mesh:** Add a subdivided plane with sufficient geometry density
4. **Apply Displacement Modifier:** Add modifier and load depth map as texture
5. **Adjust Strength and Midlevel:** Fine-tune the displacement amount and zero point
6. **Add Subdivision:** Increase mesh density if detail is lost (Subdivision Surface or Multiresolution)
7. **Optimize Topology:** Optionally retopologize or decimate for cleaner geometry

## Key Concepts

- **Depth Maps:** Grayscale images encoding distance or elevation information
- **Displacement:** Physical deformation of geometry based on texture values
- **Height Fields:** Grid-based representation where each point has an elevation value
- **Stereo Imaging:** Technique using two cameras to calculate depth from parallax
- **Midlevel:** The grayscale value that represents zero displacement (typically 50% gray)
- **Subdivision Density:** Number of vertices available for displacement; more = finer detail
- **Digital Elevation Model (DEM):** Geographic height field data, often from satellite sources

## Best Practices

- **High Subdivision Count:** Ensure base mesh has sufficient geometry for detail resolution
- **Clean Depth Maps:** Remove noise and artifacts before displacement to avoid spiky geometry
- **Use Proper Bit Depth:** 16-bit grayscale images provide more precision than 8-bit
- **Set Correct Midlevel:** Adjust to 0.5 (50% gray) unless depth map uses different encoding
- **Apply Scale Correctly:** Match displacement strength to real-world measurements when possible
- **Test with Low Resolution First:** Preview with fewer subdivisions before high-resolution baking
- **Save Original Depth Data:** Keep unmodified depth maps for iterative adjustments

## Common Pitfalls

- **Insufficient Geometry:** Low subdivision results in blocky, stepped surfaces instead of smooth terrain
- **Noisy Depth Data:** Sensor noise or compression artifacts create unwanted spikes and holes
- **Incorrect Midlevel Setting:** Wrong zero point causes entire surface to float or sink unexpectedly
- **Edge Artifacts:** Depth map edges often have unreliable data causing warped geometry
- **Missing Depth Information:** Occlusions or reflective surfaces may have no depth data (black holes)
- **Over-Displacement:** Excessive strength values create unrealistic, exaggerated surfaces
- **Format Confusion:** Mixing up depth-from-camera vs. elevation-from-ground encoding conventions

---

## Summary

Depth map modeling transforms 2D depth information into 3D geometry using displacement techniques. This approach is particularly valuable for visual investigation when reconstructing terrain, surfaces, or objects from photographic evidence, satellite data, or depth-sensing technology. While dependent on the quality of input depth data, it provides a direct, measurable path from image-based evidence to three-dimensional models.

**Key Takeaways:**
- Depth maps encode distance or elevation as grayscale values in 2D images
- Displacement modifiers convert depth data into actual 3D geometry by deforming subdivided meshes
- Multiple sources provide depth data: stereo cameras, LiDAR, AI estimation, satellite DEMs
- Sufficient subdivision density is critical; more vertices = finer detail representation
- Clean, noise-free depth maps with proper bit depth produce the most accurate geometry
- Understanding midlevel settings and displacement strength ensures correct scale and positioning

**Further Resources:**
- [Blender Displacement Modifier Documentation](https://docs.blender.org/manual/en/latest/modeling/modifiers/deform/displace.html)
- [Additional Depth Modeling Tutorial](https://www.youtube.com/watch?v=cSalVDqfo4c)
- [Photogrammetry and Depth Maps](/docs/tools-addons-techniques/techniques/photogrammetry)
- [AI-Based Depth Estimation Tools](https://example.com/depth-ai)
