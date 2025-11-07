---
title: The Mathematical Context
description: Beginner DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription

---



# The Mathematical Context

Aimed at complete beginners. The beatuy of Blender is that you don't have to know all this to work with Blender, but having an intuition of what the terms that you will encounter mean, or how they relate to eachother within a broader context might prove helpful. Understanding the fundamental concepts of 3D space and coordinate systems. These principles are what Blender, or any software that uses 3D in one way or another are built upon. I want to show you how I have come to understand them. I want to be very thorough and slightly philosophical, blame my bachelors. To me this works best, and I hope for you to, I'll try to keep it as simple as I can. You don't need this information just to work with Blender, but understanding it will help you grasp what you are doing at a fundamental level and will help you if you decide to introduce working with geometry nodes in Blender later on in your journey. 

Geometry
Dimension
Point
Coordinate
Direction
Location
Axis
Origin

## Geometry

<div class="card-demo">
  <div class="card">
    <div class="card__image">
      <img
        src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?w=800&q=80"
        alt="Abstract 3D geometry visualization"
        title="Geometric Principles"
      />
    </div>
    <div class="card__body">
      <h4>The Foundation of 3D</h4>
      <small>
        Geometry is the mathematical language that Blender speaks. Every vertex, edge, and face in your 3D models follows geometric principles that have been studied for thousands of years.
      </small>
    </div>
    <div class="card__footer">
      <button class="button button--primary button--block">Learn More</button>
    </div>
  </div>
</div>

Blender is a 3D program, but what does that mean? In essence Blender's First Principle is Geometry. To remember what a term means I like to look at its Etymological Definition: Geometry literally means "earth measurement" (from Greek geo, meaning "earth," and metron, meaning "measurement"). It is the branch of mathematics concerned with the properties of space and the relationship between points, lines, surfaces, solids, and higher-dimensional analogs. The modern, Applied Definition (for Visual Investigation) would be something like: Geometry is the study of how to measure, represent, and manipulate space. It provides the rules and tools (like a coordinate systems) necessary to translate real-world physical objects into a usable, measurable digital model.

The entire Blender interface, from the moment you open up Blender for the first time and see the default cube in the viewport, is an exercise in geometry; what you see is a Euclidean Cartesian Coordinate System defined by three dimensions (the X,Y,Z axes). Every single thing you create, be it points (vertices), lines (edges) or surfaces (faces), they all are the fundamental building blocks of geometry. When you move (translate), rotate (orient), or scale an object, you are performing geometric transformations defined by mathematical rules. In short, you cannot model, texture, animate, or render anything without adhering to the rules of geometry. All the other advanced features Blender offers, like physics simulations, rigging, keyframing, etc. are layered on top of this fundamental geometric base. You could say: Geometry is the language Blender speaks.

I am by no means a mathematician and I guess I might make some mathematicians scream at their screen when reading this because my explanations are incomplete or lack certain nuance. This is how I understand it and if I made a glaring error please let me know. 

So, now that we have set the context, let's explore it a bit deeper and let's start simple, at the very beginning, with a single point. 

## Dimensions, what's the point?
### 0D 
Let's do a thought experiment. Imagine a point. But imagine it as it is used within the field of geometry, as a fundamental, undefined term in geometry. Just kidding, but not really. The point I'm talking about has no size, no length, no width, and no volume. But the point itself exists, and it has a position. There is a point, so that is its first attribute: it is, it exists. And its second attribute is that it has a position, it is somewhere. But because it has no dimensions, there is nothing for us that allows us to describe this position. It is, and it is somewhere, but there is nothing that enables us to say WHERE it is. Thats the first thing we want to be able to do. To specify where the point is we need some system that will allow us to do just that: establish or communicate WHERE it is. 

For this we need two things: 
- a reference Point (or a point of Origin)
- a dimension (a ruler and a direction, an Axis). 

Once you introduced a dimension and a reference point, we have a way to give our point a specific, measurable, and shareable "address". This reference point is defined as 0 by convention, but you can put the 0 anywhere on the axis. A dimension is the minimum number of coordinates needed to specify any point within a space. A coordinate is a number (or a set of numbers) that describes an object's position relative to a fixed reference system.

A 0D point can only have a location, and this location can be negative or positive relative to the origin point. It cannot move, it can only be in one location. When we introduce a dimension we introduce direction, the point can be located on a line and the point is either positive or negative, relative to where we place the origin point. The origin point is, by convention, always 0. 

