# Camera Tracking

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#ff9800', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>ADVANCED</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>15 min read</span>
  </div>
</div>

---

## Introduction

Camera tracking is the process of analyzing and reconstructing the movement and position of a camera as it captures video footage. It involves identifying how the camera moves through three-dimensional space—whether panning, tilting, zooming, dolly-ing, or remaining stationary—and determining its precise trajectory and orientation at each frame. This analysis creates a digital representation of the camera's path and viewing angle throughout a recorded sequence.

This page will cover:
- What camera tracking is and how it analyzes camera motion from footage
- Why camera tracking is essential for visual investigation and spatial intelligence
- Key applications including sight line analysis, distance measurement, and evidence authentication
- Technical approaches from native Blender trackers to advanced tools like Polychase and GeoTracker
- Best practices for achieving reliable tracking results and common pitfalls to avoid

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
    <p style={{margin: 0}}>Access comprehensive guides on feature tracking, camera solving algorithms, and forensic video analysis.</p>
  </FeatureCard>
  
  <FeatureCard 
    title="Links" 
    headerColor="#1C75BC"
    icon="fa-solid fa-link"
  >
    <p style={{margin: 0}}>Explore Blender's motion tracking library (libmv) and related PnP solver documentation.</p>
  </FeatureCard>
  
  <FeatureCard 
    title="Videos" 
    headerColor="#EF4C3C"
    icon="fa-solid fa-play"
  >
    <p style={{margin: 0}}>Watch practical tutorials on camera tracking for crime scene reconstruction and evidence analysis.</p>
  </FeatureCard>
</FeatureCardGrid>

---

## What is Camera Tracking?

At its core, camera tracking works by following visual features across frames. As a camera moves, distinctive points, lines, or textures in the scene appear to shift in predictable ways. By tracking these visual markers from frame to frame, investigators can reverse-engineer the camera's motion and reconstruct the spatial relationships between the camera, objects in the scene, and the environment itself.

### Why Camera Tracking Matters for Visual Investigation

Camera tracking transforms passive video footage into actionable spatial intelligence. In visual investigation, video evidence is often the most compelling and detailed record available at a scene, yet its three-dimensional nature is frequently misunderstood or oversimplified. Camera tracking bridges this gap by converting flat two-dimensional video into structured three-dimensional information that can be analyzed, measured, and cross-referenced with other evidence.

## Key Applications in Visual Investigation

### Establishing Sight Lines and Visibility
By reconstructing the camera's exact position and angle, investigators can determine what could realistically be seen from a particular vantage point. This is crucial in cases where witness testimony hinges on whether an observer could have actually seen an event. Camera tracking reveals blind spots, obstructions, and the precise field of view available at specific moments.

### Measuring Distances and Dimensions
When camera position is known, the scale of objects and distances between them can be calculated. This allows investigators to verify whether reported measurements are consistent with video evidence, or to determine the size of vehicles, weapons, or injuries visible in footage—even without reference objects of known size present in every frame.

### Reconstructing Sequences of Events
Multi-camera tracking across different video sources allows investigators to establish the spatial and temporal relationships between events. By knowing exactly where each camera was positioned and what it was viewing, investigators can build coherent timelines and determine whether multiple recordings show the same incident from different angles or unrelated events entirely.

### Exposing Manipulated or Falsified Footage
Inconsistencies in camera movement can reveal digital tampering. If a video claims to show continuous movement but the tracked path contains physical impossibilities, or if the reconstructed camera motion contradicts the claimed recording method, this can expose fabrication or misrepresentation.

### Locating and Identifying Subjects
When the camera's position and orientation are known, the three-dimensional location of people, vehicles, or other subjects within the environment can be calculated. This enables investigators to map suspect positions, victim locations, and establish proximity relationships critical to understanding events.

### Authenticating Evidence
Camera tracking provides a quantitative foundation for evaluating whether video evidence is genuine. By demonstrating that recorded motion is physically consistent with the claimed camera type, recording conditions, and environmental constraints, investigators can strengthen the evidentiary weight of footage.

## The Investigation Advantage

Camera tracking transforms vague visual information into precise spatial data. Instead of relying on subjective impressions—"the subject appears far away" or "the witness had a good view"—investigators work with measurable, reproducible facts about what could be seen, from where it could be seen, and when. This objective foundation makes video evidence more defensible in legal proceedings and more useful in directing investigative resources to specific conclusions supported by geometry and physics rather than interpretation alone.

---

## Technical Approaches

### Native Blender Trackers

Blender's motion tracking library is called **libmv**, originally written by [Keir Mierle](https://utoronto.scholaris.ca/server/api/core/bitstreams/56da50f4-4c06-4d3b-af83-d57cc5fb9256/content). It uses:

1. **Harris detector** for feature detection
2. **Kanade-Lucas-Tomasi (KLT) variant** for tracking
3. **Subset reconstruction and bundle adjustment**

### Perspective-n-Point (PnP)

PnP is the problem of estimating camera pose given a set of known 3D points and their corresponding 2D projections in an image.

**PnP deals with three quantities:**
1. 3D points in world space
2. Corresponding 2D points in image space
3. Camera pose (location & orientation)

The objective is to find the pose that minimizes the reprojection error between ground truth 2D points and projected 2D points:

```
E = Σ(P,p) || project(P, T, K) - p ||²
```

Where:
- `P, p` are the 3D point and corresponding 2D point
- `T, K` are the extrinsics (pose) and intrinsics of the frame

### Polychase

