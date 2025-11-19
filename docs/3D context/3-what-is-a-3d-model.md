---
title: What is a 3D model?
description: asdasd

---
# What is a 3D model?

A 3D model is a digital representation of a three-dimensional object, defined by several key attributes. A first general distinction is being made between Hard Surface models, and organic models, where Hard surface modeling involves creating objects with defined, geometric shapes, such as buildings, vehicles, and machinery. and organic modeling focuses on creating natural forms, like plants, animals, or characters. Regardless of this distinction, each models has certain attributes. These attributes include its **geometry**, determining the overall shape and structure; it’s **poly-count**, which quantifies the number of polygons composing the model's surface; **Topology** defines the connectivity of the model's geometric elements, influencing its shape and flexibility. The **UV map**, a 2D image coordinate system applied to the model's surface to accurately position textures. **Normals** determine the direction of a surface's outward-facing side, essential for lighting calculations. **Materials** specify the appearance of a surface, including color, texture, reflectivity, and transparency. 

### Model Attributes

- **Geometry:** The shape and structure of a model.
- **Topology:** The arrangement of vertices, edges, and faces in a mesh.
- **Poly-count:** The number of polygons in a model.
- **UV map:** A 2D image mapped onto a 3D model for texture application.
- **Normals**: the direction of a surface's outward-facing side
- **Materials, Textures and Shaders**: the appearance of a surface

The ones we are mostly interested in for our project are the first three: geometry, topology, and poly-count. Geometry because we want to 3D model as a shape to represent the object or location as accurately, topology because if the arrangement of vertices, edges and faces is “good” they can easily be manipulated and iterated upon and poly-count because we want our creations to be efficient and ‘lean’ so they can be implemented in the broadest possible way.


https://www.youtube.com/watch?v=g57mNKE8IYc
https://www.youtube.com/watch?v=jQ1qb6V0wF0
https://www.youtube.com/watch?v=Yx2JNbv8Kpg


## Topology
https://youtu.be/PvKzBThEsBM
https://www.youtube.com/watch?v=MD1QmdqXRfc
https://www.youtube.com/watch?v=CuuK6IbsgcU

## Polycount
Poly-count refers to the number of polygons in a 3D model, and it plays a critical role in both performance, visual quality and model manipulation. 

As you can see in the example up top, a higher poly-count leads to a more detailed, smoother and more ‘realistic’ model. However, more polygons means more vertices, edges and faces. There are two downsides to that: 

1. Models with high poly-count require greater computational power.

2. The higher the poly-count, the more complicated it becomes to manipulate a model, as more polygons mean more vertices and edges to manage during transformations. 

As for our project, we are not overly interested in visual quality, in the sense that we just want the shape to be recognizable as the shape we are trying to make, and we want the mesh to be easily editable. For those reasons we opt to create the left most face and not the one on the right. 

In the end It’s all about achieving the right balance between maintaining the general shape, visual appeal and efficient performance. Why make something more ‘heavy’ then it needs to be? 

The following video explains the concept of poly-count in more detail, albeit with a focus on video games. The concepts discussed mostly also apply to modeling in general. It also features a summary of a lot of points that have been covered above.
https://www.youtube.com/watch?v=ygndZ5eIFO4






## 3D Concepts

Introduction: Sets the stage with provocative questions (NURBS, gimbal lock) and the goal of explaining 3D concepts.

Part 1: Defining Space and Geometry: 1D → 2D → 3D axes, vertices, edges, faces, and the extrude action.

Part 2: Geometry Quality: N-gons, loops, poles, topology, and good edge flow standards.

Part 3: Types of 3D Models: Meshes, curves, NURBS, and other representations (Voxels, CSG).

Part 4: Geometry Integrity: Manifold vs. non-manifold geometry, and Subdivision Surfaces.

Part 5: Face Direction: Normals and their use in face orientation and optimization.

Part 6: Object Control: Transformations (location, scale), Euler angles, gimbal lock, quaternions, and axis angle rotation methods.

