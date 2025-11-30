---
sidebar_position: 2
---

# Template Page

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
    <span style={{backgroundColor: '#2196f3', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
    <span style={{backgroundColor: '#ff9800', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>ADVANCED</span>
    <span style={{backgroundColor: '#f44336', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>EXPERT</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>5 min read</span>
  </div>
</div>

---

{/* 
  VIDEO OPTIONS:
  
  Option 1: Single Video Embed
  Use this for pages with just one video.
*/}

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
    src="https://www.youtube.com/embed/VIDEO_ID_HERE"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>
</div>

{/* 
  Option 2: Video Carousel
  Use this for pages with multiple videos. Import the component and provide an array of video objects.
  Each video needs an 'id' (YouTube video ID) and 'title'.
  
  Example usage:

import VideoCarousel from '@site/src/components/VideoCarousel';

<VideoCarousel videos={[
  { id: 'VIDEO_ID_1', title: 'First Video Title' },
  { id: 'VIDEO_ID_2', title: 'Second Video Title' },
  { id: 'VIDEO_ID_3', title: 'Third Video Title' }
]} />

*/}

## Introduction

Welcome to this page! This is your introduction section where you can provide an overview of the topic.

This section should give readers a clear understanding of:
- What they'll learn from this page
- Why this topic is important
- What prerequisites they might need (if any)

You can write multiple paragraphs here to provide context and set expectations for the content that follows.

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
    <p style={{margin: 0}}>Description of the first key feature or benefit. Explain what makes this important.</p>
  </FeatureCard>
  
  <FeatureCard 
    title="Links" 
    headerColor="#1C75BC"
    icon="fa-solid fa-link"
  >
    <p style={{margin: 0}}>Description of the second key feature or benefit. Highlight what users will gain.</p>
  </FeatureCard>
  
  <FeatureCard 
    title="Videos" 
    headerColor="#EF4C3C"
    icon="fa-solid fa-play"
  >
    <p style={{margin: 0}}>Description of the third key feature or benefit. Show why this matters.</p>
  </FeatureCard>
</FeatureCardGrid>

---

## Main Content Section

Start adding your main content here. You can organize it into multiple sections using headers.

### Subsection 1

Add your detailed content, explanations, code examples, or any other information.

### Subsection 2

Continue with more content as needed.

---

## Summary

Wrap up the page with a brief summary of what was covered. This should be a concise paragraph that reinforces the main concepts and highlights the practical value of the topic for visual investigation work.

**Key Takeaways:**
- First important point or lesson from this page
- Second key concept or skill learned
- Third practical application or benefit
- Fourth takeaway (optional, add or remove as needed)

---

## Documentation for Methodology

{/* 
  METHODOLOGY FOLDOUT:
  Include this section for tools, techniques, and addons pages.
  See methodology-snippets.md for detailed instructions on writing this content.
  Remove this section for conceptual/overview pages that don't involve specific tools or techniques.
*/}

Understanding the technique is only half the work—documenting it properly is what makes your investigation defensible and reproducible.

<details>
<summary><strong>What to document when using [TECHNIQUE/TOOL NAME]</strong></summary>

### In Your Method Section

[1-3 sentences describing how to document this technique in a formal methodology. Be specific about what parameters, settings, or decisions should be mentioned.]

### In Your Decision Log

Record the following when using this technique:
- [Key decision point 1]
- [Key decision point 2]
- [Key decision point 3]
- Date performed

### Verification

[1-2 sentences explaining how to verify this technique was applied correctly or how to test its accuracy]

### Common Limitations

[1-3 sentences about constraints or limitations this technique introduces to your investigation]

### Example Methodology Statement

> "[A concrete, realistic example of 2-4 sentences showing exactly how someone would describe using this technique in a formal methodology document. Use realistic but generic parameters like [X], [version], [number] to show where specific values would go.]"

</details>

---

**Further Resources:**
- [Official Documentation](https://example.com/docs)
- [Related Tool/Addon Page](https://example.com/tool)
- [Tutorial Video](https://example.com/video)
- [Community Forum](https://example.com/forum)