Dimension is the requirement (e.g., "you need three coordinates"). Coordinate is the number that fulfills that requirement (e.g., the '5' in X=5). Dimension: The Concept—the freedom of movement and measurement.

    Axis: The Tool—the physical line or guide that embodies that freedom.

The dimension is the potential or possibility of movement (which way an object can move), and the axis is the ruler we place to quantify it.

No object can exist on this point.

### 1D
Now lets apply this to our 0D point, and establish its position within the simplest possible space, the 1st dimension (1D). When we introduce the first dimension and a point of origin, we also introduce two factors: direction and length/distance. Direction can only be positive or negative, relative to the point of origin. Be aware that direction does not mean orientation in the sense that it is orientated towards something. We are talking about geometric or placement direction/orientation. This only signifies where the point is relative to the origin point. In 1D space this can either be a positive direction (to the right) or negative (to the left) relative to the origin point.

import Interactive1D from '@site/src/components/Interactive1D';

<Interactive1D />

The coordinate X tells you how far the point is from the Origin. A point can be located from the origin in either a positive or negative direction: The single line has only two possible directions: Positive (usually increasing X) and Negative (usually decreasing X). In 1D, "Orientation" is just a label we put on one of the two possible directions of movement. It doesn't require extra coordinates because there is literally no "up/down" or "left/right" to face. In 1D, the concept of rotation is impossible. An object cannot spin or change its heading without leaving the line. 

A 0D point in 1D space can have a location. A physical object placed at that location can also have a direction (orientation). This is Geometric Direction, so not object direction. a point by itself has a direction only 

The First Dimension is the single, independent degree of freedom that allows movement and measurement along one path (the Axis). It gives us the ability to define position as either positive or negative relative to the Origin.

The fundamental 1D object that utilizes this space is the Line Segment, which possesses length. The line segment's length is defined by 0D points and the distance between them. A Line Segment (the 1D object) possesses two separate properties:

    Size (Length): Defined by a single scalar value, L. It tells you how long the object is.

        Example: The line segment is 10 units long.

    Orientation (Facing Sign): Defined by a binary sign (±). It tells you which way the front of the object is pointed.

        Example: The segment is facing the positive direction (+).

Position: Can only be Negative or Positive relative to 0.
Dimension: The Line itself (the axis, the freedom of movement).
Coordinate: The Number that specifies the location on that line.
Orientation (Facing Sign): either + or - 

Now, let's break the line and start moving sideways. 

### 2D
When we move to 2D, we add a second, entirely independent dimension, the Y axis, which is perpendicular to the X axis. Freedom of Movement: The point is no longer constrained to a line; it can move anywhere on a flat surface, or a Plane. Location (Coordinates): To locate the point, you now need two coordinates (X,Y) because X tells you nothing about Y.

import Interactive2D from '@site/src/components/Interactive2D';

<Interactive2D />

    X location: "How far right/left?"
    Y location: "How far up/down?"

Position States: The point is no longer just "positive or negative"; it can be in one of four Quadrants defined by the combinations of X and Y signs. This step is crucial because it introduces the concept of independence—a core idea in all of your visual investigation work.

🔳 The 2nd Dimension: The Plane

When we introduce the second dimension, the Y-axis, we are adding a new, separate ruler that is placed perpendicular to the X-axis at the Origin (0,0).

Independence is Key

The most important takeaway here is: X and Y are independent.

    The X coordinate tells you absolutely nothing about the Y coordinate, and vice-versa.

    To locate a 0D point, you must provide its full address: (X,Y).

    The move from 1d to 2d introduces many things, like vectors and scalars, but I want to focus on the object it allows us to create. The plane. The simplest plane is a triangle, defined by three points in 2D space. This flat shape is called a polygon. the simplest object that can fully define a 2D plane is a Triangle.

    The new concept is Area.

    1D Object: Has Length (1 size attribute).

    2D Object: Has Area (defined by Length and Width—2 size attributes).

