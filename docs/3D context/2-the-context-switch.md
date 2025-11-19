---
title: The Computer Graphics Context
description: Description DescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescriptionDescription

---


# The Computer Graphics context

In this section, we will explore the transition from mathematical concepts to their application in computer graphics and 3D modeling. Understanding this context switch is crucial for leveraging the power of tools like Blender and other 3D software.

## The Role of Computer Graphics

Computer graphics is the field of visual computing, where one utilizes computers both to generate visual images synthetically and to integrate or alter visual and spatial information sampled from the real world. It bridges the gap between abstract mathematical concepts and their tangible visual representations.


## 3D Modeling

3D modeling is the process of creating a mathematical representation of a three-dimensional object. This is the foundation of all 3D graphics and is used in various fields, including animation, gaming, and simulation.


Excellent question — and one that gets to the heart of how **mathematical concepts** become **practical tools** in 3D computer graphics.

Here’s a clear explanation you could even include as a *teaching note or sidebar* in your handout:

---

### 🧠 **Why the Terminology Changes (Point → Vertex, Line → Edge, etc.)**

In pure **geometry or mathematics**, we talk about:

* **Points** — locations in space
* **Lines** — infinite paths connecting points
* **Planes** — flat surfaces extending infinitely
* **Solids** — volumes enclosed by surfaces

But in **3D modeling** and **computer graphics**, we need these ideas to become **finite, manipulable data structures** — something the computer can store, render, and edit.
That’s why the terminology changes slightly to match their **digital function**.

---

#### **From “Point” → “Vertex”**

* A **point** is an abstract mathematical location — it doesn’t exist physically or have any data attached.
* A **vertex** (plural: *vertices*) is a **point with data** in a 3D model:

  * It has coordinates (x, y, z).
  * It can store **extra information**, like color, normals, or weights.
  * It’s part of a **mesh structure**, connected to other vertices.

**In short:**

> A *vertex* is a “point with purpose” — it’s used to build and define 3D shapes.

---

#### **From “Line” → “Edge”**

* A **line** in geometry is **infinite** in both directions.
* A **line segment** is finite — defined by two endpoints.
* In 3D modeling, we use **edges**, which are *always finite* and connect two vertices.

**In short:**

> An *edge* is the digital version of a line segment — a direct connection between two vertices.

---

#### **From “Plane” → “Face” (or “Polygon”)**

* A **plane** in math extends infinitely.
* A **face** (or **polygon**) in modeling is **finite and enclosed**, bounded by edges.
* It represents the *visible surface* of a 3D object.

**In short:**

> A *face* is a manageable, renderable piece of a surface.

---

#### **From “Solid” → “Mesh”**

* A **solid** in geometry is a continuous 3D object.
* In computer graphics, objects are made of **meshes** — networks of vertices, edges, and faces that *approximate* the surface of a solid.
* The mesh is not truly “solid” inside — it’s a **hollow shell** that visually represents a volume.

**In short:**

> A *mesh* is a structured framework that defines a 3D shape’s surface.

---

### ✳️ **Summary of Why the Shift Happens**

| Mathematical Term | Blender / 3D Modeling Term | Reason for the Change                                |
| ----------------- | -------------------------- | ---------------------------------------------------- |
| **Point**         | **Vertex**                 | Adds data and structure (part of a mesh)             |
| **Line**          | **Edge**                   | Finite, connects two vertices                        |
| **Plane**         | **Face / Polygon**         | Finite, enclosed surface                             |
| **Solid**         | **Mesh**                   | Digital structure made of vertices, edges, and faces |

---

**In essence:**
The terminology changes because **3D software deals with finite, editable geometry**, not idealized mathematical forms.
This helps distinguish between *infinite, theoretical shapes* and *practical, computer-defined structures*.

---

Would you like me to add this as a **“Concept Spotlight” page or sidebar** to the handout (with clean headings and layout for print)?




### Types of 3D Models:

- **Polygonal Models**: Made up of vertices, edges, and faces.
- **NURBS Models**: Use curves to define surfaces.
- **Sculpted Models**: Created using digital sculpting techniques.

## Dimensions in Computer Graphics

| Dimension | Description | In Blender |
|-----------|-------------|------------|
| 0D (Zero Dimension) | Define as a point — no length, width, or height. It represents a location, not an object. | This will later become a vertex. |
| 1D (First Dimension) | Connecting two points creates a line. Has only length. You can visualize it as the path between two vertices. | When two vertices are connected, they form an edge. |
| 2D (Second Dimension) | A flat surface defined by multiple connected lines — a plane. Has length and width. | When edges enclose an area, they form a face (or polygon). |
| 3D (Third Dimension) | Add depth — now you can form solids (like cubes, spheres, and more complex meshes). Every 3D model in Blender is built from combinations of these 0D, 1D, 2D elements. | The complete shape is called a mesh, composed of vertices, edges, and faces. |
| 4D (Fourth Dimension – Conceptual) | Briefly introduce it as a way to think about transformations or time in animation, or even higher-dimensional math. Blender doesn’t model 4D shapes directly, but animators often think of time as the “fourth dimension.” | N/A |

## Why This Matters

Understanding the context switch from mathematical principles to computer graphics and modeling allows you to:

- Create accurate and visually appealing 3D models.
- Optimize workflows for rendering and animation.
- Bridge the gap between theoretical knowledge and practical application.

By mastering these concepts, you can unlock the full potential of 3D software and bring your creative visions to life.


## Excersize
Create a single vertex (Add → Mesh → Single Vert → Add Single Vert).

Connect two vertices into an edge.

Add two more to make a face (fill with F).

Extrude the face into the third dimension to form a cube.
This makes the transition from abstract to practical crystal clear.