Part 7: Spatial Awareness: World Space, Object Space, Local Space, and the parent/child concept.

Part 8: The Center of Action: Pivot Point / Origin



##  II. Geometry Integrity: Topology, Normals, and Smoothing

Concept	Definition and Relevance
Topology	The structure and flow of the Faces, Edges, and Vertices that make up a mesh.
Edge Flow (Loops)	The pattern of continuous edges that flow across a model's surface. Good topology uses consistent loops (often following natural contours like around eyes or mouths) to ensure clean deformation when animating or smoothing.
Pole	A vertex where the number of connecting edges is not exactly four (most commonly three or five). Poles affect the direction of edge loops and must be strategically placed to maintain good topology.
Manifold Geometry	Describes a clean, "watertight" mesh where every edge is connected to exactly two faces and has no holes or overlapping faces. VISUAL INVESTIGATION PRIORITY: Manifold geometry is required for accurate 3D printing, physics simulations, and most rendering pipelines, ensuring the model represents a real, solid object.
Non-Manifold Geometry	Geometry that has errors, such as edges connected to three or more faces, holes, or two faces occupying the exact same space. WARNING: This geometry is physically impossible and will cause failures in 3D printing and can break simulations.
Normals	A vector (small arrow) that indicates the direction a face is pointing—its "outside". Normals determine how light is reflected and which side of a surface is rendered. In games, flipping normals inward is a common optimization to hide the interior of a model, which is why you may see "floating eyeballs" up close.
Subdivision Surface	A technique used to split the faces, edges, and vertices of a model into smaller parts, usually to create a much smoother, higher-resolution version of a low-resolution base mesh. Requires good topology to work correctly.

## Alternative Geometry Representations

Concept	Definition and Relevance
Mesh	The standard type of 3D model, made up of vertices, edges, and polygons (triangles and quads). Used in almost all real-time applications (games) and visual effects.
Curve	A line made up of Control Points with handles that define a perfectly smooth line between them. Used for drawing paths, logos, or wires.
NURBS (Non-Uniform Rational B-Splines)	Surfaces created by mathematically extending Curves into 3D form. VISUAL INVESTIGATION APPLICATION: NURBS are used in industries requiring extremely high precision (e.g., aerospace, product design) because they can define perfectly smooth, exact curves without the blocky limitations of polygons. Useful for tracing or verifying precise scene contours.
Point Cloud	A simple collection of raw 3D coordinate points captured by 3D scanning or photogrammetry equipment. These points are often converted into a Mesh for editing.
CSG (Constructive Solid Geometry)	A modeling technique that creates complex shapes by combining simple primitives (cubes, spheres) using Boolean operations (addition, subtraction, intersection).

## Object Control: Transformations & Coordinate Systems

Concept	Definition and Relevance
Transformation	The combined data that describes an object's Location (Translation), Rotation, and Scale in 3D space. This data is stored as tweakable numbers.
Euler Angles	A standard method of describing rotation using three values that correspond to rotation around the X, Y, and Z axes. It is easy to understand but can lead to Gimbal Lock.
Gimbal Lock	A singularity that occurs when two of the rotation axes in an Euler system line up, causing the loss of one degree of freedom. This can cause objects to rotate and flip strangely during animation.
Quaternions	A complex, math-based method of describing rotation using four values (X, Y, Z, W). They prevent Gimbal Lock and are often preferred for internal animation calculations.
World Space	Defines an object's position, rotation, and scale relative to the static, global origin point (0, 0, 0) of the 3D scene.
Object Space (or Parent Space)	Defines an object's position, rotation, and scale relative to another object, such as a camera or another object that acts as a Parent.
Local Space	Defines an object's position, rotation, and scale relative to its Parent object. This space remains constant even if the parent object is moved or rotated in the World Space.
Pivot Point (Origin in Blender)	The specific point in 3D space around which an object rotates and scales. Its location relative to the object is crucial for predictable manipulation.