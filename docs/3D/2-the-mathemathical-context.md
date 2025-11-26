---
title: The Logic of Space
description: Before we click a single button, we must understand the environment we are stepping into. Blender is built upon geometric principles, concepts of dimension, direction, and origin. This guide is not a math lecture; it is a philosophical primer designed to give you an intuition for 3D space. Understanding the "language" Blender speaks, will help you understand why Blender works the way it does. 
sidebar_position: 2
---


# The Logic of Space
#
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>10 min read</span>
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

This short guide covers fundamental 3D concepts. You don't strictly need them to start using Blender, but understanding them might deepen your intuition about what you're actually doing when you are working in Blender and prepare you for more advanced topics like, for example, geometry nodes and procedural modeling. We'll explore coordinate systems, axes, and spatial relationships in an accessible way, focusing on building understanding rather than memorization.

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
      <p style={{margin: 0}}>Foundational geometry concepts for visual investigation.</p>
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
      <p style={{margin: 0}}>External readings and references on coordinate systems.</p>
    </div>
  </div>
  
  <div style={{
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{backgroundColor: '#EF4C3C', padding: '15px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px'}}>
      <i className="fa-solid fa-play" style={{fontSize: '20px'}}></i>
      <h4 style={{margin: 0}}>Videos</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>Curated video walkthroughs on spatial reasoning and axes.</p>
    </div>
  </div>
</div>

---



## Geometry: The Language of Blender

Blender is fundamentally a tool for working with geometry. The word itself comes from Greek: geo (earth) and metron (measurement)—literally "earth measurement." In practice, geometry is how we measure, represent, and manipulate space using coordinate systems to translate physical objects into digital models.
Everything in Blender operates within a geometric framework. The default cube you see when opening Blender, every vertex, edge, and face you create, and every transformation you perform (moving, rotating, scaling) all follow geometric rules. Physics simulations, rigging, animation—these advanced features are built on top of this geometric foundation. Understanding geometry gives you intuition for what's happening at every level of Blender.

But let's start at the beginning: with a single point.

## Dimensions, what's the point?
### 0D: Position
Imagine a point in geometry: something with no size, length, width, or volume—just existence and position. The problem is, without a reference system, we can't describe WHERE it is.
To locate a point, we need two things: a reference point (an origin) and a dimension (an axis with direction). Once we have these, we can give any point a measurable "address" relative to the origin, which we define as 0 by convention.
A dimension is the concept—the freedom of movement in a given direction. An axis is the tool—the ruler that quantifies it. On a single dimension, a point can be positioned as positive or negative relative to the origin, but it cannot move. It can only exist at one location.
A point represents a location, not an object—nothing can exist "on" a point.

### 1D: Direction and Length
Introducing the first dimension (and an origin point) adds two factors: direction and distance. Direction is relative to the origin—positive (usually to the right) or negative (to the left). The coordinate tells you how far the point sits from the origin along this line.
In 1D space, an object gains two properties beyond location:
Size (Length): A scalar value defining how far the object extends.
Orientation (Facing Sign): A binary value (+ or −) indicating which direction the object points. Rotation is impossible in 1D—an object cannot change heading without leaving the line entirely.
The fundamental 1D object is the line segment: two 0D points with a measurable distance between them. It has length and a direction, but nothing more. Position remains simply positive or negative relative to the origin.
Now let's break the line and move sideways.

import Interactive1D from '@site/src/components/Interactive1D';

<Interactive1D />



### 2D: The Plane
When we move to 2D, we add a second, entirely independent dimension, the Y axis, which is perpendicular to the X axis. Freedom of Movement: The point is no longer constrained to a line; it can move anywhere on a flat surface, or a Plane. Location (Coordinates): To locate the point, you now need two coordinates (X,Y) because X tells you nothing about Y.

import Interactive2D from '@site/src/components/Interactive2D';

<Interactive2D />



### 3D: Space
Adding a third axis—the Z-axis, perpendicular to both X and Y at the origin (0,0,0)—introduces depth. A point now requires three independent coordinates: (X,Y,Z). The point can move freely through three-dimensional space rather than being confined to a flat plane.
While three-dimensional objects are intuitive (length, width, depth are concepts from everyday experience), it wasn't until René Descartes developed analytic geometry in the 17th century that we had a mathematical framework to describe 3D space algebraically. The Cartesian coordinate system he pioneered—mapping points to ordered triplets (x, y, z)—became the foundation for all modern 3D mathematics and visualization.

import Interactive3D from '@site/src/components/Interactive3D';

<Interactive3D />

#### Objects and Volume
A 3D object gains a third size property: volume, which emerges from length, width, and depth. Where a 2D triangle is the simplest polygon, a 3D tetrahedron (four triangular faces) is the simplest three-dimensional object. From this, we build more complex shapes: cubes, spheres, and any form imaginable.
In Blender's default setup, the three axes are color-coded and oriented as:

X-axis (Red): Left/right movement
Y-axis (Green): Forward/backward movement
Z-axis (Blue): Up/down movement

This is called a Z-up coordinate system, standard in most 3D applications.

### Beyond 3D: Time and Animation
While Blender is technically a 3D program, when you animate or reconstruct, you're working in four dimensions: X, Y, Z, and time (T). Track a moving object, and you're simultaneously defining its position (X,Y,Z), rotation (three rotational axes), scale (three scale axes), and timing—that's effectively 10 dimensions of data. Blender is as much a 4D temporal environment as it is a 3D spatial one.