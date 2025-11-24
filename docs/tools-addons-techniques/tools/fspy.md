---
sidebar_position: 3
---

# fSpy
---
<div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', marginBottom: '20px', gap: '15px'}}>
	<div style={{display: 'flex', gap: '8px', flexWrap: 'wrap'}}>
		<span style={{backgroundColor: '#4caf50', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>BEGINNER</span>
		<span style={{backgroundColor: '#2196f3', color: 'white', padding: '4px 10px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold'}}>INTERMEDIATE</span>
	</div>
	<div style={{display: 'flex', alignItems: 'center', gap: '6px', color: '#666', fontSize: '14px', whiteSpace: 'nowrap'}}>
		<span style={{fontSize: '16px'}}>📖</span>
		<span>4 min read</span>
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
		src="https://www.youtube.com/embed/daiMOYR8GS8"
		title="fSpy tutorial - YouTube"
		allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
		allowFullScreen>
	</iframe>
</div>


### Introduction

**fSpy** is a free, standalone program that analyzes a 2D image to determine the exact internal camera parameters—location, rotation, and lens data—which can then be imported into Blender. This process, known as camera matching, is the first critical step for accurately reconstructing a scene from a single photograph. Achieving a perfect match requires understanding and correctly setting all fSpy parameters, not just the vanishing points.

## Key Features

<div style={{display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '20px', marginBottom: '30px'}}>
	<div style={{
		border: '1px solid #e0e0e0',
		borderRadius: '8px',
		overflow: 'hidden',
		boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
	}}>
		<div style={{backgroundColor: '#8DF917', padding: '15px', display: 'flex', alignItems: 'center', gap: '10px'}}>
			<i className="fa-solid fa-ruler" style={{fontSize: '20px', color: '#333'}}></i>
			<h4 style={{margin: 0, color: '#333'}}>Perspective Calibration</h4>
		</div>
		<div style={{padding: '20px'}}>
			<p style={{margin: 0}}>Align 3D coordinate axes to the image using Vanishing Points (VPs) and ensure scene geometry follows the correct perspective relationships.</p>
		</div>
	</div>
	<div style={{
		border: '1px solid #e0e0e0',
		borderRadius: '8px',
		overflow: 'hidden',
		boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
	}}>
		<div style={{backgroundColor: '#1C75BC', padding: '15px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px'}}>
			<i className="fa-solid fa-dot-circle" style={{fontSize: '20px'}}></i>
			<h4 style={{margin: 0}}>Principal Point Detection</h4>
		</div>
		<div style={{padding: '20px'}}>
			<p style={{margin: 0}}>Identify and set the Principal Point to correct for image cropping or off-center cameras; this is crucial for accurate axis alignment.</p>
		</div>
	</div>
	<div style={{
		border: '1px solid #e0e0e0',
		borderRadius: '8px',
		overflow: 'hidden',
		boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
	}}>
		<div style={{backgroundColor: '#EF4C3C', padding: '15px', color: 'white', display: 'flex', alignItems: 'center', gap: '10px'}}>
			<i className="fa-solid fa-ruler-combined" style={{fontSize: '20px'}}></i>
			<h4 style={{margin: 0}}>Real-World Scaling</h4>
		</div>
		<div style={{padding: '20px'}}>
			<p style={{margin: 0}}>Anchor the scene with an origin and set a reference distance to scale the 3D model to real-world units.</p>
		</div>
	</div>
</div>

---
### Links and Downloads
- Official site: https://fspy.io/
- Blender importer addon: https://github.com/stuffmatic/fSpy-Blender

### Installation

fSpy is a separate program from Blender, but it requires a Blender add-on to complete the process.

**1. Install fSpy (Standalone Program):**
* Download and install the fSpy application from the official source.

**2. Install the fSpy Add-on (Blender):**
* In Blender, navigate to **Edit > Preferences**.
* Go to the **Add-ons** tab.
* Search for the **"fSpy"** add-on and ensure it is checked and enabled. This allows Blender to import the `.fspy` project file.

### Usage: Full Camera Matching Workflow

The workflow is divided into three stages: fSpy setup, Focal Length correction in Blender, and Scene Scaling.

#### Stage 1: Initial Perspective Setup in fSpy

1.  **Load Image:** Drag and drop your image onto the fSpy canvas.
2.  **Determine Perspective Type:** Analyze your image to determine if it has 1, 2, or 3 vanishing points.
3.  **Align Vanishing Points (VPs):**
	* Set the **Number of Vanishing Points** dropdown.
	* Align the red, green, and blue (if active) lines along parallel lines in the 3D scene (e.g., floor tiles, window frames). **Hold `Shift` while dragging** for precision.
	* For **3-point perspective**, you must set 2 VPs first, then change **Principal Point > From third vanishing point** to activate the third axis.
4.  **Align the Principal Point:**
	* **3-Point Images:** fSpy calculates this automatically (an orange circle appears).
	* **1-Point Images:** Switch to **Principal Point > Manual** and drag the orange dot until it overlaps the single vanishing point.
	* **2-Point/Cropped Images:** If the Z-axis doesn't align, switch to **Manual** mode. Drag the Principal Point **vertically** along the axis that has parallel lines until the geometry aligns, then check the coordinates to ensure the horizontal position is centered (0.5) if appropriate.

#### Stage 2: Focal Length Correction (The Iterative Step)

The initial Field of View (FOV) is usually wrong, causing distortion. This must be fixed in Blender.

1.  **Export Project:** Save your file as a `.fspy` file.
2.  **Import to Blender:** In Blender, go to **File > Import > fSpy (.fspy)**. A new camera object will be created with the image set as the background.
3.  **Add Reference Shape:** Add a simple primitive (e.g., a **Circle** or **Cube**) and align it to a corresponding known shape in the background image (e.g., a round lamp base or square window).
4.  **Iterative Adjustment:** Go to the **Camera Properties** (green camera icon). Under **Lens**, switch the unit to **Millimeters (Focal Length)**.
	* **Increase** the Focal Length to **decrease** the FOV and reduce stretching.
	* **Decrease** the Focal Length to **increase** the FOV.
	* Adjust the value and reposition the 3D shape until it **perfectly matches** the shape in the image.

#### Stage 3: Scene Scaling

1.  **Anchor Origin:** In fSpy, move the **Origin** (the center crosshair) to a point on the floor level that corresponds to the center of your 3D scene.
2.  **Set Reference Distance:** In the fSpy options, change the **Reference Distance** axis (e.g., Y) and set a real-world length (e.g., 0.603 m for a dishwasher width). Use the handles to match this distance to a visible object of that size in the image.
3.  **Final Export:** Save the `.fspy` project one last time. When you re-import or reload the project in Blender, the scene will now be scaled to real-world dimensions.



### 2. KEY POINTS

* **Vanishing Points (VPs) are Insufficient:** A perfect camera match requires not just aligning the VPs, but correctly setting the **Principal Point** and the **Focal Length** (or Field of View). Ignoring these leads to distorted geometry.
* **The Principal Point Defines Perspective Center:** The Principal Point is the projection of the camera's center onto the image plane. If the source image has been cropped or manipulated, this point shifts away from the image center, and a misplaced Principal Point is the most common cause of coordinate axis misalignment in the 3D scene.
* **Initial FOV is Always Wrong:** The initial Field of View (FOV) calculated by fSpy is usually too large, leading to distorted proportions. The correct FOV/Focal Length must be found iteratively in Blender by matching known simple 3D shapes against objects in the background image.
* **2D Photos Hide Depth:** Since a 2D photo cannot provide all three coordinates (X, Y, Z), you must anchor your modeling process to the fSpy **Origin** (which should be placed on a ground plane) and constrain all subsequent movements in Blender to that known plane to avoid accidental changes to depth.


| Stage | Useful Tips | Command/Location |
| :--- | :--- | :--- |
| **fSpy Precision** | **Use Precision Mode:** Always hold **Shift** while placing or adjusting lines in fSpy to activate the zoom circle and slow mouse movement. | Hold `Shift` while dragging lines. |
| **fSpy Precision** | **Draw Long Lines:** Draw vanishing point lines as long as possible (to the edges of the image) to achieve higher accuracy. | Draw lines from image edge to image edge. |
| **fSpy Setup** | **1-Point VP Rule:** For 1-point perspective, the Principal Point must **overlap the single Vanishing Point**. Switch to **Manual** mode and drag the orange dot onto the VP. | `Principal Point > Manual` |
| **fSpy Setup** | **Fixing the Z-Axis (Cropped Images):** If the Z-axis is misaligned (common in 2-point perspective), drag the Principal Point **vertically** along the parallel lines (the axis without a VP) until the Z-axis aligns. | Drag orange dot vertically in `Manual` mode. |
| **Blender FOV Match** | **Iterative FOV Correction:** Import the fSpy project into Blender, add a simple 3D reference object (e.g., Cube, Circle), and manually adjust the **Camera Focal Length** until the 3D object perfectly matches a real object of known shape in the background image. | `Camera Properties > Focal Length (mm)` |
| **Blender Modeling** | **Constrain Movement:** In Blender, nearly every object movement must be constrained to the working plane or axis to prevent accidental depth changes (e.g., using `G Shift + Z` to move along the floor). | `G` then `Shift + Axis` |
| **Blender Snapping** | **Temporary Snapping:** Press and hold **Ctrl** while dragging an object (`G`) to temporarily activate snapping without toggling the button on. | Hold `Ctrl` while dragging (`G`). |
| **Blender Snapping** | **Multi-Target Snapping:** Hold **Shift** in Blender's snapping target menu to select multiple targets (e.g., **Vertex + Face**) simultaneously for a highly efficient workflow. | Hold `Shift` in the Snapping dropdown. |
| **Blender Verification** | **Linked Duplicates:** Use **Alt + D** (Linked Duplicate) instead of `Shift + D` (Regular Duplicate) for identical objects (like chairs). This allows you to align multiple perspective references simultaneously and ensures mesh changes are applied globally. | `Alt + D` |

***

### Summary

fSpy is a powerful tool for visual investigation when used correctly. The core of the workflow involves three key steps: correctly establishing the **Vanishing Points**, precisely setting the **Principal Point** (especially for cropped images), and iteratively correcting the **Focal Length** in Blender using reference shapes. The resulting scene is a properly scaled 3D environment ready for accurate reconstruction and analysis.



---