### 3D
The idea of objects having length, width, and depth—the three dimensions—was an intuitive concept that predates modern mathematics. While the idea of three-dimensional objects was ancient, René Descartes (1596–1650) was crucial in providing the analytical framework for three dimensions. Analytic Geometry: Descartes is credited with developing analytic geometry, which uses an algebraic system (like coordinates) to describe geometric shapes and locations. This system, which relates points in space to a set of ordered numbers (x, y, z), made it possible to treat three-dimensional space with algebraic equations. So while Descartes did not invent the idea of three dimensions, he did provide the coordinate system (x,y,z) that became the essential tool for modern mathematical and physical analysis of three-dimensional space.

import Interactive3D from '@site/src/components/Interactive3D';

<Interactive3D />


| Dimension | Description | Coordinates Needed | Example |
|-----------|-------------|---------------------|---------|
| 0D (Zero Dimension) | A Point. It has position but no size. | 0 |  |
| 1D (One Dimension) | A Line. It has only length. | 1 (X) | A point on a measuring tape. |
| 2D (Two Dimensions) | A Plane. It has length and width. | 2 (X, Y) | A flat image, like a photo, a video or a monitor screen. |
| 3D (Three Dimensions) | Space. It has length, width, and height (or depth). | 3 (X, Y, Z) | Everything you model in Blender. |
| 4D (Four Dimensions) | Temporal, Spacetime. It combines space and time. | 4 (X, Y, Z, T) | Tracking the position and Orientation of something with dimensions as it evolves over time.



Think of coordinates as the "address" of a point.

    The System: You need a Coordinate System first (like the X, Y, Z axes in Blender, or the lines of Latitude and Longitude on Earth). This system is a human-invented grid with a specified Origin (the zero point).

The Value: The coordinates themselves are the numerical values that tell you how far to travel along each axis from the Origin to reach the point.

        Example: In Blender's default scene, a value of (5,3,1) means 5 units along the X-axis, 3 units along the Y-axis, and 1 unit along the Z-axis.

The key is the word relative: Coordinates only have meaning because they are measured in relation to something else (the origin and the axes).

Your Visual Investigation project relies on taking evidence from the 2D world (photos, maps, video frames) and accurately reconstructing it in the 3D world, often adding the dimension of Time to show what happened.

This is the combination of the three spatial dimensions (X, Y, Z) and Time (T). In our work, it's what allows us to track an eventas it evolves. This is critical for forensic reconstruction and simulation.



In 3D software, we work with three axes:

- **X-axis**: Typically represents left/right (red)
- **Y-axis**: Typically represents forward/back (green)  
- **Z-axis**: Typically represents up/down (blue)

Blender uses a **Z-up** coordinate system, which is standard in many 3D applications.




While Blender is fundamentally a 3D modeling program, as a tool for reconstruction and animation, it is effectively a 4D program (and often more!). When you track an object in a reconstruction (say, a car moving through an intersection), you are simultaneously defining its position (X,Y,Z), its orientation (rotation X,Y,Z), it's scale (Scale X,Y,Z) and its time (T) — that's 10 dimensions! So, the phrase "3D program" is technically true for its geometry, but "4D animation environment" is a far more accurate description of what you're doing when you bring evidence to life. You're modeling spacetime! If that isn't something to tell people when you are at a party and they ask you what you do for a living I don't know what is.. 


REcap

| Term | Short Definition | Why It Matters |
|------|------------------|-----------------|
| 1. Dimension | "An independent direction of measurement within a space (e.g., length, width, height)." | Dictates the number of coordinates required to locate a point. |
| 2. Axis | A straight reference line that represents a single dimension. | "In Blender, these are the X, Y, and Z lines originating from the Origin." |
| 3. Origin (Reference Point) | "The fixed, zero-point location (0,0,0) from which all measurements begin." | Your chosen point for the start of the address system. |
| 4. Point | A 0D geometric primitive that defines a pure location with no size or extent. | The smallest unit you track. |
| 5. Location (Position) | The specific address of a point or object relative to the Origin. | "Defined by the set of coordinates (e.g., X=5)." |
| 6. Coordinate | A single numerical value that measures the distance along a specific axis. | "The single number needed for each dimension (e.g., the '5' in X=5)." |
| 7. Direction (Placement) | The positive (+) or negative (−) side of an axis relative to the Origin. | "It defines the sign of your coordinate (e.g., X=−5 is in the negative direction)." |
| 8. Orientation | The rotation or facing direction of a physical object around its location. | "A separate property from Position; essential for defining how an object looks (e.g., the car is pointed North)." |