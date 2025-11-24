---
title: Camera & Perspective
description: Before we click a single button, we must understand the environment we are stepping into. Blender is built upon geometric principles, concepts of dimension, direction, and origin. This guide is not a math lecture; it is a philosophical primer designed to give you an intuition for 3D space. Understanding the "language" Blender speaks, will help you understand why Blender works the way it does. 
sidebar_position: 8


---


<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
    <span style={{backgroundColor: '#2196f3', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>5 min read</span>
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
    src="https://www.youtube.com/embed/CKRIjej1nMI"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>
</div>

## Introduction

This page focuses on the camera in 3D software. Understanding the virtual camera is crucial for creating realistic renders and accurately matching 3D scenes to real-world footage.

This section will cover:
- **Image Dimension**: The resolution and aspect ratio of the output.
- **Sensor Size**: The physical size of the simulated camera sensor.
- **Focal Length**: The distance between the lens and the sensor, affecting the field of view.

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
      <h4 style={{margin: 0, color: '#333'}}>Resources</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>Learn the fundamental parameters that define a 3D camera.</p>
    </div>
  </div>
  
  <div style={{
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{backgroundColor: '#1C75BC', padding: '15px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px'}}>
      <i className="fa-solid fa-link" style={{fontSize: '20px'}}></i>
      <h4 style={{margin: 0}}>Links</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>External resources on camera optics and 3D rendering.</p>
    </div>
  </div>
</div>

---

## Main Content Section

### Image Dimension

The image dimension refers to the width and height of the rendered image in pixels. This determines the resolution and the aspect ratio of the final output.

### Sensor Size

In 3D software, the camera's sensor size simulates the physical dimensions of a real-world camera sensor (e.g., 35mm full-frame, APS-C). This value, combined with focal length, determines the field of view.

### Focal Length

Focal length is the distance between the lens and the image sensor when the subject is in focus, usually measured in millimeters (mm). A shorter focal length results in a wider field of view, while a longer focal length results in a narrower field of view (telephoto).

import InteractiveCamera from '@site/src/components/InteractiveCamera';

<InteractiveCamera />

---

## Summary

Mastering these camera settings—image dimension, sensor size, and focal length—is essential for predictable and realistic 3D work.
