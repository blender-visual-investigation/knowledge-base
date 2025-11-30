---
sidebar_position: 2
---

# Establishing Scale & Dimension

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
    <span style={{backgroundColor: '#2196f3', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
    <span style={{backgroundColor: '#ff9800', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>ADVANCED</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>5 min read</span>
  </div>
</div>

---

## Introduction

Establishing accurate scale and dimension is fundamental for credible 3D reconstructions in visual investigations. This page covers the principles, workflows, and best practices for ensuring your models match real-world measurements.

You will learn:
- How to set real-world units in Blender
- Methods for calibrating scale using reference objects or measurements
- How to avoid common pitfalls in dimensional accuracy

**Prerequisites:** Basic Blender navigation and familiarity with importing reference images or blueprints.

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
    <p style={{margin: 0}}>Guides on Blender's unit system, scale calibration, and measurement tools.</p>
  </FeatureCard>
  
  <FeatureCard 
    title="Links" 
    headerColor="#1C75BC"
    icon="fa-solid fa-link"
  >
    <p style={{margin: 0}}>
      <a href="https://www.bellingcat.com/resources/2023/09/07/measuring-up-how-to-calculate-the-size-of-objects-in-open-source-material/" target="_blank" rel="noopener">Bellingcat: Measuring Up – How to Calculate the Size of Objects in Open Source Material</a>
    </p>
  </FeatureCard>
  
  <FeatureCard 
    title="Videos" 
    headerColor="#EF4C3C"
    icon="fa-solid fa-play"
  >
    <p style={{margin: 0}}>Video tutorials on using reference images and measurement tools in Blender.</p>
  </FeatureCard>
</FeatureCardGrid>

---

## Main Content

### Key Concepts

- Setting real-world units
- Reference measurements
- Scale calibration
- Dimensional accuracy

### Workflow

1. Set Blender's unit system to match your project's requirements (Metric/Imperial).
2. Import reference images, blueprints, or known-dimension objects.
3. Use Blender's measuring tools (ruler, edge length display) to calibrate scale.
4. Adjust your model or scene until reference distances match real-world values.

### Best Practices

- Always verify imported assets for correct scale.
- Use multiple reference points when possible.
- Document your calibration process for transparency.

### Common Pitfalls

- Forgetting to set the correct unit system before modeling.
- Relying on a single reference measurement.
- Ignoring camera perspective or lens distortion in reference images.

---

## Summary

Establishing scale and dimension is a critical step for any credible 3D reconstruction. By following best practices and using available tools, you can ensure your models are both accurate and defensible in investigative contexts.

**Key Takeaways:**
- Always calibrate your scene to real-world units
- Use multiple references for accuracy
- Document your process for transparency

**Further Resources:**
- [Bellingcat: Measuring Up – How to Calculate the Size of Objects in Open Source Material](https://www.bellingcat.com/resources/2023/09/07/measuring-up-how-to-calculate-the-size-of-objects-in-open-source-material/)
- [Blender Manual: Units & Scale](https://docs.blender.org/manual/en/latest/scene_layout/scene/properties.html#units)
- [Blender Stack Exchange: Scale Issues](https://blender.stackexchange.com/questions/tagged/scale)