[Polychase](https://github.com/theartful/polychase) is essentially PnP on steroids—an advanced camera tracking solution.

- [Polychase Video Tutorial](https://www.youtube.com/watch?v=W4HNmcjFuLw)

### GeoTracker

What if we have a mesh for the tracked object? With GeoTracker, we only need to solve for the camera/geometry trajectory without solving for 3D points. We can focus solely on the object we want to track.

### Structure from Motion (SfM)

Tools like **COLMAP** and **Glowmap** use Structure from Motion algorithms to reconstruct camera paths and 3D scenes simultaneously.

- [Polychase GitHub](https://github.com/theartful/polychase)
- [SfM Tutorial Video](https://www.youtube.com/watch?v=QIxXuilEEVw&t=292s)

---

## Key Concepts

- **Feature Tracking:** Following distinctive visual markers across frames to establish motion patterns
- **Camera Solve:** Computing camera position, rotation, and focal length from tracked features
- **Ground Plane Definition:** Establishing the reference coordinate system for 3D reconstruction
- **Tracking Markers:** Distinctive points, edges, or textures used as reference features
- **Bundle Adjustment:** Optimization process that refines camera poses and 3D point positions simultaneously
- **Reprojection Error:** Measure of tracking accuracy—distance between actual and predicted 2D positions
- **Photogrammetry Principles:** Using multiple images to establish 3D spatial relationships
- **Extrinsics:** Camera pose parameters (position and orientation in 3D space)
- **Intrinsics:** Camera internal parameters (focal length, sensor size, lens distortion)

## Workflow

1. **Import Footage:** Load video into Blender's Movie Clip Editor or tracking software
2. **Analyze for Stable Features:** Identify high-contrast, stationary points visible across many frames
3. **Place Tracking Markers:** Manually position markers on distinctive features (corners, edges, textures)
4. **Track Features Forward/Backward:** Follow markers through the sequence automatically or with correction
5. **Define Ground Plane:** Set the coordinate system using known floor/wall relationships
6. **Solve Camera Motion:** Calculate camera trajectory and parameters from tracked data
7. **Refine and Clean:** Remove bad tracks, adjust markers, re-solve until reprojection error is minimal
8. **Set Scene Scale:** Apply real-world measurements to establish accurate dimensions
9. **Build Proxy Geometry:** Create simple 3D objects to verify tracking accuracy
10. **Export Camera Data:** Save solved camera for use in reconstruction or compositing

## Requirements for Successful Tracking

- **Stable Footage:** Minimal compression artifacts and consistent lighting
- **No or Little Motion Blur:** Sharp frames with visible detail at each position
- **Trackable Points:** High-contrast features that are stationary relative to the scene
- **Multiple Angles/Depth:** Features distributed across depth and frame area
- **Sufficient Frame Rate:** Higher frame rates provide more tracking data
- **Consistent Features:** Points visible for extended sequences without occlusion

## Best Practices

- **Choose High-Quality Source Material:** Use highest resolution and least compressed footage available
- **Track Stationary Objects Only:** Moving objects will corrupt the camera solve
- **Distribute Markers in 3D Space:** Place tracking points at varying depths, not just on one plane
- **Use 8+ Tracking Points Minimum:** More markers provide more robust solve, especially for complex motion
- **Verify with Known Measurements:** Cross-reference solved dimensions with actual measurements when possible
- **Save Tracking Sessions Frequently:** Complex tracks are time-intensive; avoid data loss
- **Check Reprojection Error:** Low error indicates good tracking; high error suggests failed markers
- **Test with Simple Camera Moves First:** Practice on locked-off or simple pan shots before complex trajectories

## Common Pitfalls

- **Tracking Moving Objects:** Markers on vehicles, people, or other mobile elements break the solve
- **Insufficient Marker Distribution:** All points on one wall or plane creates weak 3D reconstruction
- **Poor Lighting Conditions:** Low contrast or blown-out areas make feature tracking unreliable
- **Heavy Compression Artifacts:** Video compression destroys fine detail needed for accurate tracking
- **Ignoring Lens Distortion:** Wide-angle or action camera footage requires lens calibration
- **Over-Relying on Automatic Tracking:** Always manually verify that tracks haven't drifted
- **Not Setting Scale:** Without real-world measurements, all dimensions remain relative and unusable for evidence
- **Excessive Motion Blur:** Fast camera movement or low shutter speed makes frame-to-frame tracking impossible

---

## Summary

Camera tracking is a fundamental technique for visual investigation, transforming 2D video evidence into precise 3D spatial intelligence. By analyzing visual features across frames and solving for camera position and motion, investigators can establish sight lines, measure distances, reconstruct event sequences, and authenticate footage with geometric precision. Mastering camera tracking enables investigators to convert subjective visual impressions into objective, measurable facts that are defensible in legal proceedings and actionable in investigative workflows.

**Key Takeaways:**
- Camera tracking reconstructs 3D camera path and orientation from 2D video footage
- Essential for establishing sight lines, measuring distances, and validating witness testimony
- Works by tracking visual features across frames and solving for camera pose parameters
- Multiple technical approaches: native Blender (libmv), PnP solvers, Polychase, GeoTracker, SfM
- Requires stable footage with trackable features distributed across 3D space
- Setting accurate scale with real-world measurements is critical for investigative validity
- Converts passive video into actionable spatial data with measurable, reproducible results

**Further Resources:**
- [Blender Motion Tracking Documentation](https://docs.blender.org/manual/en/latest/movie_clip/tracking/index.html)
- [Keir Mierle's libmv Research Paper](https://utoronto.scholaris.ca/server/api/core/bitstreams/56da50f4-4c06-4d3b-af83-d57cc5fb9256/content)
- [Polychase Advanced Tracking](https://github.com/theartful/polychase)
- [Polychase Tutorial Video](https://www.youtube.com/watch?v=W4HNmcjFuLw)
- [Structure from Motion Tutorial](https://www.youtube.com/watch?v=QIxXuilEEVw&t=292s)