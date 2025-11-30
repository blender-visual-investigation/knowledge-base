---
title: UV Unwrapping as Data Analysis
sidebar_position: 2
---

# UV Unwrapping as Data Analysis

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#2196f3', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>8 min read</span>
  </div>
</div>

---

## UV Unwrapping for Forensic Data Analysis

Traditional UV unwrapping is used to apply textures. In forensic investigation, UVs are used to "unfold" a building to analyze total surface area damage.

- **Workflow:** The building facade is unwrapped into a flat 2D plane.
- **Application:** Fire spread data (derived from official reports or thermal imaging) is mapped onto this 2D UV layout. This allows for precise calculation of the total burnt surface area and the rate of spread, turning qualitative footage into quantitative data.

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
    <p style={{margin: 0}}>Access guides on forensic UV workflows, surface area analysis, and Blender's measurement tools.</p>
  </FeatureCard>
  
  <FeatureCard 
    title="Links" 
    headerColor="#1C75BC"
    icon="fa-solid fa-link"
  >
    <p style={{margin: 0}}>Explore Blender's UV measurement add-ons and forensic data mapping techniques.</p>
  </FeatureCard>
  
  <FeatureCard 
    title="Videos" 
    headerColor="#EF4C3C"
    icon="fa-solid fa-play"
  >
    <p style={{margin: 0}}>Watch tutorials on using UVs for quantitative analysis in forensic reconstruction.</p>
  </FeatureCard>
</FeatureCardGrid>

---

## Turning Qualitative Footage into Quantitative Data

By mapping investigative data (such as fire spread, impact zones, or surface contamination) onto a UV-unwrapped 2D layout, investigators can:

- Calculate total affected surface area
- Analyze the rate and pattern of spread
- Compare multiple incidents using standardized 2D representations

This approach transforms complex 3D evidence into actionable, measurable insights for reports and legal proceedings.
