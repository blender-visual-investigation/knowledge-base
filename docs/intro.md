---
sidebar_position: 1
---

# Blender for Visual Investigation

<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
  <div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
    <span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
  </div>
  <div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
    <span style={{fontSize: '16px'}}>📖</span>
    <span>5 min read</span>
  </div>
</div>

---

## Getting Started

Let's discover how to **navigate this knowledge base in less than 5 minutes**.

<div style={{
  position: 'relative',
  paddingBottom: '56.25%',
  height: 0,
  overflow: 'hidden',
  maxWidth: '100%',
  marginTop: '20px',
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
    src="https://www.youtube.com/embed/BDwhzzzlFZU?start=307"
    title="YouTube video player"
    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen>
  </iframe>
</div>

---

Which leaves us with the million dollar question: which workflow should I use. And the answer is what makes 3D reconstruction difficult: it depends. There is no silver bullet. There are only choices and trade-offs. In standard 3D production, the pipeline is often linear: Concept → Model → Texture → Render. Visual Investigation is different. It is non-linear and highly reactive. We do not have the freedom to invent; we are constrained by the reality we are trying to reconstruct. Because every case offers different evidence and demands a different output, there is no single "correct" workflow.

A 3D model of a rocket used for a VR training simulation is fundamentally different from a 3D model of the same rocket used to calculate a blast radius. One prioritizes frame rate; the other prioritizes millimeter precision.

Your job as a visual investigator is not just to "know Blender." It is to assess the specific constraints of the case—the evidence available and the answers required—and choose the specific path through the polygonal paradigm that gets you there efficiently and defensibly.

So instead of following a step-by-step path, there is a constant process of personal interrogation. We must continuously ask: "Given what I have, and what I need to prove, which path is the most efficient and accurate?"

To navigate this, we need to understand the variables at play, and they are many. 

## The Blender for Visual Investigation Knowledge Base: A Structured Curriculum

The aim of this knowledge base is to provide you with free, comprehensive knowledge that is systematically designed to equip investigators, journalists, and researchers with the advanced **3D visualization and analysis capabilities** while using Blender. Its content is strategically organized around foundational pillars to ensure a targeted and efficient learning trajectory:

### **The 3D context**

This module provides a **beginner-friendly onboarding** to the 3D context in which Blender plays its part. The objective is to efficiently transition users from a **zero-knowledge state** to having a baseline idea of where things fall.

---

### **Blender for Investigative Purposes: Foundational Skills**

This module provides a **disciplined, beginner-friendly onboarding** to the Blender environment. Unlike general tutorials focused on creative production (e.g., gaming or film), this instruction is **uniquely scoped** to the requirements of visual investigation. The objective is to efficiently transition users from a **zero-knowledge state** to demonstrating a comfortable command of the software's essential tools for verifiable and accurate 3D modeling.

---

### **Specialized Toolkit & Methodologies**

This pillar curates and details a collection of **Blender tools, add-ons, and technical methodologies** that have been refined and adapted specifically for the investigative context. Each resource is accompanied by a **detailed operational explanation** and a **clear delineation of its applicability** across various use cases (e.g., measurement, geo-location, line-of-sight analysis), thereby maximizing the utility of the software in evidence analysis.

---

### **Applied Analysis: Case-Based Workflow Integration**

Focusing on practical application, this section presents **full, integrated workflows** derived from typical investigative scenarios. It offers **step-by-step guidance** and **in-depth technical analyses** of the combined techniques and tools required. The goal is to provide a complete outcome, from the initial investigative briefing and evidence ingestion to the generation of a precise, verifiable, and desired output.


### Teaching Philosophy

Most Blender courses start directly with modeling, rendering, or project-based workflows.
This course takes a different approach — it begins by **building an understanding of geometry and dimensionality**, so learners grasp what they are actually doing when they manipulate objects in 3D space.

By starting with geometry, you learn to think visually *and* structurally, connecting the abstract world of mathematics to the practical world of digital modeling.

---

## Course Structure

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px'}}>
  <div style={{
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{backgroundColor: '#EF4C3C', padding: '15px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px'}}>
      <i className="fa-solid fa-play" style={{fontSize: '20px'}}></i>
      <h4 style={{margin: 0}}>Videos</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>Video tutorials, text and interactive demonstrations to visualize concepts and workflows.</p>
    </div>
  </div>

  <div style={{
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{backgroundColor: '#8DF917', padding: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
      <i className="fa-solid fa-book" style={{fontSize: '20px', color: '#333'}}></i>
      <h4 style={{margin: 0, color: '#333'}}>Resources</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>Comprehensive documentation, guides, and reference materials to support your learning journey.</p>
    </div>
  </div>
</div>
  
  <div style={{
    border: '1px solid #e0e0e0',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
  }}>
    <div style={{backgroundColor: '#1C75BC', padding: '15px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px'}}>
      <i className="fa-solid fa-link" style={{fontSize: '20px'}}></i>
      <h4 style={{margin: 0}}>Links</h4>
    </div>
    <div style={{padding: '20px'}}>
      <p style={{margin: 0}}>Curated external resources, tools, and community links to enhance your understanding.</p>
    </div>
  </div>
  


---

## Module 1

### Phase 1: Geometry and the Nature of Dimensions

* Introduce the concept of **geometry** as the mathematical study of space and form.
* Explain **dimensions** step by step:

  * **0D:** A point — no length, width, or height.
  * **1D:** A line formed by connecting points.
  * **2D:** A plane formed by connecting lines.
  * **3D:** A solid formed by extending a plane into depth.
* Briefly touch on the **fourth dimension** as a conceptual or temporal dimension, preparing learners for animation later on.
* Emphasize how these principles form the **foundation of 3D modeling**.

---

### Phase 2: Translating Geometry into Blender Concepts

Once learners understand the fundamentals of geometry, the context shifts to **Blender** and **3D software terminology**.
Students learn how geometric concepts translate into Blender’s vocabulary:

* **0D point → Vertex**
* **1D line → Edge**
* **2D plane → Face**
* **3D object → Mesh**

This section bridges abstract geometry and practical 3D modeling, ensuring students know *why* things are named and structured the way they are.

---

### Phase 3: Getting to Know Blender

The third phase introduces the **Blender interface and workflow**, again using a first-principles approach.

* Start with a **minimal interface**, removing unnecessary panels and elements to make the environment less intimidating.
* Gradually **reintroduce tools and menus** as their function becomes relevant to the project.
* Constantly **connect each new concept** back to the foundational geometry and terminology (vertices, edges, faces, meshes).

This ensures that learners always understand *what’s happening under the hood*, not just which buttons to press.

---

### Phase 4: Learning Through a Small Project

Students apply what they’ve learned through a **small, focused project** designed to reinforce essential skills for **visual investigation**.
The project will:

* Introduce basic modeling and manipulation tools.
* Emphasize **scale**, **proportion**, and **spatial reasoning**.
* Explore **simple statistical or analytical visualizations**, linking geometry and data.
* Encourage experimentation and observation rather than production of polished assets.

---

## Learning Goals

It is my hope that this knowledge base will help you to:

* Understand geometry as the foundation of 3D space.
* Recognize how abstract mathematical concepts translate into Blender’s 3D environment.
* Navigate and customize Blender’s interface confidently.
* Provide you with strategies that will help you tackle the diverse set of problems you might face.
* Apply first-principles thinking to build, analyze, and visualize 3D objects and scenes.
* Approach Blender as a **tool for exploration and understanding**, not just creation.

---

**Ready to get started?** Explore the modules in the sidebar to begin your journey into Blender for Visual Investigation.